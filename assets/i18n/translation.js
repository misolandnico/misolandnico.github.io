window.onload = function () {
  var userLang = navigator.language || navigator.userLanguage;
  var lang = Object.keys(languageContent).find((v) => userLang.includes(v));
  if (lang) {
    for (let key in languageContent[lang]) {
      document.getElementById(key).innerHTML = languageContent[lang][key];
      // document.getElementById("date-container").innerHTML =
      //   eventDate.toLocaleDateString(userLang, options);
      var dateTime = eventDate.toLocaleDateString(userLang, optionsLong);
      dateTime = dateTime.charAt(0).toUpperCase() + dateTime.slice(1);
      document.getElementById("date-container-long").innerHTML = dateTime;
    }
  } else {
    for (let key in languageContent["en"]) {
      document.getElementById(key).innerHTML = languageContent["en"][key];
      // document.getElementById("date-container").innerHTML =
      //   eventDate.toLocaleDateString("en", options);
      var dateTime = eventDate.toLocaleDateString("en", optionsLong);
      dateTime = dateTime.charAt(0).toUpperCase() + dateTime.slice(1);
      document.getElementById("date-container-long").innerHTML = dateTime;
    }
  }
};

function changeLanguage(lang) {
  for (let key in languageContent[lang]) {
    document.getElementById(key).innerHTML = languageContent[lang][key];
    // document.getElementById("date-container").innerHTML =
    //   eventDate.toLocaleDateString(lang, options);

    var dateTime = eventDate.toLocaleDateString(lang, optionsLong);
    dateTime = dateTime.charAt(0).toUpperCase() + dateTime.slice(1);
    document.getElementById("date-container-long").innerHTML = dateTime;
    document.getElementById("rsvp-form").href =
      "https://misolandnico.anrsvp.com/" + lang;
  }
}

const eventDate = new Date(Date.UTC(2024, 11, 15, 0, 0, 0));
const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
};
const optionsLong = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

