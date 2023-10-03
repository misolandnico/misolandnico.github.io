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
    "our-story-text":
      "Maecenas eget lectus mauris. Donec in venenatis ipsum. Etiam mattis mattis varius. Quisque quis consequat augue. Proin sed lorem euismod purus ultricies mollis. Integer mi libero, auctor vitae dapibus nec, viverra aliquet sem. Morbi eget urna sollicitudin, vestibulum nisi quis, iaculis justo. Suspendisse non urna bibendum, imperdiet augue non, cursus elit. Donec elit lacus, commodo vitae blandit et, gravida vitae felis. Morbi sit amet sapien ut lorem vehicula viverra at ut leo. Cras quis sagittis risus. Donec semper mauris suscipit, egestas nisi sit amet, suscipit nisi. Vivamus eu nulla a augue eleifend vulputate at ac magna.<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ligula consectetur, consectetur mi in, interdum nibh. Donec est dolor, ornare in felis ac, tempor scelerisque massa. Nam dictum dolor convallis, finibus risus vel, sollicitudin ex. Phasellus posuere mattis semper. Fusce et bibendum elit. Integer pharetra arcu non dolor consectetur gravida. Donec posuere aliquet sem, in varius ipsum viverra nec. Proin rhoncus bibendum dui non semper. Aenean eu justo egestas, fringilla lacus eu, sagittis augue. Etiam sit amet lorem imperdiet, ultricies ligula ac, gravida mauris. Nunc et diam lorem. Nam est dolor, ultricies non egestas et, semper ut felis. Nullam posuere rutrum diam, et sodales ex condimentum quis.<br />Pellentesque et ligula sollicitudin, consectetur ante quis, pellentesque tortor. Nullam non neque arcu. Nunc consequat lacinia tortor, ac dictum tortor commodo ac. Nunc quis dictum dolor. Etiam ut nibh dapibus, vestibulum augue condimentum, interdum est. Fusce semper, leo eu blandit iaculis, massa risus ullamcorper orci, non pellentesque ante tellus vitae justo. Nullam porttitor arcu vitae lacus euismod, luctus commodo erat blandit.",
    "the-wedding-headline": "The wedding",
    "rsvp-section-text": "We can't await to welcome you to our wedding",
    "visiting-text": "Visiting?",
    "getting-there-headline": "Getting there",
    "getting-there-text":
      "The hacienda, in which the celebration will take part, is located just outside of Merida; no 30 minutes by car from its beautiful city center. ",
    "hotel-recommendations-headline": "Hotel recommendations",
    "hotel-recommendations-text":
      "Maecenas eget lectus mauris. Donec in venenatis ipsum. Etiam mattis mattis varius. Quisque quis consequat augue.<br/>Maecenas eget lectus mauris. Donec in venenatis ipsum. Etiam mattis mattis varius. Quisque",
    "rsvp-text": "Are you in?",
    "rsvp-text-big": "Are you in?",
    "trip-headline": "Want to join us on an adventure?",
    "trip-text":
      "We are planning a trip for all that are ready to follow us into the unknown. Please sign up for any of the following trips in the registration if you are also interested.",
    "mucuyche-headline": "Cenotes Hacienda Mucuyché",
    "mucuyche-text":
      "Accompany us on a guided tour, recreating the fantastic history of the Hacienda, bringing back the past of one of the most thriving farms in Yucatan during the henequen era. You will also swim in the magesty of the cenotes 'Carlota' and 'Azul Maya.'",
    "ceremony-text": "The Ceremony will be held at church",
    "welcome-text": "Welcome at hacienda",
    "first-dance-text": "First Dance",
    "dinner-text": "Food",
    "party-text": "Party",
  },
  de: {
    "our-story-headline": "Unsere Geschichte",
    "our-story-text":
      " Maecenas eget lectus mauris. Donec in venenatis ipsum. Etiam mattis mattis varius. Quisque quis consequat augue. Proin sed lorem euismod purus ultricies mollis. Integer mi libero, auctor vitae dapibus nec, viverra aliquet sem. Morbi eget urna sollicitudin, vestibulum nisi quis, iaculis justo. Suspendisse non urna bibendum, imperdiet augue non, cursus elit. Donec elit lacus, commodo vitae blandit et, gravida vitae felis. Morbi sit amet sapien ut lorem vehicula viverra at ut leo. Cras quis sagittis risus. Donec semper mauris suscipit, egestas nisi sit amet, suscipit nisi. Vivamus eu nulla a augue eleifend vulputate at ac magna.<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ligula consectetur, consectetur mi in, interdum nibh. Donec est dolor, ornare in felis ac, tempor scelerisque massa. Nam dictum dolor convallis, finibus risus vel, sollicitudin ex. Phasellus posuere mattis semper. Fusce et bibendum elit. Integer pharetra arcu non dolor consectetur gravida. Donec posuere aliquet sem, in varius ipsum viverra nec. Proin rhoncus bibendum dui non semper. Aenean eu justo egestas, fringilla lacus eu, sagittis augue. Etiam sit amet lorem imperdiet, ultricies ligula ac, gravida mauris. Nunc et diam lorem. Nam est dolor, ultricies non egestas et, semper ut felis. Nullam posuere rutrum diam, et sodales ex condimentum quis.<br />Pellentesque et ligula sollicitudin, consectetur ante quis, pellentesque tortor. Nullam non neque arcu. Nunc consequat lacinia tortor, ac dictum tortor commodo ac. Nunc quis dictum dolor. Etiam ut nibh dapibus, vestibulum augue condimentum, interdum est. Fusce semper, leo eu blandit iaculis, massa risus ullamcorper orci, non pellentesque ante tellus vitae justo. Nullam porttitor arcu vitae lacus euismod, luctus commodo erat blandit.",
    "the-wedding-headline": "Die Hochzeit",
    "rsvp-section-text":
      "Wir können es kaum erwarten, dich auf unserer Hochzeit zu begrüßen",
    "getting-there-headline": "How to get to the venue",
    "getting-there-text": "How to get to the venue text",
    "rsvp-text": "Bist du dabei?",
    "rsvp-text-big": "Bist du dabei?",
  },
  es: {
    "our-story-headline": "Nuestra historia",
    "our-story-text":
      " Maecenas eget lectus mauris. Donec in venenatis ipsum. Etiam mattis mattis varius. Quisque quis consequat augue. Proin sed lorem euismod purus ultricies mollis. Integer mi libero, auctor vitae dapibus nec, viverra aliquet sem. Morbi eget urna sollicitudin, vestibulum nisi quis, iaculis justo. Suspendisse non urna bibendum, imperdiet augue non, cursus elit. Donec elit lacus, commodo vitae blandit et, gravida vitae felis. Morbi sit amet sapien ut lorem vehicula viverra at ut leo. Cras quis sagittis risus. Donec semper mauris suscipit, egestas nisi sit amet, suscipit nisi. Vivamus eu nulla a augue eleifend vulputate at ac magna.<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ligula consectetur, consectetur mi in, interdum nibh. Donec est dolor, ornare in felis ac, tempor scelerisque massa. Nam dictum dolor convallis, finibus risus vel, sollicitudin ex. Phasellus posuere mattis semper. Fusce et bibendum elit. Integer pharetra arcu non dolor consectetur gravida. Donec posuere aliquet sem, in varius ipsum viverra nec. Proin rhoncus bibendum dui non semper. Aenean eu justo egestas, fringilla lacus eu, sagittis augue. Etiam sit amet lorem imperdiet, ultricies ligula ac, gravida mauris. Nunc et diam lorem. Nam est dolor, ultricies non egestas et, semper ut felis. Nullam posuere rutrum diam, et sodales ex condimentum quis.<br />Pellentesque et ligula sollicitudin, consectetur ante quis, pellentesque tortor. Nullam non neque arcu. Nunc consequat lacinia tortor, ac dictum tortor commodo ac. Nunc quis dictum dolor. Etiam ut nibh dapibus, vestibulum augue condimentum, interdum est. Fusce semper, leo eu blandit iaculis, massa risus ullamcorper orci, non pellentesque ante tellus vitae justo. Nullam porttitor arcu vitae lacus euismod, luctus commodo erat blandit.",
    "the-wedding-headline": "La Boda",
    // "address-text": "Tablaje, 3610 Hacienda, 97347 Kantoyna, Yuc.",
    // "location-kantoyna": "Hacienda Santa Lucía Kantoyna",
    "rsvp-section-text": "Para registrarse por favor haga click aquí:",
    "getting-there-headline": "How to get to the venue",
    "getting-there-text": "How to get to the venue text",
    "rsvp-text": "Confirma aquí",
    "rsvp-text-big": "Confirma aquí",
  },
};
