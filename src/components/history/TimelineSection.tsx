import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import TheoryHeader from '@/components/theory/TheoryHeader';

type TimelineEvent = {
  year: string;
  title: string;
  description: string;
};

const TimelineSection = () => {
  const { t } = useTranslation();
  const translatedEvents = t('history.timelineEvents', { returnObjects: true });
  const timelineEvents: TimelineEvent[] = Array.isArray(translatedEvents)
    ? translatedEvents
    : [];

  return (
    <div className="min-h-screen bg-background">
      <TheoryHeader
        title={t('history.timeline')}
        description={t('history.timelineDescription')}
        backUrl="/history"
      />
      <div className="p-4">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {timelineEvents.map((event, index) => (
              <motion.div
                key={`${event.year}-${event.title}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-start space-x-4 p-4 border-l-4 border-primary bg-card rounded-r-lg shadow-sm"
              >
                <div className="flex-shrink-0 w-24 text-center">
                  <span className="text-lg font-bold text-primary">{event.year}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">{event.title}</h3>
                  <p className="text-muted-foreground mt-1">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
