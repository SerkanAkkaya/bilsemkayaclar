// ==== RETRO GEOLOGY ESCAPE GAME ====
// Canvas-based game engine with pixel art style

// Import questions from existing data
const sections = [
    {
        id: "rocks",
        title: "Kayaçlar Galerisi",
        subtitle: "Magmatik, tortul ve metamorfik kayaçlar",
        questions: [
            {
                type: "info",
                image: "assets/k1.svg",
                options: ["Güneş ısıyla", "Kayaç Döngüsüyle"],
                correctIndex: 1,
            },
            {
                type: "info",
                image: "assets/2.svg",
                options: ["Magmatik kayaç", "Tortul Kayaç"],
                correctIndex: 0,
            },
            {
                type: "info",
                image: "assets/3.svg",
                options: ["Tortul Kayaç", "Başkalaşım Kayaç"],
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
                options: ["Bor", "Altın"],
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
                options: ["Mars", "Neptün"],
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
                options: ["Venüs", "Neptün"],
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
                    "Doğal kaynakları gelecek nesilleri de düşünerek kullanmak",
                ],
                correctIndex: 1,
            },
            {
                type: "info",
                image: "assets/12.svg",
                options: ["Yeni maden çıkarmayı azaltır", "Kanunen gereklidir"],
                correctIndex: 0,
            },
            {
                type: "info",
                image: "assets/13.svg",
                options: [
                    "Geri dönüşüme uygun atıkları ayrıştırmak",
                    "Çöpleri doğaya atmak",
                ],
                correctIndex: 0,
            },
            {
                type: "info",
                image: "assets/14.svg",
                options: ["Kömür", "Rüzgâr"],
                correctIndex: 1,
            },
            {
                type: "info",
                image: "assets/15.svg",
                options: ["Daha fazla orman", "Toprak erozyonu ve doğa tahribatı"],
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
                options: ["Bor", "Titanyum"],
                correctIndex: 0,
            },
            {
                type: "info",
                image: "assets/19.svg",
                options: ["Kil", "Demir"],
                correctIndex: 1,
            },
            {
                type: "info",
                image: "assets/20.svg",
                options: ["Grafit", "Kromit"],
                correctIndex: 0,
            },
        ],
    },
];

// ==== GAME CONFIGURATION ====
const CONFIG = {
    CANVAS_WIDTH: 800,
    CANVAS_HEIGHT: 600,
    GROUND_Y: 550,
    CHARACTER_WIDTH: 40,
    CHARACTER_HEIGHT: 50,
    WALK_SPEED: 5,
    OPTION_A_X: 200,
    OPTION_B_X: 600,
    OPTION_WIDTH: 160,
    GLASS_WIDTH: 500,
    GLASS_HEIGHT: 320,
    DOOR_WIDTH: 100,
    DOOR_HEIGHT: 150,
};

// ==== GAME STATE ====
const gameState = {
    screen: "menu", // menu, playing, transition, complete
    currentSectionIndex: 0,
    currentQuestionIndex: 0,
    score: 0,
    totalScore: 0,
    sectionScores: {},

    // Character state
    character: {
        x: 400,
        y: CONFIG.GROUND_Y - CONFIG.CHARACTER_HEIGHT,
        vx: 0,
        direction: 0, // -1 left, 0 idle, 1 right
        walkFrame: 0,
        walkTimer: 0,
    },

    // Glass state
    glass: {
        state: "solid", // solid, cracking, breaking, broken, cracked
        animFrame: 0,
        animTimer: 0,
    },

    // Door state
    door: {
        state: "closed", // closed, opening, open
        animFrame: 0,
    },

    // UI state
    feedback: "",
    feedbackTimer: 0,
    canAnswer: true,
    selectedOption: null,

    // Keys
    keys: {
        left: false,
        right: false,
        up: false,
    },
};

// ==== CANVAS SETUP ====
let canvas, ctx;
let questionImage = new Image();
let questionImageLoaded = false;

function initCanvas() {
    canvas = document.getElementById("game-canvas");
    ctx = canvas.getContext("2d");
    canvas.width = CONFIG.CANVAS_WIDTH;
    canvas.height = CONFIG.CANVAS_HEIGHT;

    // Enable image smoothing off for pixel art
    ctx.imageSmoothingEnabled = false;
}