let languageContent = {
  en: {
    "our-story-headline": "Our Story",
    "our-story-text":
      " Maecenas eget lectus mauris. Donec in venenatis ipsum. Etiam mattis mattis varius. Quisque quis consequat augue. Proin sed lorem euismod purus ultricies mollis. Integer mi libero, auctor vitae dapibus nec, viverra aliquet sem. Morbi eget urna sollicitudin, vestibulum nisi quis, iaculis justo. Suspendisse non urna bibendum, imperdiet augue non, cursus elit. Donec elit lacus, commodo vitae blandit et, gravida vitae felis. Morbi sit amet sapien ut lorem vehicula viverra at ut leo. Cras quis sagittis risus. Donec semper mauris suscipit, egestas nisi sit amet, suscipit nisi. Vivamus eu nulla a augue eleifend vulputate at ac magna.<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ligula consectetur, consectetur mi in, interdum nibh. Donec est dolor, ornare in felis ac, tempor scelerisque massa. Nam dictum dolor convallis, finibus risus vel, sollicitudin ex. Phasellus posuere mattis semper. Fusce et bibendum elit. Integer pharetra arcu non dolor consectetur gravida. Donec posuere aliquet sem, in varius ipsum viverra nec. Proin rhoncus bibendum dui non semper. Aenean eu justo egestas, fringilla lacus eu, sagittis augue. Etiam sit amet lorem imperdiet, ultricies ligula ac, gravida mauris. Nunc et diam lorem. Nam est dolor, ultricies non egestas et, semper ut felis. Nullam posuere rutrum diam, et sodales ex condimentum quis.<br />Pellentesque et ligula sollicitudin, consectetur ante quis, pellentesque tortor. Nullam non neque arcu. Nunc consequat lacinia tortor, ac dictum tortor commodo ac. Nunc quis dictum dolor. Etiam ut nibh dapibus, vestibulum augue condimentum, interdum est. Fusce semper, leo eu blandit iaculis, massa risus ullamcorper orci, non pellentesque ante tellus vitae justo. Nullam porttitor arcu vitae lacus euismod, luctus commodo erat blandit.",
    "the-wedding-headline": "The Wedding",
    "address-text": "Tablaje, 3610 Hacienda, 97347 Kantoyna, Yuc.",
    "location-kantoyna": "Hacienda Santa Lucía Kantoyna",
    "rsvp-section-text": "To register please click here:",
    "how-to-get-to-the-venue-headline": "How to get to the venue?",
    "how-to-get-to-the-venue-text":
      "Maecenas eget lectus mauris. Donec in venenatis ipsum. Etiam mattis mattis varius. Quisque quis consequat augue.<br/>Maecenas eget lectus mauris. Donec in venenatis ipsum. Etiam mattis mattis varius. Quisque quis consequat augue.",
    "where-to-stay-headline": "Where to stay?",
    "where-to-stay-text":
      "Maecenas eget lectus mauris. Donec in venenatis ipsum. Etiam mattis mattis varius. Quisque quis consequat augue.",
    "rsvp-text": "Register here",
    "rsvp-text-big": "Register here",
  },
  de: {
    "our-story-headline": "Unsere Geschichte",
    "our-story-text":
      " Maecenas eget lectus mauris. Donec in venenatis ipsum. Etiam mattis mattis varius. Quisque quis consequat augue. Proin sed lorem euismod purus ultricies mollis. Integer mi libero, auctor vitae dapibus nec, viverra aliquet sem. Morbi eget urna sollicitudin, vestibulum nisi quis, iaculis justo. Suspendisse non urna bibendum, imperdiet augue non, cursus elit. Donec elit lacus, commodo vitae blandit et, gravida vitae felis. Morbi sit amet sapien ut lorem vehicula viverra at ut leo. Cras quis sagittis risus. Donec semper mauris suscipit, egestas nisi sit amet, suscipit nisi. Vivamus eu nulla a augue eleifend vulputate at ac magna.<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ligula consectetur, consectetur mi in, interdum nibh. Donec est dolor, ornare in felis ac, tempor scelerisque massa. Nam dictum dolor convallis, finibus risus vel, sollicitudin ex. Phasellus posuere mattis semper. Fusce et bibendum elit. Integer pharetra arcu non dolor consectetur gravida. Donec posuere aliquet sem, in varius ipsum viverra nec. Proin rhoncus bibendum dui non semper. Aenean eu justo egestas, fringilla lacus eu, sagittis augue. Etiam sit amet lorem imperdiet, ultricies ligula ac, gravida mauris. Nunc et diam lorem. Nam est dolor, ultricies non egestas et, semper ut felis. Nullam posuere rutrum diam, et sodales ex condimentum quis.<br />Pellentesque et ligula sollicitudin, consectetur ante quis, pellentesque tortor. Nullam non neque arcu. Nunc consequat lacinia tortor, ac dictum tortor commodo ac. Nunc quis dictum dolor. Etiam ut nibh dapibus, vestibulum augue condimentum, interdum est. Fusce semper, leo eu blandit iaculis, massa risus ullamcorper orci, non pellentesque ante tellus vitae justo. Nullam porttitor arcu vitae lacus euismod, luctus commodo erat blandit.",
    "the-wedding-headline": "Die Hochzeit",
    "address-text": "Tablaje, 3610 Hacienda, 97347 Kantoyna, Yuc.",
    "location-kantoyna": "Hacienda Santa Lucía Kantoyna",
    "rsvp-section-text": "",
    "how-to-get-to-the-venue-headline": "How to get to the venue",
    "how-to-get-to-the-venue-text": "How to get to the venue text",
    "where-to-stay-headline": "Where to stay?",
    "where-to-stay-text": "Where to stay text",
    "rsvp-text": "Register here",
    "rsvp-text-big": "Register here",
  },
  es: {
    "our-story-headline": "Nuestra historia",
    "our-story-text":
      " Maecenas eget lectus mauris. Donec in venenatis ipsum. Etiam mattis mattis varius. Quisque quis consequat augue. Proin sed lorem euismod purus ultricies mollis. Integer mi libero, auctor vitae dapibus nec, viverra aliquet sem. Morbi eget urna sollicitudin, vestibulum nisi quis, iaculis justo. Suspendisse non urna bibendum, imperdiet augue non, cursus elit. Donec elit lacus, commodo vitae blandit et, gravida vitae felis. Morbi sit amet sapien ut lorem vehicula viverra at ut leo. Cras quis sagittis risus. Donec semper mauris suscipit, egestas nisi sit amet, suscipit nisi. Vivamus eu nulla a augue eleifend vulputate at ac magna.<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ligula consectetur, consectetur mi in, interdum nibh. Donec est dolor, ornare in felis ac, tempor scelerisque massa. Nam dictum dolor convallis, finibus risus vel, sollicitudin ex. Phasellus posuere mattis semper. Fusce et bibendum elit. Integer pharetra arcu non dolor consectetur gravida. Donec posuere aliquet sem, in varius ipsum viverra nec. Proin rhoncus bibendum dui non semper. Aenean eu justo egestas, fringilla lacus eu, sagittis augue. Etiam sit amet lorem imperdiet, ultricies ligula ac, gravida mauris. Nunc et diam lorem. Nam est dolor, ultricies non egestas et, semper ut felis. Nullam posuere rutrum diam, et sodales ex condimentum quis.<br />Pellentesque et ligula sollicitudin, consectetur ante quis, pellentesque tortor. Nullam non neque arcu. Nunc consequat lacinia tortor, ac dictum tortor commodo ac. Nunc quis dictum dolor. Etiam ut nibh dapibus, vestibulum augue condimentum, interdum est. Fusce semper, leo eu blandit iaculis, massa risus ullamcorper orci, non pellentesque ante tellus vitae justo. Nullam porttitor arcu vitae lacus euismod, luctus commodo erat blandit.",
    "the-wedding-headline": "La Boda",
    "address-text": "Tablaje, 3610 Hacienda, 97347 Kantoyna, Yuc.",
    "location-kantoyna": "Hacienda Santa Lucía Kantoyna",
    "rsvp-section-text": "",
    "how-to-get-to-the-venue-headline": "How to get to the venue",
    "how-to-get-to-the-venue-text": "How to get to the venue text",
    "where-to-stay-headline": "Where to stay?",
    "where-to-stay-text": "Where to stay text",
    "rsvp-text": "Register here",
    "rsvp-text-big": "Register here",
  },
};
