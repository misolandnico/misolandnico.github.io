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
      document.getElementById("ceremony-date").innerHTML = ceremonyDate;
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
      var partyTime = cPartyTime.toLocaleTimeString(lang, timeOptions);
      document.getElementById("party-time").innerHTML = partyTime;
      var dinnerTime = cDinnerTime.toLocaleTimeString(lang, timeOptions);
      document.getElementById("dinner-time").innerHTML = dinnerTime;
      var morePartyTime = cMorePartyTime.toLocaleTimeString(lang, timeOptions);
      document.getElementById("more-party-time").innerHTML = morePartyTime;
    }
  } else {
    for (let key in languageContent["en"]) {
      document.getElementById(key).innerHTML = languageContent["en"][key];
      var ceremonyDate = cCeremonyTime.toLocaleDateString("en", optionsLong);
      ceremonyDate =
        ceremonyDate.charAt(0).toUpperCase() + ceremonyDate.slice(1);
      document.getElementById("ceremony-date").innerHTML = ceremonyDate;
      var ceremonyTime = cCeremonyTime.toLocaleTimeString("en", timeOptions);
      document.getElementById("ceremony-time").innerHTML = ceremonyTime;
      var welcomeTime = cWelcomeTime.toLocaleTimeString(lang, timeOptions);
      document.getElementById("welcome-time").innerHTML = welcomeTime;
      var firstDanceTime = cFirstDanceTime.toLocaleTimeString(
        lang,
        timeOptions
      );
      document.getElementById("first-dance-time").innerHTML = firstDanceTime;
      var partyTime = cPartyTime.toLocaleTimeString(lang, timeOptions);
      document.getElementById("party-time").innerHTML = partyTime;
      var dinnerTime = cDinnerTime.toLocaleTimeString(lang, timeOptions);
      document.getElementById("dinner-time").innerHTML = dinnerTime;
      var morePartyTime = cMorePartyTime.toLocaleTimeString(lang, timeOptions);
      document.getElementById("more-party-time").innerHTML = morePartyTime;
    }
  }
};

function changeLanguage(lang) {
  for (let key in languageContent[lang]) {
    document.getElementById(key).innerHTML = languageContent[lang][key];

    var ceremonyDate = cCeremonyTime.toLocaleDateString(lang, optionsLong);
    ceremonyDate = ceremonyDate.charAt(0).toUpperCase() + ceremonyDate.slice(1);
    document.getElementById("ceremony-date").innerHTML = ceremonyDate;

    var ceremonyTime = cCeremonyTime.toLocaleTimeString(lang, timeOptions);
    document.getElementById("ceremony-time").innerHTML = ceremonyTime;
    var welcomeTime = cWelcomeTime.toLocaleTimeString(lang, timeOptions);
    document.getElementById("welcome-time").innerHTML = welcomeTime;
    var firstDanceTime = cFirstDanceTime.toLocaleTimeString(lang, timeOptions);
    document.getElementById("first-dance-time").innerHTML = firstDanceTime;
    var partyTime = cPartyTime.toLocaleTimeString(lang, timeOptions);
    document.getElementById("party-time").innerHTML = partyTime;
    var dinnerTime = cDinnerTime.toLocaleTimeString(lang, timeOptions);
    document.getElementById("dinner-time").innerHTML = dinnerTime;
    var morePartyTime = cMorePartyTime.toLocaleTimeString(lang, timeOptions);
    document.getElementById("more-party-time").innerHTML = morePartyTime;
    document.getElementById("rsvp-form").href =
      "https://misolandnico.anrsvp.com/" + lang;
  }
}

