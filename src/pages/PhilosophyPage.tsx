
import React from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const PhilosophyPage = () => {
  return (
    <MobileLayout>
      {/* Header Image */}
      <div className="relative h-40 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1516531558361-f6c4c956a0c5?q=80&w=2070&auto=format&fit=crop" 
          alt="Karate Philosophy" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
        <div className="absolute bottom-0 left-0 p-5 w-full">
          <h1 className="text-white text-3xl font-bold">Philosophy</h1>
          <p className="text-white opacity-90">
            Core principles and values
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
            <h2 className="text-2xl font-serif font-semibold">The Meaning of Goju-Ryu</h2>
            <p className="text-gray-700">
              "Go" means hard, referring to closed hand techniques and straight linear movements.
              "Ju" means soft, referring to open hand techniques and circular movements.
              Together, they represent the harmony of opposites that is central to the style's philosophy.
            </p>
            <Card className="bg-gray-50 border-l-4 border-red-600">
              <CardContent className="p-4">
                <p className="text-gray-800 italic">
                  "The way of inhaling and exhaling is hardness and softness... Go and Ju."
                </p>
                <p className="text-right text-sm text-gray-600 mt-2">- Chojun Miyagi</p>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4 mt-8">
            <h2 className="text-2xl font-serif font-semibold">Dojo Kun (Training Hall Rules)</h2>
            <p className="text-gray-700">
              The Dojo Kun serves as a set of principles for students of karate. These principles are recited 
              at the beginning and end of each training session to remind practitioners of the philosophical basis of their practice.
            </p>
            
            <div className="space-y-3 mt-4">
              <div className="flex items-start">
                <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 mr-3">1</div>
                <div>
                  <h3 className="font-bold">Seek Perfection of Character</h3>
                  <p className="text-gray-700">Strive to improve yourself as a person, not just as a martial artist.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 mr-3">2</div>
                <div>
                  <h3 className="font-bold">Be Faithful</h3>
                  <p className="text-gray-700">Be sincere in your actions and loyal to those you care about.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 mr-3">3</div>
                <div>
                  <h3 className="font-bold">Endeavor</h3>
                  <p className="text-gray-700">Put effort into everything you do, especially when things get difficult.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 mr-3">4</div>
                <div>
                  <h3 className="font-bold">Respect Others</h3>
                  <p className="text-gray-700">Show courtesy and respect to all people, regardless of their status.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 mr-3">5</div>
                <div>
                  <h3 className="font-bold">Refrain From Violent Behavior</h3>
                  <p className="text-gray-700">Avoid using karate techniques to harm others unless absolutely necessary for self-defense.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4 mt-8">
            <h2 className="text-2xl font-serif font-semibold">The Eight Virtues of Bushido</h2>
            <p className="text-gray-700">
              Many Goju-Ryu practitioners also follow the eight virtues of Bushido, the way of the warrior:
            </p>
            
            <div className="grid grid-cols-2 gap-3 mt-4">
              <Card>
                <CardContent className="p-3">
                  <h3 className="font-bold">Rectitude (義, Gi)</h3>
                  <p className="text-sm text-gray-700">Righteousness, doing what is right.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-3">
                  <h3 className="font-bold">Courage (勇, Yu)</h3>
                  <p className="text-sm text-gray-700">Bravery in the face of adversity.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-3">
                  <h3 className="font-bold">Benevolence (仁, Jin)</h3>
                  <p className="text-sm text-gray-700">Compassion toward all beings.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-3">
                  <h3 className="font-bold">Respect (礼, Rei)</h3>
                  <p className="text-sm text-gray-700">Courtesy and proper behavior.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-3">
                  <h3 className="font-bold">Honesty (誠, Makoto)</h3>
                  <p className="text-sm text-gray-700">Truthfulness without deception.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-3">
                  <h3 className="font-bold">Honor (名誉, Meiyo)</h3>
                  <p className="text-sm text-gray-700">Dignity and upholding one's reputation.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-3">
                  <h3 className="font-bold">Loyalty (忠義, Chugi)</h3>
                  <p className="text-sm text-gray-700">Devotion and commitment to one's master.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-3">
                  <h3 className="font-bold">Self-Control (自制, Jisei)</h3>
                  <p className="text-sm text-gray-700">Discipline over one's emotions and actions.</p>
                </CardContent>
              </Card>
            </div>
          </section>
        </motion.div>
      </div>
    </MobileLayout>
  );
};

export default PhilosophyPage;
