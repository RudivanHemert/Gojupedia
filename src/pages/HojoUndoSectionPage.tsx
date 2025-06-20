import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import MobileLayout from '@/components/layout/MobileLayout';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import MarkdownRenderer from '@/components/hojo-undo/HojoUndoSectionRenderer';
import { useMarkdownContent } from '@/utils/markdown';

const HojoUndoSectionPage = () => {
  const { t } = useTranslation();
  const { equipmentId, sectionKey } = useParams();

  // Map section keys to content paths
  const getContentPath = () => {
    if (!equipmentId || !sectionKey) return null;
    
    // Convert kebab-case to camelCase for section key
    const camelCaseKey = sectionKey.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    
    return `hojo-undo/${equipmentId}/${camelCaseKey}`;
  };

  const contentPath = getContentPath();
  const markdownContent = useMarkdownContent(contentPath);

  // Get equipment name for display
  const getEquipmentName = () => {
    if (!equipmentId) return '';
    
    const equipmentMap: Record<string, string> = {
      'chi-ishi': t('hojoUndo.equipment.chiIshi.name'),
      'nigiri-game': t('hojoUndo.equipment.nigiriGame.name'),
      'kongoken': t('hojoUndo.equipment.kongoken.name'),
      'ishi-sashi': t('hojoUndo.equipment.ishiSashi.name'),
    };
    
    return equipmentMap[equipmentId] || equipmentId;
  };

  // Get section name for display
  const getSectionName = () => {
    if (!sectionKey || !equipmentId) return '';
    
    const sectionMaps: Record<string, Record<string, string>> = {
      'chi-ishi': {
        'function': t('hojoUndo.equipment.chiIshi.function'),
        'construction': t('hojoUndo.equipment.chiIshi.construction'),
        'attention-points': t('hojoUndo.equipment.chiIshi.attentionPoints'),
        'exercises': t('hojoUndo.equipment.chiIshi.exercises'),
      },
      'nigiri-game': {
        'function': t('hojoUndo.equipment.nigiriGame.function'),
        'construction': t('hojoUndo.equipment.nigiriGame.construction'),
        'attention-points': t('hojoUndo.equipment.nigiriGame.attentionPoints'),
        'exercises': t('hojoUndo.equipment.nigiriGame.exercises'),
      },
      'kongoken': {
        'function': t('hojoUndo.equipment.kongoken.function'),
        'construction': t('hojoUndo.equipment.kongoken.construction'),
        'attention-points': t('hojoUndo.equipment.kongoken.attentionPoints'),
        'exercises': t('hojoUndo.equipment.kongoken.exercises'),
        'classic-exercises': t('hojoUndo.equipment.kongoken.classicExercises'),
      },
      'ishi-sashi': {
        'function': t('hojoUndo.equipment.ishiSashi.function'),
        'construction': t('hojoUndo.equipment.ishiSashi.construction'),
        'attention-points': t('hojoUndo.equipment.ishiSashi.attentionPoints'),
        'exercises': t('hojoUndo.equipment.ishiSashi.exercises'),
      }
    };
    
    return sectionMaps[equipmentId]?.[sectionKey] || sectionKey;
  };

  // Get navigation buttons for the current equipment
  const getNavigationButtons = () => {
    if (!equipmentId) return null;

    const buttonConfigs = {
      'chi-ishi': [
        { key: 'function', label: t('hojoUndo.equipment.chiIshi.function') },
        { key: 'construction', label: t('hojoUndo.equipment.chiIshi.construction') },
        { key: 'attention-points', label: t('hojoUndo.equipment.chiIshi.attentionPoints') },
        { key: 'exercises', label: t('hojoUndo.equipment.chiIshi.exercises') }
      ],
      'nigiri-game': [
        { key: 'function', label: t('hojoUndo.equipment.nigiriGame.function') },
        { key: 'construction', label: t('hojoUndo.equipment.nigiriGame.construction') },
        { key: 'attention-points', label: t('hojoUndo.equipment.nigiriGame.attentionPoints') },
        { key: 'exercises', label: t('hojoUndo.equipment.nigiriGame.exercises') }
      ],
      'kongoken': [
        { key: 'function', label: t('hojoUndo.equipment.kongoken.function') },
        { key: 'construction', label: t('hojoUndo.equipment.kongoken.construction') },
        { key: 'attention-points', label: t('hojoUndo.equipment.kongoken.attentionPoints') },
        { key: 'exercises', label: t('hojoUndo.equipment.kongoken.exercises') },
        { key: 'classic-exercises', label: t('hojoUndo.equipment.kongoken.classicExercises') }
      ],
      'ishi-sashi': [
        { key: 'function', label: t('hojoUndo.equipment.ishiSashi.function') },
        { key: 'construction', label: t('hojoUndo.equipment.ishiSashi.construction') },
        { key: 'attention-points', label: t('hojoUndo.equipment.ishiSashi.attentionPoints') },
        { key: 'exercises', label: t('hojoUndo.equipment.ishiSashi.exercises') }
      ]
    };

    const buttons = buttonConfigs[equipmentId as keyof typeof buttonConfigs];
    if (!buttons) return null;

    return (
      <div className="flex gap-3 mt-6 flex-wrap">
        {buttons.map((button) => (
          <Button
            key={button.key}
            asChild
            variant={sectionKey === button.key ? "default" : "outline"}
            className="flex-1 min-w-fit"
          >
            <Link to={`/hojo-undo/${equipmentId}/${button.key}`}>
              {button.label}
            </Link>
          </Button>
        ))}
      </div>
    );
  };

  return (
    <MobileLayout hideHeader={true}>
      <div className="p-4">
        <div className="mb-6">
          <Button asChild variant="outline" className="mb-4">
            <Link to="/hojo-undo">
              <ChevronLeft className="mr-2 h-4 w-4" />
              {t('common.back')}
            </Link>
          </Button>
          <h1 className="text-2xl font-bold mb-2">{getEquipmentName()}</h1>
          <p className="text-muted-foreground">{getSectionName()}</p>
        </div>
        
        {markdownContent ? (
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <MarkdownRenderer markdownContent={markdownContent} />
            {getNavigationButtons()}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-muted-foreground">{t('common.contentNotFound', 'Content niet gevonden')}</p>
            <p className="text-sm text-muted-foreground mt-2">Path: {contentPath}</p>
            {getNavigationButtons()}
          </div>
        )}
      </div>
    </MobileLayout>
  );
};

export default HojoUndoSectionPage;