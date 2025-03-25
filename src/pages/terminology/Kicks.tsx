
import React from 'react';

const Kicks = () => {
  const terms = [
    "Fumikomi geri: Stamping kick",
    "Geri: Kicking",
    "Hiza geri: Knee kick",
    "Kensetsu geri: Stamping kick, joint kick",
    "Mae ashi geri: Front leg kick",
    "Mae geri: Front kick",
    "Mawashi geri: Roundhouse kick",
    "Tobi geri: Flying front kick",
    "Ushiro geri: Back kick",
    "Yoko geri: Side kick",
    "Ago geri: Chin kick",
    "Chudan mae geri: Front kick to body",
    "En-sho : Round heel",
    "Fumikiri geri: Cutting kick",
    "Gedan kekomi geri: Thrust kick to low level",
    "Gyaku ashi: Reverse foot",
    "Geri ashi: Kicking foot",
    "Gyaku geri: Reversed kick",
    "Gyaku mawashi geri: Reverse round kick",
    "Jodan kekomi geri: Thrust kick to face",
    "Jodan mae geri: Front kick to face",
    "Kaiten geri: Spinning slap kick (as in the kata Suparinpei)",
    "Keage geri: Snap kick",
    "Kebanashi: Kick off (snap kick)",
    "Kekomi geri: Thrust kick",
    "Kesa geri: Diagonal kick",
    "Kin geri: Groin kick",
    "Mae ashi kekomi: Front leg thrust",
    "Mae geri keage : Front snap kick",
    "Mae geri kekomi: Front thrust kick",
    "Mae tobi geri: Jumping front kick",
    "Mikazuki geri: Crescent kick (sometimes called "jaw kick")",
    "Nidan geri: Double jump kick",
    "Renzoku geri: Combination kick",
    "Sokuto : Edge of foot",
    "Sokuto Keage : Snap kick with foot edge",
    "Tobi yoko geri: Jumping side kick",
    "Uchi mawashi geri: Inside roundhouse kick",
    "Ushiro ashi geri: Rear-leg kick",
    "Yoko geri keage : Side snap kick",
    "Yoko geri kekomi: Side thrust kick",
    "Yoko kekomi: Side thrust kick",
    "Yoko tobi geri: Jumping side kick"
  ];

  return (
    <ul className="space-y-2">
      {terms.map((term, index) => (
        <li key={index} className="text-gray-700">
          {term}
        </li>
      ))}
    </ul>
  );
};

export default Kicks;
