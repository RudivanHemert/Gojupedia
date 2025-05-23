import React from 'react';
import { useTranslation } from 'react-i18next';
import TheoryHeader from '@/components/theory/TheoryHeader';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import MarkdownRenderer from '@/components/hojo-undo/HojoUndoSectionRenderer';
import { useMarkdownContent } from '@/utils/markdown';

const HojoUndoSectionPage = () => {
  const { t } = useTranslation();
  const sections = [
    { id: 'introduction', content: useMarkdownContent('../content/hojo-undo/introduction') },
    { id: 'equipment', content: useMarkdownContent('../content/hojo-undo/equipment') },
    { id: 'techniques', content: useMarkdownContent('../content/hojo-undo/techniques') },
    { id: 'benefits', content: useMarkdownContent('../content/hojo-undo/benefits') },
    { id: 'training', content: useMarkdownContent('../content/hojo-undo/training') }
  ];

  return (
    <div className="min-h-screen bg-white">
      <TheoryHeader 
        title={t('hojoUndo.title')}
        description={t('hojoUndo.description')}
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
                  {t(`hojoUndo.sections.${section.id}`)}
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

export default HojoUndoSectionPage; 