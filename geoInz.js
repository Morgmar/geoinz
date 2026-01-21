const flashcards = [
  // --- PYTANIE 1: ZBROJENIE USKOKU NAZIOMU ---
  {
    cat: 'Zbrojenie',
    q: 'Metody prętowe - co wchodzi w skład?',
    a: 'Taśmy, gwoździe gruntowe (pręty stabilizujące skarpę), kotwy oraz mikropale (przenoszące obciążenia na głębsze warstwy).',
  },
  {
    cat: 'Zbrojenie',
    q: 'Metody przeponowe - materiały?',
    a: 'Geotkaniny i georuszty układane warstwowo wewnątrz nasypu.',
  },
  {
    cat: 'Zbrojenie',
    q: 'Metody szkieletowe - rodzaje?',
    a: 'Kaszyce (drewniane skrzynie) i gabiony (kosze stalowe wypełnione kamieniem).',
  },
  {
    cat: 'Zbrojenie',
    q: 'Co to jest TEXSOL?',
    a: "Mieszanka piasku i ciągłych włókien syntetycznych, która 'zszywa' ziarna, dając gruntowi spójność.",
  },
  {
    cat: 'Zbrojenie',
    q: 'Co to jest PNEUSOL?',
    a: 'Metoda zbrojenia gruntu przy użyciu zużytych opon samochodowych (całych lub pociętych).',
  },

  // --- PYTANIE 2: CHARAKTERYSTYKA I ZASTOSOWANIE GEOSYNTETYKÓW ---
  {
    cat: 'Geosyntetyki',
    q: 'Geowłókniny vs Geotkaniny?',
    a: 'Włókniny: filtracja i separacja (włókna łączone mechanicznie/termicznie). Tkaniny: wzmacnianie (tkane, wysoka wytrzymałość).',
  },
  {
    cat: 'Geosyntetyki',
    q: 'Co to są Geodzianiny i Geomat?',
    a: 'Dzianiny: drenaż i wzmacnianie (struktury oczkowe). Maty: ochrona przeciwerozyjna skarp przed spływem wody.',
  },
  {
    cat: 'Geosyntetyki',
    q: 'Georuszty drenażowe vs Geosiatki?',
    a: 'Ruszty drenażowe: odprowadzanie wody w płaszczyźnie. Siatki: wzmacnianie warstw asfaltowych.',
  },
  {
    cat: 'Geosyntetyki',
    q: 'Geomembrany vs Bariery iłowe (GCL)?',
    a: 'Geomembrany: arkusze tworzywa. GCL: bentonit między geowłókninami (pęcznieje tworząc uszczelnienie).',
  },

  // --- PYTANIE 3: METODY WZMACNIANIA PODŁOŻA ---
  // SEKCJA: ZAGĘSZCZANIE (GRUNTY NIESPOISTE)
  {
    cat: 'Zagęszczanie',
    q: 'Menard, RIC, wibroflotacja, wybuchy - jakie grunty?',
    a: 'Stosowane wyłącznie dla GRUNTÓW NIESPOISTYCH (piaski, żwiry). Wykorzystują dużą przepuszczalność gruntu.',
  },
  {
    cat: 'Zagęszczanie',
    q: 'Mechanizm metody Menarda i RIC?',
    a: 'Menard: zrzucanie ciężarów (fala uderzeniowa). RIC (impulsowe): szybkie uderzenia młota hydraulicznego w stopę.',
  },
  {
    cat: 'Zagęszczanie',
    q: 'Wibroflotacja i walce inne niż cylindryczne?',
    a: 'Wibroflotacja: wibrator wgłębny + płuczka. Walce wieloboczne: dynamiczny nacisk punktowy na nasyp.',
  },

  // SEKCJA: WYMIANA (GRUNTY SŁABE I ORGANICZNE)
  {
    cat: 'Wymiana',
    q: 'Pale piaskowe i Kolumny GEC - jakie grunty?',
    a: 'Dla GRUNTÓW ORGANICZNYCH i SŁABYCH (torfy, namuły). GEC posiada otulinę, która ogranicza boczne rozpieranie.',
  },
  {
    cat: 'Wymiana',
    q: 'Wymiana dynamiczna i materace?',
    a: 'Wymiana dynamiczna: wybicie kraterów i wbicie kruszywa. Materace: warstwy kruszywa z georusztem pod nasypem.',
  },

  // SEKCJA: PREKONSOLIDACJA (GRUNTY SPOISTE)
  {
    cat: 'Prekonsolidacja',
    q: 'Dreny taśmowe i Elektroosmoza - jakie grunty?',
    a: 'Dla GRUNTÓW SPOISTYCH (gliny, iły). Przyspieszają wyciskanie wody z porów (elektroosmoza używa prądu).',
  },

  // SEKCJA: CEMENTACJA I DSM (RÓŻNE GRUNTY)
  {
    cat: 'Cementacja',
    q: 'Nasycanie vs Szczelinowanie vs Zagęszczanie?',
    a: 'Nasycanie: pory (żwiry). Szczelinowanie: rozrywanie (gliny). Zagęszczanie: balon z gęstej mieszanki rozpierający grunt.',
  },
  {
    cat: 'Cementacja',
    q: 'Jet-grouting (metoda niszczenia) - jakie grunty?',
    a: 'Metoda UNIWERSALNA (każdy grunt). Struga pod wysokim ciśnieniem niszczy strukturę i tworzy gruntobeton.',
  },
  {
    cat: 'Cementacja',
    q: 'Kolumny DSM - jakie grunty?',
    a: 'Grunty słabe, spoiste i organiczne. Mechaniczne mieszanie gruntu z cementem bez usuwania urobku.',
  },
];

let currentIdx = 0;
const card = document.getElementById('card');
const qElem = document.getElementById('question');
const aElem = document.getElementById('answer');
const catElem = document.getElementById('cat');
const counterElem = document.getElementById('counter');

function updateUI() {
  card.classList.remove('flipped');
  setTimeout(() => {
    qElem.innerText = flashcards[currentIdx].q;
    aElem.innerText = flashcards[currentIdx].a;
    catElem.innerText = flashcards[currentIdx].cat;
    counterElem.innerText = `Fiszka ${currentIdx + 1} / ${flashcards.length}`;
  }, 200);
}

function flipCard() {
  card.classList.toggle('flipped');
}

function nextCard() {
  currentIdx = (currentIdx + 1) % flashcards.length;
  updateUI();
}

function prevCard() {
  currentIdx = (currentIdx - 1 + flashcards.length) % flashcards.length;
  updateUI();
}

function shuffleCards() {
  flashcards.sort(() => Math.random() - 0.5);
  currentIdx = 0;
  updateUI();
}

// Inicjalizacja
updateUI();
