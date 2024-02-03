window.onload = function () {
  var userLang = navigator.language || navigator.userLanguage;
  var lang = Object.keys(languageContent).find((v) => userLang.includes(v));
  if (lang) {
    for (let key in languageContent[lang]) {
      document.getElementById(key).innerHTML = languageContent[lang][key];
      var ceremonyDate = cCeremonyTime.toLocaleDateString(
        userLang,
        optionsLong
      );
      ceremonyDate =
        ceremonyDate.charAt(0).toUpperCase() + ceremonyDate.slice(1);
      var ceremonyTime = cCeremonyTime.toLocaleTimeString(
        userLang,
        timeOptions
      );
      document.getElementById("ceremony-time").innerHTML = ceremonyTime;
      var welcomeTime = cWelcomeTime.toLocaleTimeString(userLang, timeOptions);
      document.getElementById("welcome-time").innerHTML = welcomeTime;
      var firstDanceTime = cFirstDanceTime.toLocaleTimeString(
        lang,
        timeOptions
      );
      document.getElementById("first-dance-time").innerHTML = firstDanceTime;
      var dinnerTime = cDinnerTime.toLocaleTimeString(lang, timeOptions);
      document.getElementById("dinner-time").innerHTML = dinnerTime;
      var partyTime = cPartyTime.toLocaleTimeString(lang, timeOptions);
      document.getElementById("party-time").innerHTML = partyTime;
    }
  } else {
    for (let key in languageContent["en"]) {
      document.getElementById(key).innerHTML = languageContent["en"][key];
      var ceremonyDate = cCeremonyTime.toLocaleDateString("en", optionsLong);
      ceremonyDate =
        ceremonyDate.charAt(0).toUpperCase() + ceremonyDate.slice(1);
      var ceremonyTime = cCeremonyTime.toLocaleTimeString("en", timeOptions);
      document.getElementById("ceremony-time").innerHTML = ceremonyTime;
      var welcomeTime = cWelcomeTime.toLocaleTimeString(lang, timeOptions);
      document.getElementById("welcome-time").innerHTML = welcomeTime;
      var firstDanceTime = cFirstDanceTime.toLocaleTimeString(
        lang,
        timeOptions
      );
      document.getElementById("first-dance-time").innerHTML = firstDanceTime;
      var dinnerTime = cDinnerTime.toLocaleTimeString(lang, timeOptions);
      document.getElementById("dinner-time").innerHTML = dinnerTime;
      var partyTime = cPartyTime.toLocaleTimeString(lang, timeOptions);
      document.getElementById("party-time").innerHTML = partyTime;
    }
  }
};

function changeLanguage(lang) {
  for (let key in languageContent[lang]) {
    console.log(key);
    document.getElementById(key).innerHTML = languageContent[lang][key];

    var ceremonyDate = cCeremonyTime.toLocaleDateString(lang, optionsLong);
    ceremonyDate = ceremonyDate.charAt(0).toUpperCase() + ceremonyDate.slice(1);
    var ceremonyTime = cCeremonyTime.toLocaleTimeString(lang, timeOptions);
    document.getElementById("ceremony-time").innerHTML = ceremonyTime;
    var welcomeTime = cWelcomeTime.toLocaleTimeString(lang, timeOptions);
    document.getElementById("welcome-time").innerHTML = welcomeTime;
    var firstDanceTime = cFirstDanceTime.toLocaleTimeString(lang, timeOptions);
    document.getElementById("first-dance-time").innerHTML = firstDanceTime;
    var dinnerTime = cDinnerTime.toLocaleTimeString(lang, timeOptions);
    document.getElementById("dinner-time").innerHTML = dinnerTime;
    var partyTime = cPartyTime.toLocaleTimeString(lang, timeOptions);
    document.getElementById("party-time").innerHTML = partyTime;
    document.getElementById("rsvp-form").href =
      "https://misolandnico.anrsvp.com/" + lang;
  }
}

const cCeremonyTime = new Date("2024-12-14T15:00:00");
const cWelcomeTime = new Date("2024-12-14T16:00:00");
const cFirstDanceTime = new Date("2024-12-14T16:00:00");
const cDinnerTime = new Date("2024-12-14T16:00:00");
const cPartyTime = new Date("2024-12-14T16:00:00");

const optionsLong = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const timeOptions = {
  hour: "2-digit",
  minute: "2-digit",
};

