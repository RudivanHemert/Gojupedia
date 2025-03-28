import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

const PowerAndMovement = () => {
  return (
    <ScrollArea className="h-[calc(100vh-14rem)] pr-4">
      <div className="space-y-6">
        <section className="space-y-3">
          <h2 className="text-xl font-bold">Power and Movement in Kata</h2>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Three Basic Qualities</h3>
            <p>
              For a correct execution of the movements of the kata, three basic qualities are essential: grounding, centering, and presence ("concentration"). This classification partially corresponds with the traditional Okinawan classification into gedan (the feet press into the ground), chudan (a good posture, the back is straight, and the arms are free of tension), and jodan (the eyes look straight ahead, and presence is everywhere).
            </p>
            <p>
              For the execution of these three basic qualities, the tanden or hara is crucial. The tanden is the center of your body and is located in the middle of your lower abdomen, about 4 finger widths below your navel. For the development and use of the tanden, deep abdominal breathing is necessary.
            </p>
            <p>
              To train this breathing, imagine that the airflow during inhalation does not stop in the lungs but that the breathing movement continues to flow to the lower abdomen. To make this possible, it is necessary to push the lower abdomen outward (more yang) or receive it on all sides (more yin). If you do not yet have deep abdominal breathing, you should actively push the bottom of the abdomen outward (if you have done this more often, you can also apply the much more relaxed ying version). Due to the increase in volume in the lower abdomen, the lungs fill with air without the chest expanding.
            </p>
            <p>
              The extended version of this breathing movement runs along your tailbone over your pelvic floor and circles in your lower abdomen around the tanden. When the abdomen is filled, you also start the exhalation from your lower abdomen and the tanden. You can perform the breathing movement in different ways, and it is good to develop and train it in various ways. This returns in all movements of the kata.
            </p>
            
            <div className="flex justify-center my-4">
              <img 
                src="/images/kata/kata1.png" 
                alt="Centering diagram showing the flow of energy" 
                className="max-w-xs rounded-lg shadow-md"
              />
            </div>
            
            <h3 className="text-lg font-semibold mt-6">Grounding</h3>
            <p>
              During grounding, the body is maximally relaxed downward. This makes the pressure on the ground highest. The contact between the feet and the ground is maximal, and you press the feet firmly on the ground. An aid to good grounding can be that when inhaling, you imagine that an imaginary line runs from the earth through your feet and legs to the tanden. When exhaling, you follow the same line from the tanden in the opposite direction to the ground. Make sure that when inhaling and exhaling, you continue to relax the body downward and do not go up with the imaginary breathing flow.
            </p>
            
            <div className="flex justify-center my-4">
              <img 
                src="/images/kata/kata2.png" 
                alt="Grounding diagram showing the flow from earth to tanden" 
                className="max-w-xs rounded-lg shadow-md"
              />
            </div>
            
            <h3 className="text-lg font-semibold mt-6">Centering</h3>
            <p>
              By centering, you ensure that there is no unnecessary tension to stay upright. Because the muscles and joints are relaxed thanks to grounding and centering, they can immediately come into action. By centering, you stand upright. Secondly, your head, shoulders, and pelvis rotate around an imaginary vertical axis through your crown and the middle between your feet. Centering includes not only physical aspects. Being aware of your (straight) posture and how you receive ki in your tanden and how it flows from it are also important aspects of centering.
            </p>
            
            <h3 className="text-lg font-semibold mt-6">Presence ("Concentration")</h3>
            <p>
              The execution of a kata goes better if you are fully and undisturbed "present." A distinction is made between 'presence' (awareness of everything around us) and 'concentration' (more focused on one point/location/action). During the kata, it is desirable that you pay attention to the posture, movement, breathing, relaxation, execution, and do not let yourself be disturbed by thoughts about, for example, daily concerns or a less successful action.
            </p>
            <p>
              The concentration this requires is called zanshin (= 'remaining heart'), and refers to the undisturbed, concentrated mind. This is one of the moments where karate and Zen meet, and karate is therefore also called moving Zen. Two terms closely related to this are seishin and isshin. Isshin means one heart. Sei means "essence" and shin means "mind." Seishin is the undisturbed real (spiritual) I. For the application of zanshin, isshin, and the achievement of seishin, the tanden is the starting point.
            </p>
            
            <div className="flex justify-center my-4">
              <img 
                src="/images/kata/kata3.png" 
                alt="Presence and concentration diagram" 
                className="max-w-xs rounded-lg shadow-md"
              />
            </div>
            
            <h3 className="text-lg font-semibold mt-6">Haragei</h3>
            <p>
              From this brief summary of the three basic qualities, it appears that the body, the breathing, and the mind have the tanden as their main support point. It is here where body, breath, and mind come together. The art of integrating these three in our physical and mental actions is called haragei and literally means the "art of the belly." The most important kata of Goju ryu is Sanchin, and the name refers to these three battles - jodan, chudan, and gedan, or body, breath, mind - that must be fought for the development of a "complete" movement. Sanchin is thus a kind of pressure cooker to develop haragei, but for the good execution of all techniques in all kata, "the support of the belly" is indispensable.
            </p>
          </div>
        </section>
      </div>
    </ScrollArea>
  );
};

export default PowerAndMovement; 