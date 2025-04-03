export interface HojoUndoSection {
  title: string;
  // Store content as an array of strings, where each string can be a paragraph or list item.
  // We'll need to handle list formatting during rendering if needed.
  content: string[]; 
}

export interface HojoUndoEquipment {
  id: string;
  name: string;
  // Using specific keys for known sections makes lookup easier
  function?: HojoUndoSection;
  construction?: HojoUndoSection;
  attentionPoints?: HojoUndoSection;
  exercises?: HojoUndoSection;
  classicExercises?: HojoUndoSection; // Specific for Kongoken
  // Add other specific sections if needed
}

// Structure the data using equipment IDs as keys for easy access
export const hojoUndoData: Record<string, HojoUndoEquipment> = {
  'chi-ishi': {
    id: 'chi-ishi',
    name: 'Chi Ishi',
    function: {
      title: 'Functie (Function)',
      content: [
        "De chi ishi is een 'stenen hefboom gewicht'. Het wordt nog steeds gebruikt China, o.a. in de provincie Fuzhou.",
        "Versterkt met name de spieren van de onderarm en hand. Derhalve dient het ter ondersteuning van de stabiliteit van de pols bij stoot en slag technieken met de vuist. Ook wordt de grip versterkt wat een belangrijke rol speelt bij allerlei technieken van het nabije gevecht, zoals trek-, werp- en klemtechnieken en hiki uke.",
        "Omdat de weerstand in de totale beweging verhoogd is, ontwikkelingen de chi ishi oefeningen de muchimi kracht, op voorwaarde dat de beweging niet te explosief wordt uitgevoerd. Het vastknijpen van de stok aan het einde van de bewegingen ontwikkelt de chinkuchi kakin kracht."
      ]
    },
    construction: {
      title: 'Constructie (Construction)',
      content: [
        "Lengte stok (inclusief steen): bij voorkeur schouderbreedte. Ook langere chi ishi zijn bekent, deze worden gebruikt voor het ontwikkelen van kracht voor werptechnieken. Zowel korte als lange chi ishi worden ook gebruikt als ondersteunende training voor training met wapens (zwaard, naginata, e,.a.).",
        "Diameter stok: de dikte van de stok bepaald het trainingseffect. Bij een dunne stok sluit dit bijvoorbeeld aan bij het chinkuchi kakin moment van een stoot of slag met een gesloten vuist of bij het beetpakken/trekken aan de karate gi. Bij een dikke stok sluit het bijvoorbeeld meer aan bij het beetpakken van de pols.",
        "Diameter steen: bij voorkeur niet meer dan 20-30 cm, i.v.m. de beperkte bewegingsruimte die de steen heeft bij sommige oefeningen. Een steen met een grote diameter, bij identiek gewicht, maakt de chi ishi wel meer 'top-zwaar', wat de oefeningen verzwaart.",
        "Hoogte steen: afhankelijk van het gewenste gewicht, normaliter valt de steen niet te hoger uit dan zo'n 10-15 cm.",
        "Materiaal steen: om een zware steen te maken kun je gebruik maken van een betonmengsel waarin fijn grind is verwerkt. Om het betonmengsel in te gieten kun je b. v. een blik gebruiken dat je erom heen laat of afknipt (moeilijker). Je kunt ook een plastic mal gebruiken, bijvoorbeeld een emmer. Wanneer de mal conisch is kun je de chi ishi er makkelijker uittrekken. Eventueel kun je hem vooraf ook nog inoliën. Voor de verbinding tussen stok en steen kun spijkers, schroeven of schroefankertjes gebruiken. De lengte hiervan is afhankelijk van de diameter van de steen. Als richtlijn kun je een lengte van 0,25 keer de diameter de gebruiken.",
        "Gewicht van de steen: voor beginners wordt 2-3 kg als richtlijn aangegeven, voor gevorderden 6-7 of zelfs 10 kg. Het is een goed idee om het gewicht op de chi ishi noteren. Dit kan een uitdaging voor je zijn en je kunt het gebruiken als indicatie voor je kracht en trainingstoestand."
      ]
    },
    attentionPoints: {
      title: 'Aandachtspunten (Points of Attention)',
      content: [
        "De volgende aandachtspunten steeds benadrukt, ze zijn letterlijk vertaald van teksten of uitspraken van Higaonna Sensei. Het is echter de moeite waard om je eigen woorden te kiezen die naar jou idee en gevoel de beste brug vormen tussen praktijk en theorie.",
        "BULLET: 'Zet de schouder naar beneden toe vast'", // Using BULLET prefix for list items
        "BULLET: 'Span de latissimus dorsi aan'",
        "BULLET: 'Span de pols'",
        "BULLET: 'Grijp vast'",
        "BULLET: 'Adem uit vanuit het tanden'",
        "BULLET: 'Combineer de externe spierkracht en de interne kracht van de adem'.",
        "BULLET: 'Oefen de zwakke kant vaker'",
        "BULLET: 'Oefen na een oefenserie snelle stoten om te voorkomen dat je traag wordt'",
        "De meeste van deze aandachtspunten komen ook veelvuldig terug bij kihon, sanchin kata, e.a.",
        "De oefeningen kunnen zowel langzaam als snel gedaan worden. Wanneer ze langzaam worden uitgevoerd wordt normaliter de sanchin ademhaling gebruikt met de H(u)ah en Hatt klanken. Wanneer de beweging sneller wordt uitgevoerd valt de H(u)ah klank weg. De oefeningen kunnen echter ook met natuurlijke ademhaling worden uitgevoerd wanneer de karateka in staat is zijn ademhaling goed te reguleren. Voor beginners is het aan te raden om de oefeningen langzaam uit te voeren met de H(u)ah en Hatt klanken. Op die manier is het mogelijk om een goede techniek aan te leren, de ademhaling te leren reguleren en de kans op blessures geringer.",
        "Let op: hoewel de sanchin ademhaling wordt gebruikt en de beweging aan het einde wordt gefocust is het bekken aan het einde van de beweging niet achterover gekanteld zoals in sanchin kata."
      ]
    },
    exercises: {
      title: 'Oefeningen (Exercises)',
      content: [
        "Als basisoefenstof is er een chi ishi kata. Deze kata staat o.a vermeld in 'Traditional Karate, volume I', van Morio Higaonna. Deze kata is niet zo vast omlijnd als de heishu en kaishu katas. Er is een zekere speling gebruikelijk tussen het aantal herhalingen en de afwisseling links en rechts. Bijna alle oefeningen in deze kata maken gebruik van shiko dachi. Meestal wordt de volgende opbouw gebruikt.",
        "NUM_LIST: van binnen uit opheffen + van buiten af opheffen", // Using NUM_LIST prefix
        "NUM_LIST: achter naar voren + van onder naar boven",
        "NUM_LIST: om en over de schouder zwaaien en voorwaarts uitdrukken (tate zuki)",
        "NUM_LIST: binnenlangs rond zwaaien en van buiten af opheffen + buitenlangs rond zwaaien en van",
        "NUM_LIST: binnen uit opheffen.",
        "NUM_LIST: wringen met de steen boven",
        "NUM_LIST: wringen met de steen onder",
        "NUM_LIST: wringen naar achteren met voorover buigen",
        "NUM_LIST: ura hiki uke",
        "NUM_LIST: morote chi ishi zuki",
        "Een aantal van deze en andere chi ishi oefeningen kunnen ook met 2 chi ishis worden uitgevoerd.",
        "Als gevorderde chi ishi oefening zijn de polszwaai-oefeningen gebruikelijk, waarbij de chi ishi met een of twee handen wordt rond gezwaaid in een cirkel- of lemniscaatvormige baan. Deze zwaai-oefeningen, in combinatie met andere oefeningen, kunnen uiteindelijk ook in vrije beweging als een soort van schaduwgevecht worden getraind.",
        "De chi ishi kan ook worden gebruikt bij hardingstraining. De steen kan gebruikt worden om tegen aan te slaan of om tegen de buik aan laten zwaaien, om te leren een klap op te vangen. Dit laatste kan ook met partner worden beoefend. Met de stok kan men over het scheenbeen rollen om de circulatie te verbeteren en te wennen aan de inwerking van krachten op het scheenbeen.",
        "Uiteraard zijn er tal van andere zinnige oefeningen denkbaar.",
        "Bij het oefenen met de chi ishis moet je niet alleen proberen zo veel mogelijk trainingsarbeid in een korte tijd te verrichten, maar ook letten op de interne aandachtspunten. Zo kun je bij een oefening er bijvoorbeeld op letten of je voortdurend optimaal op je voeten blijft steunen of dat je je in de strijd met het gewicht jezelf ontworteld; je de beweging maakt van uit je tanden of een geïsoleerde beweging maakt vanuit je schouder; de beweging strookt met je ademhaling; etc.",
        "Doordat je met een gewicht werkt krijg zet je het behoud van aarding, worteling, centrering, etc. meer onder druk. Gebruik je meer gewicht dan is het trainingseffect t.a.v. kracht, doorzettingsvermogen, en dergelijke groter maar bestaat het risico dat je de bewegingsprincipes los laat in de strijd met het gewicht. Je vernielt dan je lichaam en leert jezelf inefficiënte bewegingspatronen aan. Omgekeerd, als je alleen met lichte gewichten traint is het makkelijker om in lijn met de bewegingsprincipes te blijven bewegen, je leert dan echter niet om deze onder druk vast te houden.",
        "Het trainen met lichte chi ishi is een benadering om te leren een beweging met een minimale inspanning uit te voeren. Anderzijds kan men ook in een hele zware sessie ontdekken hoe een beweging met minimaal krachtgebruik mogelijk is. Het hangt er maar vanaf of je je 'kop' erbij hebt. Met 'kop' bedoelen we hier natuurlijk heel iets anders."
      ]
    }
  },
  'nigiri-game': {
    id: 'nigiri-game',
    name: 'Nigiri Game (Grijpvazen)',
    function: {
      title: 'Functie (Function)',
      content: [
        "De nigiri game zijn 'grijp vazen'. Het is een trainingshulpmiddel dat in verschillende streken van China werd en wordt gebruikt. De vooral in vroegere tijden gebruikte vazen, waren alledaagse vazen die gebruikt werden voor het opslaan van water en voedsel.",
        "Versterkt met name de spieren van de onderarm en hand. Het versterkt de grip, wat een belangrijke rol speelt bij allerlei technieken van het nabije gevecht, zoals trek-, werp- en klemtechnieken en hiki uke. Ook voor het effectief aanvallen (beetpakken) van vitale punten (kyusho) is een krachtige grip noodzakelijk.",
        "Omdat de basisoefening wordt uitgevoerd vanuit (het lopen) in sanchin met gebruik van dezelfde principes t.a.v. ademhaling, houding, krachtgebruik, etc., heeft het een vergelijkbare uitwerking als sanchin kata. Een belangrijk verschil met sanchin kata is echter dat de krachtrichting bij de nigiri game oefeningen vooral omhoog is. Het is daardoor een goede oefening voor het (actieve) aarden. Wanneer de last zwaar is, neig je ertoe om niet alleen de nigiri game, maar ook meer van jezelf (schouders, borst, etc.) mee omhoog te tillen. De bedoeling is dit te voorkomen.",
        "Hoewel in de basisoefening dus dezelfde principes t.a.v. wortelen worden gehanteerd als bij sanchin kata, wordt de worteling minder op de proef gesteld dan bij sanchin kata met Shime. Bij de laatste ondervindt je immers ook krachten in het horizontale vlak vanuit verschillende richtingen.",
        "Omdat de weerstand in de totale beweging verhoogd is, ontwikkelingen de nigiri game oefeningen in eerste instantie de muchimi kracht, op voorwaarde dat de beweging niet te explosief wordt uitgevoerd. Aan het einde van de beweging wordt echter, net als in sanchin kata, de grijpkracht kortstondig gemaximaliseerd. Dit ontwikkelt de chinkuchi kakin kracht."
      ]
    },
    construction: {
      title: 'Constructie (Construction)',
      content: [
        "Oorspronkelijk werden echte vazen gebruikt die werden gemaakt door een pottenbakker. Vandaag de dag worden veelal namaak nigiri game gebruikt. De constructies variëren van jam potten tot stalen pijpen.",
        "Van belang bij het ontwerp is de diameter van de bovenkant, daar waar je beetpakt. Hiervoor is geen vaste maat te geven omdat handen immers ook verschillen in grootte. De richtlijn is echter dat iemand de ring of schijf moet kunnen beetpakken met een tijgerklauw. Hierbij zijn de vingers gebogen vanaf het tweede kootje, en sluit de duim aan bij de hand. De tijgerklauw sluit nauw aan bij de handvorm zoals die gebruikt wordt in de kata, bijvoorbeeld bij tora guchi (tijger bek) en hiki uke.",
        "Om mee te beginnen gebruik je idealiter een nigiri game met een rand waar je om heen kunt pakken. Later kun je overgaan naar een nigiri game zonder rand. Je kunt het nog spannender maken door er olie op te smeren.",
        "Een nigiri game van 3 kg is al behoorlijk zwaar voor een minuut of tien oefenen. Niet omdat 3 kg zwaar is om te tillen , maar wel om lange tijd vast te houden. Zolang men de nigiri game namelijk niet neer zet moeten de onderarm en hand spieren continu (isometrisch) blijven werken. Meestal moet men dan ook opgeven omdat men de nigiri game niet meer vast kan houden. Niet omdat hij niet meer opgetild kan worden.",
        "Ideaal zijn nigiri game die eenvoudig zwaarder of lichter gemaakt kunnen worden."
      ]
    },
    exercises: {
      title: 'Oefeningen (Exercises)',
      content: [
        "De basisoefening voor de nigiri game is het lopen in sanchin dachi. Hiervoor gelden dezelfde aandachtspunten t.a.v. houding, concentratie en ademhaling als bij sanchin kata. Het lichaam blijft dus gedurende de hele oefening gespannen, de ademhaling is diep en gereguleerd met behulp van voorstelling en klanken en je houdt de adem vast bij het stappen. Om didactische redenen kan het echter zinvol zijn om de oefening aan te passen. Bijvoorbeeld: het lichaam ontspannen bij het stappen en/of de inademing.",
        "De klanken spelen een belangrijke rol bij het leren reguleren van de ademhaling. Wanneer men dit onder de knie heeft en de oefening sneller wordt uitgevoerd kan de ademhaling ook zonder geluid verlopen.",
        "De schouderbladen zijn naar achteren getrokken en de armen naar binnen gedraaid. Andere posities van de schouders/armen, d.w.z. naast of voor het lichaam, gelden als variaties. Deze activeren andere spierketens.",
        "Nadat het lopen met de nigiri game is aangeleerd komen de til oefeningen. De nigiri game worden bij deze oefeningen voorwaarts of zijwaarts opgetild. Om en om of allebei tegelijk.",
        "De bovenstaande oefeningen staan uitvoerig beschreven en weergegeven in het boek 'Traditional Karate, volume 1' van Morio Higaonna. Interessant is dat de ademhaling die hier beschreven wordt, tegengesteld is aan wat gebruikelijk is binnen het Okinawa goju-ryu Karate. Er wordt namelijk voor geschreven dat je inademt bij de grootste inspanning, het optillen van de vazen , en uitademt bij het laten zakken. Hoewel dit niet in overeenstemming is met wat ik hierover persoonlijk van Higaonna Sensei heb vernomen, is het een interessant experiment om deze ademhalingscoördinatie uit te proberen.",
        "De til oefeningen worden ook uitgevoerd (meestal tweehandig en zijwaarts) in shiko dachi en neko ashi dachi. Bij de oefeningen in neko ashi dachi komt het element lichtvoetigheid om de hoek kijken.",
        "Bij het oefenen met de nigiri game kun je de aandachtspunten uit de lessen bewegingsleer & energetica integreren. Zo kun je bij een oefening er bijvoorbeeld op letten of je voortdurend optimaal op je voeten blijft steunen of dat je in de strijd met het gewicht jezelf ontworteld; je de beweging maakt van uit je tanden of een geïsoleerde beweging maakt vanuit je schouder; de beweging strookt met je ademhaling; etc. In zekere zin is dat moeilijker dan bij de oefeningen met de chi ishi. Bij de oefeningen met de chi ishi heeft je lichaam meer bewegingsvrijheid. Je maakt niet alleen intern maar ook extern een totaal beweging. Bij de oefeningen met de nigiri game beweegt extern gezien alleen je arm (bij het tillen) maar moet je intern toch een totaalbeweging maken.",
        "Doordat je met een gewicht werkt krijg zet je het behoud van aarding, worteling, centrering, etc. meer onder druk. Gebruik je meer gewicht dan is het trainingseffect t.a.v. kracht, doorzettingsvermogen, e.d. groter maar bestaat het risico dat je de bewegingsprincipes los laat in de strijd met het gewicht. Je vernielt dan je lichaam en leert jezelf inefficiënte bewegingspatronen aan. Omgekeerd, als je alleen met lichte gewichten traint is het makkelijker om in lijn met de bewegingsprincipes te blijven bewegen, je leert dan echter niet om deze onder druk vast te houden.",
        "Hoewel eerder werd gesproken over een standaard diameter van het grijp gedeelte, kan het trainen met nigiri game met een andere diameter uiteraard toch zinvol zijn. Het in dezelfde oefening afwisselen van nigiri game met verschillend gewicht en diameter kan beschouwd worden als een vorm van 'contrast training'. Dit is een zinvolle variatie voor gevorderden in de uitbouwfase van hun krachttraining.",
        "Ook 'Complexe trainingsvormen' met de nigiri game zijn denkbaar. Bijvoorbeeld:",
        "SUB_NUM_LIST: Nigiri game basisoefening.", // Using SUB_NUM_LIST prefix
        "SUB_NUM_LIST: Gooien met zware zandzakjes.",
        "SUB_NUM_LIST: Kote kitae oefening met hiki uke."
      ]
    },
    attentionPoints: {
      title: 'Aandachtspunten (Points of Attention)',
      content: [
        "De aandachtspunten in de basisoefeningen met de nigiri game komen overeen met sanchin kata. De volgende aandachtspunten steeds benadrukt, ze zijn letterlijk vertaald van teksten of uitspraken van Higaonna Sensei. Het is echter de moeite waard om je eigen woorden te kiezen die naar jou idee en gevoel de beste brug vormen tussen praktijk en theorie.",
        "BULLET: 'Hou de ruggegraat recht'",
        "BULLET: 'Trek de kin in'",
        "BULLET: 'Duw krachtig op de grond met de zolen van de voeten'",
        "BULLET: 'Span het hele lichaam aan'.",
        "BULLET: 'Zet de schouder naar beneden toe vast'",
        "BULLET: 'Span de Latissimus dorsi aan'",
        "BULLET: 'Grijp vast'",
        "BULLET: 'Adem uit vanuit het tanden'",
        "BULLET: 'Combineer de externe spierkracht en de interne kracht van de adem'",
        "De meeste van deze aandachtspunten komen ook veelvuldig terug bij kihon, sanchin kata, e.a."
      ]
    }
  },
  'kongoken': {
    id: 'kongoken',
    name: 'Kongoken',
    // Note: No distinct Function/Construction/AttentionPoints text provided by user
    exercises: {
      title: 'Oefeningen (Exercises)',
      content: [
        "De kongoken of 'ijzeren ovaal', is oorspronkelijk afkomstig uit Hawaï waar hij werd gebruikt door Hawaïaanse worstelaars. Chojun Miyagi heeft de kongoken geïntroduceerd op Okinawa.",
        "De oefeningen met de kongoken versterken een groot aantal grote spiergroepen en –ketens, zowel in boven als in onderlichaam. Als zodanig is het technisch gezien een goede ondersteuning voor werptechnieken, met name voor til- en kantelworpen.",
        "Het gewicht van de kongoken bedroeg veelal 30-40 kg. Voor de gemiddelde karateka is dit echter te zwaar om mee te beginnen.",
        // Merging subsections mentioned by user into one Exercises section for now
        "Kanteloefeningen in het horizontale vlak: De klassieke oefening wordt gedaan vanuit shiko dachi, alleen of met partner. Hierop zijn allerlei variaties mogelijk met andere standen en ander voetenwerk. Deze oefeningen sluiten aan bij diverse kantelworpen waarbij je tegenstander werpt via een klem op de armen of het hoofd. De eerste is bekent als een toepassing van de tora guchi.",
        "Kanteloefeningen in bet verticale vlak: De kanteloefeningen in het verticale vlak sluiten aan bij een groot aantal werptechnieken waarbij je twee tegengestelde krachten uitoefent met je armen, een boven het zwaartepunt en een onder het zwaartepunt van je tegenstander. Je bekken is daarbij eventueel een steunpunt. Deze worpen zou je kantelworp kunnen noemen. In de kata komt een groot aantal bewegingen waarbij sprake is van een kantelbeweging De tora guchi is een veel voorkomend voorbeeld. Andere voorbeelden zijn o.a. te vinden in seiyunchin (hari uke), sanseru, kururunfa en sepai.",
        "Uitstootoefeningen: Er zijn een drietal traditionele uitstootoefeningen: 1. Naar boven uitstoten terwijl je in shiko dachi valt. 2. Naar voren uitstoten in shiko dachi. 3. Opdrukken met de kongoken op je nek. Als setje vormen ze een voorbeeld van 'complexe training'.",
        "Overige oefeningen: Nog niet genoemd zijn: 1. Polszwaaioefening. 2. Kururunfa ademoefening. 3. Squats in shiko dachi of neko ashi dachi. Natuurlijk kan men zelf ook oefeningen bedenken.",
        "Fitness serie: De Fitness serie is een vertaling van oefeningen uit het fitness en body building circuit... (list follows):",
        "BULLET: biceps curl",
        "BULLET: reversed biceps curl",
        "BULLET: (standing) triceps extension",
        "BULLET: one arm bent over row",
        "BULLET: bent over row",
        "BULLET: upright row",
        "BULLET: shoulderpress",
        "BULLET: front press",
        "BULLET: neck press",
        "BULLET: front raise",
        "BULLET: bench press -'bank drukken'",
        "BULLET: front shrug",
        "BULLET: back shrug",
        "BULLET: good morning",
        "BULLET: stiffedleg deadlift",
        "BULLET: squat",
        "BULLET: front squat",
        "BULLET: back squat",
        "BULLET: calf raise",
        "BULLET: side bend"
      ]
    },
    classicExercises: {
      title: 'Klassieke Oefeningen (Classic Exercises)',
      content: [
        "De klassieke oefeningen zijn onder meer te zien in Traditional Karate, volume 1 en op de videoband 'Hojo Undo' (Panther Productions), beiden van Sensei Morio Higaonna.",
        "Gezien het gewicht van de kongoken is het van groot belang nauwkeurig te zijn in de technische uitvoering van de oefeningen. Met name omdat menige oefening wordt uitgevoerd in shiko dachi, waarbij het risico van overbelasting van de onderrug relatief groot is, omdat de onderrug in shiko dachi normaliter een natuurlijke holling vertoond. Met name de oefeningen waarbij je op het belastingsmoment in shiko dachi komt verdienen wat dit betreft extra aandacht. Zoals bijvoorbeeld bij het opstoten van de kongoken vanuit spreidstand naar shiko dachi of bij de 'shiko squats' (en 'neko squats') waarbij je meer gewicht te dragen krijgt terwijl je in shiko dachi komt. Bij de oefeningen in shiko dachi (en Neko dachi) moet je dus letten op de stand van je bekken en wervelkolom. Zorg ervoor dat je onderrug niet te hol trekt, oftewel dat je bekken niet te ver voorover kantelt. Belangrijk is ook dat je je onderrug niet laat inzakken maar deze actief opstrekt (in de richting van je kruin). Het opstrekken van je wervelkolom hangt samen met het optrekken van je anus. Hou daarom in shiko dachi en zeker op de belastingsmomenten een lichte opwaartse spanning in je anus en hou je kruin op (niet ontwortelen!)."
      ]
    }
  },
  'ishi-sashi': {
    id: 'ishi-sashi',
    name: 'Ishi Sashi',
    function: {
      title: 'Functie (Function)',
      content: [
        "De ishi sashi staan bekent als 'stenen hangsloten'. Ze werden, naar men zegt, in vroegere tijden gebruikt om de poorten van een kasteel af te sluiten. Qua vorm lijken ze zeker op een hangslot hoewel ze in de wandelgangen ook wel als 'strijkijzers' bekend staan.",
        "Versterkt met name de spieren van de schouders, arm en hand. Het versterkt ook de grip, wat een belangrijke rol speelt bij allerlei technieken van het nabije gevecht, zoals trek-, werp- en klemtechnieken en hiki uke.",
        "Omdat de ishi sashi nauw bij de vorm van de hand aansluiten, kunnen de bewegingen nauw aansluiten bij tal van stoot-, slag- en afweertechnieken.",
        "Daar de weerstand in de totale beweging verhoogd is, ontwikkelingen de ishi sashi oefeningen in eerste instantie de muchimi kracht, op voorwaarde dat de beweging niet te explosief wordt uitgevoerd. Aan het einde van de beweging wordt echter, net als in Sanchin kata, de grijpkracht kortstondig gemaximaliseerd. Dit ontwikkelt de chinkuchi kakin."
      ]
    },
    construction: {
      title: 'Constructie (Construction)',
      content: [
        "Voor het maken van ishi sashi is iemand nodig die kan lassen. Meest voor de hand ligt een metalen plaat of stuk staaf als gewicht met daarop een beugel (handvat) gelast. De beugel kan aan beide zijden worden omgeven met een halve ronde stok, bijvoorbeeld een in de lengte doorgezaagde bezemsteel. Vroeger waren de ishi sashi van steen, cement, klei, e.d."
      ]
    },
    exercises: {
      title: 'Oefeningen (Exercises)',
      content: [
        "In vroeger tijden werden de ishi sashi ook gebruikt om over te gooien. Hiermee trainde men grijpkracht, concentratie, doelgerichtheid en reflexen. Omdat men vandaag de dag, zeker in ons klimaat, meestal binnen traint worden dergelijke oefeningen noch maar zelden gedaan.",
        "Als oefenstof staat een serie oefeningen centraal die ondermeer aansluiten bij shisochin kata. Om die reden staat het onderdeel ishi sashi ook later in het examenprogramma dan bijvoorbeeld de nigiri game.",
        "Deze oefenserie is weergegeven in het boek 'Traditional Karate, volume I' van Morio Higaonna. Het gaat om de volgende oefeningen:",
        "BULLET: (Nukite) gyaku zuki vanuit sanchin dachi.",
        "BULLET: Armen zijwaarts tillen en buigen vanuit shiko dachi.",
        "BULLET: Polsoefening vanuit shiko dachi.",
        "BULLET: Shotei zuki in vier richtingen.",
        "Daarnaast zijn nog een aantal oefeningen gangbaar zoals bijvoorbeeld: stoot, slag en afweertechnieken in heiko dachi en trapoefeningen met de ishi sashi om de enkel (mae geri, kansetsu geri).",
        "Het spreekt voor zich dat er eindeloos veel oefeningen te bedenken zijn met de ishi sashi. Door de vorm en grootte leent de ishi sashi zich met name voor het integreren in een les met basistechnieken, met name stoot-, slag- en afweertechnieken.",
        "Interessant is zeker ook het uitvoeren van sanchin kata met ishi sashi. Het gewicht roept een ander spanningspatroon op dan gebruikelijk is in sanchin kata. Normaliter richt je in sanchin je kracht voor een belangrijk gedeelte ook in het horizontale vlak, tegen je denkbeeldige tegenstander of tegen de shime partners. Door het gewicht van de ishi sashi wordt moet je relatief meer kracht omhoog richten, tegen de zwaartekracht in. Dit kan verstorend werken op het 'sanchin gevoel'. Het kan je aandacht wegtrekken van de horizontale (denkbeeldige) weerstanden. Een interessant spanningsveld.",
        "Bij het oefenen met de ishi sashi kun je de aandachtspunten uit de lessen bewegingsleer & energetica integreren. Zo kun je bij een oefening er bijvoorbeeld op letten of je voortdurend optimaal op je voeten blijft steunen of dat je in de strijd met het gewicht jezelf ontworteld; je de beweging maakt van uit je tanden of een geïsoleerde beweging maakt vanuit je schouder; de beweging strookt met je ademhaling; etc.",
        "Doordat je met een gewicht werkt krijg zet je het behoud van aarding, worteling, centrering, etc. meer onder druk. Gebruik je meer gewicht dan is het trainingseffect t.a.v. kracht, doorzettingsvermogen, e.d. groter maar bestaat het risico dat je de bewegingsprincipes los laat in de strijd met het gewicht. Je vernielt dan je lichaam en leert jezelf inefficiënte bewegingspatronen aan. Omgekeerd, als je alleen met lichte gewichten traint is het makkelijker om in lijn met de bewegingsprincipes te blijven bewegen, je leert dan echter niet om deze onder druk vast te houden."
      ]
    },
    attentionPoints: {
      title: 'Aandachtspunten (Points of Attention)',
      content: [
        "De aandachtspunten bij de ishi sashi oefeningen zijn niet wezenlijk anders dan bij de andere hojo undo oefeningen. De volgende aandachtspunten worden steeds benadrukt, ze zijn letterlijk vertaald van teksten of uitspraken van Higaonna Sensei. Het is echter de moeite waard om je eigen woorden te kiezen die naar jou idee en gevoel de beste brug vormen tussen praktijk en theorie.",
        "BULLET: 'Hou de ruggegraat recht'",
        "BULLET: 'Trek de kin in'", // Added missing comma from source
        "BULLET: 'Duw krachtig op de grond met de zolen van de voeten'", // Added missing comma from source
        "BULLET: 'Span het hele lichaam aan'",
        "BULLET: 'Zet de schouder naar beneden toe vast'",
        "BULLET: 'Span de Latissimus dorsi aan'",
        "BULLET: 'Grijp vast'",
        "BULLET: 'Concentreer al je kracht in het tanden'", // Added missing comma from source
        "BULLET: 'Adem uit vanuit het tanden'", // Added missing comma from source
        "BULLET: 'Combineer de externe spierkracht en de interne kracht van de adem'",
        "De meeste van deze aandachtspunten komen ook veelvuldig terug bij kihon, sanchin kata, e.a. Merk op dat sommige van deze aandachtspunten met name voor een specifiek deel van een beweging, b. v. het eindpunt, gelden."
      ]
    }
  }
  // Note: General section content is not included here as it's likely handled by individual components
}; 