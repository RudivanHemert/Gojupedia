
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
              In 1902, at the age of 14, Chojun Miyagi became a student of Master Kanryo. Two years earlier, when he was 12, his mother wished for him to become strong and well-prepared to take on family responsibilities. She took him to Aragaki Ryuko, a well-known martial artist in Okinawa.
            </p>
            <p className="text-gray-700">
              Aragaki Ryuko's approach was primarily focused on fighting itself. He didn't really teach martial arts as such. He taught young Chojun Miyagi makiwara training and emphasized various conditioning exercises to strengthen the body, such as lifting heavy stones and chi-ishi training.
            </p>
            <div className="float-left mr-4 mb-2 mt-2">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Aragaki.jpg/220px-Aragaki.jpg" 
                alt="Aragaki Ryuko" 
                className="w-28 h-auto rounded-md shadow-md"
              />
            </div>
            <p className="text-gray-700">
              Chojun Miyagi was an unusually enthusiastic student, and because of his dedication, Aragaki Ryuko introduced him to the renowned Kanryo. Chojun Miyagi was fourteen years old at the time. He was a student at what is now called Shuri High School.
            </p>
            <p className="text-gray-700">
              For the young Chojun Miyagi, this was the beginning of serious training. Despite still being so young, Chojun Miyagi dedicated his entire life to karate. Every day he ran the long distance between his home in Naha and the school in Shuri. After school, he went to the beach where large and heavy stones could be found to train with. Because he trained so hard daily, he progressed quickly.
            </p>
            <p className="text-gray-700">
              Training in the dojo, especially the Sanchin kata under the guidance of his teacher Kanryo, became harder and harder as time passed. Nevertheless, at that point in his life, karate was the only thing he wanted to do. He thought only of karate, and even while still in school, he saw his future only in karate. Karate had become the most important thing in his life.
            </p>
            <p className="text-gray-700">
              Master Kanryo made a deep impression on Chojun Miyagi. Even after his fifties, Kanryo still possessed incredible strength and speed. For example, when he demonstrated the last techniques in the Sesan kata, you could hear the sound of splitting wood when he stamped his foot on the floor. Once, Master Kanryo instructed Chojun Miyagi to look under the floor to show him the silent power of his technique. Chojun Miyagi saw that one of the heavy crossbeams supporting the floor was broken. Chojun Miyagi often told striking stories like this about his teacher's hard and unimaginable training in China.
            </p>
            <p className="text-gray-700">
              Chojun Miyagi was the most gifted and dedicated student in the dojo. At the age of 20, he became the top student of Master Kanryo. Around the same time, he got married. At the age of 22, he left for mainland Japan to fulfill his military service. According to Seibun Nakamto Sensei, Kanryo constantly spoke with tenderness about his top student during his absence.
            </p>
            <p className="text-gray-700">
              After two years of military service, Chojun Miyagi returned to Okinawa. He was eager to start training again and invited Master Kanryo to teach him at home. For three years after his return from Japan, Kanryo gave him private lessons. When Master Kanryo taught groups in his house, he had Chojun Miyagi stay behind to continue training with him. It was during this time that he taught his student the highest level techniques. Besides teaching empty-hand forms of the martial arts, Kanryo also taught Chojun Miyagi weapons.
            </p>
            <p className="text-gray-700">
              Before Chojun Miyagi left for his military service, Master Kanryo had begun teaching him bo-jutsu to prepare him for ju-ken or bayonet fighting, which was practiced in the army. Master Kanryo's skill with the bo was of a very high level. It is said that if he threw his bo into a large empty pot, the pot, instead of breaking into pieces, would merely be pierced due to the speed and precision of the throw. It was during this period that Chojun Miyagi began to realize how extensive his teacher's study in China had been.
            </p>
            <p className="text-gray-700">
              There were many martial artists in Naha at that time, but none could match the skill and expertise of Master Kanryo. He was truly in a class of his own. His fame was so great that when the police were confronted with a dangerous man wielding a knife, they called him to handle the situation. According to bystanders, his movements were as fast as lightning.
            </p>
            <p className="text-gray-700">
              Master Kanryo became synonymous with Naha-te. When Naha-te was mentioned, people always thought of him. He is the one who was responsible for bringing Naha-te forward as a martial art on Okinawa. Kanryo Higaonna was a great master in all respects; he died in 1915. His top student Chojun Miyagi (26 years old) felt that his level was still far below that of his teacher. He had heard much about China from his teacher, and eager to improve himself and gain more knowledge, he planned a trip to China to follow in his teacher's footsteps.
            </p>
            <p className="text-gray-700">
              While preparing for his journey, Chojun Miyagi met Eizo Nakamoto, who had taught English at Fuzhou College in Fuzhou and had just returned to Naha. He introduced Chojun Miyagi to a friend of his who lived in Fuzhou. Upon arrival in China, this friend took Chojun to meet a former student of the legendary master Ryu-Ryu Ko. After the usual greeting rituals, Chojun performed the katas he had learned from Master Kanryo for the old man. He demonstrated all kata from Saifa to Suparinpei. However, he forgot the kata Sanseru, presumably because it was his least favorite kata. The old man complimented him on his katas but also noted that he had missed one. This was the kata Sanseru, and the old man demonstrated it for Chojun Miyagi.
            </p>
            <p className="text-gray-700">
              In China, Chojun Miyagi also visited the grave of Master Ryu Ryu Ko to pay his respects. He also visited the temple where Ryu Ryu Ko had studied the martial arts. This temple was located high on the mountain, shrouded in mist. In the courtyard where the martial arts were practiced, he saw many worn footprints in the hardened ground, and there was a variety of traditional training equipment. Master Chojun Miyagi stayed in Fuzhou for two months that time, studying the martial arts and conducting his own research.
            </p>
            <p className="text-gray-700">
              The second time Chojun Miyagi went to China was sometime between 1920 and 1930. He was accompanied by a Chinese tea merchant, Mr. Kogenki, a good friend who had gained proficiency in the White Crane style of Chinese martial arts. Unfortunately, at that time, relations between China and Japan were far from good. As a result, Chojun Miyagi had little success with his investigations.
            </p>
            <p className="text-gray-700">
              In 1936, he went to China for the third time. This time he went alone. He took a boat from Kyushu (mainland Japan) to Shanghai, where he had arranged a meeting with the Shanghai Martial Arts Federation. This trip was much more fruitful than the previous two, and he established good contacts with the Chinese martial artists he met there.
            </p>
            <div className="float-right ml-4 mb-2 mt-2">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Bubishi.jpg" 
                alt="Bubishi" 
                className="w-32 h-auto rounded-md shadow-md"
              />
            </div>
            <p className="text-gray-700">
              Two years earlier, in 1934, he had traveled to Hawaii at the invitation of a Hawaiian newspaper company. His main goal was to teach the many Okinawans who worked there. He stayed in Hawaii for eleven months, and during this time, he tried to spread Goju-Ryu karate there. In 1933, thanks to the efforts of Chojun Miyagi, karate was recognized as a Japanese martial art by the Butokukai. The Butokukai was based in Kyoto and was the central point for all Japanese martial arts, making it the most powerful and influential group in the country. Around this time, the name Goju-Ryu karate-do was also officially registered with them.
            </p>
            <p className="text-gray-700">
              The following year, 1934, Chojun Miyagi was appointed as a delegate for the Dai Nippon Butokukai for Okinawa. After his appointment, he continued his efforts to propagate and popularize karate. In 1937, he, along with three others, was awarded the honorary title of 'Kyoshi Ko' by the Butokukai. It was the first time a karate delegate received this title.
            </p>
            <p className="text-gray-700">
              The name Goju-Ryu was more coincidental than intentional. On May 5, 1930, the Japanese Martial Arts Festival was held at the Meiji Shrine in Tokyo. Chojun Miyagi sent his top student Jinan Shinzato to give a demonstration. After this demonstration, a teacher in Japanese kobudo asked him to which karate style he belonged. Jinan Shinzato didn't know what to say since people in Okinawa were not used to naming styles as was customary in mainland Japan. Shinzato Sensei told Chojun Miyagi about this incident after returning to Okinawa. Chojun Miyagi decided, after considering everything, to give the style a name to gain recognition as a Japanese martial art and to promote its future development.
            </p>
            <p className="text-gray-700">
              He chose the name Go-Ju Ryu, a name from a poem in the Bubishi. The Bubishi is an enormous Chinese text that covers a range of topics, including martial arts. This poem contains eight precepts for the practice of martial arts. The precept from which Chojun Miyagi derived the name was "Houwa Goiu Wo Donto Su" - inhaling is soft, exhaling is hard. Most martial artists in Okinawa and Japan know this story, as this was the first official naming of a karate style.
            </p>

            <div className="bg-gray-50 p-4 rounded-md text-sm mt-4">
              <ol className="list-decimal list-inside space-y-2">
                <li><span className="font-semibold">Jinshi wa tenchi ni onaji</span> - The mind is one with Heaven and Earth.</li>
                <li><span className="font-semibold">Ketsumyaku wa nichigetsu ni nitari</span> - The circulatory rhythm of the body mimicks the cycle of the Sun and the Moon.</li>
                <li><span className="font-semibold">Ho wa Goju wo donto su</span> - The way of inhaling and exhaling is hardness and softness.</li>
                <li><span className="font-semibold">Mi wa toki ni shitagai hen ni ozu</span> - The body is always adapting and changing.</li>
                <li><span className="font-semibold">Te wa ku ni ai sunwachi hairu</span> - True pugilism will occur in the absence of conscious thought.</li>
                <li><span className="font-semibold">Shintai wa hakarite riho su</span> - The feet must advance and retreat, separate and meet.</li>
                <li><span className="font-semibold">Me wa shiho wo rniru woyosu</span> - The eyes do not miss even the slightest change.</li>
                <li><span className="font-semibold">Mimi wa yoku happo wo kiku</span> - The ears are able to listen in all directions.</li>
              </ol>
            </div>

            <p className="text-gray-700">
              Despite the fact that Chojun Miyagi gave his style a name, he never referred to it when he taught or when he talked about karate. He simply used the term "Ti," the word Okinawans use to describe martial arts, or "Bu," which means martial art. There was no name sign on the outside of his dojo as was common on mainland Japan. Yet he told his students that if they were asked about their style, they should answer Goju-Ryu. Even after World War II, he did not put up a name sign.
            </p>
            <p className="text-gray-700">
              The name was registered with the Butokukai as Goju-Ryu karate-do. The word 'karate' is written with two Chinese characters. The first character 'To' used to mean 'Chinese' and nowadays means 'empty.' In Goju-Ryu karate-do, the meaning 'Chinese' is maintained. The later meaning 'empty' is used in Shotokan-Ryu, Shito-Ryu, and Wado-Ryu karate-do.
            </p>
            <p className="text-gray-700">
              In Okinawa, the older masters wanted to bring their art to public attention and obtain official recognition as a bona fide martial art discipline. To achieve this, the "Okinawa Karate Kenkyu Kai" was established in 1925. A new building was specially erected for this in the Walaso-cho area of a district in Naha. Chojun Miyagi was appointed chief instructor, and other well-known Okinawan masters were involved. Masters such as Chomo Hanashiri, Choyu Motosu, and Kenwa Mabuni all taught there. Through this association, well-known karate masters worked on the spread and popularization of karate. Unfortunately, the Kenkyu Kai had to close in 1929 as not enough funds could be raised for its maintenance.
            </p>
            <div className="float-left mr-4 mb-2 mt-2">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Goju-ryu_crest.svg/200px-Goju-ryu_crest.svg.png" 
                alt="Goju-Ryu crest" 
                className="w-28 h-auto rounded-md shadow-md"
              />
            </div>
            <p className="text-gray-700">
              In the early 1920s, Chojun Miyagi formulated and developed Junbi Undo, or warm-up exercises, which are unique to Goju-Ryu. After careful research and with the help of a physician friend, he developed these exercises based on medical and scientific principles. At the same time, he also just started teaching at schools. During this period, he also developed the kata Tensho from the Chinese martial arts kata Rokkishu.
            </p>
            <p className="text-gray-700">
              Jihan Shinzato was Chojun Miyagi's top student before World War II. Shinzato Sensei was a detective with the police. He was extremely dedicated to karate, and he also practiced Judo. Shinzato Sensei trained hard under Chojun Miyagi, and he also conducted his own research in the martial arts. He even created his own kata. His favorite techniques were naga-waza, throwing techniques, and ne-waza, ground techniques. Shinzato Sensei was exceptionally gifted, and it was widely known that he would become Chojun Miyagi's successor to further spread Goju-Ryu. Unfortunately, he was killed during World War II. Besides Shinzato, Chojun Miyagi also lost two daughters and his third son during the war. After the war, Chojun Miyagi taught at the police academy, and when it moved to Naha in 1947, Chojun Miyagi also moved. He found a house in the Tsuboya-cho district.
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
                <h3 className="font-bold">1925</h3>
                <p className="text-gray-700">Establishment of the Okinawa Karate Research Club</p>
              </div>
              
              <div className="border-l-2 border-gray-300 pl-4 ml-4 relative">
                <div className="absolute w-3 h-3 bg-red-600 rounded-full -left-[7px] top-1"></div>
                <h3 className="font-bold">1930</h3>
                <p className="text-gray-700">The name "Goju-Ryu" is formalized by Miyagi</p>
              </div>
              
              <div className="border-l-2 border-gray-300 pl-4 ml-4 relative">
                <div className="absolute w-3 h-3 bg-red-600 rounded-full -left-[7px] top-1"></div>
                <h3 className="font-bold">1934</h3>
                <p className="text-gray-700">Miyagi travels to Hawaii to teach karate</p>
              </div>
              
              <div className="border-l-2 border-gray-300 pl-4 ml-4 relative">
                <div className="absolute w-3 h-3 bg-red-600 rounded-full -left-[7px] top-1"></div>
                <h3 className="font-bold">1953</h3>
                <p className="text-gray-700">Death of Chojun Miyagi</p>
              </div>
              
              <div className="border-l-2 border-gray-300 pl-4 ml-4 relative">
                <div className="absolute w-3 h-3 bg-red-600 rounded-full -left-[7px] top-1"></div>
                <h3 className="font-bold">1979</h3>
                <p className="text-gray-700">Formation of the International Okinawan Goju-Ryu Karate-Do Federation</p>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </MobileLayout>
  );
};

export default HistoryPage;
