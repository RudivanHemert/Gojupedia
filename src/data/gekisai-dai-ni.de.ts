import { KataStep } from '../components/practice/InteractiveKataSteps';

export const gekisaiDaiNiSteps: KataStep[] = [
  {
    id: 'step-1',
    number: 1,
    title: 'Einführung und Unterschiede zu Gekisai Dai Ichi',
    description: `Gekisai Dai Ni bedeutet 'angreifen und zerstören 2' und wurde von Chojun Miyagi in derselben Zeit und aus demselben Grund wie Gekisai Dai Ichi entwickelt. Die Kata ist Gekisai Dai Ichi sehr ähnlich, aber im zweiten Teil kommen mehr offene Handtechniken vor.

Die wichtigsten Unterschiede zu Gekisai Dai Ichi sind:
1. Bei klassischer Ausführung auf Zählung sind der Vorwärtstritt, Ellbogenschlag, Knöchelschlag, niedriger fegender Block und Gegenschlag auf einen Schlag (Rhythmus: 1-2 (Ellbogen und Stampfen) - 3-4-5)
2. Der zweite mittelhohe Block ist ein offener Hand-Zugblock (hiki uke)
3. Es werden rechte und linke Zugblöcke (hiki uke) hinzugefügt
4. Die letzte Technik ist kein kraftvoller Doppelschlag in zenkutsu dachi, sondern ein tora guchi mit muchimi in nekoashi dachi`,
  },
  {
    id: 'step-2',
    number: 2,
    title: 'Erster Teil - gleich wie Gekisai Dai Ichi',
    description: `Der erste Teil von Gekisai Dai Ni ist identisch mit Gekisai Dai Ichi:
- Aufwärtsblock (jodan uke)
- Hochschlag (jodan zuki)
- Niedriger fegender Block (gedan barai)
- Mittelblock (chudan uke)

Diese Techniken werden mit denselben Aufmerksamkeitspunkten wie in Gekisai Dai Ichi ausgeführt.`,
  },
  {
    id: 'step-3',
    number: 3,
    title: 'Mittelhoher Zugblock (chudan hiki uke)',
    description: `Die Bewegung wird mit muchimi ausgeführt, der Fuß bewegt sich in einer runden Bewegung (Knöchel entlang Knöchel), gleichzeitig mit der Hand. Die blockierende Hand beginnt gewinkelt unter dem Ellbogen des anderen Arms. Die Kraft wird während des Blocks auf der Kleinfingerseite der Hand fokussiert.

Dies ist eine kreisförmige Bewegung; erst am Ende des Blocks wird die Hand vom Ellbogen etwa 5 Zentimeter linear zum Körper gezogen; der Ellbogen kommt dann gegen den Brustkorb. Fokussiere beim Ziehen auf Daumen und Zeigefinger. Auch der hikite ist eine offene Hand mit den Fingern nach oben.`,
  },
  {
    id: 'step-4',
    number: 4,
    title: 'Vorwärtstritt, Ellbogenschlag und Knöchelschlag (mae geri, hiji ate, uraken uchi)',
    description: `Diese Techniken werden auf einen Schlag ausgeführt (Rhythmus: 1-2 (Ellbogen und Stampfen) - 3-4-5). Der Vorwärtstritt wird mit einem offenen Handblock ausgeführt (im Gegensatz zu Gekisai Dai Ichi, wo die Hand eine Faust bleibt).

Der Block bleibt während des Tritts erhalten und die Hand - im Gegensatz zu Gekisai Dai Ichi - bleibt also offen. Sie wird für den Ellbogenschlag genauso hart zurückgezogen, dreht sich dabei und wird zur Faust.`,
  },
  {
    id: 'step-5',
    number: 5,
    title: 'Rechts - links Zugblock (migi hidari hiki uke)',
    description: `Diese beiden Zugblöcke werden zwar schnell ausgeführt, aber immer noch getrennt und mit muchimi. Sie sind ähnlich wie der erste Zugblock, nur schneller. Auch hier geht der Knöchel entlang dem Knöchel, gleichzeitig mit den Handbewegungen, die ebenfalls gewinkelt unter dem Ellbogen beginnen.

Der rechte Fuß wird auf den Boden gesetzt, trägt kurz etwa 50% des Körpergewichts und stößt sich, nachdem der Block vollständig ausgeführt wurde, für dieselbe runde Bewegung zurück ab.`,
  },
  {
    id: 'step-6',
    number: 6,
    title: 'Tora guchi "Tigermund" - hoher kontrollierender Block und Stoß',
    description: `Aus hachiji dachi (natürlicher Stand) trittst du in einer geraden Linie schräg nach hinten und ziehst den anderen Fuß gerade in nekoashi dachi. Die Bewegung wird mit muchimi ausgeführt.

Die Technik besteht aus:
- Hohem kontrollierendem Block mit dem Handrücken (jodan haishu osae uke)
- Einwärts-Hakenblock (uchi kake uke)
- Hohem und niedrigem Stoß (jodan und gedan oshi)

Atme während der Blöcke ein, atme beim Stoß aus. Fokussiere bei den Blöcken auf die Zähne, die großen Rückenmuskeln und die Seite der Hände; beim Stoß auf die Zähne, die großen Rückenmuskeln, die Handflächen und den Daumen.`,
  },
  {
    id: 'step-7',
    number: 7,
    title: 'Aufmerksamkeitspunkte für nekoashi dachi',
    description: `In neko ashi dachi ist der Scheitel oben, das Kinn leicht eingezogen und der Rücken gerade. Dein Gewicht ruht hauptsächlich auf dem hinteren Fuß (90%); von deinem vorderen Fuß berühren die Zehen und der Ball leicht den Boden, als würden sie schweben.

Die Ferse des hinteren Fußes und der Ball des vorderen Fußes stehen entlang einer geraden gedachten Linie (oder aus musubi dachi geht der vordere Fuß gerade nach vorne). Das Knie des vorderen Fußes fällt leicht nach innen.

Während der Bewegung bleibt die gesamte Sohle beider Füße auf dem Boden. Setze daher deinen vorderen Fuß vor der Bewegung vollständig auf den Boden.`,
  },
  {
    id: 'step-8',
    number: 8,
    title: 'Abschluss',
    description: `Bringe die linke Hand nach oben und bewege dann beide Hände in einer runden Bewegung nach unten und lege die rechte Hand in die linke, Handflächen nach oben.

Stoße dich kraftvoll mit dem Ball des vorderen Fußes ab, während du aus neko ashi dachi zurück in musubi dachi trittst. Du drehst deine Hände und schließt die Kata ab.

Vor dem Abschluss drehe dich als Ganzes aus den Zähnen zur Vorderseite; die Füße kommen nicht vom Boden ab.`,
  }
];

// Add a console log to check if this file is being loaded    
console.log('gekisai-dai-ni.de.ts loaded successfully:', gekisaiDaiNiSteps.length, 'steps available'); 