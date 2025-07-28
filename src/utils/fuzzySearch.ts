/**
 * Enhanced fuzzy search system for Gojupedia
 * Supports multilingual content with fuzzy matching, typo tolerance, and relevance scoring
 */

import Fuse from 'fuse.js';
import { sanitizeInput, validateSearchQuery } from './security';
import { createSearchIndex, SearchResult } from '@/data/searchIndex';
import i18n from '@/i18n';

// Enhanced search result with score and highlights
export interface FuzzySearchResult extends SearchResult {
  score: number;
  highlights?: {
    title?: string;
    description?: string;
    tags?: string[];
  };
  matches?: any[];
  alternativeLanguages?: {
    [key: string]: {
      title: string;
      description: string;
    };
  };
}

// Search configuration for different content types
const getFuseOptions = (searchType: 'general' | 'precise' | 'fuzzy' = 'general'): any => {
  const baseOptions: any = {
    includeScore: true,
    includeMatches: true,
    shouldSort: true,
    threshold: 0.4, // Default tolerance for typos/fuzzy matching
    location: 0,
    distance: 100,
    maxPatternLength: 64,
    minMatchCharLength: 2,
    keys: [
      {
        name: 'title',
        weight: 0.7,
      },
      {
        name: 'description',
        weight: 0.2,
      },
      {
        name: 'tags',
        weight: 0.1,
      },
    ],
  };

  // Adjust settings based on search type
  switch (searchType) {
    case 'precise':
      return {
        ...baseOptions,
        threshold: 0.2, // More strict matching
        minMatchCharLength: 3,
      };
    case 'fuzzy':
      return {
        ...baseOptions,
        threshold: 0.6, // More tolerant of typos
        minMatchCharLength: 1,
      };
    default:
      return baseOptions;
  }
};

// Create multilingual search indices
class MultilingualFuzzySearch {
  private searchIndices: Map<string, Fuse<SearchResult>> = new Map();
  private lastUpdated: number = 0;
  private readonly CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

  constructor() {
    this.initializeIndices();
  }

  private initializeIndices(): void {
    const supportedLanguages = ['en', 'nl', 'de', 'es', 'fr', 'it'];
    
    supportedLanguages.forEach(language => {
      const searchIndex = createSearchIndex(language);
      const enhancedIndex = this.enhanceSearchIndex(searchIndex, language);
      const fuse = new Fuse(enhancedIndex, getFuseOptions('general'));
      this.searchIndices.set(language, fuse);
    });

    this.lastUpdated = Date.now();
  }

  private enhanceSearchIndex(index: SearchResult[], language: string): SearchResult[] {
    return index.map(item => ({
      ...item,
      language,
      // Add phonetic and alternative representations for better matching
      tags: [
        ...item.tags,
        ...this.generateAlternativeTerms(item.title, language),
        ...this.generateAlternativeTerms(item.description, language),
      ].filter(Boolean),
    }));
  }

  private generateAlternativeTerms(text: string, language: string): string[] {
    const alternatives: string[] = [];
    
    // Add romanized versions for Japanese terms
    if (text.includes('ã') || text.includes('ō') || text.includes('ū')) {
      alternatives.push(
        text.replace(/ã/g, 'a'),
        text.replace(/ō/g, 'o'),
        text.replace(/ū/g, 'u')
      );
    }

    // Add common alternative spellings
    const commonAlternatives: Record<string, string[]> = {
      'karate': ['karatê', 'karate-do', 'karatedo'],
      'goju': ['goju-ryu', 'gojuryu'],
      'kata': ['katas', 'forms'],
      'dojo': ['dojos'],
      'sensei': ['sensei-san', 'teacher'],
      'kumite': ['fighting', 'sparring'],
      'bunkai': ['application', 'applications'],
    };

    const lowerText = text.toLowerCase();
    Object.entries(commonAlternatives).forEach(([key, alts]) => {
      if (lowerText.includes(key)) {
        alternatives.push(...alts);
      }
    });

    return alternatives;
  }

  private shouldRefreshCache(): boolean {
    return Date.now() - this.lastUpdated > this.CACHE_DURATION;
  }

  public search(
    query: string,
    options: {
      language?: string;
      searchType?: 'general' | 'precise' | 'fuzzy';
      limit?: number;
      includeAlternativeLanguages?: boolean;
    } = {}
  ): FuzzySearchResult[] {
    // Security validation
    if (!validateSearchQuery(query)) {
      console.warn('Invalid search query provided');
      return [];
    }

    const sanitizedQuery = sanitizeInput(query);
    if (!sanitizedQuery.trim()) {
      return [];
    }

    // Refresh cache if needed
    if (this.shouldRefreshCache()) {
      this.initializeIndices();
    }

    const {
      language = i18n.language,
      searchType = 'general',
      limit = 50,
      includeAlternativeLanguages = false,
    } = options;

    let results: FuzzySearchResult[] = [];

    // Search in primary language
    const primaryFuse = this.searchIndices.get(language);
    if (primaryFuse) {
      const primaryResults = this.performSearch(primaryFuse, sanitizedQuery, searchType);
      results.push(...primaryResults);
    }

    // Search in alternative languages if requested
    if (includeAlternativeLanguages && results.length < limit) {
      const alternativeLanguages = ['en', 'nl', 'de', 'es', 'fr', 'it'].filter(
        lang => lang !== language
      );

      for (const altLang of alternativeLanguages) {
        if (results.length >= limit) break;

        const altFuse = this.searchIndices.get(altLang);
        if (altFuse) {
          const altResults = this.performSearch(altFuse, sanitizedQuery, searchType);
          // Mark these as alternative language results
          const markedResults = altResults.map(result => ({
            ...result,
            score: result.score + 0.1, // Slightly lower score for alternative language matches
            language: altLang,
          }));
          results.push(...markedResults);
        }
      }
    }

    // Remove duplicates and sort by relevance
    const uniqueResults = this.deduplicateResults(results);
    const sortedResults = uniqueResults.sort((a, b) => a.score - b.score);

    return sortedResults.slice(0, limit);
  }