// ==== INPUT HANDLING ====
function setupInput() {
    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft") {
            gameState.keys.left = true;
            e.preventDefault();
        }
        if (e.key === "ArrowRight") {
            gameState.keys.right = true;
            e.preventDefault();
        }
        if (e.key === "ArrowUp") {
            gameState.keys.up = true;
            handleUpPress();
            e.preventDefault();
        }
        if (e.key === "Enter" || e.key === " ") {
            handleEnterPress();
            e.preventDefault();
        }
    });

    document.addEventListener("keyup", (e) => {
        if (e.key === "ArrowLeft") gameState.keys.left = false;
        if (e.key === "ArrowRight") gameState.keys.right = false;
        if (e.key === "ArrowUp") gameState.keys.up = false;
    });
}

function handleEnterPress() {
    if (gameState.screen === "menu") {
        startGame();
    } else if (gameState.screen === "complete") {
        resetGame();
    }
}

function handleUpPress() {
    if (gameState.screen !== "playing" || !gameState.canAnswer) return;

    const charCenter = gameState.character.x + CONFIG.CHARACTER_WIDTH / 2;

    // Check if near option A
    if (Math.abs(charCenter - CONFIG.OPTION_A_X) < CONFIG.OPTION_WIDTH / 2) {
        selectAnswer(0);
    }
    // Check if near option B
    else if (Math.abs(charCenter - CONFIG.OPTION_B_X) < CONFIG.OPTION_WIDTH / 2) {
        selectAnswer(1);
    }
}

// ==== GAME LOGIC ====
function startGame() {
    gameState.screen = "playing";
    gameState.currentSectionIndex = 0;
    gameState.currentQuestionIndex = 0;
    gameState.score = 0;
    gameState.totalScore = 0;
    gameState.sectionScores = {};
    resetCharacterPosition();
    loadCurrentQuestion();
}

function resetGame() {
    gameState.screen = "menu";
    gameState.currentSectionIndex = 0;
    gameState.currentQuestionIndex = 0;
    gameState.score = 0;
}

function resetCharacterPosition() {
    gameState.character.x = 100;
    gameState.character.y = CONFIG.GROUND_Y - CONFIG.CHARACTER_HEIGHT;
    gameState.character.vx = 0;
    gameState.character.direction = 0;
}

function loadCurrentQuestion() {
    const section = sections[gameState.currentSectionIndex];
    const question = section.questions[gameState.currentQuestionIndex];

    gameState.glass.state = "solid";
    gameState.glass.animFrame = 0;
    gameState.canAnswer = true;
    gameState.feedback = "";
    gameState.selectedOption = null;

    // Load question image
    if (question.image) {
        questionImage = new Image();
        questionImage.onload = () => {
            questionImageLoaded = true;
        };
        questionImage.src = question.image;
        questionImageLoaded = false;
    }
}

function selectAnswer(optionIndex) {
    if (!gameState.canAnswer) return;
    gameState.canAnswer = false;
    gameState.selectedOption = optionIndex;

    const section = sections[gameState.currentSectionIndex];
    const question = section.questions[gameState.currentQuestionIndex];
    const isCorrect = optionIndex === question.correctIndex;

    if (isCorrect) {
        // Correct answer - break glass
        gameState.glass.state = "breaking";
        gameState.glass.animFrame = 0;
        gameState.score++;
        gameState.totalScore++;
        gameState.feedback = "✓ Doğru! +" + 1 + " puan";
        gameState.feedbackTimer = 120;
    } else {
        // Wrong answer - crack glass only
        gameState.glass.state = "cracked";
        gameState.glass.animFrame = 0;
        gameState.feedback = "✗ Yanlış! Doğru cevap: " + question.options[question.correctIndex];
        gameState.feedbackTimer = 150;
        // Push character back
        gameState.character.vx = -8;
    }

    // Schedule next question
    setTimeout(() => {
        if (gameState.glass.state === "cracked") {
            gameState.glass.state = "breaking";
        }
    }, 1000);

    setTimeout(() => {
        nextQuestion();
    }, 2500);
}

