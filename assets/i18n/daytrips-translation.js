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
  },
  es: {
    "back-text": "Atras",
  },
};
