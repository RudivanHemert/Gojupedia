@ -1,60 +0,0 @@

import React from 'react';

const TournamentTerminology = () => {
  const terms = [
    "Aiuchi: Simultaneous points by both opponents",
    "Aka : Red",
    "Atoshi baraku : 30 seconds to go",
    "Atenai Yoni: Warning without penalty",
    "Attate Iru : Contact",
    "Chui: Warning",
    "Encho-sen : Extension of bout",
    "Fujubun : Not enough power",
    "Fukushin : Referee's mirror in a bout; the judge",
    "Fukushin Shugo : Judges conference",
    "Hansoku : Foul",
    "Hansoku chui: Warning with an ippon penalty",
    "Hantei: Judgement",
    "Hikiwake : Draw",
    "Ippon : One point",
    "Jogai: Exit from fighting area",
    "Jo sokutei: Raised sole (also double entry)",
    "Kachi: Victorious winner",
    "Kansa : The timekeeper in a bout; the arbitrator",
    "Keikoku : Warning with waza ari penalty",
    "Kiken : Renunciation",
    "Ma-ai ga toh : Improper distancing",
    "Moto no ichi: Return to your starting position",
    "Mubobi: Warning for lack of regard for one's own safety",
    "No Jikan : Time",
    "Nukete Iru : Out of target",
    "Shiai: Match",
    "Shikaku : Disqualification and dismissal",
    "Shushin : Referee",
    "Shiro : White",
    "Shobu ippon : One point match",
    "Shobu nihon : Two point match",
    "Shobu sanbon : Three point match",
    "Sore made : End of match",
    "Suki: Opening",
    "Taiming go osoi: Not proper timing",
    "Torimasen : No point",
    "Tsuzukete : Resume; Carry on",
    "Ukete Iru : Blocked",
    "Waza ari: Half-point",
    "Yowai: Weak focus"
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

export default TournamentTerminology;