function nextQuestion() {
    const section = sections[gameState.currentSectionIndex];

    if (gameState.currentQuestionIndex < section.questions.length - 1) {
        gameState.currentQuestionIndex++;
        resetCharacterPosition();
        loadCurrentQuestion();
    } else {
        // Section complete
        gameState.sectionScores[section.id] = gameState.score;
        gameState.door.state = "opening";

        setTimeout(() => {
            if (gameState.currentSectionIndex < sections.length - 1) {
                gameState.currentSectionIndex++;
                gameState.currentQuestionIndex = 0;
                gameState.score = 0;
                gameState.door.state = "closed";
                resetCharacterPosition();
                loadCurrentQuestion();
            } else {
                // Game complete
                gameState.screen = "complete";
            }
        }, 2000);
    }
}

// ==== UPDATE LOOP ====
function update() {
    if (gameState.screen === "playing") {
        updateCharacter();
        updateAnimations();
    }
}

function updateCharacter() {
    const char = gameState.character;

    // Apply input
    if (gameState.keys.left) {
        char.vx = -CONFIG.WALK_SPEED;
        char.direction = -1;
    } else if (gameState.keys.right) {
        char.vx = CONFIG.WALK_SPEED;
        char.direction = 1;
    } else {
        char.vx *= 0.8;
        if (Math.abs(char.vx) < 0.5) {
            char.vx = 0;
            char.direction = 0;
        }
    }

    // Update position
    char.x += char.vx;

    // Clamp to screen bounds
    char.x = Math.max(20, Math.min(CONFIG.CANVAS_WIDTH - CONFIG.CHARACTER_WIDTH - 20, char.x));

    // Walk animation
    if (char.direction !== 0) {
        char.walkTimer++;
        if (char.walkTimer > 8) {
            char.walkTimer = 0;
            char.walkFrame = (char.walkFrame + 1) % 4;
        }
    } else {
        char.walkFrame = 0;
    }
}

function updateAnimations() {
    // Glass animation
    if (gameState.glass.state === "breaking") {
        gameState.glass.animTimer++;
        if (gameState.glass.animTimer > 5) {
            gameState.glass.animTimer = 0;
            gameState.glass.animFrame++;
            if (gameState.glass.animFrame > 8) {
                gameState.glass.state = "broken";
            }
        }
    }

    // Feedback timer
    if (gameState.feedbackTimer > 0) {
        gameState.feedbackTimer--;
    }
}

// ==== RENDER ====
function render() {
    // Clear canvas
    ctx.fillStyle = "#1a1a2e";
    ctx.fillRect(0, 0, CONFIG.CANVAS_WIDTH, CONFIG.CANVAS_HEIGHT);

    if (gameState.screen === "menu") {
        renderMenu();
    } else if (gameState.screen === "playing") {
        renderGame();
    } else if (gameState.screen === "complete") {
        renderComplete();
    }
}

function renderMenu() {
    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, CONFIG.CANVAS_HEIGHT);
    gradient.addColorStop(0, "#0f0c29");
    gradient.addColorStop(0.5, "#302b63");
    gradient.addColorStop(1, "#24243e");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, CONFIG.CANVAS_WIDTH, CONFIG.CANVAS_HEIGHT);

    // Stars
    ctx.fillStyle = "#fff";
    for (let i = 0; i < 50; i++) {
        const x = (i * 73) % CONFIG.CANVAS_WIDTH;
        const y = (i * 137) % (CONFIG.CANVAS_HEIGHT / 2);
        const size = (i % 3) + 1;
        ctx.fillRect(x, y, size, size);
    }

    // Title
    ctx.fillStyle = "#fff";
    ctx.font = "bold 48px 'Press Start 2P', monospace";
    ctx.textAlign = "center";
    ctx.fillText("KAYAÇLAR", CONFIG.CANVAS_WIDTH / 2, 180);
    ctx.fillText("YOLCULUĞU", CONFIG.CANVAS_WIDTH / 2, 240);

    // Subtitle
    ctx.font = "16px 'Press Start 2P', monospace";
    ctx.fillStyle = "#88f";
    ctx.fillText("Retro Jeoloji Kaçış Oyunu", CONFIG.CANVAS_WIDTH / 2, 300);

    // Instructions
    ctx.font = "12px 'Press Start 2P', monospace";
    ctx.fillStyle = "#aaa";
    ctx.fillText("← → Ok tuşları: Hareket", CONFIG.CANVAS_WIDTH / 2, 400);
    ctx.fillText("↑ Yukarı ok: Cevap seç", CONFIG.CANVAS_WIDTH / 2, 430);

    // Start prompt
    ctx.fillStyle = "#fff";
    const blink = Math.floor(Date.now() / 500) % 2;
    if (blink) {
        ctx.fillText("ENTER'a bas ve başla!", CONFIG.CANVAS_WIDTH / 2, 520);
    }
}