  private performSearch(
    fuse: Fuse<SearchResult>,
    query: string,
    searchType: 'general' | 'precise' | 'fuzzy'
  ): FuzzySearchResult[] {
    const fuseResults = fuse.search(query);

    return fuseResults.map(result => ({
      ...result.item,
      score: result.score || 0,
      matches: result.matches ? [...result.matches] : [],
      highlights: this.generateHighlights(result.matches ? [...result.matches] : []),
    }));
  }

  private generateHighlights(matches: any[]): FuzzySearchResult['highlights'] {
    const highlights: FuzzySearchResult['highlights'] = {};

    matches.forEach(match => {
      if (match.key === 'title' && match.indices) {
        highlights.title = this.highlightText(match.value || '', match.indices);
      } else if (match.key === 'description' && match.indices) {
        highlights.description = this.highlightText(match.value || '', match.indices);
      } else if (match.key === 'tags' && match.indices) {
        if (!highlights.tags) highlights.tags = [];
        highlights.tags.push(this.highlightText(match.value || '', match.indices));
      }
    });

    return highlights;
  }

  private highlightText(text: string, indices: readonly [number, number][]): string {
    let result = text;
    let offset = 0;

    indices.forEach(([start, end]) => {
      const before = result.slice(0, start + offset);
      const highlighted = `<mark>${result.slice(start + offset, end + 1 + offset)}</mark>`;
      const after = result.slice(end + 1 + offset);
      
      result = before + highlighted + after;
      offset += '<mark></mark>'.length;
    });

    return result;
  }

  private deduplicateResults(results: FuzzySearchResult[]): FuzzySearchResult[] {
    const seen = new Set<string>();
    return results.filter(result => {
      const key = `${result.type}-${result.title}-${result.path}`;
      if (seen.has(key)) {
        return false;
      }
      seen.add(key);
      return true;
    });
  }

  // Advanced search features
  public searchByCategory(
    query: string,
    category: SearchResult['type'],
    language?: string
  ): FuzzySearchResult[] {
    const results = this.search(query, { language });
    return results.filter(result => result.type === category);
  }

  public getSuggestions(query: string, language?: string): string[] {
    if (query.length < 2) return [];

    const searchIndex = createSearchIndex(language);
    const allTerms = new Set<string>();

    searchIndex.forEach(item => {
      // Extract words from titles and descriptions
      const words = [
        ...item.title.toLowerCase().split(/\s+/),
        ...item.description.toLowerCase().split(/\s+/),
        ...item.tags,
      ];

      words.forEach(word => {
        if (word.length >= 2 && word.startsWith(query.toLowerCase())) {
          allTerms.add(word);
        }
      });
    });

    return Array.from(allTerms)
      .sort()
      .slice(0, 10);
  }

  public getPopularSearchTerms(language?: string): string[] {
    const searchIndex = createSearchIndex(language);
    const termFrequency = new Map<string, number>();

    searchIndex.forEach(item => {
      item.tags.forEach(tag => {
        if (tag && tag.length > 2) {
          termFrequency.set(tag, (termFrequency.get(tag) || 0) + 1);
        }
      });
    });

    return Array.from(termFrequency.entries())
      .sort(([, a], [, b]) => b - a)
      .slice(0, 20)
      .map(([term]) => term);
  }
}

// Export singleton instance
export const fuzzySearch = new MultilingualFuzzySearch();

// Export search functions for easy use
export const searchContent = (
  query: string,
  options?: {
    language?: string;
    searchType?: 'general' | 'precise' | 'fuzzy';
    limit?: number;
    includeAlternativeLanguages?: boolean;
  }
): FuzzySearchResult[] => {
  return fuzzySearch.search(query, options);
};

export const searchByCategory = (
  query: string,
  category: SearchResult['type'],
  language?: string
): FuzzySearchResult[] => {
  return fuzzySearch.searchByCategory(query, category, language);
};

export const getSearchSuggestions = (query: string, language?: string): string[] => {
  return fuzzySearch.getSuggestions(query, language);
};

export const getPopularTerms = (language?: string): string[] => {
  return fuzzySearch.getPopularSearchTerms(language);
};

// Note: useFuzzySearch hook is defined in ../hooks/useFuzzySearch.ts 