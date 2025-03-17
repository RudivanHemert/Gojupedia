
import React from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { motion } from 'framer-motion';

const HistoryPage = () => {
  return (
    <MobileLayout>
      {/* Header Image */}
      <div className="relative h-40 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1603481546579-65dfe3eb3fe3?q=80&w=2070&auto=format&fit=crop" 
          alt="Karate History" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
        <div className="absolute bottom-0 left-0 p-5 w-full">
          <h1 className="text-white text-3xl font-bold">History</h1>
          <p className="text-white opacity-90">
            The origins and evolution of Goju-Ryu
          </p>
        </div>
      </div>

      <div className="p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-semibold">Origins in Okinawa</h2>
            <p className="text-gray-700">
              Goju-Ryu karate was developed in Okinawa, Japan in the early 20th century by Chojun Miyagi. The name "Goju" comes from the "hard-soft" 
              principle of traditional Chinese martial arts, reflecting the system's dual nature - combining hard striking techniques with softer, 
              circular movements for both offense and defense.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1599232288126-22253d9ba3e2?q=80&w=1964&auto=format&fit=crop"
              alt="Historic Okinawa" 
              className="w-full h-48 object-cover rounded-md my-4"
            />
            <p className="text-gray-700">
              Miyagi studied under Kanryo Higaonna, who had trained in Chinese martial arts in Fuzhou, China. After Higaonna's death, 
              Miyagi traveled to China to further his studies, eventually creating a synthesis of Chinese quanfa and traditional Okinawan martial arts.
            </p>
          </section>

          <section className="space-y-4 mt-8">
            <h2 className="text-2xl font-serif font-semibold">Modern Development</h2>
            <p className="text-gray-700">
              In 1930, Miyagi performed in Hawaii, helping to introduce Goju-Ryu to the Western world. After World War II, Goju-Ryu spread 
              globally, with many of Miyagi's students opening their own dojos and further developing the style.
            </p>
            <p className="text-gray-700">
              Today, Goju-Ryu is practiced worldwide with various organizations preserving different aspects of Miyagi's teachings. 
              The International Okinawan Goju-Ryu Karate-Do Federation (IOGKF) was established by Morio Higaonna to maintain the original 
              teachings of Chojun Miyagi.
            </p>
          </section>

          <section className="space-y-4 mt-8">
            <h2 className="text-2xl font-serif font-semibold">Timeline</h2>
            <div className="space-y-4">
              <div className="border-l-2 border-gray-300 pl-4 ml-4 relative">
                <div className="absolute w-3 h-3 bg-red-600 rounded-full -left-[7px] top-1"></div>
                <h3 className="font-bold">1888</h3>
                <p className="text-gray-700">Birth of Chojun Miyagi in Naha, Okinawa</p>
              </div>
              
              <div className="border-l-2 border-gray-300 pl-4 ml-4 relative">
                <div className="absolute w-3 h-3 bg-red-600 rounded-full -left-[7px] top-1"></div>
                <h3 className="font-bold">1902</h3>
                <p className="text-gray-700">Miyagi begins training under Kanryo Higaonna</p>
              </div>
              
              <div className="border-l-2 border-gray-300 pl-4 ml-4 relative">
                <div className="absolute w-3 h-3 bg-red-600 rounded-full -left-[7px] top-1"></div>
                <h3 className="font-bold">1915</h3>
                <p className="text-gray-700">After Higaonna's death, Miyagi travels to China for further study</p>
              </div>
              
              <div className="border-l-2 border-gray-300 pl-4 ml-4 relative">
                <div className="absolute w-3 h-3 bg-red-600 rounded-full -left-[7px] top-1"></div>
                <h3 className="font-bold">1930</h3>
                <p className="text-gray-700">The name "Goju-Ryu" is officially adopted for the style</p>
              </div>
              
              <div className="border-l-2 border-gray-300 pl-4 ml-4 relative">
                <div className="absolute w-3 h-3 bg-red-600 rounded-full -left-[7px] top-1"></div>
                <h3 className="font-bold">1953</h3>
                <p className="text-gray-700">Death of Chojun Miyagi</p>
              </div>
              
              <div className="border-l-2 border-gray-300 pl-4 ml-4 relative">
                <div className="absolute w-3 h-3 bg-red-600 rounded-full -left-[7px] top-1"></div>
                <h3 className="font-bold">1979</h3>
                <p className="text-gray-700">Formation of the International Okinawan Goju-Ryu Karate-Do Federation (IOGKF)</p>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </MobileLayout>
  );
};

export default HistoryPage;
