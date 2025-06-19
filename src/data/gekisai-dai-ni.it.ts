import { KataStep } from '../components/practice/InteractiveKataSteps';

export const gekisaiDaiNiSteps: KataStep[] = [
  {
    id: 'step-1',
    number: 1,
    title: 'Introduzione e differenze con Gekisai Dai Ichi',
    description: `Gekisai Dai Ni significa 'attaccare e distruggere 2' ed è stato sviluppato da Chojun Miyagi nello stesso periodo e per la stessa ragione di Gekisai Dai Ichi. La kata è molto simile a Gekisai Dai Ichi, ma nella seconda parte vengono utilizzate più tecniche a mano aperta.

Le principali differenze con Gekisai Dai Ichi sono:
1. Quando eseguita classicamente al conteggio, il calcio frontale, il colpo di gomito, il colpo di nocche, il blocco basso spazzante e il pugno inverso sono su un conteggio (ritmo: 1-2 (gomito e stampa) - 3-4-5)
2. Il secondo blocco medio-alto è un blocco di trazione a mano aperta (hiki uke)
3. Vengono aggiunti blocchi di trazione destra e sinistra (hiki uke)
4. La tecnica finale non è un potente doppio pugno in zenkutsu dachi, ma un tora guchi con muchimi in nekoashi dachi`,
  },
  {
    id: 'step-2',
    number: 2,
    title: 'Prima parte - identica a Gekisai Dai Ichi',
    description: `La prima parte di Gekisai Dai Ni è identica a Gekisai Dai Ichi:
- Blocco verso l'alto (jodan uke)
- Pugno alto (jodan zuki)
- Blocco basso spazzante (gedan barai)
- Blocco medio (chudan uke)

Queste tecniche vengono eseguite con gli stessi punti di attenzione di Gekisai Dai Ichi.`,
  },
  {
    id: 'step-3',
    number: 3,
    title: 'Blocco di trazione medio-alto (chudan hiki uke)',
    description: `Il movimento viene eseguito con muchimi, il piede si muove in un movimento circolare (caviglia lungo caviglia), simultaneamente con la mano. La mano che blocca inizia angolata sotto il gomito dell'altro braccio. La potenza viene focalizzata sul lato del mignolo della mano durante il blocco.

Questo è un movimento circolare; solo alla fine del blocco la mano viene tirata linearmente circa 5 centimetri verso il corpo dal gomito; il gomito poi viene contro la gabbia toracica. Concentrati sul pollice e l'indice quando tiri. Anche l'hikite è una mano aperta con le dita verso l'alto.`,
  },
  {
    id: 'step-4',
    number: 4,
    title: 'Calcio frontale, colpo di gomito e colpo di nocche (mae geri, hiji ate, uraken uchi)',
    description: `Queste tecniche vengono eseguite su un conteggio (ritmo: 1-2 (gomito e stampa) - 3-4-5). Il calcio frontale viene eseguito con un blocco a mano aperta (a differenza di Gekisai Dai Ichi dove la mano rimane un pugno).

Il blocco viene mantenuto durante il calcio e la mano - a differenza di Gekisai Dai Ichi - rimane quindi aperta. Viene tirata indietro altrettanto forte per il colpo di gomito, gira nel processo e diventa un pugno.`,
  },
  {
    id: 'step-5',
    number: 5,
    title: 'Blocco di trazione destra - sinistra (migi hidari hiki uke)',
    description: `Questi due blocchi di trazione vengono eseguiti rapidamente, ma ancora separatamente e con muchimi. Sono simili al primo blocco di trazione, solo più veloci. Anche qui la caviglia va lungo la caviglia, simultaneamente con i movimenti della mano che iniziano anche angolati sotto il gomito.

Il piede destro viene posizionato a terra, porta brevemente circa il 50% del peso corporeo e, dopo che il blocco è completamente eseguito, spinge per lo stesso movimento circolare di ritorno.`,
  },
  {
    id: 'step-6',
    number: 6,
    title: 'Tora guchi "Bocca di Tigre" - blocco controllante alto e spinta',
    description: `Da hachiji dachi (postura naturale) fai un passo in linea retta diagonalmente all'indietro e tiri l'altro piede diritto in nekoashi dachi. Il movimento viene eseguito con muchimi.

La tecnica consiste in:
- Blocco controllante alto con il dorso della mano (jodan haishu osae uke)
- Blocco di gancio verso l'interno (uchi kake uke)
- Spinta alta e bassa (jodan e gedan oshi)

Respira durante i blocchi, espira durante la spinta. Concentrati sui denti, i grandi muscoli della schiena e il lato delle mani durante i blocchi; durante la spinta concentrati sui denti, i grandi muscoli della schiena, i palmi e il pollice.`,
  },
  {
    id: 'step-7',
    number: 7,
    title: 'Punti di attenzione per nekoashi dachi',
    description: `In neko ashi dachi la corona è in alto, il mento leggermente dentro e la schiena dritta. Il tuo peso riposa principalmente sul piede posteriore (90%); dal tuo piede anteriore le dita e la palla toccano leggermente il pavimento, come se galleggiassero.

Il tallone del piede posteriore e la palla del piede anteriore sono lungo una linea immaginaria dritta (o da musubi dachi il piede anteriore va diritto in avanti). Il ginocchio del piede anteriore cade leggermente verso l'interno.

Durante il movimento l'intera pianta di entrambi i piedi rimane a terra. Posiziona quindi il tuo piede anteriore completamente a terra prima del movimento.`,
  },
  {
    id: 'step-8',
    number: 8,
    title: 'Chiusura',
    description: `Porta la mano sinistra verso l'alto e poi muovi entrambe le mani in un movimento circolare verso il basso e posiziona la mano destra nella sinistra, palmi verso l'alto.

Spingi potentemente con la palla del piede anteriore mentre fai un passo indietro da neko ashi dachi a musubi dachi. Giri le tue mani e chiudi la kata.

Prima della chiusura, gira come un tutto dai denti verso il fronte; i piedi non si staccano dal pavimento.`,
  }
];

// Add a console log to check if this file is being loaded    
console.log('gekisai-dai-ni.it.ts loaded successfully:', gekisaiDaiNiSteps.length, 'steps available'); 