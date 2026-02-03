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
        image: "assets/k1.svg",
        // question: "Kayaçlar doğada sürekli nasıl değişir?",
        options: ["Güneş ısıyla", "Kayaç Döngüsüyle"],
        correctIndex: 1,
      },
      {
        type: "info",
        image: "assets/2.svg",
        // question: "Granit hangi tür kayaçtır?",
        options: [
          "Magmatik kayaç",
          "Tortul Kayaç"
        ],
        correctIndex: 0,
      },
      {
        type: "info",
        image: "assets/3.svg",
        options: [
          "Tortul Kayaç",
          "Başkalaşım Kayaç"
        ],
        correctIndex: 1,
      },
      {
        type: "info",
        image: "assets/4.svg",
        options: ["Fosiller", "Kristal"],
        correctIndex: 0,
      },
      {
        type: "info",
        image: "assets/5.svg",
        options: ["Magmatik", "Metamorfik"],
        correctIndex: 0,
      },
      // {
      //   type: "info",
      //   image: "assets/rocks2.svg",
      //   question: "Aşağıdakilerden hangisi bir tortul kayaç örneğidir?",
      //   options: ["Obsidyen", "Kumtaşı", "Granit", "Gnays"],
      //   correctIndex: 1,
      // },
      // // Gezegen sorusu
      // {
      //   type: "planet",
      //   image: "assets/planet1.svg",
      //   question:
      //     "Dünyanın kabuğundaki kayaçlar en çok hangi gezegende gözlenen katı yüzey kayaçlarına benzer?",
      //   options: ["Jüpiter", "Mars", "Neptün", "Uranüs"],
      //   correctIndex: 1,
      // },
      // // Şans sorusu
      // {
      //   type: "chance",
      //   question:
      //     "Şans Sorusu: Kayaçlarla ilgili hangi cümle daha doğrudur?",
      //   options: [
      //     "Tüm kayaçlar aynı süreçle oluşur.",
      //     "Kayaçlar asla değişmez.",
      //     "Kayaçlar zamanla bir türden diğerine dönüşebilir.",
      //     "Kayaçlar sadece denizlerde oluşur.",
      //   ],
      //   correctIndex: 2,
      // },
      // // Ek resimli bilgi soruları
      // {
      //   type: "info",
      //   image: "assets/rocks1.svg",
      //   question:
      //     "Aşağıdaki kayaçlardan hangisi lavın çok hızlı soğumasıyla oluşan cam gibi parlak bir kayaçtır?",
      //   options: ["Şeyl", "Obsidyen", "Mermer", "Kireçtaşı"],
      //   correctIndex: 1,
      // },
      // {
      //   type: "info",
      //   image: "assets/rocks3.svg",
      //   question:
      //     "Aşağıdaki kayaç türlerinden hangisi genellikle katmanlı bir yapıya sahiptir?",
      //   options: ["Kumtaşı", "Granit", "Obsidyen", "Diorit"],
      //   correctIndex: 0,
      // },
    ],
  },
  {
    id: "minerals",
    title: "Madenler Galerisi",
    subtitle: "Minerallerin özellikleri ve kullanımları",
    questions: [
      {
        type: "info",
        image: "assets/6.svg",
        options: [
          "Bor",
          "Altın"
        ],
        correctIndex: 0,
      },
      {
        type: "info",
        image: "assets/7.svg",
        options: ["Balıkesir", "Zonguldak"],
        correctIndex: 0,
      },
      {
        type: "info",
        image: "assets/8.svg",
        options: ["Edirne", "Afyon"],
        correctIndex: 1,
      },
      {
        type: "info",
        image: "assets/9.svg",
        options: ["Yenilenebilir Enerji Kaynağı", "Fosil Kökenli Enerji Kaynağı"],
        correctIndex: 1,
      },
      {
        type: "info",
        image: "assets/10.svg",
        options: ["Zonguldak", "Kars"],
        correctIndex: 0,
      },
      // {
      //   type: "info",
      //     image: "assets/11.svg",
      //   options: [
      //     "Kristal şeklinin uzunluğunu",
      //     "Porselen plaka üzerindeki toz halindeki rengini",
      //     "Yüzeydeki çizgilerin sayısını",
      //     "Mineralin ağırlığını",
      //   ],
      //   correctIndex: 1,
      // },
      // {
      //   type: "planet",
      //   image: "assets/planet1.svg",
      //   question:
      //     "Ay yüzeyinde bulunan ve Dünya'da da kullanılan koyu renkli, demir ve magnezyum içeren mineral grubu hangisidir?",
      //   options: ["Feldispat", "Olivin", "Halit", "Tebeşir"],
      //   correctIndex: 1,
      // },
      // {
      //   type: "chance",
      //   question:
      //     "Şans Sorusu: Günlük hayatta aşağıdakilerden hangisi mineral içermez?",
      //   options: ["Cam bardak", "Kâğıt", "Cep telefonu", "Diş macunu"],
      //   correctIndex: 1,
      // },
      // {
      //   type: "info",
      //   image: "assets/mineral2.svg",
      //   question:
      //     "Aşağıdaki minerallerden hangisi bebek pudrasında kullanılan çok yumuşak bir mineraldir?",
      //   options: ["Talk", "Elmas", "Feldispat", "Manyetit"],
      //   correctIndex: 0,
      // },
      // {
      //   type: "info",
      //   image: "assets/mineral1.svg",
      //   question:
      //     "Cep telefonlarının elektronik devrelerinde hangi tür mineraller en çok kullanılır?",
      //   options: [
      //     "Sadece süs taşları",
      //     "Metalik mineraller ve nadir toprak elementleri",
      //     "Yalnızca halit",
      //     "Sadece tuz mineralleri",
      //   ],
      //   correctIndex: 1,
      // },
    ],
  },
  {
    id: "planets",
    title: "Gezegenler Vadisi",
    subtitle: "Gezegenlerin yapısı ve kayaç/maden ilişkisi",
    questions: [
      {
        type: "info",
        image: "assets/21.svg",
        options: [ "Mars", "Neptün"],
        correctIndex: 1,
      },
      {
        type: "info",
         image: "assets/22.svg",
        options: ["Merkür", "Venüs"],
        correctIndex: 0,
      },
      {
        type: "info",
        image: "assets/23.svg",
        options: ["Manto", "Çekirdek"],
        correctIndex: 1,
      },
      {
        type: "info",
         image: "assets/24.svg",
        options: ["Demir Oksit (Pas)", "Bakır Bileşikleri"],
        correctIndex: 0,
      },
      {
        type: "info",
        image: "assets/25.svg",
        options: [
          "Venüs",
          "Neptün"
        ],
        correctIndex: 1,
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
        image: "assets/11.svg",
         options: [
          "Kaynakları hızlıca tüketmek",
          "Doğal kaynakları gelecek nesilleri de düşünerek kullanmak"
        ],
        correctIndex: 1,
      },
      {
        type: "info",
        image: "assets/12.svg",
        options: [
          "Yeni maden çıkarmayı azaltır",
          "Kanunen gereklidir"
        ],
        correctIndex: 0,
      },
      {
        type: "info",
        image: "assets/13.svg",
        options: [
          "Geri dönüşüme uygun atıkları ayrıştırmak",
          "Çöpleri doğaya atmak"
        ],
        correctIndex: 0,
      },
      {
        type: "info",
        image: "assets/14.svg",
        options: ["Kömür",  "Rüzgâr"],
        correctIndex: 1,
      },
      {
        type: "info",
        image: "assets/15.svg",
        options: [
          "Daha fazla orman",
          "Toprak erozyonu ve doğa tahribatı"
        ],
        correctIndex: 1,
      },
      // {
      //   type: "info",
      //   question:
      //     "Aşağıdakilerden hangisi su tasarrufu sağlayan bir davranıştır?",
      //   options: [
      //     "Diş fırçalarken musluğu açık bırakmak",
      //     "Uzun süre duşta kalmak",
      //     "Bozulan musluğu tamir ettirmek",
      //     "Bahçeyi öğle saatinde bol suyla sulamak",
      //   ],
      //   correctIndex: 2,
      // },
      // {
      //   type: "planet",
      //   image: "assets/planet1.svg",
      //   question:
      //     "Bilim insanları neden diğer gezegenlerde su ve maden arıyor?",
      //   options: [
      //     "Gezegenleri süslemek için",
      //     "Yeni tatiller planlamak için",
      //     "Yaşam ihtimali ve kaynak kullanımı açısından bilgi edinmek için",
      //     "Gezegenleri boyamak için",
      //   ],
      //   correctIndex: 2,
      // },
      // {
      //   type: "chance",
      //   question:
      //     "Şans Sorusu: Aşağıdakilerden hangisi en az çevre dostu seçenektir?",
      //   options: [
      //     "Bez çanta kullanmak",
      //     "Plastik poşetleri tekrar tekrar kullanmak",
      //     "Her alışverişte yeni plastik poşet almak",
      //     "Metal matara ile su taşımak",
      //   ],
      //   correctIndex: 2,
      // },
      // {
      //   type: "info",
      //   image: "assets/sustain1.svg",
      //   question:
      //     "Madenleri sürdürülebilir kullanmak için hangi yöntem daha uygundur?",
      //   options: [
      //     "Sadece kolay ulaşılabilen madenleri kazmak",
      //     "Madenleri geri dönüştürerek tekrar kullanmak",
      //     "Tüm madenleri aynı anda çıkarmak",
      //     "Yer altını tamamen boşaltmak",
      //   ],
      //   correctIndex: 1,
      // },
      // {
      //   type: "info",
      //   image: "assets/daily1.svg",
      //   question:
      //     "Bir okulda sürdürülebilirlik projesi yaparken ilk adım ne olabilir?",
      //   options: [
      //     "Okuldaki tüm ağaçları kesmek",
      //     "Geri dönüşüm ve enerji tasarrufu afişleri hazırlamak",
      //     "Sınıflarda ışıkları sürekli açık bırakmak",
      //     "Plastik kullanımını artırmak",
      //   ],
      //   correctIndex: 1,
      // },
    ],
  },
  {
    id: "daily",
    title: "Günlük Hayat Noktası",
    subtitle: "Günlük hayattaki kayaç ve madenler",
    questions: [
      {
        type: "info",
        image: "assets/16.svg",
        options: ["Barit", "Bakır"],
        correctIndex: 1,
      },
      {
        type: "info",
        image: "assets/17.svg",
        options: ["Kuvars", "Mermer"],
        correctIndex: 0,
      },
      {
        type: "info",
        image: "assets/18.svg",
         options: ["Bor","Titanyum"],
        correctIndex: 0,
      },
      {
        type: "info",
        image: "assets/19.svg",
        options: [
          "Kil",
          "Demir"
        ],
        correctIndex: 1,
      },
      {
        type: "info",
        image: "assets/20.svg",
        options: [ "Grafit", "Kromit"],
        correctIndex: 0,
      },
      // {
      //   type: "info",
      //   question:
      //     "Aşağıdakilerden hangisi kayaç ve madenlerin evimizdeki kullanımına örnek değildir?",
      //   options: [
      //     "Mutfak tezgâhı (granit/mermer)",
      //     "Seramik banyo fayansları",
      //     "Telefon elektronik devreleri",
      //     "Bulutların şekli",
      //   ],
      //   correctIndex: 3,
      // },
      // {
      //   type: "planet",
      //   image: "assets/planet1.svg",
      //   question:
      //     "Uzay araştırmalarında kullanılan roket ve uyduların yapımında neden hafif ve dayanıklı metaller tercih edilir?",
      //   options: [
      //     "Daha güzel göründükleri için",
      //     "Uzaya daha kolay çıkabilmeleri ve dayanıklı olmaları için",
      //     "Daha ucuz oldukları için",
      //     "Metaller uzayda erimediği için",
      //   ],
      //   correctIndex: 1,
      // },
      // {
      //   type: "chance",
      //   question:
      //     "Şans Sorusu: Aşağıdakilerden hangisi maden içeren teknolojik bir üründür?",
      //   options: ["Tahta masa", "Pamuklu yastık", "Akıllı telefon", "Defter"],
      //   correctIndex: 2,
      // },
      // {
      //   type: "info",
      //   image: "assets/mineral2.svg",
      //   question:
      //     "Altın ve gümüş gibi değerli metaller en çok hangi amaçla kullanılır?",
      //   options: [
      //     "Sadece sünger yapımında",
      //     "Takı, elektronik devreler ve yatırım amacıyla",
      //     "Yastık doldurmak için",
      //     "Sadece duvar boyasında",
      //   ],
      //   correctIndex: 1,
      // },
      // {
      //   type: "info",
      //   image: "assets/rocks1.svg",
      //   question:
      //     "Evlerin duvarlarında kullanılan çimento ve betonun ana hammaddesi hangisidir?",
      //   options: [
      //     "Toprak ve yaprak",
      //     "Kireçtaşı ve kil gibi kayaçlar",
      //     "Sadece su",
      //     "Sadece plastik",
      //   ],
      //   correctIndex: 1,
      // },
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
