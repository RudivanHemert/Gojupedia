
import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp } from 'lucide-react';

const MorioHigaonnaSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="space-y-4 mt-8">
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
        <CollapsibleTrigger className="flex justify-between items-center w-full bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-serif font-semibold">Morio Higaonna (1939 - )</h2>
          {isOpen ? <ChevronUp className="h-6 w-6 text-gray-500" /> : <ChevronDown className="h-6 w-6 text-gray-500" />}
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-4 px-4">
          <div className="md:flex md:space-x-4">
            <div className="md:w-2/3 space-y-4">
              <p className="text-gray-700">
                Morio Higaonna trad rond deze tijd (1954) toe tot de dojo van wijlen Chojun Miyagi. 
                Daarvoor had Higaonna Sensei Goju-Ryu en Shorin-Ryu getraind bij Tsunetaka 
                Shimabukuru, Kenji Kaneshiro en Yoshishige Omine. Op voorspraak van Tsunetaka 
                Shimabukuru trad Higaonna Sensei in maart 1955 officieel toe tot de dojo. Bij zijn eerste 
                bezoek aan de dojo ontmoette hij Yasuo Iba Sensei. Iba Sensei vertelde de jonge 
                Higaonna dat hij naar Anichi Miyagi Sensei moest gaan aangezien deze de meest 
                bekende van de dojo was. Hoewel Higaonna Sensei al twee jaar karate beoefende, wilde 
                hij van voren af aan beginnen. Hij had Junbi Undo getraind en was gedrild in de Gekisai 
                kata en de Sanchin kata. Hij herinnert zich eindeloos Kakie geoefend te hebben en zijn 
                lichaam was getraind door Hojo Undo oefeningen als Nigiri kamae en Makiwara.
              </p>
              
              <div className="md:hidden float-right ml-4 mb-2">
                <img 
                  src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop" 
                  alt="Morio Higaonna" 
                  className="w-40 rounded-md shadow-md"
                />
              </div>

              <p className="text-gray-700">
                In het begin was de training onder meester Anichi Miyagi vrij rustig, echter, toen
                Higaonna Sensei vooruitging en vooral toen hij begon met de beoefening van de kata 
                Sanchin, werd de training erg zwaar. Higaonna Sensei herinnert zich dat de eerste tien 
                jaar die hij onder Anichi Miyagi trainde, het ontwikkelen van snelheid en kracht 
                inhielden en het voortdurend herhalen van kata. Hij kreeg pas later gedetailleerde 
                instructie.
              </p>

              <p className="text-gray-700">
                Als men terugkijkt in de geschiedenis begint GOJU-RYU bij meester Ryu Ryu Ko te 
                Fuzou in Zuid-China. Van daar uit werd het doorgegeven aan de grootse Okinawaanse 
                krijgskunstenaar Kanryu Higaonna. Meester Kanryo Higaonna bracht het Goju-Ryu naar 
                Okinawa, waar het een Okinawaanse kunst werd en hij gaf zijn kunst door aan meester 
                Chojun Miyagi. Door Chojun Miyagi werd het bekend als Goju-Ryu karate-do. De 
                bedoeling was dat het doorgegeven zou worden aan meester Jinan Shinzato. Deze kwam 
                echter tragisch genoeg om tijdens de Tweede Wereldoorlog. Na de Tweede
                Wereldoorlog gaf Chojun Miyagi, zijn kunst door aan zijn meest ijverige leerling, 
                meester Anichi Miyagi. Hij leerde hem alles tot in de kleinste details, het hoogste niveau 
                (Okuden) van de technieken inclusief de Hiden, oftewel de geheime technieken.
              </p>

              <div className="md:hidden float-left mr-4 mb-2 mt-2">
                <img 
                  src="https://images.unsplash.com/photo-1588479839125-7d66cfc0c734?q=80&w=1974&auto=format&fit=crop" 
                  alt="Traditional Karate Training" 
                  className="w-40 rounded-md shadow-md"
                />
              </div>

              <p className="text-gray-700">
                Het karate van Anichi Miyagi is schitterend om te zien, zijn vaardigheid heeft werkelijk het 
                niveau van een kunst bereikt. Dit is het resultaat van zes jaar privé onderricht van Chojun 
                Miyagi.
              </p>

              <p className="text-gray-700">
                In augustus 1957 bouwde Eiichi Miyazato een grote dojo in het Asato district van 
                Naha, die hij de naam Jundokan -de naam van Jigoro Kano's eerste judo-dojo- gaf. 
                Miyazato, die na de oorlog ook druk bezig was met judo, werd rond 1950-51 judo 
                kampioen en ging zelfs in april 1953 naar Japan om het Japan Kodokan seminar bij te 
                wonen. Uiteindelijk werd Miyazato een vooraanstaand judo meester en eveneens 
                voorzitter van de Okinawa Judo Federatie. Vanwege zijn autoriteit en positie als politie 
                inspecteur kreeg Miyazato officieel de leiding van de dojo, Koshin Iha was zijn assistent 
                en verantwoordelijk voor de lesgelden. Zij gaven echter zelden les en lieten de dagelijkse 
                lesgeef verantwoordelijkheid over aan An'ichi Miyagi. Het was An'ichi Miyagi die 
                bijvoorbeeld Iha suparinpei kata onderwees.
              </p>

              <p className="text-gray-700">
                In 1959 vertrok An'ichi Miyagi uit Okinawa om op een olietanker van Amerikaanse 
                eigenaars te gaan werken. Werk vinden op Okinawa was erg moeilijk in die tijd en 
                An'ichi droeg nog steeds de verantwoordelijkheid om zijn familie te ondersteunen. Een 
                jaar later besloot Morio Higaonna naar Tokyo op het vasteland van Japan te gaan om de 
                Takushoku Universeit te bezoeken. Gedurende zijn studie kon hij slechts tweemaal per 
                jaar -iedere winter een maand en iedere zomer twee tot drie maanden- naar Okinawa 
                terug gaan. Bij deze gelegenheden vervolgde hij zijn training en verdere ontwikkeling bij 
                An'ichi Miyagi.
              </p>

              <p className="text-gray-700">
                De Okinawa Karate-do Renmei was in mei 1956 opgericht met Choshin 
                Chibana -de grondlegger van Shorin-Ryu- als eerste voorzitter. Op 30 december 1960 
                hield deze potentieel krachtige organisatie haar eerste dan examens alle stijlen. Shoshin 
                Nagamine van Matsubayashi Shorin-Ryu was toen de voorzitter. De top-instructeurs van 
                iedere stijl werden gegradueerd tot godan, vijfentwintig karate-ka werden gegradueerd
                tot sandan (onder hen Morio Higaonna); drieëntwintig werden gegradueerd tot nidan; en 
                veertig werden gegradueerd tot shodan.
              </p>

              <p className="text-gray-700">
                Morio Higaonna gaf twintig jaar les in een dojo in Yoyogi, een buitenwijk van Tokyo. 
                Gedurende die twintig jaar bouwde hij de dojo uit tot een die wereldwijd bekendheid 
                genoot, met als resultaat dat mensen met een verscheidenheid aan gevechtskunst 
                achtergronden kwamen om bij hem te trainen. Higaonna introduceerde ook zijn leraar
                An'ichi Miyagi in Tokyo. Gedurende deze jaren onderwees An'ichi Miyagi zijn leerling, 
                Morio Higaonna, in de geheime en de hoogste technieken van Goju-Ryu.
              </p>

              <p className="text-gray-700">
                In 1979 werd, met behulp van de familie van Chojun Miyagi, Ken Miyagi -de vierde 
                zoon van de oprichter van Goju-Ryu-, en veel van Chojun Miyagi's senior leerlingen, de
                International Okinawan Goju-Ryu Karate-Do Federation (IOGKF) opgericht.
                Met als doel de oorspronkelijke Goju-Ryu technieken onveranderd te bewaren en de
                technische ontwikkeling als ook de populariteit te bevorderen, overeenkomstig de wens 
                van Chojun Miyagi. An'ichi Miyagi werd benoemd tot ere-voorzitter; Morio Higaonna 
                werd benoemd tot wereld chief-instructor.
              </p>

              <p className="text-gray-700">
                In 1981 verhuisde Higaonna naar Okinawa om meer onderzoek te doen en opende een 
                dojo in Naha (Higaonna dojo). Hier werd hij uitgekozen door Howard Reid en Michael 
                Croucher -documentaire makers van de BBC- om traditioneel karate te 
                vertegenwoordigen in de serie "The Way of the Warrior".
              </p>

              <p className="text-gray-700">
                In 1987 ging Higaonna naar de Verenigde Staten om het Goju-Ryu te promoten. Sinds 
                1987 bezocht hij Fuzhou bij vele malen om zijn kennis omtrent de Chinese 'roots' van 
                Goju-Ryu te vergroten. Door deze bezoeken werd er een nauwe band gesmeed tussen de 
                IOGKF en de China Fuzhou Wushu Association (CFWA).
              </p>

              <p className="text-gray-700">
                Vandaag de dag heeft de IOGKF een enorme aanhang over de gehele wereld; 
                tienduizenden leerlingen in zo'n vijfenveertig landen.
              </p>
            </div>
            
            <div className="hidden md:block md:w-1/3 space-y-4">
              <div className="sticky top-4">
                <img 
                  src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop" 
                  alt="Morio Higaonna" 
                  className="w-full rounded-md shadow-md mb-4"
                />
                <img 
                  src="https://images.unsplash.com/photo-1588479839125-7d66cfc0c734?q=80&w=1974&auto=format&fit=crop" 
                  alt="Traditional Karate Training" 
                  className="w-full rounded-md shadow-md mb-4"
                />
                <img 
                  src="https://images.unsplash.com/photo-1600881333123-ef51e8550e4a?q=80&w=1974&auto=format&fit=crop" 
                  alt="IOGKF Training" 
                  className="w-full rounded-md shadow-md"
                />
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </section>
  );
};

export default MorioHigaonnaSection;
