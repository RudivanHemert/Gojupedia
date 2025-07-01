import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, BookOpen, Dumbbell, Target, Zap, Play, Users, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface NewazaSectionRendererProps {
  sectionKey: 'introduction' | 'training-elements' | 'ground-positions' | 'kakie' | 'techniques' | 'drills';
  backPath: string;
}

const NewazaSectionRenderer: React.FC<NewazaSectionRendererProps> = ({
  sectionKey,
  backPath
}) => {
  const { t } = useTranslation();
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const sectionConfig = {
    'introduction': {
      title: t('newaza.sections.introduction.title'),
      description: t('newaza.sections.introduction.description'),
      icon: BookOpen,
      color: 'text-blue-500'
    },
    'training-elements': {
      title: t('newaza.sections.training-elements.title'),
      description: t('newaza.sections.training-elements.description'),
      icon: Dumbbell,
      color: 'text-green-500'
    },
    'ground-positions': {
      title: t('newaza.sections.ground-positions.title'),
      description: t('newaza.sections.ground-positions.description'),
      icon: Target,
      color: 'text-orange-500'
    },
    'kakie': {
      title: t('newaza.sections.kakie.title'),
      description: t('newaza.sections.kakie.description'),
      icon: Zap,
      color: 'text-purple-500'
    },
    'techniques': {
      title: t('newaza.sections.techniques.title'),
      description: t('newaza.sections.techniques.description'),
      icon: Play,
      color: 'text-red-500'
    },
    'drills': {
      title: t('newaza.sections.drills.title'),
      description: t('newaza.sections.drills.description'),
      icon: Users,
      color: 'text-indigo-500'
    }
  };

  const config = sectionConfig[sectionKey];
  const IconComponent = config.icon;

  useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true);
        const markdownModule = await import(`../../content/newaza/${sectionKey}.md?raw`);
        setContent(markdownModule.default);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load content');
      } finally {
        setLoading(false);
      }
    };
    loadContent();
  }, [sectionKey]);

  const getNavigationLinks = () => {
    const sections = [
      { key: 'introduction', icon: BookOpen },
      { key: 'training-elements', icon: Dumbbell },
      { key: 'ground-positions', icon: Target },
      { key: 'kakie', icon: Zap },
      { key: 'techniques', icon: Play },
      { key: 'drills', icon: Users }
    ];
    return sections.map(({ key, icon: Icon }) => ({
      path: `/newaza/${key}`,
      label: t(`newaza.sections.${key}.title`),
      description: t(`newaza.sections.${key}.description`),
      icon: Icon,
      isActive: key === sectionKey
    }));
  };

  // Markdown rendering (optioneel: later vervangen door ReactMarkdown)
  const renderMarkdown = (markdown: string) => {
    return markdown
      .replace(/^### (.*$)/gim, '<h3 class="text-lg font-semibold mt-6 mb-3">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="text-xl font-semibold mt-8 mb-4">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="text-2xl font-bold mt-8 mb-4">$1</h1>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/^- (.*$)/gim, '<li class="ml-4">$1</li>')
      .replace(/\n\n/g, '</p><p class="mb-4">')
      .replace(/^(.+)$/gm, '<p class="mb-4">$1</p>')
      .replace(/<p class="mb-4"><\/p>/g, '')
      .replace(/<p class="mb-4"><h/g, '<h')
      .replace(/<\/h\d><\/p>/g, '</h$1>')
      .replace(/<p class="mb-4"><li/g, '<ul class="list-disc ml-6 mb-4"><li')
      .replace(/<\/li><\/p>/g, '</li></ul>');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">{t('common.loading')}</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <Button onClick={() => window.location.reload()}>
            {t('common.retry')}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-6">
      {/* Back Button */}
      <Button asChild variant="outline" className="w-full">
        <Link to={backPath}>
          <ChevronLeft className="mr-2 h-4 w-4" />
          {t('common.back')}
        </Link>
      </Button>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <div className="flex justify-center mb-2">
          <span className={`p-2 rounded-full ${config.color} bg-opacity-20 mr-2`}>
            <IconComponent className={`h-6 w-6 ${config.color}`} />
          </span>
        </div>
        <h1 className="text-2xl font-bold">{config.title}</h1>
        <p className="text-base text-muted-foreground">{config.description}</p>
      </motion.div>

      {/* Navigation */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {getNavigationLinks().map((link) => (
          <Link key={link.path} to={link.path}>
            <Badge 
              variant={link.isActive ? "default" : "secondary"}
              className="whitespace-nowrap"
            >
              <link.icon className="h-3 w-3 mr-1" />
              {link.label}
            </Badge>
          </Link>
        ))}
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div 
          className="prose prose-stone dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
        />
      </motion.div>
    </div>
  );
};

export default NewazaSectionRenderer; 