function renderGame() {
    const section = sections[gameState.currentSectionIndex];
    const question = section.questions[gameState.currentQuestionIndex];

    // Background
    renderBackground();

    // Ground
    renderGround();

    // Glass/Question panel
    if (gameState.glass.state !== "broken") {
        renderGlass(question);
    }

    // Options
    renderOptions(question);

    // Character
    renderCharacter();

    // Door (if section ending)
    if (gameState.door.state !== "closed") {
        renderDoor();
    }

    // UI
    renderUI(section);

    // Feedback
    if (gameState.feedbackTimer > 0) {
        renderFeedback();
    }
}

function renderBackground() {
    // Gradient background
    const gradient = ctx.createLinearGradient(0, 0, 0, CONFIG.CANVAS_HEIGHT);
    gradient.addColorStop(0, "#2c3e50");
    gradient.addColorStop(1, "#1a1a2e");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, CONFIG.CANVAS_WIDTH, CONFIG.CANVAS_HEIGHT);

    // Brick pattern on walls
    ctx.fillStyle = "#3d3d5c";
    for (let y = 0; y < CONFIG.GROUND_Y; y += 32) {
        for (let x = 0; x < CONFIG.CANVAS_WIDTH; x += 64) {
            const offset = (y / 32) % 2 === 0 ? 0 : 32;
            ctx.fillRect(x + offset, y, 62, 30);
        }
    }
}

function renderGround() {
    // Main ground
    ctx.fillStyle = "#4a4a4a";
    ctx.fillRect(0, CONFIG.GROUND_Y, CONFIG.CANVAS_WIDTH, CONFIG.CANVAS_HEIGHT - CONFIG.GROUND_Y);

    // Ground top highlight
    ctx.fillStyle = "#666";
    ctx.fillRect(0, CONFIG.GROUND_Y, CONFIG.CANVAS_WIDTH, 4);

    // Ground pattern
    ctx.fillStyle = "#3a3a3a";
    for (let x = 0; x < CONFIG.CANVAS_WIDTH; x += 40) {
        ctx.fillRect(x, CONFIG.GROUND_Y + 20, 38, 20);
    }
}

function renderGlass(question) {
    const glassX = (CONFIG.CANVAS_WIDTH - CONFIG.GLASS_WIDTH) / 2;
    const glassY = 55;

    // Glass frame
    ctx.strokeStyle = "#88ccff";
    ctx.lineWidth = 4;

    if (gameState.glass.state === "cracked") {
        ctx.strokeStyle = "#ff6666";
    }

    // Glass background
    ctx.fillStyle = gameState.glass.state === "cracked"
        ? "rgba(255, 100, 100, 0.3)"
        : "rgba(136, 204, 255, 0.15)";
    ctx.fillRect(glassX, glassY, CONFIG.GLASS_WIDTH, CONFIG.GLASS_HEIGHT);
    ctx.strokeRect(glassX, glassY, CONFIG.GLASS_WIDTH, CONFIG.GLASS_HEIGHT);

    // Question image - MUCH LARGER for readability
    if (questionImageLoaded && question.image) {
        const imgWidth = CONFIG.GLASS_WIDTH - 40;
        const imgHeight = CONFIG.GLASS_HEIGHT - 30;
        const imgX = glassX + 20;
        const imgY = glassY + 15;

        // Enable smooth scaling for SVG readability
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(questionImage, imgX, imgY, imgWidth, imgHeight);
        ctx.imageSmoothingEnabled = false;
    }

    // Breaking animation - cracks
    if (gameState.glass.state === "breaking" || gameState.glass.state === "cracked") {
        ctx.strokeStyle = gameState.glass.state === "cracked" ? "#ff4444" : "#fff";
        ctx.lineWidth = 2;
        ctx.beginPath();

        // Crack pattern
        const cx = glassX + CONFIG.GLASS_WIDTH / 2;
        const cy = glassY + CONFIG.GLASS_HEIGHT / 2;
        for (let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2;
            const len = 40 + Math.min(gameState.glass.animFrame * 15, 80);
            ctx.moveTo(cx, cy);
            ctx.lineTo(
                cx + Math.cos(angle) * len,
                cy + Math.sin(angle) * len
            );
        }
        ctx.stroke();
    }

    // Shatter effect
    if (gameState.glass.state === "breaking" && gameState.glass.animFrame > 4) {
        ctx.fillStyle = "rgba(136, 204, 255, 0.5)";
        for (let i = 0; i < 20; i++) {
            const px = glassX + Math.random() * CONFIG.GLASS_WIDTH;
            const py = glassY + Math.random() * CONFIG.GLASS_HEIGHT + gameState.glass.animFrame * 5;
            ctx.fillRect(px, py, 8, 8);
        }
    }
}