let languageContent = {
  en: {
    "our-story-headline": "Our Story",
    "our-story-text-1":
      "Let's rewind to May 2022, in the dazzling chaos of Mamita, where our story kicks off. She walked into the club with her entourage, and that's when she laid eyes on him – a lone dancer in the midst of the party hurricane. His smile? Brighter than a disco ball, making the whole club seem like a quirky rom-com.",
    "our-story-text-2":
      "As the night unfolded, they showcased their respective dance moves, each stealing glances across the dance floor. She, intrigued by his infectious energy, couldn't help but notice his moves from afar. Meanwhile, he was trying to summon the courage to make a move, like a character in a coming-of-age film.",
    "our-story-text-3":
      "Eventually, he decided it was now or never and braved the dance floor. Little did she know, this bold move was about to be accompanied by a language twist. As introductions unfolded, she, with a mischievous grin, asked, 'Why not Spanish?' Apparently, language was the unexpected wingman that night.",
    "our-story-text-4":
      "Undeterred by the linguistic hiccup, he invited her to dance, and amidst the beats and bass, they attempted a charming tête-à-tête. Picture this: two people shouting sweet nothings over the booming music, creating a scene worthy of a sitcom.",
    "our-story-text-5":
      "As the night reached its peak, he threw caution to the wind and proposed the final dance. She agreed with a playful smile, and so, hand in hand, they exited the club, leaving behind the chaotic rhythm. Little did they know, this playful encounter was just the opening act to a lifetime of shared laughs, dance floor escapades, and love that would keep the beat of their hearts forever.",
    "the-wedding-headline": "The wedding",
    "rsvp-section-text":
      "We are thrilled to welcome you to our wedding celebration! Your presence will make our day truly special. RSVP now to join in the joy and festivities!",
    "visiting-text": "Visiting?",
    "getting-there-headline": "Getting there",
    "getting-there-text":
      "Just a few minutes northeast of the city of Mérida, in the countryside, you will find the Hacienda Santa Lucía Kantoyna, surrounded by enormous trees, regional flowers and the singing of birds. Amidst this wonderful paradise we will eat, drink, laugh and celebrate this perfect day.",
    "hotel-recommendations-headline": "Hotel recommendations",
    "hotel-recommendations-text":
      "We want to make sure your stay during our wedding celebration is as comfortable and enjoyable as possible. Below are some hotel recommendations conveniently located near our wedding venue. Each of these options offers a unique experience, so feel free to choose the one that best suits your preferences.",
    "rsvp-text": "Save My Spot",
    "rsvp-text-big": "Save My Spot",
    "trip-headline": "Want to join us on an adventure?",
    "trip-text":
      "Join us as we plan a wild expedition into the unknown! Buckle up, thrill-seekers! Sign up for any of the following trips in the registration if you're brave enough to hop on this crazy train of adventures with us. Warning: laughter and good times guaranteed!",
    "mucuyche-headline": "Cenotes Hacienda Mucuyché",
    "mucuyche-text":
      "Strap in for a guided tour that's not your average history lesson – we're turning the Hacienda's past into a blockbuster! Get ready to time-travel through the glory days of one of Yucatan's most thriving farms during the henequen era. And yes, we're not just exploring history – dive into the majesty of the cenotes 'Carlota' and 'Azul Maya.' It's not your grandma's guided tour – it's a splashy, adventurous journey through time and turquoise waters!",
    "ceremony-text": "Ceremony at Iglesia de Libano",
    "welcome-text": "Welcome cocktails at Hacienda Santa Lucía Kantoyna",
    "first-dance-text": "First Dance",
    "dinner-text": "Dinner",
    "party-text": "Dancing! ",
    "ceremony-location": "Click here to open in maps",
    "hacienda-location": "Click here to open in maps",
  },
  de: {
    "our-story-headline": "Unsere Geschichte",
    "our-story-text-1":
      "Spulen wir zurück in den Mai 2022, in das schillernde Chaos von Mamita, wo unsere Geschichte beginnt. Sie ging mit ihrem Gefolge in den Club, und da sah sie ihn – einen einsamen Tänzer inmitten des Party-Hurrikans. Sein Lächeln? Heller als eine Discokugel, wodurch der ganze Club wie eine skurrile Liebeskomödie wirkt.",
    "our-story-text-2":
      "Im weiteren Verlauf der Nacht präsentierten sie ihre jeweiligen Tanzschritte und erregten auf der Tanzfläche Blicke auf sich. Sie war fasziniert von seiner ansteckenden Energie und konnte nicht umhin, seine Bewegungen schon aus der Ferne zu bemerken. In der Zwischenzeit versuchte er, den Mut aufzubringen, etwas zu unternehmen, wie eine Figur in einem Coming-of-Age-Film.",
    "our-story-text-3":
      "Schließlich entschied er, dass es jetzt oder nie hieße, und wagte sich auf die Tanzfläche. Sie wusste nicht, dass dieser mutige Schritt von einer sprachlichen Wendung begleitet sein würde. Während sich die Vorstellungen abspielten, fragte sie mit einem schelmischen Grinsen: „Warum nicht Spanisch?“ Offenbar war die Sprache an diesem Abend der unerwartete Flügelspieler.",
    "our-story-text-4":
      "Unbeeindruckt von dem sprachlichen Schluckauf lud er sie zum Tanzen ein, und inmitten der Beats und Bässe versuchten sie ein charmantes Tête-à-Tête. Stellen Sie sich Folgendes vor: Zwei Menschen brüllen lautstark über die dröhnende Musik hinweg und schaffen so eine Szene, die einer Sitcom würdig ist.",
    "our-story-text-5":
      "Als die Nacht ihren Höhepunkt erreichte, warf er alle Vorsicht in den Wind und schlug den letzten Tanz vor. Sie stimmte mit einem verspielten Lächeln zu und so verließen sie Hand in Hand den Club und ließen den chaotischen Rhythmus hinter sich. Sie wussten nicht, dass diese spielerische Begegnung nur der Auftakt zu einem Leben voller gemeinsamer Lacher, Eskapaden auf der Tanzfläche und Liebe war, das ihre Herzen für immer schlagen ließ.",
    "the-wedding-headline": "Die Hochzeit",
    "rsvp-section-text":
      "Wir freuen uns, Dich bei unserer Hochzeitsfeier begrüßen zu dürfen! Deine Anwesenheit wird unseren Tag zu etwas ganz Besonderem machen. Melde Dich jetzt an, um an der Freude und der Feier teilzunehmen!",
    "visiting-text": "Zu Besuch?",
    "getting-there-headline": "Anfahrt",
    "getting-there-text":
      "Nur wenige Minuten nordöstlich der Stadt Mérida, auf dem Land, findest Du die Hacienda Santa Lucía Kantoyna, umgeben von riesigen Bäumen, regionalen Blumen und Vogelgesang. Inmitten dieses wunderbaren Paradieses werden wir essen, trinken, lachen und diesen perfekten Tag feiern.",
    "hotel-recommendations-headline": "Hotelempfehlungen",
    "hotel-recommendations-text":
      "Wir möchten sicherstellen, dass Euer Aufenthalt während unserer Hochzeitsfeier so angenehm wie möglich ist. Nachfolgend haben wir ein paar einige Hotelempfehlungen in günstiger Lage in der Nähe unseres Hochzeitsortes gelistet. Jede dieser Optionen bietet ein einzigartiges Erlebnis. Wählt also die Option, die am besten euren Vorlieben entspricht.",
    "rsvp-text": "Jetzt anmelden",
    "rsvp-text-big": "Jetzt anmelden",
    "trip-headline": "Möchtest Du mit uns auf ein Abenteuer gehen?",
    "trip-text":
      "Begleite uns bei der Planung einer wilden Expedition ins Unbekannte! Schnall dich an, Nervenkitzel-Suchende! Melde Dich in der Registrierung für eine der folgenden Fahrten an, wenn Du mutig genug bist, mit uns in diesen verrückten Abenteuerzug einzusteigen. Achtung: Lachen und gute Zeiten garantiert!",
    "mucuyche-headline": "Cenotes Hacienda Mucuyché",
    "mucuyche-text":
      "Schnall Dich an für eine Führung, die keine gewöhnliche Geschichtsstunde ist - wir verwandeln die Vergangenheit der Hacienda in einen Blockbuster! Machen Dich bereit für eine Zeitreise durch die glorreichen Tage einer der florierendsten Farmen Yucatans während der Henequen-Ära. Und ja, wir erkunden nicht nur die Geschichte - tauch' mit uns in die majestätischen Cenoten „Carlota“ und „Azul Maya“. Es ist nicht die geführte Tour Deiner Oma - es ist eine spritzige, abenteuerliche Reise durch die Zeit und türkisfarbenes Wasser!",
    "ceremony-text": "Zeremonie in der Iglesia de Libano",
    "welcome-text": "Begrüßungscocktails in der Hacienda Santa Lucía Kantoyna",
    "first-dance-text": "Erster Tanz",
    "dinner-text": "Abendessen",
    "party-text": "Lasst uns tanzen!",
    "ceremony-location": "Hier klicken um in Maps zu öffnen",
    "hacienda-location": "Hier klicken um in Maps zu öffnen",
  },
  es: {
    "our-story-headline": "Nuestra historia",
    "our-story-text-1":
      "Retrocedamos a mayo de 2022, en el caos deslumbrante de Mamita, donde comienza nuestra historia. Ella entró al club con su séquito y fue entonces cuando lo vio, un bailarín solitario en medio del huracán de la fiesta. Su ¿Sonríe? Más brillante que una bola de discoteca, lo que hace que todo el club parezca una peculiar comedia romántica.",
    "our-story-text-2":
      "A medida que avanzaba la noche, mostraron sus respectivos movimientos de baile, cada uno robando miradas a través de la pista de baile. Ella, intrigada por su energía contagiosa, no pudo evitar notar sus movimientos desde lejos. Mientras tanto, él estaba tratando de reunir el coraje para haz un movimiento, como un personaje de una película sobre la mayoría de edad.",
    "our-story-text-3":
      "Finalmente, decidió que era ahora o nunca y desafió la pista de baile. Lo que ella no sabía era que este movimiento audaz estaba a punto de ir acompañado de un cambio de lenguaje. Mientras se desarrollaban las presentaciones, ella, con una sonrisa traviesa, preguntó: '¿Por qué no?' ¿Español?' Aparentemente, el lenguaje fue el compañero inesperado esa noche.",
    "our-story-text-4":
      "Sin inmutarse por el problema lingüístico, la invitó a bailar y, en medio de los ritmos y el bajo, intentaron un encantador tête-à-tête. Imagínense esto: dos personas gritando palabras dulces sobre la música en auge, creando una escena digna de una comedia de situación. .",
    "our-story-text-5":
      "Cuando la noche llegó a su apogeo, él dejó de lado la precaución y propuso el baile final. Ella asintió con una sonrisa juguetona, y así, de la mano, salieron del club, dejando atrás el ritmo caótico. Poco lo sabían. Este divertido encuentro fue solo el acto de apertura de una vida de risas compartidas, escapadas a la pista de baile y amor que mantendría el latido de sus corazones para siempre.",
    "the-wedding-headline": "La boda",
    "rsvp-section-text":
      "¡Estamos encantados de darle la bienvenida a la celebración de nuestra boda! Su presencia hará que nuestro día sea realmente especial. ¡Confirma su asistencia ahora para unirse a la alegría y las festividades!",
    "visiting-text": "¿De visita?",
    "getting-there-headline": "Cómo llegar",
    "getting-there-text":
      "A sólo unos minutos al noreste de la ciudad de Mérida, en el campo, se encuentra la Hacienda Santa Lucía Kantoyna, rodeada de enormes árboles, flores regionales y el canto de los pájaros. En medio de este maravilloso paraíso comeremos, beberemos, reiremos y Celebre este día perfecto.",
    "hotel-recommendations-headline": "Recomendaciones de hoteles",
    "hotel-recommendations-text":
      "Queremos asegurarnos de que su estadía durante la celebración de nuestra boda sea lo más cómoda y placentera posible. A continuación encontrará algunas recomendaciones de hoteles convenientemente ubicados cerca del lugar de celebración de nuestra boda. Cada una de estas opciones ofrece una experiencia única, así que siéntase libre de elegir la que mejor se adapte a sus necesidades. se adapta a tus preferencias.",
    "rsvp-text": "Guardar mi lugar",
    "rsvp-text-big": "Guardar mi lugar",
    "trip-headline": "Quieres unirte a nosotros en una aventura?",
    "trip-text":
      "¡Únase a nosotros mientras planeamos una expedición salvaje hacia lo desconocido! ¡Abróchense el cinturón, buscadores de emociones! Regístrese en cualquiera de los siguientes viajes en el registro si es lo suficientemente valiente como para subirse a este loco tren de aventuras con nosotros. Advertencia: ¡Risas y buenos momentos garantizados!",
    "mucuyche-headline": "Cenotes Hacienda Mucuyché",
    "mucuyche-text":
      "Prepárese para una visita guiada que no es una lección de historia promedio: ¡estamos convirtiendo el pasado de la Hacienda en un éxito de taquilla! Prepárese para viajar en el tiempo a través de los días de gloria de una de las granjas más prósperas de Yucatán durante la era del henequén. Y sí, No solo estamos explorando la historia: sumérgete en la majestuosidad de los cenotes 'Carlota' y 'Azul Maya'. No es la visita guiada de tu abuela, ¡es un viaje lleno de aventuras a través del tiempo y aguas turquesas!",
    "ceremony-text": "Ceremonia en la Iglesia de Líbano",
    "welcome-text": "Cócteles de bienvenida en Hacienda Santa Lucía Kantoyna",
    "first-dance-text": "Primer baile",
    "dinner-text": "Cena",
    "party-text": "¡Bailando!",
    "ceremony-location": "Haga clic aquí para abrir en mapas",
    "hacienda-location": "Haga clic aquí para abrir en mapas",
  },
};
