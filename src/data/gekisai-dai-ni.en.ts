import { KataStep } from '../components/practice/InteractiveKataSteps';

export const gekisaiDaiNiSteps: KataStep[] = [
  {
    id: 'step-1',
    number: 1,
    title: 'Introduction and differences from Gekisai Dai Ichi',
    description: `Gekisai Dai Ni means 'to attack and destroy 2' and was developed by Chojun Miyagi in the same period and for the same reason as Gekisai Dai Ichi. The kata is very similar to Gekisai Dai Ichi, but in the second part more open hand techniques are used.

The main differences from Gekisai Dai Ichi are:
1. When performed classically on count, the front kick, elbow strike, backfist strike, low sweeping block and reverse punch are on one count (rhythm: 1-2 (elbow and stamp) - 3-4-5)
2. The second middle-high block is an open hand pulling block (hiki uke)
3. Right and left pulling blocks (hiki uke) are added
4. The final technique is not a powerful double punch in zenkutsu dachi, but a tora guchi with muchimi in nekoashi dachi`,
  },
  {
    id: 'step-2',
    number: 2,
    title: 'First part - same as Gekisai Dai Ichi',
    description: `The first part of Gekisai Dai Ni is identical to Gekisai Dai Ichi:
- Upward block (jodan uke)
- High punch (jodan zuki)
- Low sweeping block (gedan barai)
- Middle block (chudan uke)

These techniques are performed with the same attention points as in Gekisai Dai Ichi.`,
  },
  {
    id: 'step-3',
    number: 3,
    title: 'Middle-high pulling block (chudan hiki uke)',
    description: `The movement is performed with muchimi, the foot moves in a circular motion (ankle along ankle), simultaneously with the hand. The blocking hand starts angled under the elbow of the other arm. The power is focused on the little finger side of the hand during the block.

This is a circular movement; only at the end of the block is the hand pulled linearly about 5 centimeters toward the body from the elbow; the elbow then comes against the ribcage. Focus on the thumb and index finger when pulling. The hikite is also an open hand with fingers up.`,
  },
  {
    id: 'step-4',
    number: 4,
    title: 'Front kick, elbow strike and backfist strike (mae geri, hiji ate, uraken uchi)',
    description: `These techniques are performed on one count (rhythm: 1-2 (elbow and stamp) - 3-4-5). The front kick is performed with an open hand block (unlike Gekisai Dai Ichi where the hand remains a fist).

The block is maintained during the kick and the hand - unlike Gekisai Dai Ichi - remains open. It is pulled back just as hard for the elbow strike, turns in the process and becomes a fist.`,
  },
  {
    id: 'step-5',
    number: 5,
    title: 'Right - left pulling block (migi hidari hiki uke)',
    description: `These two pulling blocks are performed quickly, but still separately and with muchimi. They are similar to the first pulling block, only faster. Here too the ankle goes along the ankle, simultaneously with the hand movements which also start angled under the elbow.

The right foot is placed on the ground, briefly carries about 50% of the body weight and, after the block is fully executed, pushes off for the same circular movement back.`,
  },
  {
    id: 'step-6',
    number: 6,
    title: 'Tora guchi "Tiger Mouth" - high controlling block and push',
    description: `From hachiji dachi (natural stance) you step in a straight line diagonally backward and pull the other foot straight in nekoashi dachi. The movement is performed with muchimi.

The technique consists of:
- High controlling block with the back of the hand (jodan haishu osae uke)
- Inward hook block (uchi kake uke)
- High and low push (jodan and gedan oshi)

Breathe in during the blocks, breathe out during the push. Focus on the teeth, large back muscles and side of the hands during the blocks; during the push focus on the teeth, large back muscles, palms and thumb.`,
  },
  {
    id: 'step-7',
    number: 7,
    title: 'Attention points for nekoashi dachi',
    description: `In neko ashi dachi the crown is up, the chin slightly in and the back straight. Your weight rests mainly on the back foot (90%); from your front foot the toes and ball lightly touch the floor, as if floating.

The heel of the back foot and the ball of the front foot are along a straight imaginary line (or from musubi dachi the front foot goes straight forward). The knee of the front foot falls slightly inward.

During the movement the entire sole of both feet remains on the ground. Therefore place your front foot completely on the ground before the movement.`,
  },
  {
    id: 'step-8',
    number: 8,
    title: 'Closing',
    description: `Bring the left hand up and then move both hands in a circular motion downward and place the right hand in the left, palms up.

Push off powerfully with the ball of the front foot as you step back from neko ashi dachi into musubi dachi. You turn your hands and close the kata.

Before closing, turn as a whole from the teeth toward the front; the feet do not come off the floor.`,
  }
];

// Add a console log to check if this file is being loaded    
console.log('gekisai-dai-ni.en.ts loaded successfully:', gekisaiDaiNiSteps.length, 'steps available'); 