function renderOptions(question) {
    const optionY = CONFIG.GROUND_Y - 60;

    // Option A
    const isNearA = Math.abs(gameState.character.x + CONFIG.CHARACTER_WIDTH / 2 - CONFIG.OPTION_A_X) < CONFIG.OPTION_WIDTH / 2;
    renderOptionBox(CONFIG.OPTION_A_X, optionY, "A", question.options[0], isNearA,
        gameState.selectedOption === 0, question.correctIndex === 0);

    // Option B
    const isNearB = Math.abs(gameState.character.x + CONFIG.CHARACTER_WIDTH / 2 - CONFIG.OPTION_B_X) < CONFIG.OPTION_WIDTH / 2;
    renderOptionBox(CONFIG.OPTION_B_X, optionY, "B", question.options[1], isNearB,
        gameState.selectedOption === 1, question.correctIndex === 1);
}

function renderOptionBox(x, y, letter, text, isHighlighted, isSelected, isCorrect) {
    const boxWidth = CONFIG.OPTION_WIDTH;
    const boxHeight = 60;

    // Background
    let bgColor = "rgba(50, 50, 80, 0.9)";
    if (isSelected !== null && isSelected) {
        bgColor = isCorrect ? "rgba(50, 150, 50, 0.9)" : "rgba(150, 50, 50, 0.9)";
    } else if (isHighlighted && gameState.canAnswer) {
        bgColor = "rgba(80, 80, 120, 0.9)";
    }

    ctx.fillStyle = bgColor;
    ctx.fillRect(x - boxWidth / 2, y - boxHeight / 2, boxWidth, boxHeight);

    // Border
    ctx.strokeStyle = isHighlighted && gameState.canAnswer ? "#fff" : "#666";
    ctx.lineWidth = isHighlighted && gameState.canAnswer ? 3 : 2;
    ctx.strokeRect(x - boxWidth / 2, y - boxHeight / 2, boxWidth, boxHeight);

    // Letter
    ctx.fillStyle = "#fff";
    ctx.font = "bold 20px 'Press Start 2P', monospace";
    ctx.textAlign = "center";
    ctx.fillText(letter, x, y - 10);

    // Text (truncated)
    ctx.font = "10px 'Press Start 2P', monospace";
    const displayText = text.length > 15 ? text.substring(0, 14) + "…" : text;
    ctx.fillText(displayText, x, y + 15);

    // Arrow indicator
    if (isHighlighted && gameState.canAnswer) {
        ctx.fillStyle = "#ff0";
        ctx.font = "16px 'Press Start 2P', monospace";
        ctx.fillText("↑", x, y + 45);
    }
}

