import { KataStep } from '../components/practice/InteractiveKataSteps';

export const gekisaiDaiNiSteps: KataStep[] = [
  {
    id: 'step-1',
    number: 1,
    title: 'Introducción y diferencias con Gekisai Dai Ichi',
    description: `Gekisai Dai Ni significa 'atacar y destruir 2' y fue desarrollado por Chojun Miyagi en el mismo período y por la misma razón que Gekisai Dai Ichi. La kata es muy similar a Gekisai Dai Ichi, pero en la segunda parte se usan más técnicas de mano abierta.

Las principales diferencias con Gekisai Dai Ichi son:
1. Cuando se ejecuta clásicamente al contar, la patada frontal, golpe de codo, golpe de nudillos, bloqueo bajo barrido y puñetazo inverso están en una cuenta (ritmo: 1-2 (codo y pisada) - 3-4-5)
2. El segundo bloqueo medio-alto es un bloqueo de tracción de mano abierta (hiki uke)
3. Se añaden bloqueos de tracción derecha e izquierda (hiki uke)
4. La técnica final no es un puñetazo doble poderoso en zenkutsu dachi, sino un tora guchi con muchimi en nekoashi dachi`,
  },
  {
    id: 'step-2',
    number: 2,
    title: 'Primera parte - igual que Gekisai Dai Ichi',
    description: `La primera parte de Gekisai Dai Ni es idéntica a Gekisai Dai Ichi:
- Bloqueo hacia arriba (jodan uke)
- Puñetazo alto (jodan zuki)
- Bloqueo bajo barrido (gedan barai)
- Bloqueo medio (chudan uke)

Estas técnicas se realizan con los mismos puntos de atención que en Gekisai Dai Ichi.`,
  },
  {
    id: 'step-3',
    number: 3,
    title: 'Bloqueo de tracción medio-alto (chudan hiki uke)',
    description: `El movimiento se realiza con muchimi, el pie se mueve en un movimiento circular (tobillo a lo largo del tobillo), simultáneamente con la mano. La mano bloqueadora comienza en ángulo bajo el codo del otro brazo. El poder se enfoca en el lado del meñique de la mano durante el bloqueo.

Este es un movimiento circular; solo al final del bloqueo se tira de la mano linealmente unos 5 centímetros hacia el cuerpo desde el codo; el codo entonces viene contra la caja torácica. Enfócate en el pulgar y el índice al tirar. El hikite también es una mano abierta con los dedos hacia arriba.`,
  },
  {
    id: 'step-4',
    number: 4,
    title: 'Patada frontal, golpe de codo y golpe de nudillos (mae geri, hiji ate, uraken uchi)',
    description: `Estas técnicas se realizan en una cuenta (ritmo: 1-2 (codo y pisada) - 3-4-5). La patada frontal se realiza con un bloqueo de mano abierta (a diferencia de Gekisai Dai Ichi donde la mano permanece como puño).

El bloqueo se mantiene durante la patada y la mano - a diferencia de Gekisai Dai Ichi - permanece abierta. Se tira hacia atrás igual de fuerte para el golpe de codo, gira en el proceso y se convierte en puño.`,
  },
  {
    id: 'step-5',
    number: 5,
    title: 'Bloqueo de tracción derecha - izquierda (migi hidari hiki uke)',
    description: `Estos dos bloqueos de tracción se realizan rápidamente, pero aún por separado y con muchimi. Son similares al primer bloqueo de tracción, solo más rápidos. Aquí también el tobillo va a lo largo del tobillo, simultáneamente con los movimientos de la mano que también comienzan en ángulo bajo el codo.

El pie derecho se coloca en el suelo, lleva brevemente alrededor del 50% del peso corporal y, después de que el bloqueo se ejecuta completamente, empuja para el mismo movimiento circular de regreso.`,
  },
  {
    id: 'step-6',
    number: 6,
    title: 'Tora guchi "Boca de Tigre" - bloqueo controlador alto y empuje',
    description: `Desde hachiji dachi (postura natural) das un paso en línea recta diagonalmente hacia atrás y tiras del otro pie derecho en nekoashi dachi. El movimiento se realiza con muchimi.

La técnica consiste en:
- Bloqueo controlador alto con el dorso de la mano (jodan haishu osae uke)
- Bloqueo de gancho hacia adentro (uchi kake uke)
- Empuje alto y bajo (jodan y gedan oshi)

Respira durante los bloqueos, exhala durante el empuje. Enfócate en los dientes, músculos grandes de la espalda y lado de las manos durante los bloqueos; durante el empuje enfócate en los dientes, músculos grandes de la espalda, palmas y pulgar.`,
  },
  {
    id: 'step-7',
    number: 7,
    title: 'Puntos de atención para nekoashi dachi',
    description: `En neko ashi dachi la corona está arriba, la barbilla ligeramente adentro y la espalda recta. Tu peso descansa principalmente en el pie trasero (90%); de tu pie delantero los dedos y la bola tocan ligeramente el suelo, como si flotaran.

El talón del pie trasero y la bola del pie delantero están a lo largo de una línea imaginaria recta (o desde musubi dachi el pie delantero va derecho hacia adelante). La rodilla del pie delantero cae ligeramente hacia adentro.

Durante el movimiento toda la planta de ambos pies permanece en el suelo. Por lo tanto, coloca tu pie delantero completamente en el suelo antes del movimiento.`,
  },
  {
    id: 'step-8',
    number: 8,
    title: 'Cierre',
    description: `Lleva la mano izquierda hacia arriba y luego mueve ambas manos en un movimiento circular hacia abajo y coloca la mano derecha en la izquierda, palmas hacia arriba.

Empuja poderosamente con la bola del pie delantero mientras das un paso hacia atrás desde neko ashi dachi a musubi dachi. Giras tus manos y cierras la kata.

Antes del cierre, gira como un todo desde los dientes hacia el frente; los pies no se despegan del suelo.`,
  }
];

// Add a console log to check if this file is being loaded    
console.log('gekisai-dai-ni.es.ts loaded successfully:', gekisaiDaiNiSteps.length, 'steps available'); 