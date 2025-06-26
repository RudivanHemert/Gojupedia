import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import TheoryHeader from '@/components/theory/TheoryHeader';

const TimelineSection = () => {
  const { t } = useTranslation();

  const timelineEvents = [
    {
      year: '1853',
      title: 'Kanryo Higaonna geboren',
      description: 'Kanryo Higaonna wordt geboren in Naha, Okinawa.'
    },
    {
      year: '1888',
      title: 'Chojun Miyagi geboren',
      description: 'Chojun Miyagi wordt geboren in Naha, Okinawa.'
    },
    {
      year: '1902',
      title: 'Miyagi begint training',
      description: 'Chojun Miyagi begint zijn training onder Kanryo Higaonna.'
    },
    {
      year: '1915',
      title: 'Kanryo Higaonna overlijdt',
      description: 'Kanryo Higaonna overlijdt, Miyagi wordt zijn opvolger.'
    },
    {
      year: '1926',
      title: 'Goju Ryu naamgeving',
      description: 'Chojun Miyagi geeft de stijl de naam "Goju Ryu".'
    },
    {
      year: '1933',
      title: 'Officiële registratie',
      description: 'Goju Ryu wordt officieel geregistreerd bij de Dai Nippon Butokukai.'
    },
    {
      year: '1953',
      title: 'Chojun Miyagi overlijdt',
      description: 'Chojun Miyagi overlijdt, zijn leerlingen zetten de traditie voort.'
    },
    {
      year: '1939',
      title: 'Morio Higaonna geboren',
      description: 'Morio Higaonna wordt geboren in Okinawa.'
    },
    {
      year: '1965',
      title: 'Tetsuji Nakamura geboren',
      description: 'Tetsuji Nakamura wordt geboren.'
    },
    {
      year: '2009',
      title: 'An\'ichi Miyagi overlijdt',
      description: 'An\'ichi Miyagi overlijdt, een van de laatste directe leerlingen van Chojun Miyagi.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <TheoryHeader 
        title={t('history.timeline')}
        description="Een chronologisch overzicht van belangrijke gebeurtenissen in de geschiedenis van Goju Ryu Karate."
        backUrl="/history"
      />
      <div className="p-4">
        <div className="w-full max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-4 border-l-4 border-red-600 bg-gray-50 rounded-r-lg"
              >
                <div className="flex-shrink-0 w-20 text-center">
                  <span className="text-lg font-bold text-red-600">{event.year}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                  <p className="text-gray-600 mt-1">{event.description}</p>
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
