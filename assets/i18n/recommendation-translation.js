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
  },
  de: {
    "back-text": "Zurück",
  },
  es: {
    "back-text": "Atras",
  },
};
