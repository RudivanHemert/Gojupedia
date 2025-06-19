import { KataStep } from '../components/practice/InteractiveKataSteps';

export const gekisaiDaiNiSteps: KataStep[] = [
  {
    id: 'step-1',
    number: 1,
    title: 'Introduction et différences avec Gekisai Dai Ichi',
    description: `Gekisai Dai Ni signifie 'attaquer et détruire 2' et a été développé par Chojun Miyagi dans la même période et pour la même raison que Gekisai Dai Ichi. La kata est très similaire à Gekisai Dai Ichi, mais dans la seconde partie plus de techniques de main ouverte sont utilisées.

Les principales différences avec Gekisai Dai Ichi sont:
1. Lorsqu'elle est exécutée classiquement au compte, le coup de pied avant, le coup de coude, le coup de poing arrière, le blocage balayant bas et le coup de poing inverse sont sur un compte (rythme: 1-2 (coude et piétinement) - 3-4-5)
2. Le deuxième blocage mi-haut est un blocage de traction à main ouverte (hiki uke)
3. Des blocages de traction droite et gauche (hiki uke) sont ajoutés
4. La technique finale n'est pas un coup de poing double puissant en zenkutsu dachi, mais un tora guchi avec muchimi en nekoashi dachi`,
  },
  {
    id: 'step-2',
    number: 2,
    title: 'Première partie - identique à Gekisai Dai Ichi',
    description: `La première partie de Gekisai Dai Ni est identique à Gekisai Dai Ichi:
- Blocage vers le haut (jodan uke)
- Coup de poing haut (jodan zuki)
- Blocage balayant bas (gedan barai)
- Blocage moyen (chudan uke)

Ces techniques sont exécutées avec les mêmes points d'attention qu'en Gekisai Dai Ichi.`,
  },
  {
    id: 'step-3',
    number: 3,
    title: 'Blocage de traction mi-haut (chudan hiki uke)',
    description: `Le mouvement est exécuté avec muchimi, le pied se déplace dans un mouvement circulaire (cheville le long de la cheville), simultanément avec la main. La main bloquante commence en angle sous le coude de l'autre bras. La puissance est focalisée sur le côté petit doigt de la main pendant le blocage.

C'est un mouvement circulaire; seulement à la fin du blocage la main est tirée linéairement environ 5 centimètres vers le corps depuis le coude; le coude vient alors contre la cage thoracique. Concentrez-vous sur le pouce et l'index en tirant. Le hikite est aussi une main ouverte avec les doigts vers le haut.`,
  },
  {
    id: 'step-4',
    number: 4,
    title: 'Coup de pied avant, coup de coude et coup de poing arrière (mae geri, hiji ate, uraken uchi)',
    description: `Ces techniques sont exécutées sur un compte (rythme: 1-2 (coude et piétinement) - 3-4-5). Le coup de pied avant est exécuté avec un blocage à main ouverte (contrairement à Gekisai Dai Ichi où la main reste un poing).

Le blocage est maintenu pendant le coup de pied et la main - contrairement à Gekisai Dai Ichi - reste donc ouverte. Elle est tirée vers l'arrière aussi fort pour le coup de coude, tourne dans le processus et devient un poing.`,
  },
  {
    id: 'step-5',
    number: 5,
    title: 'Blocage de traction droite - gauche (migi hidari hiki uke)',
    description: `Ces deux blocages de traction sont exécutés rapidement, mais toujours séparément et avec muchimi. Ils sont similaires au premier blocage de traction, seulement plus rapides. Ici aussi la cheville va le long de la cheville, simultanément avec les mouvements de main qui commencent aussi en angle sous le coude.

Le pied droit est placé sur le sol, porte brièvement environ 50% du poids corporel et, après que le blocage soit complètement exécuté, pousse pour le même mouvement circulaire de retour.`,
  },
  {
    id: 'step-6',
    number: 6,
    title: 'Tora guchi "Gueule de Tigre" - blocage contrôlant haut et poussée',
    description: `Depuis hachiji dachi (posture naturelle) vous faites un pas en ligne droite diagonalement vers l'arrière et tirez l'autre pied droit en nekoashi dachi. Le mouvement est exécuté avec muchimi.

La technique consiste en:
- Blocage contrôlant haut avec le dos de la main (jodan haishu osae uke)
- Blocage de crochet vers l'intérieur (uchi kake uke)
- Poussée haute et basse (jodan et gedan oshi)

Respirez pendant les blocages, expirez pendant la poussée. Concentrez-vous sur les dents, les gros muscles du dos et le côté des mains pendant les blocages; pendant la poussée concentrez-vous sur les dents, les gros muscles du dos, les paumes et le pouce.`,
  },
  {
    id: 'step-7',
    number: 7,
    title: 'Points d\'attention pour nekoashi dachi',
    description: `En neko ashi dachi la couronne est en haut, le menton légèrement rentré et le dos droit. Votre poids repose principalement sur le pied arrière (90%); de votre pied avant les orteils et la balle touchent légèrement le sol, comme s'ils flottaient.

Le talon du pied arrière et la balle du pied avant sont le long d'une ligne imaginaire droite (ou depuis musubi dachi le pied avant va droit vers l'avant). Le genou du pied avant tombe légèrement vers l'intérieur.

Pendant le mouvement toute la plante des deux pieds reste sur le sol. Placez donc votre pied avant complètement sur le sol avant le mouvement.`,
  },
  {
    id: 'step-8',
    number: 8,
    title: 'Fermeture',
    description: `Amenez la main gauche vers le haut puis déplacez les deux mains dans un mouvement circulaire vers le bas et placez la main droite dans la gauche, paumes vers le haut.

Poussez puissamment avec la balle du pied avant en faisant un pas en arrière depuis neko ashi dachi vers musubi dachi. Vous tournez vos mains et fermez la kata.

Avant la fermeture, tournez comme un tout depuis les dents vers l'avant; les pieds ne quittent pas le sol.`,
  }
];

// Add a console log to check if this file is being loaded    
console.log('gekisai-dai-ni.fr.ts loaded successfully:', gekisaiDaiNiSteps.length, 'steps available'); 