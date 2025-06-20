import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import MarkdownRenderer from '@/components/hojo-undo/HojoUndoSectionRenderer';
import { useMarkdownContent } from '@/utils/markdown';
import MobileLayout from '@/components/layout/MobileLayout';
import TheoryHeader from '@/components/theory/TheoryHeader';

const PhilosophyPage = () => {
  const { t } = useTranslation();
  const sections = [
    { id: 'dojo-kun', content: useMarkdownContent('philosophy/dojo-kun') },
    { id: 'goju-ryu', content: useMarkdownContent('philosophy/goju-ryu') },
    { id: 'karate-do', content: useMarkdownContent('philosophy/karate-do') },
    { id: 'mind-body', content: useMarkdownContent('philosophy/mind-body') },
    { id: 'respect', content: useMarkdownContent('philosophy/respect') }
  ];

  return (
    <div className="min-h-screen bg-white">
      <TheoryHeader 
        title={t('philosophy.title')}
        description={t('philosophy.description')}
      />
      <div className="p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {sections.map((section) => (
              <AccordionItem key={section.id} value={section.id}>
                <AccordionTrigger>
                  {t(`philosophy.sections.${section.id}.title`)}
                </AccordionTrigger>
                <AccordionContent>
                  {section.content && <MarkdownRenderer markdownContent={section.content} />}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  );
};

export default PhilosophyPage; 