const cCeremonyTime = new Date("2024-12-14T17:30:00");
const cWelcomeTime = new Date("2024-12-14T19:00:00");
const cFirstDanceTime = new Date("2024-12-14T19:30:00");
const cPartyTime = new Date("2024-12-14T19:45:00");
const cDinnerTime = new Date("2024-12-14T21:00:00");
const cMorePartyTime = new Date("2024-12-14T24:00:00");

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
      "Let's travel back to May 2022, when Mamita's dazzling chaos marks the beginning of this beautiful story. She entered the club accompanied by her friends. On the other side, he, a lone dancer in the middle of the whirlwind of the party. And suddenly, his smile lit up the darkness of the place. More radiant than a disco ball, turning the entire club into the bright sunshine of her beloved Mexico.",
    "our-story-text-2":
      "As the night progressed, they showed off their dance moves, both enjoying the rhythm of each song and casting furtive glances across the dance floor at each other. She, intrigued by his infectious energy, couldn't help but watch his moves from afar. Meanwhile, he was trying to muster the courage to take the first step.",
    "our-story-text-3":
      "Deciding it was now or never, he crossed the dance floor to finally strike up a conversation. What she didn't know was that this bold move would be accompanied by a linguistic twist. He shyly said “hello” in English, and she, with a mischievous smile, asked, “Por qué no en español?” as she was convinced that his passion for dancing gave him away as a Latino.",
    "our-story-text-4":
      "Undeterred by the linguistic mishap, he asked her to dance and, between beats and bass, he displayed his best moves to the sound of Jason Derulo.",
    "our-story-text-5":
      "As the night reached its climax, they enjoyed one last dance before she said goodbye and he asked for her contact. She accepted with a playful smile, and then they left the club, leaving the chaotic beat behind. Little did they know that this playful encounter was just the beginning of a lifetime of shared laughter, dance floor escapades and a love that would keep their hearts beating forever.",
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
    "daytrips-headline": "Day trips?",
    "daytrips-text":
      "Welcome to the captivating embrace of Merida, Yucatan, and its surrounding wonders! Prepare to be captivated by the rich tapestry of experiences awaiting you. While monotony remains an elusive concept in this vibrant haven, we've handpicked a bouquet of delightful activities to enhance your journey. So, let your curiosity be your compass, and allow the magic of Merida to enchant you at every turn!",
    "daytrips-button": "Day trips",
    "our-recs": "Our Recommendations",
    "rsvp-text": "Save My Spot",
    "rsvp-text-big": "Save My Spot",
    // "trip-headline": "Want to join us on an adventure?",
    // "trip-text":
    //   "Join us as we plan a wild expedition into the unknown! Buckle up, thrill-seekers! Sign up for any of the following trips in the registration if you're brave enough to hop on this crazy train of adventures with us. Warning: laughter and good times guaranteed!",
    // "mucuyche-headline": "Cenotes Hacienda Mucuyché",
    // "mucuyche-text":
    //   "Strap in for a guided tour that's not your average history lesson – we're turning the Hacienda's past into a blockbuster! Get ready to time-travel through the glory days of one of Yucatan's most thriving farms during the henequen era. And yes, we're not just exploring history – dive into the majesty of the cenotes 'Carlota' and 'Azul Maya.' It's not your grandma's guided tour – it's a splashy, adventurous journey through time and turquoise waters!",
    "ceremony-text": "Ceremony at Iglesia de Libano",
    "welcome-text": "Welcome cocktails at Hacienda Santa Lucía Kantoyna",
    "first-dance-text": "First Dance",
    "party-text": "Dancing! ",
    "dinner-text": "Dinner",
    "more-party-text": "More Dancing! ",
    "ceremony-location": "Click here to open in maps",
    "hacienda-location": "Click here to open in maps",
    "dresscode-text-1": "Dresscode",
    "dresscode-text-2":
      "Formal Attire. We kindly request that gentlemen wear a tuxedo or a dark suit with a tie, avoiding light colors. Ladies are asked to wear an evening gown, avoiding white and very light colors.",
    "want-to-give-a-present-headline": "Want to give us a present?",
    "want-to-give-a-present-text":
      "Since we need to travel back to Europe, we won't be able to carry much with us. Therefore, we would greatly appreciate it if you could transfer money directly to our PayPal account using the link below. Thanks for helping us travel light!",
  },
  de: {
    "our-story-headline": "Unsere Geschichte",
    "our-story-text-1":
      "Reisen wir zurück in den Mai 2022, als Mamitas schillerndes Chaos den Beginn dieser schönen Geschichte markiert. Sie betrat den Club in Begleitung ihrer Freunde. Auf der anderen Seite, er, ein einsamer Tänzer inmitten des Wirbels der Party. Und plötzlich erhellte sein Lächeln die Dunkelheit des Clubs. Es war strahlender als eine Discokugel und verwandelte den ganzen Club in den hellen Sonnenschein ihres geliebten Mexikos.",
    "our-story-text-2":
      "Im Laufe des Abends zeigten sie ihre Tanzschritte, genossen den Rhythmus jedes Liedes und warfen sich gegenseitig verstohlene Blicke zu. Sie, die von seiner ansteckenden Energie fasziniert war, konnte nicht anders, als seine Bewegungen aus der Ferne zu beobachten. Währenddessen versuchte er, den Mut aufzubringen, den ersten Schritt zu tun.",
    "our-story-text-3":
      "Als er beschloss, dass es jetzt oder nie passieren würde, überquerte er die Tanzfläche, um sie endlich anzusprechen. Was sie nicht wusste, war, dass dieser mutige Schritt von einer sprachlichen Überraschung begleitet sein würde. Er sagte schüchtern 'Hello' auf Englisch, und sie fragte mit einem verschmitzten Lächeln: 'Por qué no en español?', denn sie war überzeugt, dass seine Leidenschaft fürs Tanzen ihn als Latino verriet.",
    "our-story-text-4":
      "Unbeeindruckt von dem sprachlichen Durcheinander forderte er sie zum Tanzen auf, und zwischen Beats und Bässen zeigte er seine besten Moves zu den Klängen von Jason Derulo.",
    "our-story-text-5":
      "Als der Abend seinen Höhepunkt erreichte, tanzten sie noch ein letztes Mal, bevor sie sich verabschiedete und er sie nach ihrer Nummer fragte. Sie akzeptierte mit einem verspielten Lächeln, und dann verließen sie den Club und ließen den chaotischen Beat zurück. Sie ahnten nicht, dass diese spielerische Begegnung nur der Beginn einer lebenslangen Beziehung mit vielen Momenten gemeinsamen Lachens, Eskapaden auf der Tanzfläche und voller Liebe war, die ihre Herzen für immer schlagen lassen würde.",
    "the-wedding-headline": "Die Hochzeit",
    "rsvp-section-text":
      "Wir freuen uns, Dich bei unserer Hochzeitsfeier begrüßen zu dürfen! Deine Anwesenheit wird unseren Tag zu etwas ganz Besonderem machen.",
    "visiting-text": "Zu Besuch?",
    "getting-there-headline": "Anfahrt",
    "getting-there-text":
      "Nur wenige Minuten nordöstlich der Stadt Mérida, auf dem Land, findest Du die Hacienda Santa Lucía Kantoyna, umgeben von riesigen Bäumen, regionalen Blumen und Vogelgesang. Inmitten dieses wunderbaren Paradieses werden wir essen, trinken, lachen und diesen perfekten Tag feiern.",
    "hotel-recommendations-headline": "Hotelempfehlungen",
    "hotel-recommendations-text":
      "Wir möchten sicherstellen, dass Euer Aufenthalt während unserer Hochzeitsfeier so angenehm wie möglich ist. Nachfolgend haben wir ein paar einige Hotelempfehlungen in günstiger Lage in der Nähe unseres Hochzeitsortes gelistet. Jede dieser Optionen bietet ein einzigartiges Erlebnis. Wählt also die Option, die am besten euren Vorlieben entspricht.",
    "daytrips-headline": "Tagesausflüge?",
    "daytrips-text":
      "Willkommen in der fesselnden Umarmung von Merida, Yucatan, und seinen umliegenden Wundern! Bereiten Sie sich darauf vor, von der Fülle der Erlebnisse, die Sie erwarten, in den Bann gezogen zu werden. Da Monotonie in diesem pulsierenden Paradies ein schwer fassbares Konzept ist, haben wir einen Strauß reizvoller Aktivitäten ausgewählt, die Ihre Reise bereichern werden. Lassen Sie sich also von Ihrer Neugier leiten und lassen Sie sich von der Magie Meridas auf Schritt und Tritt verzaubern!",
    "daytrips-button": "Tagesausflüge",
    "our-recs": "Unsere Empfehlungen",
    "rsvp-text": "Jetzt anmelden",
    "rsvp-text-big": "Jetzt anmelden",
    // "trip-headline": "Möchtest Du mit uns auf ein Abenteuer gehen?",
    // "trip-text":
    //   "Begleite uns bei der Planung einer wilden Expedition ins Unbekannte! Schnall dich an, Nervenkitzel-Suchende! Melde Dich in der Registrierung für eine der folgenden Fahrten an, wenn Du mutig genug bist, mit uns in diesen verrückten Abenteuerzug einzusteigen. Achtung: Lachen und gute Zeiten garantiert!",
    // "mucuyche-headline": "Cenotes Hacienda Mucuyché",
    // "mucuyche-text":
    //   "Schnall Dich an für eine Führung, die keine gewöhnliche Geschichtsstunde ist - wir verwandeln die Vergangenheit der Hacienda in einen Blockbuster! Machen Dich bereit für eine Zeitreise durch die glorreichen Tage einer der florierendsten Farmen Yucatans während der Henequen-Ära. Und ja, wir erkunden nicht nur die Geschichte - tauch' mit uns in die majestätischen Cenoten „Carlota“ und „Azul Maya“. Es ist nicht die geführte Tour Deiner Oma - es ist eine spritzige, abenteuerliche Reise durch die Zeit und türkisfarbenes Wasser!",
    "ceremony-text": "Zeremonie in der Iglesia de Libano",
    "welcome-text": "Begrüßungscocktails in der Hacienda Santa Lucía Kantoyna",
    "first-dance-text": "Erster Tanz",
    "party-text": "Lasst uns tanzen!",
    "dinner-text": "Abendessen",
    "more-party-text": "Mehr Tanz!",
    "ceremony-location": "Hier klicken um in Maps zu öffnen",
    "hacienda-location": "Hier klicken um in Maps zu öffnen",
    "dresscode-text-1": "Dresscode",
    "dresscode-text-2":
      "Formelle Kleidung. Wir bitten die Herren, einen Smoking oder einen dunklen Anzug mit Krawatte zu tragen und helle Farben zu vermeiden. Die Damen werden gebeten, ein Abendkleid zu tragen, wobei Weiß und sehr helle Farben zu vermeiden sind.",
    "want-to-give-a-present-headline":
      "Möchtest du uns ein Geschenk überreichen?",
    "want-to-give-a-present-text":
      "Da wir zurück nach Europa reisen müssen, werden wir nicht viel mitnehmen können. Daher wären wir dir sehr dankbar, wenn du uns Geld über den unten stehenden Link direkt auf unser PayPal-Konto überweisen könntest. Danke, dass Sie uns helfen, mit leichtem Gepäck zu reisen!",
  },
  es: {
    "our-story-headline": "Nuestra historia",
    "our-story-text-1":
      "Viajemos de vuelta a mayo de 2022, cuando el deslumbrante caos de Mamita marca el inicio de esta hermosa historia. Ella entró al club acompañada de sus amigos. Al otro lado, él, un bailarín solitario en medio del torbellino de la fiesta. Y de repente, su sonrisa iluminó la oscuridad del lugar. Más radiante que una bola de discoteca, convirtiendo el club entero en el brillante sol de su amado México.",
    "our-story-text-2":
      "A medida que avanzaba la noche, mostraban sus movimientos de baile, ambos disfrutando del ritmo de cada canción y lanzándose miradas furtivas a través de la pista. Ella, intrigada por la energía contagiosa de él, no podía evitar observar sus movimientos desde lejos. Mientras tanto, él trataba de reunir el coraje para dar el primer paso.",
    "our-story-text-3":
      "Decidió que era ahora o nunca, y cruzó la pista de baile para finalmente entablar una conversación. Lo que ella no sabía era que este audaz movimiento iba a ir acompañado de un giro lingüístico. Él tímidamente le dijo 'hello' en inglés, y ella, con una sonrisa pícara, preguntó: '¿Por qué no en español?', pues estaba convencida de que su pasión por el baile lo delataba como latino.",
    "our-story-text-4":
      "Sin inmutarse por el contratiempo lingüístico, él la invitó a bailar y, entre ritmos y bajos, desplegó sus mejores movimientos al son de Jason Derulo.",
    "our-story-text-5":
      "Cuando la noche alcanzó su punto álgido, disfrutaron de un último baile antes de que ella se despidiera y él le pidiera su contacto. Ella aceptó con una sonrisa juguetona, y luego salieron del club, dejando atrás el caótico ritmo. Poco sabían que este encuentro juguetón era solo el comienzo de toda una vida de risas compartidas, escapadas a la pista de baile y un amor que mantendría el latido de sus corazones para siempre.",
    "the-wedding-headline": "La boda",
    "rsvp-section-text":
      "Estamos encantados de darle la bienvenida a la celebración de nuestra boda. Su presencia hará que nuestro día sea realmente especial.",
    "visiting-text": "¿De visita?",
    "getting-there-headline": "Cómo llegar",
    "getting-there-text":
      "A sólo unos minutos al noreste de la ciudad de Mérida, en el campo, se encuentra la Hacienda Santa Lucía Kantoyna, rodeada de enormes árboles, flores regionales y el canto de los pájaros. En medio de este maravilloso paraíso comeremos, beberemos, reiremos y celebre este día perfecto.",
    "hotel-recommendations-headline": "Recomendaciones de hoteles",
    "hotel-recommendations-text":
      "Queremos asegurarnos de que su estadía durante la celebración de nuestra boda sea lo más cómoda y placentera posible. A continuación encontrará algunas recomendaciones de hoteles convenientemente ubicados cerca del lugar de celebración de nuestra boda. Cada una de estas opciones ofrece una experiencia única, así que siéntase libre de elegir la que mejor se adapte a sus necesidades. se adapta a tus preferencias.",
    "daytrips-headline": "Excursiones?",
    "daytrips-text":
      "¡Bienvenido al cautivador abrazo de Mérida, Yucatán, y sus maravillas circundantes! Prepárese para ser cautivado por el rico tapiz de experiencias que le esperan. Aunque la monotonía sigue siendo un concepto difícil de alcanzar en este vibrante paraíso, hemos seleccionado un ramillete de deliciosas actividades para mejorar su viaje. Deje que su curiosidad sea su brújula y permita que la magia de Mérida le encandile a cada paso.",
    "daytrips-button": "Excursiones",
    "our-recs": "Nuestras recomendaciones",
    "rsvp-text": "Guardar mi lugar",
    "rsvp-text-big": "Guardar mi lugar",
    // "trip-headline": "Quieres unirte a nosotros en una aventura?",
    // "trip-text":
    //   "¡Únase a nosotros mientras planeamos una expedición salvaje hacia lo desconocido! ¡Abróchense el cinturón, buscadores de emociones! Regístrese en cualquiera de los siguientes viajes en el registro si es lo suficientemente valiente como para subirse a este loco tren de aventuras con nosotros. Advertencia: ¡Risas y buenos momentos garantizados!",
    // "mucuyche-headline": "Cenotes Hacienda Mucuyché",
    // "mucuyche-text":
    //   "Prepárese para una visita guiada que no es una lección de historia promedio: ¡estamos convirtiendo el pasado de la Hacienda en un éxito de taquilla! Prepárese para viajar en el tiempo a través de los días de gloria de una de las granjas más prósperas de Yucatán durante la era del henequén. Y sí, No solo estamos explorando la historia: sumérgete en la majestuosidad de los cenotes 'Carlota' y 'Azul Maya'. No es la visita guiada de tu abuela, ¡es un viaje lleno de aventuras a través del tiempo y aguas turquesas!",
    "ceremony-text": "Ceremonia en la Iglesia de Líbano",
    "welcome-text": "Cócteles de bienvenida en Hacienda Santa Lucía Kantoyna",
    "first-dance-text": "Primer baile",
    "party-text": "¡Bailando!",
    "dinner-text": "Cena",
    "more-party-text": "¡Bailando más!",
    "ceremony-location": "Haga clic aquí para abrir en mapas",
    "hacienda-location": "Haga clic aquí para abrir en mapas",
    "dresscode-text-1": "Dresscode",
    "dresscode-text-2":
      "Vestimenta formal. Rogamos a los caballeros que lleven esmoquin o traje oscuro con corbata, evitando los colores claros. A las damas se les pide que lleven un vestido de noche, evitando el blanco y los colores muy claros.",
    "want-to-give-a-present-headline": "¿Quieres darnos un regalo?",
    "want-to-give-a-present-text":
      "Como tenemos que viajar de vuelta a Europa, no podremos llevar mucho con nosotros. Por lo tanto, te agradeceríamos mucho que nos transfirieras dinero directamente a nuestra cuenta de PayPal a través del siguiente enlace. ¡Gracias por ayudarnos a viajar ligeros de equipaje!",
  },
};
