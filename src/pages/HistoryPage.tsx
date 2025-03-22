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
            <h2 className="text-2xl font-serif font-semibold">Kanryo Higaonna (1853 - 1916)</h2>
            <div className="float-right ml-4 mb-2">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Kanryo_Higaonna.jpg/330px-Kanryo_Higaonna.jpg" 
                alt="Kanryo Higaonna" 
                className="w-32 h-auto rounded-md shadow-md"
              />
            </div>
            <p className="text-gray-700">
              Kanryo Higaonna was born on March 10, 1853, in the Nishimura district of Naha, Okinawa, as the fourth child of Kanyo Higaonna and his wife Makado. 
              Being one of seven children, with his older brothers either deceased or weak, Kanryo took on significant responsibilities at a young age.
            </p>
            <p className="text-gray-700">
              His father was a merchant who owned a boat, transporting goods between Okinawa and other Ryukyu islands. From the age of ten, Kanryo worked with his father, 
              developing great physical strength in his arms and legs from the heavy labor. When Kanryo was fourteen, a ceremony was held to mark his transition to adulthood.
            </p>
            <p className="text-gray-700">
              Shortly after, in 1867 or 1868, Kanryo's father was killed in a fight. Determined to avenge his father's death, Kanryo decided to travel to China to study martial arts. 
              To receive permission to travel, he claimed he was going to study. With the help of a government official named Udon Yoshimura, Kanryo obtained permission to travel to China as a student.
            </p>
            <p className="text-gray-700">
              Sometime between 1868 and 1870, at around 16 or 17 years of age, Kanryo departed for Fuzhou, China. After arriving, he was introduced to the renowned martial arts master Ryu Ryu Ko, 
              who accepted him as a student. Kanryo underwent a formal ceremony, lighting incense at the school's altar and taking an oath to train diligently and lead a virtuous life.
            </p>
            <p className="text-gray-700">
              Ryu Ryu Ko was highly respected in Fuzhou, estimated to be between 50 and 65 years old when Kanryo met him. He was reportedly tall, slender, and extremely strong. Coming from a noble family 
              that had lost its status during civil unrest, Ryu Ryu Ko had worked as a mason before switching to bamboo crafting.
            </p>
            <p className="text-gray-700">
              Initially, Kanryo was taught only the Sanchin kata. Training was intense, and Kanryo was amazed by Ryu Ryu Ko's strength and knowledge. Soon, Kanryo became an uchi-deshi (live-in student), 
              helping his master with bamboo work during the day and training in the garden every evening.
            </p>
            <p className="text-gray-700">
              Kanryo trained extensively with specialized equipment like Nigirigamae (grip jars), Chi-ishi (stone handle weights), Ishi-sashi (stone padlocks), Tan (barbells), and a type of Makiwara (striking post). 
              Despite injuries and bruises, Kanryo never stopped training. He particularly enjoyed practicing throwing and ground techniques with another student in a large round basket.
            </p>
            <p className="text-gray-700">
              After 11 to 13 years of dedicated training, Ryu Ryu Ko, by then an old man, instructed Kanryo to return to Okinawa. Kanryo left Fuzhou in 1881, deeply grateful for his master's instruction and guidance.
            </p>
            <p className="text-gray-700">
              Upon returning to Okinawa during a time of political unrest, Kanryo resumed his work as a merchant, trading between islands. Initially reluctant to teach martial arts, he eventually yielded to persistent 
              requests and began instructing a small group of selected students at his home, focusing solely on the Sanchin kata.
            </p>
            <p className="text-gray-700">
              By 1905, Kanryo's reputation had spread throughout Okinawa. He was invited to teach at the Naha Commercial School, where he modified his teaching method. For school students, he introduced closed-fist 
              techniques in Sanchin kata and slowed the breathing to emphasize physical strength and balance between body and mind, rather than deadly techniques. However, he continued to teach the original Chinese 
              methods to a select group at his home, including the young Chojun Miyagi.
            </p>
            <p className="text-gray-700">
              Kanryo's reputation was challenged by another martial arts teacher named Kojo, who claimed his art was superior. A contest in Sanchin kata was arranged, judged by a renowned doctor from mainland Japan. 
              The doctor observed that in Kanryo's performance, his feet were firmly planted, all muscles tensed, and his entire body engaged. In contrast, Kojo's muscles were only tensed vertically, resulting in imprecise 
              muscle tension. Kanryo was deemed superior, and Kojo graciously acknowledged his greater skill.
            </p>
            <p className="text-gray-700">
              This event further solidified Kanryo's reputation across Okinawa. Until 1905, "Te" (as it was known then) was a secret art taught only to selected students. After Kanryo began teaching at the Naha Commercial School, 
              karate became more widespread and accessible to the general population.
            </p>
          </section>

          <section className="space-y-4 mt-8">
            <h2 className="text-2xl font-serif font-semibold">Chojun Miyagi (1888 - 1953)</h2>
            <div className="float-right ml-4 mb-2">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Ch%C5%8Djun_Miyagi.jpg/330px-Ch%C5%8Djun_Miyagi.jpg" 
                alt="Chojun Miyagi" 
                className="w-32 h-auto rounded-md shadow-md"
              />
            </div>
            <p className="text-gray-700">
              Chojun Miyagi was born on April 25, 1888, in Naha, Okinawa, to a wealthy family of ship owners. From a young age, he showed a strong interest in the martial arts, beginning his formal training at age 11 under Ryuko Aragaki, who later introduced him to Kanryo Higaonna in 1902.
            </p>
            <p className="text-gray-700">
              As a student of Higaonna, Miyagi demonstrated exceptional dedication and skill, training rigorously for 13 years until his master's death in 1915. Recognized as Higaonna's top student, Miyagi inherited the responsibility of preserving and advancing his master's teachings.
            </p>
            <p className="text-gray-700">
              Following Higaonna's passing, Miyagi traveled to Fuzhou, China, in 1915 to further explore the roots of the martial art he had learned. Despite facing challenges in locating Higaonna's original teacher, Ryu Ryu Ko, his journey provided valuable insights into Chinese martial arts that would later influence his development of Goju-Ryu.
            </p>
            <p className="text-gray-700">
              In 1921, Miyagi had the honor of demonstrating his martial art to Crown Prince Hirohito during his visit to Okinawa. This demonstration helped elevate the status of Okinawan karate in Japan. In 1926, Miyagi established the Karate Research Club in Wakas-Cho district, creating a formal training environment for his growing number of students.
            </p>
            <p className="text-gray-700">
              A significant moment in the history of Goju-Ryu came in 1930 at a martial arts tournament in Japan. When asked about the name of his style, Miyagi's student Jinan Shinzato replied that it had no name, which prompted Miyagi to later formalize the name "Goju-Ryu" based on principles from the Bubishi, a classical Chinese text on martial arts. The name reflects the balance of hard (go) and soft (ju) techniques that characterize the style.
            </p>
            <p className="text-gray-700">
              Throughout the 1930s, Miyagi's reputation grew internationally. In 1934, he was appointed as the official representative of the Dai Nippon Butokukai, Japan's premier martial arts organization. In 1936, he traveled to Hawaii at the invitation of a newspaper to introduce karate to the Hawaiian Islands, marking one of the first instances of Goju-Ryu being taught outside of Japan.
            </p>
            <p className="text-gray-700">
              The Second World War brought tremendous hardship to Okinawa. During the Battle of Okinawa in 1945, Miyagi lost his home, many family members, and valuable training documents. Despite these devastating losses, he resumed teaching after the war, focusing on rebuilding the practice of Goju-Ryu until his death from heart failure on October 8, 1953.
            </p>
            <p className="text-gray-700">
              Miyagi's legacy continues through his students and the worldwide spread of Goju-Ryu karate. He is remembered not only for his technical innovations and systematic approach to training but also for his emphasis on the philosophical and spiritual aspects of martial arts. His creation of the kata Tensho and his refinement of the existing kata demonstrate his commitment to balancing hard and soft elements in karate.
            </p>
            <p className="text-gray-700">
              Above all, Miyagi emphasized that karate was not merely about fighting but about personal development and the pursuit of peace. His famous saying, "The ultimate aim of karate-do is to build character, conquer human misery, and find spiritual freedom," continues to guide practitioners of Goju-Ryu worldwide.
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
                <h3 className="font-bold">1853</h3>
                <p className="text-gray-700">Birth of Kanryo Higaonna in Naha, Okinawa</p>
              </div>
              
              <div className="border-l-2 border-gray-300 pl-4 ml-4 relative">
                <div className="absolute w-3 h-3 bg-red-600 rounded-full -left-[7px] top-1"></div>
                <h3 className="font-bold">1868</h3>
                <p className="text-gray-700">Kanryo Higaonna travels to China to study martial arts</p>
              </div>
              
              <div className="border-l-2 border-gray-300 pl-4 ml-4 relative">
                <div className="absolute w-3 h-3 bg-red-600 rounded-full -left-[7px] top-1"></div>
                <h3 className="font-bold">1881</h3>
                <p className="text-gray-700">Kanryo Higaonna returns to Okinawa from China</p>
              </div>
              
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
                <h3 className="font-bold">1905</h3>
                <p className="text-gray-700">Kanryo Higaonna begins teaching at Naha Commercial School</p>
              </div>
              
              <div className="border-l-2 border-gray-300 pl-4 ml-4 relative">
                <div className="absolute w-3 h-3 bg-red-600 rounded-full -left-[7px] top-1"></div>
                <h3 className="font-bold">1915</h3>
                <p className="text-gray-700">After Higaonna's death, Miyagi travels to China for further study</p>
              </div>
              
              <div className="border-l-2 border-gray-300 pl-4 ml-4 relative">
                <div className="absolute w-3 h-3 bg-red-600 rounded-full -left-[7px] top-1"></div>
                <h3 className="font-bold">1916</h3>
                <p className="text-gray-700">Death of Kanryo Higaonna</p>
              </div>
              
              <div className="border-l-2 border-gray-300 pl-4 ml-4 relative">
                <div className="absolute w-3 h-3 bg-red-600 rounded-full -left-[7px] top-1"></div>
                <h3 className="font-bold">1921</h3>
                <p className="text-gray-700">Miyagi demonstrates karate to Crown Prince Hirohito</p>
              </div>
              
              <div className="border-l-2 border-gray-300 pl-4 ml-4 relative">
                <div className="absolute w-3 h-3 bg-red-600 rounded-full -left-[7px] top-1"></div>
                <h3 className="font-bold">1926</h3>
                <p className="text-gray-700">Miyagi establishes the Karate Research Club in Wakas-Cho</p>
              </div>
              
              <div className="border-l-2 border-gray-300 pl-4 ml-4 relative">
                <div className="absolute w-3 h-3 bg-red-600 rounded-full -left-[7px] top-1"></div>
                <h3 className="font-bold">1930</h3>
                <p className="text-gray-700">The name "Goju-Ryu" is officially adopted for the style</p>
              </div>
              
              <div className="border-l-2 border-gray-300 pl-4 ml-4 relative">
                <div className="absolute w-3 h-3 bg-red-600 rounded-full -left-[7px] top-1"></div>
                <h3 className="font-bold">1934</h3>
                <p className="text-gray-700">Miyagi appointed as representative of the Dai Nippon Butokukai</p>
              </div>
              
              <div className="border-l-2 border-gray-300 pl-4 ml-4 relative">
                <div className="absolute w-3 h-3 bg-red-600 rounded-full -left-[7px] top-1"></div>
                <h3 className="font-bold">1936</h3>
                <p className="text-gray-700">Miyagi travels to Hawaii to introduce karate to the Hawaiian Islands</p>
              </div>
              
              <div className="border-l-2 border-gray-300 pl-4 ml-4 relative">
                <div className="absolute w-3 h-3 bg-red-600 rounded-full -left-[7px] top-1"></div>
                <h3 className="font-bold">1945</h3>
                <p className="text-gray-700">Battle of Okinawa; Miyagi loses his home and valuable documents</p>
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
