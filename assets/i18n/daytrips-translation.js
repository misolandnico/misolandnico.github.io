window.onload = function () {
  var userLang = navigator.language || navigator.userLanguage;
  var lang = Object.keys(languageContent).find((v) => userLang.includes(v));
  if (lang) {
    for (let key in languageContent[lang]) {
      document.getElementById(key).innerHTML = languageContent[lang][key];
    }
  } else {
    for (let key in languageContent["en"]) {
      document.getElementById(key).innerHTML = languageContent["en"][key];
    }
  }
};

function changeLanguage(lang) {
  for (let key in languageContent[lang]) {
    document.getElementById(key).innerHTML = languageContent[lang][key];
  }
}

let languageContent = {
  en: {
    "back-text": "Back",
    celestun:
      "Embark on a journey to Celestun, renowned for its breathtaking ecological reserves and vibrant pink Caribbean flamingos, offering a refreshing dip and the chance to savor lunch at a scenic beachfront eatery. Experience the wonders of Parque Natural del Flamenco Mexicano, a vast biosphere reserve teeming with diverse wildlife, including sea turtles and crocodiles, as well as picturesque mangroves best explored by boat. After a dip in the refreshing waters, indulge in regional delicacies at a local beachfront restaurant before bidding farewell to this pristine paradise and returning to Merida.",
    uxmal:
      "Immerse yourself in the ancient Mayan world with visits to iconic structures like the Temple of the Magician, steeped in mythical lore, and the imposing Nunnery Quadrangle, showcasing the distinctive Puuc architectural style. Marvel at the Governor's Palace, adorned with over 20,000 tiles, standing as a testament to the architectural mastery of the Mayan civilization and offering a glimpse into their rich cultural heritage.",
    cuzama:
      "Embark on an enchanting tour of three stunning cenotes: Cascabel, Chaksikin, and Pool Cocom, each boasting unique natural wonders that will leave you in awe. Traverse aboard a traditional truck once used for henequen transport, beginning with the mesmerizing formations of Cascabel, followed by the deep waters of Chaksikin and the open expanse of Pool Cocom. Conclude your adventure with a delectable meal at a local restaurant, ensuring you bring along your swimsuit and towel for a refreshing dip in these marvels of nature.",
    choco:
      "Embark on a thrilling Mayan Culture adventure, beginning with a journey to the well-preserved Ruins of Uxmal, where you can climb structures and immerse yourself in history with a guided tour before exploring at your leisure. Continue to the Kabah Ruins for insights into Mayan architectural marvels and enjoy free time to roam. Then, indulge in a delectable 3-course meal at a Mexican restaurant before concluding your day with a visit to an Artisanal Mayan Chocolate Factory, where you'll learn the ancient art of chocolate-making from local experts and partake in a Mayan Ceremony.",
    cooking:
      "Embark on a culinary adventure in downtown Merida, starting with a lively stroll through Lucas de Galvez market, where you'll discover vibrant produce and savory street food while learning about regional ingredients. After selecting your groceries, head to your host's home to cook up a storm, mastering traditional Yucatecan dishes like sikilpak dip, Chaya leaf empanadas, and marinated pork under the guidance of your expert host. Throughout the cooking session, delve into the rich culinary history of the region, tracing influences from ancient Mayas to Lebanese immigrants.",
    merida:
      "Merida, the cultural gem of Yucatan, beckons with its colonial charm and vibrant soul. Wander through its bustling streets adorned with pastel-hued facades and ornate architecture, where every corner tells a story of its rich Mayan and Spanish heritage. From lively markets brimming with exotic flavors to enchanting music echoing through its squares, Merida invites you to immerse yourself in the rhythm of its captivating blend of tradition and modernity.",
    izamal:
      "Nestled in the heart of the Yucatan Peninsula, Izamal enchants visitors with its golden hues and rich history. Known as the 'Yellow City', its colonial buildings and cobblestone streets radiate under the tropical sun, offering a picturesque backdrop for exploration. Delve into the town's Mayan roots, where ancient pyramids and ceremonial sites whisper tales of a bygone era amidst the vibrant tapestry of modern life.",
    museum:
      "Step into the Museum of the City of Merida and embark on a captivating journey through time, where the city's storied past unfolds before your eyes. Housed in a historic colonial mansion, this museum showcases an impressive collection of artifacts, artworks, and interactive exhibits that illuminate Merida's vibrant cultural heritage. From ancient Mayan artifacts to colonial-era treasures, immerse yourself in the diverse tapestry of Merida's history and discover the secrets that have shaped this enchanting city.",
    mayan:
      "Discover the Mayan World Museum of Mérida, a modern architectural marvel that serves as a gateway to the ancient wonders of the Mayan civilization. Immerse yourself in its immersive exhibits, where intricate artifacts and lifelike recreations transport you through millennia of Mayan history and culture. From towering pyramids to intricate pottery, delve deep into the heart of the Mayan world and unravel the mysteries of this fascinating civilization.",
  },
  de: {
    "back-text": "Zurück",
    celestun:
      "Begeben Sie sich auf eine Reise nach Celestun, das für seine atemberaubenden Naturschutzgebiete und die leuchtend rosafarbenen karibischen Flamingos bekannt ist, und genießen Sie ein erfrischendes Bad und ein Mittagessen in einem malerischen Strandrestaurant. Erleben Sie die Wunder des Parque Natural del Flamenco Mexicano, ein riesiges Biosphärenreservat mit einer vielfältigen Tierwelt, darunter Meeresschildkröten und Krokodile, sowie malerische Mangroven, die man am besten per Boot erkundet. Nach einem Bad im erfrischenden Wasser können Sie sich in einem lokalen Strandrestaurant mit regionalen Köstlichkeiten verwöhnen lassen, bevor Sie sich von diesem unberührten Paradies verabschieden und nach Merida zurückkehren.",
    uxmal:
      "Tauchen Sie ein in die Welt der alten Maya und besuchen Sie ikonische Bauwerke wie den Tempel des Magiers, der von mythischen Überlieferungen durchdrungen ist, und das imposante Nonnenkloster-Viereck, das den unverwechselbaren architektonischen Stil der Puuc zeigt. Bestaunen Sie den Gouverneurspalast, der mit mehr als 20.000 Kacheln geschmückt ist und als Zeugnis der architektonischen Meisterschaft der Maya-Zivilisation einen Einblick in ihr reiches kulturelles Erbe bietet.",
    cuzama:
      "Begeben Sie sich auf eine bezaubernde Tour zu drei atemberaubenden Cenoten: Cascabel, Chaksikin und Pool Cocom, die jeweils einzigartige Naturwunder bieten, die Sie in Erstaunen versetzen werden. An Bord eines traditionellen Lastwagens, der früher für den Transport von Henequen verwendet wurde, beginnen Sie mit den faszinierenden Formationen von Cascabel, gefolgt von den tiefen Gewässern von Chaksikin und der offenen Weite von Pool Cocom. Schließen Sie Ihr Abenteuer mit einem köstlichen Essen in einem lokalen Restaurant ab und nehmen Sie Ihre Badesachen und Ihr Handtuch mit, um sich in diesen Naturwundern zu erfrischen.",
    choco:
      "Begeben Sie sich auf ein spannendes Abenteuer der Maya-Kultur, beginnend mit einer Reise zu den gut erhaltenen Ruinen von Uxmal, wo Sie Strukturen erklimmen und mit einer geführten Tour in die Geschichte eintauchen können, bevor Sie sie in Ruhe erkunden. Weiter geht es zu den Kabah-Ruinen, wo Sie Einblicke in die architektonischen Wunderwerke der Maya erhalten und freie Zeit zum Herumstreifen haben. Anschließend genießen Sie ein köstliches 3-Gänge-Menü in einem mexikanischen Restaurant, bevor Sie den Tag mit dem Besuch einer handwerklichen Maya-Schokoladenfabrik abschließen, wo Sie von lokalen Experten die alte Kunst der Schokoladenherstellung erlernen und an einer Maya-Zeremonie teilnehmen",
    cooking:
      "Begeben Sie sich auf ein kulinarisches Abenteuer in der Innenstadt von Mérida. Beginnen Sie mit einem Bummel über den lebhaften Lucas de Galvez-Markt, wo Sie lebendige Produkte und schmackhafte Straßengerichte entdecken und gleichzeitig etwas über regionale Zutaten lernen. Nachdem Sie Ihre Einkäufe getätigt haben, kochen Sie im Haus Ihres Gastgebers unter fachkundiger Anleitung traditionelle yukatekische Gerichte wie Sikilpak-Dip, Chaya-Blatt-Empanadas und mariniertes Schweinefleisch. Während des Kochkurses erfahren Sie mehr über die reiche kulinarische Geschichte der Region, die Einflüsse von den alten Mayas bis hin zu libanesischen Einwanderern umfasst.",
    merida:
      "Merida, das kulturelle Juwel von Yucatan, lockt mit seinem kolonialen Charme und seiner lebendigen Seele. Schlendern Sie durch die belebten Straßen mit ihren pastellfarbenen Fassaden und der kunstvollen Architektur, wo jede Ecke eine Geschichte über das reiche Erbe der Maya und Spanier erzählt. Von den lebhaften Märkten mit ihren exotischen Aromen bis hin zur bezaubernden Musik, die von den Plätzen widerhallt - Merida lädt Sie ein, in den Rhythmus seiner fesselnden Mischung aus Tradition und Moderne einzutauchen.",
    izamal:
      "Im Herzen der Halbinsel Yucatan gelegen, verzaubert Izamal seine Besucher mit seinen goldenen Farben und seiner reichen Geschichte. Die als „Gelbe Stadt“ bekannte Stadt mit ihren kolonialen Gebäuden und kopfsteingepflasterten Straßen strahlt unter der tropischen Sonne und bietet eine malerische Kulisse für Erkundungen. Tauchen Sie ein in die Maya-Wurzeln der Stadt, wo alte Pyramiden und zeremonielle Stätten Geschichten aus einer vergangenen Ära inmitten des pulsierenden Lebens der Moderne erzählen.",
    museum:
      "Treten Sie ein in das Museum der Stadt Mérida und begeben Sie sich auf eine fesselnde Zeitreise, bei der sich die bewegte Vergangenheit der Stadt vor Ihren Augen entfaltet. Das in einem historischen Herrenhaus aus der Kolonialzeit untergebrachte Museum zeigt eine beeindruckende Sammlung von Artefakten, Kunstwerken und interaktiven Exponaten, die das lebendige kulturelle Erbe von Merida beleuchten. Von alten Maya-Artefakten bis hin zu Schätzen aus der Kolonialzeit - tauchen Sie ein in die vielfältige Geschichte Méridas und entdecken Sie die Geheimnisse, die diese bezaubernde Stadt geprägt haben.",
    mayan:
      "Entdecken Sie das Maya-Weltmuseum von Mérida, ein modernes architektonisches Wunderwerk, das als Tor zu den alten Wundern der Maya-Zivilisation dient. Tauchen Sie ein in die faszinierenden Ausstellungen, wo komplizierte Artefakte und naturgetreue Nachbildungen Sie durch Jahrtausende der Maya-Geschichte und -Kultur führen. Von hoch aufragenden Pyramiden bis hin zu kunstvollen Töpferwaren - tauchen Sie tief in das Herz der Maya-Welt ein und enträtseln Sie die Geheimnisse dieser faszinierenden Zivilisation.",
  },
  es: {
    "back-text": "Atras",
    celestun:
      "Embárquese en un viaje a Celestún, famoso por sus impresionantes reservas ecológicas y sus flamencos caribeños de color rosa intenso, donde podrá darse un refrescante chapuzón y disfrutar de un almuerzo en un pintoresco restaurante frente al mar. Experimente las maravillas del Parque Natural del Flamenco Mexicano, una vasta reserva de la biosfera repleta de fauna diversa, como tortugas marinas y cocodrilos, así como pintorescos manglares que se exploran mejor en barco. Después de un chapuzón en las refrescantes aguas, deléitese con las delicias regionales en un restaurante local frente a la playa antes de despedirse de este prístino paraíso y regresar a Mérida.",
    uxmal:
      "Sumérjase en el antiguo mundo maya con visitas a estructuras emblemáticas como el Templo del Mago, impregnado de tradiciones míticas, y el imponente Cuadrángulo de las Monjas, que muestra el característico estilo arquitectónico Puuc. Maravíllese ante el Palacio del Gobernador, adornado con más de 20.000 azulejos, testimonio de la maestría arquitectónica de la civilización maya y muestra de su rico patrimonio cultural.",
    cuzama:
      "Embárquese en un encantador recorrido por tres impresionantes cenotes: Cascabel, Chaksikin y Pool Cocom, cada uno con maravillas naturales únicas que le dejarán asombrado. Navegue a bordo de un camión tradicional utilizado antiguamente para el transporte de henequén, comenzando por las fascinantes formaciones de Cascabel, seguidas por las profundas aguas de Chaksikin y la extensión abierta de Pool Cocom. Concluya su aventura con una deliciosa comida en un restaurante local, asegurándose de traer su traje de baño y toalla para un refrescante chapuzón en estas maravillas de la naturaleza.",
    choco:
      "Embárquese en una emocionante aventura de la Cultura Maya, comenzando con un viaje a las bien conservadas Ruinas de Uxmal, donde podrá escalar estructuras y sumergirse en la historia con una visita guiada antes de explorarlas a su aire. Continúe hacia las Ruinas de Kabah para conocer las maravillas arquitectónicas mayas y disfrute de tiempo libre para pasear. A continuación, disfrute de una deliciosa comida de tres platos en un restaurante mexicano antes de concluir el día con una visita a una fábrica artesanal de chocolate maya, donde aprenderá el antiguo arte de la elaboración del chocolate de la mano de expertos locales y participará en una ceremonia maya.",
    cooking:
      "Embárcate en una aventura culinaria en el centro de Mérida, comenzando con un animado paseo por el mercado Lucas de Gálvez, donde descubrirás vibrantes productos y sabrosa comida callejera mientras aprendes sobre los ingredientes regionales. Después de seleccionar sus comestibles, diríjase a la casa de su anfitrión para cocinar una tormenta, dominando platos tradicionales yucatecos como el dip de sikilpak, las empanadas de hoja de chaya y el cerdo adobado bajo la guía de su experto anfitrión. A lo largo de la sesión de cocina, profundice en la rica historia culinaria de la región, rastreando influencias desde los antiguos mayas hasta los inmigrantes libaneses.",
    merida:
      "Mérida, la joya cultural de Yucatán, atrae con su encanto colonial y su alma vibrante. Pasee por sus bulliciosas calles adornadas con fachadas en tonos pastel y arquitectura ornamentada, donde cada rincón cuenta una historia de su rica herencia maya y española. Desde los animados mercados rebosantes de sabores exóticos hasta la encantadora música que resuena en sus plazas, Mérida le invita a sumergirse en el ritmo de su cautivadora mezcla de tradición y modernidad.",
    izamal:
      "Enclavada en el corazón de la península de Yucatán, Izamal encanta a los visitantes con sus tonos dorados y su rica historia. Conocida como la «Ciudad Amarilla», sus edificios coloniales y calles adoquinadas irradian bajo el sol tropical, ofreciendo un pintoresco telón de fondo para la exploración. Adéntrese en las raíces mayas de la ciudad, donde antiguas pirámides y lugares ceremoniales susurran historias de una época pasada en medio del vibrante tapiz de la vida moderna.",
    museum:
      "Entre en el Museo de la Ciudad de Mérida y embárquese en un cautivador viaje en el tiempo, donde el pasado de la ciudad se despliega ante sus ojos. Ubicado en una histórica mansión colonial, este museo exhibe una impresionante colección de artefactos, obras de arte y exposiciones interactivas que iluminan el vibrante patrimonio cultural de Mérida. Desde antiguos artefactos mayas hasta tesoros de la época colonial, sumérjase en el diverso tapiz de la historia de Mérida y descubra los secretos que han dado forma a esta encantadora ciudad.",
    mayan:
      "Descubra el Museo del Mundo Maya de Mérida, una moderna maravilla arquitectónica que sirve de puerta de entrada a las antiguas maravillas de la civilización maya. Sumérjase en sus envolventes exposiciones, donde intrincados artefactos y recreaciones realistas le transportarán a través de milenios de historia y cultura mayas. Desde imponentes pirámides hasta intrincada cerámica, adéntrese en el corazón del mundo maya y desentrañe los misterios de esta fascinante civilización.",
  },
};