function renderCharacter() {
    const char = gameState.character;
    const scale = CONFIG.CHARACTER_WIDTH / 48; // Scale based on original size

    // Shadow
    ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
    ctx.beginPath();
    ctx.ellipse(
        char.x + CONFIG.CHARACTER_WIDTH / 2,
        CONFIG.GROUND_Y,
        CONFIG.CHARACTER_WIDTH / 2,
        6,
        0, 0, Math.PI * 2
    );
    ctx.fill();

    // Character body (pixel art style - scaled)
    const bodyX = char.x;
    const bodyY = char.y;
    const s = scale;

    // Legs animation
    const legOffset = (char.walkFrame % 2 === 0 ? 0 : 3) * s;

    // Left leg
    ctx.fillStyle = "#2c3e50";
    ctx.fillRect(bodyX + 10 * s, bodyY + 34 * s + legOffset, 8 * s, 16 * s - legOffset);

    // Right leg
    ctx.fillRect(bodyX + 22 * s, bodyY + 34 * s - legOffset, 8 * s, 16 * s + legOffset);

    // Body/torso
    ctx.fillStyle = "#e74c3c";
    ctx.fillRect(bodyX + 6 * s, bodyY + 16 * s, 28 * s, 22 * s);

    // Arms
    ctx.fillStyle = "#f39c12";
    const armSwing = Math.sin(char.walkFrame * 0.8) * 3 * s;
    ctx.fillRect(bodyX + 1 * s, bodyY + 18 * s + armSwing, 6 * s, 16 * s);
    ctx.fillRect(bodyX + 33 * s, bodyY + 18 * s - armSwing, 6 * s, 16 * s);

    // Head
    ctx.fillStyle = "#f5d0a9";
    ctx.fillRect(bodyX + 10 * s, bodyY, 20 * s, 20 * s);

    // Hair (back view)
    ctx.fillStyle = "#5a3825";
    ctx.fillRect(bodyX + 8 * s, bodyY - 2 * s, 24 * s, 12 * s);
    ctx.fillRect(bodyX + 10 * s, bodyY + 8 * s, 20 * s, 4 * s);

    // Backpack
    ctx.fillStyle = "#27ae60";
    ctx.fillRect(bodyX + 12 * s, bodyY + 20 * s, 16 * s, 12 * s);
    ctx.fillStyle = "#2ecc71";
    ctx.fillRect(bodyX + 14 * s, bodyY + 22 * s, 12 * s, 8 * s);
}

function renderDoor() {
    const doorX = CONFIG.CANVAS_WIDTH - CONFIG.DOOR_WIDTH - 40;
    const doorY = CONFIG.GROUND_Y - CONFIG.DOOR_HEIGHT;

    // Door frame
    ctx.fillStyle = "#8b4513";
    ctx.fillRect(doorX - 10, doorY - 10, CONFIG.DOOR_WIDTH + 20, CONFIG.DOOR_HEIGHT + 10);

    // Door
    const openAmount = gameState.door.state === "opening" ?
        Math.min(gameState.door.animFrame++ * 2, CONFIG.DOOR_WIDTH / 2) : 0;

    // Left door panel
    ctx.fillStyle = "#daa520";
    ctx.fillRect(doorX, doorY, CONFIG.DOOR_WIDTH / 2 - openAmount, CONFIG.DOOR_HEIGHT);

    // Right door panel
    ctx.fillRect(doorX + CONFIG.DOOR_WIDTH / 2 + openAmount, doorY,
        CONFIG.DOOR_WIDTH / 2 - openAmount, CONFIG.DOOR_HEIGHT);

    // Light from inside
    if (openAmount > 0) {
        ctx.fillStyle = `rgba(255, 255, 200, ${openAmount / 60})`;
        ctx.fillRect(doorX + CONFIG.DOOR_WIDTH / 2 - openAmount, doorY, openAmount * 2, CONFIG.DOOR_HEIGHT);
    }

    // Door handles
    if (openAmount < CONFIG.DOOR_WIDTH / 4) {
        ctx.fillStyle = "#b8860b";
        ctx.fillRect(doorX + CONFIG.DOOR_WIDTH / 2 - 15, doorY + 80, 10, 20);
        ctx.fillRect(doorX + CONFIG.DOOR_WIDTH / 2 + 5, doorY + 80, 10, 20);
    }
}

