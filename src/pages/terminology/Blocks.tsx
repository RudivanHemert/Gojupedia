@ -1,33 +0,0 @@

import React from 'react';

const Blocks = () => {
  const terms = [
	"Blocks",
	"Age uke : Rising block",
	"Chudan uke : Middle level block",
	"Gedan barai : Lower level sweep",
	"Jodan uke : Upper level block",
	"Hiji uke : Elbow block",
	"Hiki uke : Pulling / grasping block",
	"Hiza uke : Knee block",
	"Jodan uke : Upper level block",
	"Ko uke : Wrist block",
	"Shotei barai : Palm heel sweep",
	"Shotei uke : Palm heel block",
	"Soto uke : Forearm block (from outside moving inward to the centre line of the body)",
	"Sukui uke : Scooping block",
	"Tora guchi uke - Tiger mouth block (sometimes called mawashi uke)•",
	"Age uke, gyaku ashi : Upper block (reverse foot)",
	"Ashibo kake uke : Leg hooking block",
	"Ashikubi kake uke : Ankle hooking block",
	"Awase uke : Joined hand block",
	"Cho cho uke : Butterfly block",
	"Chudan uchi uke : Block from inside outward with forearm",
	"Chudan ude uke : Forearm block against body attack.",
	"Deai osae uke : pressing block stepping in",
	"Fumikomi ude uke : Forearm block stepping in",
	"Gedan kake uke : Low level hooking block",
	"Gedan uke : Low level block",
	"Gedan ude uke : Low forearm block",
	"Haishu uke : Back hand block",
	"Haiwan nagashi uke : Back arm sweeping block",
	"Heiwan uke : Upper forearm block",
	"Hiji suri uke : Elbow sliding block",
	"Juji uke : X block",
	"Kake uke : Hooking block",
	"Kakiwake uke : Reverse wedge block",
	"Kakuto uke : Bent wrist block",
	"Keito uke : Chicken head wrist block",
	"Kuri uke : Elbow block (as used in the kata Seiyunchin)",
	"Mae ude deai osae : Forearm pressing block",
	"Mae ude hineri uke : Forearm twist block",
	"Mawashi uke : Roundhouse block (sometimes called Tora Guchi uke)",
	"Morote sukui uke : Two handed scooping block",
	"Morote tsukami uke : Two handed grasping block",
	"Morote uke : Augmented forearm block",
	"Nagashi uke : Sweeping block",
	"Oroshi uke : Descending block",
	"Osae uke : Pressing block",
	"Otoshi uke: Dropping block",
	"Sashite uke: Rising hand block",
	"Seiryuto uke : Ox-jaw block",
	"Shuto uke: Knife hand block",
	"Sokumen awase uke: Side two hand block",
	"Sokutei mawashi uke: Circular sole block",
	"Sokutei osae uke: Pressing block with sole",
	"Sokuto osae uke: Pressing block with foot edge",
	"Tate shuto uke : Verticle knife hand block",
	"Tate uke : Vertical block",
	"Te nagashi uke : Hand sweeping block",
	"Te osae uke : Hand pressing block",
	"Teisho awase uke : Combined palm heel block (sometimes called Shotei awase uke)",
	"Teisho uke : Palm heel block (sometimes called Shotei uke)",
	"Tekubi kake uke : Wrist hook block",
	"Tetsui uke : Hammer block (sometimes called "outside forearm block")",
	"Tsukami uke : Grasping block",
	"Uchi uke : Block from inside outward",
	"Ude uke : Inside forearm block",
	"Uke : Blocking"
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

export default Blocks;