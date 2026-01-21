const flashcards = [
  // --- PYTANIE 3: METODY WZMACNIANIA ---
  {
    cat: 'Zagęszczanie',
    q: 'Metoda Menarda - mechanizm i grunt?',
    a: 'Zrzucanie ciężarów (10-30 t) z wysokości do 30 m. Stosowana dla GRUNTÓW NIESPOISTYCH. Dogęszcza falą uderzeniową.',
  },
  {
    cat: 'Zagęszczanie',
    q: 'Walce inne niż cylindryczne (wieloboczne)?',
    a: 'Działają przez dynamiczny nacisk punktowy i uderzenia, co pozwala na głębsze zagęszczenie warstw nasypu niż walce gładkie.',
  },
  {
    cat: 'Zagęszczanie',
    q: 'Zagęszczanie impulsowe (RIC)?',
    a: 'Szybkie uderzenia młota hydraulicznego w stalową stopę na gruncie. Skuteczne do ok. 4-6 m głębokości.',
  },
  {
    cat: 'Zagęszczanie',
    q: 'Wibroflotacja?',
    a: "Metoda wgłębna dla piasków. Wibrator i płuczka 'rozpłynniają' ziarna, wymuszając ich ciasne upakowanie.",
  },
  {
    cat: 'Zagęszczanie',
    q: 'Zagęszczanie wybuchami?',
    a: 'Stosowane w nawodnionych piaskach luźnych. Detonacja wgłębna powoduje upłynnienie i gwałtowne osiadanie gruntu.',
  },
  {
    cat: 'Wymiana',
    q: 'Kolumny GEC - rola geotkaniny?',
    a: "Zamyka piasek w 'rurze', ograniczając jego boczne rozpieranie. Pozwala kolumnie pracować w miękkich torfach/namułach.",
  },
  {
    cat: 'Wymiana',
    q: 'Wymiana dynamiczna?',
    a: 'Wybijanie kraterów ciężarem i wypełnianie ich kruszywem, tworząc wielkośrednicowe kolumny kamienne w słabym gruncie.',
  },
  {
    cat: 'Prekonsolidacja',
    q: 'Dreny pionowe (taśmowe) - po co?',
    a: 'Skracają drogę odpływu wody w GRUNTACH SPOISTYCH (gliny/iły). Przyspieszają osiadanie z lat do miesięcy.',
  },
  {
    cat: 'Prekonsolidacja',
    q: 'Elektroosmoza?',
    a: 'Prąd stały wymusza ruch wody w mikroporach IŁÓW w stronę katody, przyspieszając ich osuszanie.',
  },
  {
    cat: 'Cementacja',
    q: 'Nasycanie vs Szczelinowanie?',
    a: "Nasycanie: wypełnianie wolnych porów (żwiry). Szczelinowanie: rozrywanie gruntu ciśnieniem i tworzenie 'żył' betonowych.",
  },
  {
    cat: 'Cementacja',
    q: 'Iniekcja zagęszczająca (Compaction Grouting)?',
    a: "Gęsta mieszanka tworzy 'balon', który nie miesza się z gruntem, ale go mechanicznie rozpiera i dogęszcza.",
  },
  {
    cat: 'Cementacja',
    q: 'Jet-grouting (Metoda niszczenia)?',
    a: 'Struga pod ogromnym ciśnieniem całkowicie niszczy strukturę gruntu, mieszając go z cementem w kolumnę.',
  },
  {
    cat: 'Cementacja',
    q: 'Kolumny DSM?',
    a: "Mechaniczne mieszanie gruntu świdrem z zaczynem cementowym 'in situ' (bez niszczenia strugą pod ciśnieniem).",
  },

  // --- PYTANIE 2: GEOSYNTETYKI ---
  {
    cat: 'Geosyntetyki',
    q: 'Geowłókniny vs Geotkaniny?',
    a: 'Włókniny: włókna łączone igłowaniem/termicznie (filtracja/separacja). Tkaniny: tkane (wysoka wytrzymałość na rozciąganie).',
  },
  {
    cat: 'Geosyntetyki',
    q: 'Georuszty - główna funkcja?',
    a: 'ZBROJENIE. Oczka blokują ziarna kruszywa (interlocking), co drastycznie zwiększa nośność podłoża.',
  },
  {
    cat: 'Geosyntetyki',
    q: 'Geomembrany?',
    a: 'Całkowita nieprzepuszczalność. Służą jako bariery dla cieczy i gazów (np. na wysypiskach).',
  },
  {
    cat: 'Geosyntetyki',
    q: 'Bariery iłowe (GCL)?',
    a: 'Bentonit między dwiema warstwami geowłókniny. Pęcznieje pod wpływem wody, tworząc szczelną barierę.',
  },
  {
    cat: 'Geosyntetyki',
    q: 'Zastosowanie Geomat?',
    a: 'Ochrona przeciwerozyjna skarp i zboczy przed spływem powierzchniowym wody.',
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
