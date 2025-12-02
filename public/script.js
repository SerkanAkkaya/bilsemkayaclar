// ==== Bölüm ve soru verileri ====
// type: "info" | "planet" | "chance"
// image: "assets/..." (opsiyonel)

const sections = [
  {
    id: "rocks",
    title: "Kayaçlar Galerisi",
    subtitle: "Magmatik, tortul ve metamorfik kayaçlar",
    questions: [
      {
        type: "info",
        image: "assets/rocks1.svg",
        question: "Aşağıdakilerden hangisi bir magmatik (igneous) kayaçtır?",
        options: ["Kumtaşı", "Mermer", "Bazalt", "Konglomera"],
        correctIndex: 2,
      },
      {
        type: "info",
        image: "assets/rocks2.svg",
        question: "Tortul (sedimanter) kayaçlar genellikle nasıl oluşur?",
        options: [
          "Lavın hızlı soğumasıyla",
          "Katmanlar halinde biriken parçacıkların sıkışmasıyla",
          "Mevcut kayaçların erimesiyle",
          "Yalnızca volkan içinde",
        ],
        correctIndex: 1,
      },
      {
        type: "info",
        question:
          "Başkalaşım (metamorfik) kayaçların oluşmasında en önemli iki etken nedir?",
        options: [
          "Rüzgâr ve yağmur",
          "Isı ve basınç",
          "Manyetizma ve elektrik",
          "Işık ve ses",
        ],
        correctIndex: 1,
      },
      {
        type: "info",
        image: "assets/rocks3.svg",
        question:
          "Aşağıdaki kayaçlardan hangisi genellikle mutfak tezgâhlarında kullanılır?",
        options: ["Tebeşir", "Kömür", "Granit", "Kumtaşı"],
        correctIndex: 2,
      },
      {
        type: "info",
        question:
          "Kayaç döngüsünde magmanın katılaşmasıyla hangi kayaç türü oluşur?",
        options: ["Tortul", "Magmatik", "Başkalaşım", "Fosil"],
        correctIndex: 1,
      },
      {
        type: "info",
        image: "assets/rocks2.svg",
        question: "Aşağıdakilerden hangisi bir tortul kayaç örneğidir?",
        options: ["Obsidyen", "Kumtaşı", "Granit", "Gnays"],
        correctIndex: 1,
      },
      // Gezegen sorusu
      {
        type: "planet",
        image: "assets/planet1.svg",
        question:
          "Dünyanın kabuğundaki kayaçlar en çok hangi gezegende gözlenen katı yüzey kayaçlarına benzer?",
        options: ["Jüpiter", "Mars", "Neptün", "Uranüs"],
        correctIndex: 1,
      },
      // Şans sorusu
      {
        type: "chance",
        question:
          "Şans Sorusu: Kayaçlarla ilgili hangi cümle daha doğrudur?",
        options: [
          "Tüm kayaçlar aynı süreçle oluşur.",
          "Kayaçlar asla değişmez.",
          "Kayaçlar zamanla bir türden diğerine dönüşebilir.",
          "Kayaçlar sadece denizlerde oluşur.",
        ],
        correctIndex: 2,
      },
      // Ek resimli bilgi soruları
      {
        type: "info",
        image: "assets/rocks1.svg",
        question:
          "Aşağıdaki kayaçlardan hangisi lavın çok hızlı soğumasıyla oluşan cam gibi parlak bir kayaçtır?",
        options: ["Şeyl", "Obsidyen", "Mermer", "Kireçtaşı"],
        correctIndex: 1,
      },
      {
        type: "info",
        image: "assets/rocks3.svg",
        question:
          "Aşağıdaki kayaç türlerinden hangisi genellikle katmanlı bir yapıya sahiptir?",
        options: ["Kumtaşı", "Granit", "Obsidyen", "Diorit"],
        correctIndex: 0,
      },
    ],
  },
  {
    id: "minerals",
    title: "Madenler Galerisi",
    subtitle: "Minerallerin özellikleri ve kullanımları",
    questions: [
      {
        type: "info",
        image: "assets/mineral1.svg",
        question: "Mineral nedir?",
        options: [
          "Yer altındaki herhangi bir sıvı",
          "Doğada oluşan, inorganik, kristal yapılı katı bir madde",
          "Herhangi bir kaya parçası",
          "Her parlak görünen nesne",
        ],
        correctIndex: 1,
      },
      {
        type: "info",
        question:
          "Bir mineralin ne kadar kolay çizilebildiğini açıklayan özellik hangisidir?",
        options: ["Renk", "Sertlik", "Çizgi (streak)", "Parlaklık (luster)"],
        correctIndex: 1,
      },
      {
        type: "info",
        image: "assets/mineral2.svg",
        question: "Mohs ölçeği hangi mineral özelliğini ölçer?",
        options: ["Sıcaklık", "Sertlik", "Yaş", "Yoğunluk"],
        correctIndex: 1,
      },
      {
        type: "info",
        question:
          "Bir mineralin parlak, mat veya metalik görünmesini tanımlayan özellik hangisidir?",
        options: ["Parlaklık (luster)", "Çizgi (streak)", "Dilime ayrılma", "Renk"],
        correctIndex: 0,
      },
      {
        type: "info",
        image: "assets/mineral1.svg",
        question:
          "Sofra tuzu olarak kullanılan ve kimyasal formülü NaCl olan mineral hangisidir?",
        options: ["Kuvars", "Halit", "Kalsit", "Fluorit"],
        correctIndex: 1,
      },
      {
        type: "info",
        question: "Bir mineralin çizgi (streak) özelliği neyi ifade eder?",
        options: [
          "Kristal şeklinin uzunluğunu",
          "Porselen plaka üzerindeki toz halindeki rengini",
          "Yüzeydeki çizgilerin sayısını",
          "Mineralin ağırlığını",
        ],
        correctIndex: 1,
      },
      {
        type: "planet",
        image: "assets/planet1.svg",
        question:
          "Ay yüzeyinde bulunan ve Dünya'da da kullanılan koyu renkli, demir ve magnezyum içeren mineral grubu hangisidir?",
        options: ["Feldispat", "Olivin", "Halit", "Tebeşir"],
        correctIndex: 1,
      },
      {
        type: "chance",
        question:
          "Şans Sorusu: Günlük hayatta aşağıdakilerden hangisi mineral içermez?",
        options: ["Cam bardak", "Kâğıt", "Cep telefonu", "Diş macunu"],
        correctIndex: 1,
      },
      {
        type: "info",
        image: "assets/mineral2.svg",
        question:
          "Aşağıdaki minerallerden hangisi bebek pudrasında kullanılan çok yumuşak bir mineraldir?",
        options: ["Talk", "Elmas", "Feldispat", "Manyetit"],
        correctIndex: 0,
      },
      {
        type: "info",
        image: "assets/mineral1.svg",
        question:
          "Cep telefonlarının elektronik devrelerinde hangi tür mineraller en çok kullanılır?",
        options: [
          "Sadece süs taşları",
          "Metalik mineraller ve nadir toprak elementleri",
          "Yalnızca halit",
          "Sadece tuz mineralleri",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: "planets",
    title: "Gezegenler Vadisi",
    subtitle: "Gezegenlerin yapısı ve kayaç/maden ilişkisi",
    questions: [
      {
        type: "info",
        image: "assets/planet1.svg",
        question:
          "Hangi gezegen, yüzeyinde en çok krater ve kayaç yapılarıyla bilinir?",
        options: ["Venüs", "Mars", "Merkür", "Jüpiter"],
        correctIndex: 2,
      },
      {
        type: "info",
        question:
          "Dünya'nın hangi katmanında çoğunlukla demir ve nikel gibi metaller bulunur?",
        options: ["Kabuk", "Manto", "Çekirdek", "Atmosfer"],
        correctIndex: 2,
      },
      {
        type: "info",
        image: "assets/planet1.svg",
        question:
          "Mars yüzeyindeki kızıl rengin temel nedeni hangi element içeriğidir?",
        options: ["Bakır bileşikleri", "Demir oksit (pas)", "Altın tozu", "Sodyum klorür"],
        correctIndex: 1,
      },
      {
        type: "info",
        question:
          "Aşağıdakilerden hangisi kayaç gezegen (terrestrial planet) değildir?",
        options: ["Dünya", "Venüs", "Neptün", "Mars"],
        correctIndex: 2,
      },
      {
        type: "info",
        image: "assets/rocks1.svg",
        question:
          "Dünya'nın kabuğu esas olarak hangi tür maddelerden oluşur?",
        options: [
          "Gazlar ve buzlar",
          "Metaller ve plastikler",
          "Silisyum ve oksijen içeren kayaç ve mineraller",
          "Sadece su",
        ],
        correctIndex: 2,
      },
      {
        type: "info",
        question:
          "Ay'dan getirilen kaya örnekleri, bilim insanlarına neyi anlamada yardımcı olmuştur?",
        options: [
          "Ay'daki hayvan türlerini",
          "Ay'ın yaşını ve oluşum sürecini",
          "Ay'ın internet hızını",
          "Ay'daki bitki çeşitliliğini",
        ],
        correctIndex: 1,
      },
      {
        type: "planet",
        image: "assets/planet1.svg",
        question:
          "Güneş sisteminde, yüzeyinde hem buz hem kayaç bulunan ve cüce gezegen olarak adlandırılan gök cismi hangisidir?",
        options: ["Plüton", "Mars", "Satürn", "Merkür"],
        correctIndex: 0,
      },
      {
        type: "chance",
        question:
          "Şans Sorusu: Hangi gezegenin uydusu, buzlu yüzeyinin altında okyanus barındırdığı için yaşam ihtimali açısından ilgi çekmektedir?",
        options: ["Dünya'nın Ay'ı", "Europa", "Titan", "Ganymede"],
        correctIndex: 1,
      },
      {
        type: "info",
        image: "assets/rocks2.svg",
        question:
          "Dünya'nın kayaç kabuğunda en çok bulunan element çifti hangisidir?",
        options: [
          "Demir ve karbon",
          "Silisyum ve oksijen",
          "Altın ve gümüş",
          "Bakır ve nikel",
        ],
        correctIndex: 1,
      },
      {
        type: "info",
        image: "assets/rocks3.svg",
        question:
          "Bazı göktaşları Dünya'ya düştüğünde, içerdikleri madenler nedeniyle neden değerlidir?",
        options: [
          "Sadece süslü göründükleri için",
          "Çoğunlukla plastik içerdiği için",
          "Nadir metaller ve mineraller taşıdıkları için",
          "Sadece hafif oldukları için",
        ],
        correctIndex: 2,
      },
    ],
  },
  {
    id: "sustainability",
    title: "Sürdürülebilirlik Alanları",
    subtitle: "Doğal kaynakların bilinçli kullanımı",
    questions: [
      {
        type: "info",
        image: "assets/sustain1.svg",
        question: "Sürdürülebilirlik ne anlama gelir?",
        options: [
          "Kaynakları hızlıca tüketmek",
          "Doğal kaynakları gelecek nesilleri de düşünerek kullanmak",
          "Sadece yeni teknolojiler kullanmak",
          "Yalnızca para biriktirmek",
        ],
        correctIndex: 1,
      },
      {
        type: "info",
        question: "Aşağıdakilerden hangisi sürdürülebilir bir davranıştır?",
        options: [
          "Gereksiz yere ışıkları açık bırakmak",
          "Her gün tek kullanımlık plastik şişe almak",
          "Geri dönüşüme uygun atıkları ayrıştırmak",
          "Çöpleri doğaya atmak",
        ],
        correctIndex: 2,
      },
      {
        type: "info",
        image: "assets/sustain1.svg",
        question:
          "Madenlerin ve kayaçların aşırı ve plansız çıkarılmasının sonucu ne olabilir?",
        options: [
          "Daha temiz hava",
          "Toprak erozyonu ve doğa tahribatı",
          "Bol oksijen üretimi",
          "Daha fazla orman",
        ],
        correctIndex: 1,
      },
      {
        type: "info",
        question:
          "Aşağıdakilerden hangisi yenilenebilir enerji kaynağıdır?",
        options: ["Kömür", "Doğal gaz", "Rüzgâr", "Petrol"],
        correctIndex: 2,
      },
      {
        type: "info",
        image: "assets/daily1.svg",
        question:
          "Geri dönüşüm kutularına atılması en doğru olan seçenek hangisidir?",
        options: [
          "Cam şişe ve metal kutular",
          "Evdeki organik yemek artıkları",
          "Toprak ve taşlar",
          "Her türlü çöp",
        ],
        correctIndex: 0,
      },
      {
        type: "info",
        question:
          "Aşağıdakilerden hangisi su tasarrufu sağlayan bir davranıştır?",
        options: [
          "Diş fırçalarken musluğu açık bırakmak",
          "Uzun süre duşta kalmak",
          "Bozulan musluğu tamir ettirmek",
          "Bahçeyi öğle saatinde bol suyla sulamak",
        ],
        correctIndex: 2,
      },
      {
        type: "planet",
        image: "assets/planet1.svg",
        question:
          "Bilim insanları neden diğer gezegenlerde su ve maden arıyor?",
        options: [
          "Gezegenleri süslemek için",
          "Yeni tatiller planlamak için",
          "Yaşam ihtimali ve kaynak kullanımı açısından bilgi edinmek için",
          "Gezegenleri boyamak için",
        ],
        correctIndex: 2,
      },
      {
        type: "chance",
        question:
          "Şans Sorusu: Aşağıdakilerden hangisi en az çevre dostu seçenektir?",
        options: [
          "Bez çanta kullanmak",
          "Plastik poşetleri tekrar tekrar kullanmak",
          "Her alışverişte yeni plastik poşet almak",
          "Metal matara ile su taşımak",
        ],
        correctIndex: 2,
      },
      {
        type: "info",
        image: "assets/sustain1.svg",
        question:
          "Madenleri sürdürülebilir kullanmak için hangi yöntem daha uygundur?",
        options: [
          "Sadece kolay ulaşılabilen madenleri kazmak",
          "Madenleri geri dönüştürerek tekrar kullanmak",
          "Tüm madenleri aynı anda çıkarmak",
          "Yer altını tamamen boşaltmak",
        ],
        correctIndex: 1,
      },
      {
        type: "info",
        image: "assets/daily1.svg",
        question:
          "Bir okulda sürdürülebilirlik projesi yaparken ilk adım ne olabilir?",
        options: [
          "Okuldaki tüm ağaçları kesmek",
          "Geri dönüşüm ve enerji tasarrufu afişleri hazırlamak",
          "Sınıflarda ışıkları sürekli açık bırakmak",
          "Plastik kullanımını artırmak",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: "daily",
    title: "Günlük Hayat Noktası",
    subtitle: "Günlük hayattaki kayaç ve madenler",
    questions: [
      {
        type: "info",
        image: "assets/daily1.svg",
        question:
          "Aşağıdakilerden hangisi günlük hayatta kullandığımız bir kayaç ürünüdür?",
        options: ["Plastik sandalye", "Taş zemin döşemesi (mermer)", "Kâğıt peçete", "Pamuklu tişört"],
        correctIndex: 1,
      },
      {
        type: "info",
        question: "Cam yapımında en çok hangi malzeme kullanılır?",
        options: ["Kum (silis)", "Kil", "Odun", "Petrol"],
        correctIndex: 0,
      },
      {
        type: "info",
        image: "assets/mineral1.svg",
        question:
          "Diş macununda hangi mineral türü sıklıkla kullanılır?",
        options: ["Altın", "Fluorit ve kalsiyum bileşikleri", "Kömür", "Kuvars kristali"],
        correctIndex: 1,
      },
      {
        type: "info",
        question:
          "Aşağıdakilerden hangisi metallerin günlük hayattaki kullanımına örnektir?",
        options: [
          "Sadece süs amaçlı kullanılır.",
          "Sadece müzelerde saklanır.",
          "Ev aletleri, kablolar ve araçların yapımında kullanılır.",
          "Hiç kullanılmaz.",
        ],
        correctIndex: 2,
      },
      {
        type: "info",
        image: "assets/daily1.svg",
        question:
          "Yazı yazmak için kullandığımız kurşun kalem ucunda aslında hangi mineral vardır?",
        options: ["Elmas", "Grafit", "Altın", "Gümüş"],
        correctIndex: 1,
      },
      {
        type: "info",
        question:
          "Aşağıdakilerden hangisi kayaç ve madenlerin evimizdeki kullanımına örnek değildir?",
        options: [
          "Mutfak tezgâhı (granit/mermer)",
          "Seramik banyo fayansları",
          "Telefon elektronik devreleri",
          "Bulutların şekli",
        ],
        correctIndex: 3,
      },
      {
        type: "planet",
        image: "assets/planet1.svg",
        question:
          "Uzay araştırmalarında kullanılan roket ve uyduların yapımında neden hafif ve dayanıklı metaller tercih edilir?",
        options: [
          "Daha güzel göründükleri için",
          "Uzaya daha kolay çıkabilmeleri ve dayanıklı olmaları için",
          "Daha ucuz oldukları için",
          "Metaller uzayda erimediği için",
        ],
        correctIndex: 1,
      },
      {
        type: "chance",
        question:
          "Şans Sorusu: Aşağıdakilerden hangisi maden içeren teknolojik bir üründür?",
        options: ["Tahta masa", "Pamuklu yastık", "Akıllı telefon", "Defter"],
        correctIndex: 2,
      },
      {
        type: "info",
        image: "assets/mineral2.svg",
        question:
          "Altın ve gümüş gibi değerli metaller en çok hangi amaçla kullanılır?",
        options: [
          "Sadece sünger yapımında",
          "Takı, elektronik devreler ve yatırım amacıyla",
          "Yastık doldurmak için",
          "Sadece duvar boyasında",
        ],
        correctIndex: 1,
      },
      {
        type: "info",
        image: "assets/rocks1.svg",
        question:
          "Evlerin duvarlarında kullanılan çimento ve betonun ana hammaddesi hangisidir?",
        options: [
          "Toprak ve yaprak",
          "Kireçtaşı ve kil gibi kayaçlar",
          "Sadece su",
          "Sadece plastik",
        ],
        correctIndex: 1,
      },
    ],
  },
];

// Bölüm sırası (haritadaki yol)
const sectionOrder = sections.map((s) => s.id);

// ==== Durum değişkenleri ====
let currentSectionId = null;
let currentQuestionIndex = 0;
let tempScore = 0;
let hasAnsweredCurrent = false;

// Her bölüm için skor
const scores = {};
sections.forEach((s) => {
  scores[s.id] = null;
});

// ==== DOM referansları ====
const screens = {
  home: document.getElementById("screen-home"),
  quiz: document.getElementById("screen-quiz"),
  badge: document.getElementById("screen-badge"),
  escape: document.getElementById("screen-escape"),
};

const quizTitleEl = document.getElementById("quiz-title");
const quizSubtitleEl = document.getElementById("quiz-subtitle");
const questionTypePillEl = document.getElementById("question-type-pill");
const questionImageWrapperEl = document.getElementById("question-image-wrapper");
const questionImageEl = document.getElementById("question-image");
const questionTextEl = document.getElementById("question-text");
const optionsContainerEl = document.getElementById("options-container");
const progressBarEl = document.getElementById("progress-bar");
const progressTextEl = document.getElementById("progress-text");
const feedbackTextEl = document.getElementById("feedback-text");

const scoresListEl = document.getElementById("scores-list");
const lockMessageEl = document.getElementById("lock-message");

const badgeTitleEl = document.getElementById("badge-title");
const badgeScoreTextEl = document.getElementById("badge-score-text");
const badgeEmojiEl = document.getElementById("badge-emoji");
const badgeNameEl = document.getElementById("badge-name");
const badgeCircleEl = document.getElementById("badge-circle");

const escapeMessageEl = document.getElementById("escape-message");
const escapeCodeTextEl = document.getElementById("escape-code-text");
const rankTextEl = document.getElementById("rank-text");

// Butonlar
const btnNextQuestion = document.getElementById("btn-next-question");
const btnQuit = document.getElementById("btn-quit");
const btnCheckEscape = document.getElementById("btn-check-escape");
const btnBadgeHome = document.getElementById("btn-badge-home");
const btnBadgeEscape = document.getElementById("btn-badge-escape");
const btnEscapeHome = document.getElementById("btn-escape-home");

const mapNodeButtons = document.querySelectorAll(".map-node");

// ==== Yardımcı fonksiyonlar ====

function showScreen(name) {
  Object.values(screens).forEach((s) => s.classList.remove("active"));
  const screenEl = screens[name];
  if (screenEl) {
    screenEl.classList.add("active");
  }
}

function getSectionById(id) {
  return sections.find((s) => s.id === id);
}

function getCurrentQuestions() {
  const section = getSectionById(currentSectionId);
  return section ? section.questions : [];
}

function isSectionUnlocked(sectionId) {
  const index = sectionOrder.indexOf(sectionId);
  if (index === -1) return false;
  if (index === 0) return true; // ilk bölüm her zaman açık

  const prevId = sectionOrder[index - 1];
  return scores[prevId] !== null; // önceki bölüm bitmiş olmalı
}

function updateMapNodes() {
  mapNodeButtons.forEach((btn) => {
    const sectionId = btn.dataset.section;
    const index = sectionOrder.indexOf(sectionId);
    const score = scores[sectionId];

    btn.classList.remove("locked", "current", "done");

    if (score !== null) {
      btn.classList.add("done");
    } else if (isSectionUnlocked(sectionId)) {
      btn.classList.add("current");
    } else {
      btn.classList.add("locked");
    }

    // küçük label güncellemesini istersen buraya skor ekleyebilirsin
  });
}

function startSection(sectionId) {
  currentSectionId = sectionId;
  currentQuestionIndex = 0;
  tempScore = 0;
  hasAnsweredCurrent = false;
  lockMessageEl.textContent = "";

  const section = getSectionById(sectionId);
  quizTitleEl.textContent = section.title;
  quizSubtitleEl.textContent = section.subtitle;

  updateProgress();
  renderQuestion();
  feedbackTextEl.textContent = "";
  btnNextQuestion.disabled = true;

  showScreen("quiz");
}

function renderQuestion() {
  const questions = getCurrentQuestions();
  const q = questions[currentQuestionIndex];

  // Soru tipi etiketi
  if (q.type === "info") {
    questionTypePillEl.textContent = "Bilgi Sorusu";
  } else if (q.type === "planet") {
    questionTypePillEl.textContent = "Gezegen Sorusu";
  } else if (q.type === "chance") {
    questionTypePillEl.textContent = "Şans Sorusu";
  } else {
    questionTypePillEl.textContent = "";
  }

  // Görsel
  if (q.image) {
    questionImageWrapperEl.classList.remove("hidden");
    questionImageEl.src = q.image;
  } else {
    questionImageWrapperEl.classList.add("hidden");
    questionImageEl.src = "";
  }

  // Metin ve şıklar
  questionTextEl.textContent = q.question;
  optionsContainerEl.innerHTML = "";

  const letters = ["A", "B", "C", "D"];

  q.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.dataset.index = index;

    const letterSpan = document.createElement("span");
    letterSpan.className = "option-letter";
    letterSpan.textContent = letters[index];

    const textSpan = document.createElement("span");
    textSpan.className = "option-text";
    textSpan.textContent = opt;

    btn.appendChild(letterSpan);
    btn.appendChild(textSpan);

    btn.addEventListener("click", () => handleAnswer(index));

    optionsContainerEl.appendChild(btn);
  });
}

function handleAnswer(selectedIndex) {
  if (hasAnsweredCurrent) return;
  hasAnsweredCurrent = true;

  const questions = getCurrentQuestions();
  const currentQ = questions[currentQuestionIndex];

  const optionButtons = optionsContainerEl.querySelectorAll(".option-btn");
  optionButtons.forEach((btn) => {
    btn.classList.add("disabled");
  });

  const correctIndex = currentQ.correctIndex;

  optionButtons.forEach((btn) => {
    const idx = Number(btn.dataset.index);
    if (idx === correctIndex) {
      btn.classList.add("correct");
    }
    if (idx === selectedIndex && idx !== correctIndex) {
      btn.classList.add("incorrect");
    }
  });

  if (selectedIndex === correctIndex) {
    tempScore += 1;
    if (currentQ.type === "chance") {
      feedbackTextEl.textContent =
        "Şanslısın! Doğru cevap ve ekstra motivasyon! 🍀";
    } else {
      feedbackTextEl.textContent = "Doğru! Harika iş çıkardın. ✅";
    }
  } else {
    if (currentQ.type === "chance") {
      feedbackTextEl.textContent =
        "Bu sefer şans senden yana değildi, ama devam! 🙂";
    } else {
      feedbackTextEl.textContent = "Yanlış oldu, ama sorun değil. Devam! 🙂";
    }
  }

  btnNextQuestion.disabled = false;
}

function updateProgress() {
  const questions = getCurrentQuestions();
  const total = questions.length;
  const currentNumber = currentQuestionIndex + 1;

  const percent = (currentNumber / total) * 100;
  progressBarEl.style.width = percent + "%";
  progressTextEl.textContent = `Soru ${currentNumber} / ${total}`;
}

function nextQuestion() {
  const questions = getCurrentQuestions();
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex += 1;
    hasAnsweredCurrent = false;
    btnNextQuestion.disabled = true;
    feedbackTextEl.textContent = "";
    updateProgress();
    renderQuestion();
  } else {
    finishSection();
  }
}

function finishSection() {
  // Geçici skoru ilgili bölüme yaz
  scores[currentSectionId] = tempScore;
  updateScoresList();
  updateMapNodes();
  showBadgeScreen();
}

function updateScoresList() {
  scoresListEl.innerHTML = "";
  sections.forEach((section, idx) => {
    const li = document.createElement("li");
    const score = scores[section.id];
    const labelNumber = (idx + 1).toString().padStart(2, "0");
    if (score === null) {
      li.textContent = `${labelNumber} - ${section.title}: henüz oynanmadı`;
    } else {
      li.textContent = `${labelNumber} - ${section.title}: ${score} / ${section.questions.length} doğru`;
    }
    scoresListEl.appendChild(li);
  });
}

function calculateBadge(score, total) {
  if (score >= 8) {
    return "gold";
  } else if (score >= 5) {
    return "silver";
  } else {
    return "bronze";
  }
}

function showBadgeScreen() {
  const section = getSectionById(currentSectionId);
  const total = section.questions.length;
  const score = tempScore;
  const badgeType = calculateBadge(score, total);

  badgeTitleEl.textContent = `${section.title} tamamlandı!`;
  badgeScoreTextEl.textContent = `Doğru sayın: ${score} / ${total}`;

  let badgeName = "";
  let badgeEmoji = "";
  let badgeGradient = "";

  if (badgeType === "gold") {
    badgeName = "Uzman Jeolog Rozeti";
    badgeEmoji = "🌟";
    badgeGradient = "radial-gradient(circle at 30% 30%, #fff7e2, #f5c45a)";
  } else if (badgeType === "silver") {
    badgeName = "Usta Jeolog Rozeti";
    badgeEmoji = "✨";
    badgeGradient = "radial-gradient(circle at 30% 30%, #f4f7fb, #c0cad8)";
  } else {
    badgeName = "Acemi Jeolog Rozeti";
    badgeEmoji = "🔍";
    badgeGradient = "radial-gradient(circle at 30% 30%, #fdf5e7, #d1b38a)";
  }

  badgeNameEl.textContent = badgeName;
  badgeEmojiEl.textContent = badgeEmoji;
  badgeCircleEl.style.background = badgeGradient;

  showScreen("badge");
}

function pad2(num) {
  return num.toString().padStart(2, "0");
}

function calculateGlobalRank(totalScore, maxScore) {
  const ratio = totalScore / maxScore;
  if (ratio >= 0.75) {
    return "Uzman Jeolog";
  } else if (ratio >= 0.5) {
    return "Usta Jeolog";
  } else {
    return "Acemi Jeolog";
  }
}

function checkEscape() {
  const allPlayed = sections.every((s) => scores[s.id] !== null);

  const maxScore = sections.reduce(
    (sum, s) => sum + s.questions.length,
    0
  );
  const totalScore = sections.reduce(
    (sum, s) => sum + (scores[s.id] || 0),
    0
  );

  if (!allPlayed) {
    escapeMessageEl.textContent =
      "Henüz tüm bölümleri tamamlamadın. Kaçmak için 5 bölümü de sırayla oyna!";
    escapeCodeTextEl.textContent = "";
    rankTextEl.textContent = "";
  } else {
    // Kaçış kodu: ilk iki bölümün skorlarından oluşan 4 haneli kod
    const score1 = scores["rocks"];
    const score2 = scores["minerals"];
    const code = pad2(score1) + pad2(score2);

    escapeMessageEl.textContent =
      "Harika! Tüm bölümleri tamamladın ve laboratuvarın kapısı açıldı! 🎉";
    escapeCodeTextEl.textContent = `Kaçış kodun: ${code}`;

    const rank = calculateGlobalRank(totalScore, maxScore);
    rankTextEl.textContent = `Toplam skorun: ${totalScore} / ${maxScore} → Jeolog seviyen: ${rank}`;
  }

  showScreen("escape");
}

// ==== Event listener'lar ====

// Harita düğmeleri
mapNodeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const sectionId = btn.dataset.section;
    if (!isSectionUnlocked(sectionId)) {
      const index = sectionOrder.indexOf(sectionId);
      if (index > 0) {
        const prevSection = getSectionById(sectionOrder[index - 1]);
        lockMessageEl.textContent = `Bu bölümü açmak için önce "${prevSection.title}" bölümünü tamamlamalısın.`;
      } else {
        lockMessageEl.textContent =
          "Bu bölüm şu anda kilitli görünüyor.";
      }
      return;
    }
    startSection(sectionId);
  });
});

btnNextQuestion.addEventListener("click", () => {
  nextQuestion();
});

btnQuit.addEventListener("click", () => {
  showScreen("home");
});

btnCheckEscape.addEventListener("click", () => {
  checkEscape();
});

btnBadgeHome.addEventListener("click", () => {
  showScreen("home");
});

btnBadgeEscape.addEventListener("click", () => {
  checkEscape();
});

btnEscapeHome.addEventListener("click", () => {
  showScreen("home");
});

// Başlangıçta liste ve harita durumunu güncelle
updateScoresList();
updateMapNodes();
