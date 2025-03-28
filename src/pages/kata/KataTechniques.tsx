import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

const KataTechniques = () => {
  return (
    <ScrollArea className="h-[calc(100vh-14rem)] pr-4">
      <div className="space-y-4">
        <section className="space-y-2">
          <h2 className="text-xl font-bold">The Techniques of the Kata</h2>
          
          <div className="mt-4 space-y-4">
            <h3 className="text-lg font-semibold">Explanation of Used Terms</h3>
            <p>
              In martial arts, Japanese names are generally used for the various techniques, and karateka are expected to eventually learn the most important ones. That is not so easy. Therefore, in this introduction and with Gekisai dai ichi and Ni, the Dutch term is used with the Japanese added in parentheses. From Saifa onwards, the Japanese term is used with the Dutch added in parentheses (sometimes not if it concerns a new term).
            </p>
            <p>
              The five most important stances are assumed to be known. These are: sanchin dachi (two feet long), zenkutsu dachi (forward stance), shiko dachi ('wide-legged' stance), nekoashi dachi (cat stance), and musubi dachi (attention stance). The term for retracting the other arm to the side is also not translated and always called 'hikite'. Occasionally, reference is made to vital points. An overview of the locations of the vital points can be found in the already mentioned Traditional Karate Vol 1 and in 'Terminology' (which also includes the other Japanese terms used), the latter can also be downloaded from the Kenkon or IOGKF-Nl website.
            </p>
          </div>
          
          <div className="mt-4 space-y-4">
            <h3 className="text-lg font-semibold">Height of Techniques</h3>
            <p>
              Finally, something about the height of the execution of the techniques. The techniques in the kata are always performed towards vital points of a person who is exactly the same height as yourself. So a punch at middle height is always towards ganka or suigetsu at your own height. If you are in a low stance yourself and the technique is thus performed lower, the relevant virtual opponent is also in a lower stance.
            </p>
          </div>
          
          <div className="mt-4 space-y-4">
            <h3 className="text-lg font-semibold">Beginning and End of the Kata</h3>
            <p>
              Karate begins and ends with a bow, and so do the kata. You stand in musubi dachi and relax your body; the arms lie relaxed next to the body. You ground, center, and are present; the breathing goes to the tanden. Keep your attention in your hands (press the thumb against the ball of the index finger), feet, and tanden, and check the deep breathing.
            </p>
            <p>
              You are instructed to bow ("rei"). In musubi dachi, you bow from the tanden and look at the ground a few meters in front of you (if you bow to a partner, as in kumite training, you bow to your partner and keep looking at them). You say: "onegai shimasu", which means something like "please help me"; an expression of gratitude to other people, including those who have made it possible for you to be here now and able to perform the kata.
            </p>
            <p>
              You are instructed to get ready with "yoi". You move your hands inward and place your left hand on the back of the right, the arms still relaxed downward. You say the name of the kata you are about to perform. With "hajime", the teacher indicates that you can start the kata.
            </p>
            <p>
              There is some difference between countries and dojos in how the beginning of the kata is performed. There is also sometimes a difference between the beginning of heishugata and kaishugata, but the essence is the same everywhere.
            </p>
            <p>
              Conclude the kata by - depending on the kata - placing the fist or the open hand of the right arm, palm up, in the palm of the left hand. Open the fist while turning the hands and step simultaneously into musubi dachi; only exhale when the hands are down and the feet are closed together in musubi dachi. Of course, remain grounded, centered, and present, bring the arms to the side of the body, and make a bow similar to that at the beginning of the kata and say: "arigato gozaimashita", which means "thank you very much".
            </p>
          </div>
        </section>
      </div>
    </ScrollArea>
  );
};

export default KataTechniques; 