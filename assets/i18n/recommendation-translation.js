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

let languageContent = {
  en: {
    "back-text": "Back",
  },
  de: {
    "back-text": "Zurück",
  },
  es: {
    "back-text": "Atras",
  },
};