function renderUI(section) {
    // Top bar background
    ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    ctx.fillRect(0, 0, CONFIG.CANVAS_WIDTH, 50);

    // Section title
    ctx.fillStyle = "#fff";
    ctx.font = "12px 'Press Start 2P', monospace";
    ctx.textAlign = "left";
    ctx.fillText(section.title, 20, 30);

    // Score
    ctx.textAlign = "center";
    ctx.fillStyle = "#ff0";
    ctx.fillText(`PUAN: ${gameState.totalScore}`, CONFIG.CANVAS_WIDTH / 2, 30);

    // Question progress
    ctx.textAlign = "right";
    ctx.fillStyle = "#8f8";
    ctx.fillText(
        `SORU: ${gameState.currentQuestionIndex + 1}/${section.questions.length}`,
        CONFIG.CANVAS_WIDTH - 20, 30
    );

    // Controls hint
    ctx.fillStyle = "#888";
    ctx.font = "8px 'Press Start 2P', monospace";
    ctx.textAlign = "center";
    ctx.fillText("← → Hareket   ↑ Seç", CONFIG.CANVAS_WIDTH / 2, CONFIG.CANVAS_HEIGHT - 20);
}

function renderFeedback() {
    const isCorrect = gameState.feedback.startsWith("✓");

    ctx.fillStyle = isCorrect ? "rgba(50, 150, 50, 0.9)" : "rgba(150, 50, 50, 0.9)";
    ctx.fillRect(100, 300, CONFIG.CANVAS_WIDTH - 200, 50);

    ctx.strokeStyle = isCorrect ? "#4f4" : "#f44";
    ctx.lineWidth = 3;
    ctx.strokeRect(100, 300, CONFIG.CANVAS_WIDTH - 200, 50);

    ctx.fillStyle = "#fff";
    ctx.font = "12px 'Press Start 2P', monospace";
    ctx.textAlign = "center";

    // Truncate feedback if too long
    let feedbackText = gameState.feedback;
    if (feedbackText.length > 45) {
        feedbackText = feedbackText.substring(0, 44) + "…";
    }
    ctx.fillText(feedbackText, CONFIG.CANVAS_WIDTH / 2, 332);
}

function renderComplete() {
    // Background
    const gradient = ctx.createLinearGradient(0, 0, 0, CONFIG.CANVAS_HEIGHT);
    gradient.addColorStop(0, "#1a472a");
    gradient.addColorStop(1, "#2d5a27");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, CONFIG.CANVAS_WIDTH, CONFIG.CANVAS_HEIGHT);

    // Confetti effect
    ctx.fillStyle = "#ff0";
    for (let i = 0; i < 30; i++) {
        const x = (i * 73 + Date.now() / 10) % CONFIG.CANVAS_WIDTH;
        const y = (i * 47 + Date.now() / 20) % CONFIG.CANVAS_HEIGHT;
        ctx.fillRect(x, y, 6, 6);
    }
    ctx.fillStyle = "#f0f";
    for (let i = 0; i < 30; i++) {
        const x = (i * 97 + Date.now() / 15) % CONFIG.CANVAS_WIDTH;
        const y = (i * 61 + Date.now() / 25) % CONFIG.CANVAS_HEIGHT;
        ctx.fillRect(x, y, 6, 6);
    }

    // Title
    ctx.fillStyle = "#fff";
    ctx.font = "32px 'Press Start 2P', monospace";
    ctx.textAlign = "center";
    ctx.fillText("TEBRİKLER!", CONFIG.CANVAS_WIDTH / 2, 150);

    // Score
    ctx.font = "20px 'Press Start 2P', monospace";
    ctx.fillStyle = "#ff0";
    ctx.fillText(`TOPLAM PUAN: ${gameState.totalScore}`, CONFIG.CANVAS_WIDTH / 2, 220);

    // Section scores
    ctx.font = "12px 'Press Start 2P', monospace";
    ctx.fillStyle = "#8f8";
    let y = 280;
    sections.forEach((section, i) => {
        const score = gameState.sectionScores[section.id] || 0;
        ctx.fillText(`${section.title}: ${score}/${section.questions.length}`, CONFIG.CANVAS_WIDTH / 2, y);
        y += 35;
    });

    // Restart prompt
    ctx.fillStyle = "#fff";
    const blink = Math.floor(Date.now() / 500) % 2;
    if (blink) {
        ctx.fillText("ENTER'a bas ve tekrar oyna!", CONFIG.CANVAS_WIDTH / 2, 520);
    }
}

// ==== GAME LOOP ====
function gameLoop() {
    update();
    render();
    requestAnimationFrame(gameLoop);
}

// ==== INITIALIZATION ====
function init() {
    initCanvas();
    setupInput();
    gameLoop();
}

// Start when DOM is ready
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}
