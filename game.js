const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const scoreElement = document.getElementById("score");
const timeElement = document.getElementById("time");

// Configurações do jogo
const INITIAL_TIME = 20;    // Tempo inicial em segundos para DERROTA

let score = 0;
let timeLeft = INITIAL_TIME;
let gameState = "START";    // Estados possíveis: "START", "PLAYING", "GAME_OVER"
let timerInterval = null;

// Objeto do Jogador com vetores de velocidade (dx, dy)
const player = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 20,
    speed: 3,
    dx: 0,
    dy: 0
};

// Objeto do Alvo (o que vamos coletar)
const target = {
    x: Math.random() * (canvas.width - 15),
    y: Math.random() * (canvas.height - 15),
    size: 15
};

// Temporizador do Jogo (Controla a condição de derrota por tempo)
function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (gameState === "PLAYING") {
            timeLeft--;
            if (timeElement) timeElement.innerText = timeLeft;

            // CONDIÇÃO DE DERROTA: O tempo esgotou
            if (timeLeft <= 0) {
                gameState = "GAME_OVER";
                clearInterval(timerInterval);
            }
        }
    }, 1000);
}

// Inicia ou reinicia uma partida
function startGame() {
    score = 0;
    timeLeft = INITIAL_TIME;
    gameState = "PLAYING";

    player.x = canvas.width / 2;
    player.y = canvas.height / 2;
    player.dx = 0;
    player.dy = 0;

    target.x = Math.random() * (canvas.width - target.size);
    target.y = Math.random() * (canvas.height - target.size);

    if (scoreElement) scoreElement.innerText = score;
    if (timeElement) timeElement.innerText = timeLeft;

    startTimer();
}

// Controles do teclado
document.addEventListener("keydown", (e) => {
    // Pressionar ENTER inicia ou reinicia o jogo
    if (e.key === "Enter") {
        startGame();
        return;
    }

    // Tecla 'R' para reiniciar a qualquer momento
    if (e.key === "r" || e.key === "R") {
        startGame();
        return;
    }

    // Se não estiver jogando, ignora as teclas de movimento
    if (gameState !== "PLAYING") return;

    if (e.key === "w" || e.key === "ArrowUp") player.dy = -player.speed;
    if (e.key === "s" || e.key === "ArrowDown") player.dy = player.speed;
    if (e.key === "a" || e.key === "ArrowLeft") player.dx = -player.speed;
    if (e.key === "d" || e.key === "ArrowRight") player.dx = player.speed;
});

document.addEventListener("keyup", (e) => {
    if (e.key === "w" || e.key === "ArrowUp" || e.key === "s" || e.key === "ArrowDown") player.dy = 0;
    if (e.key === "a" || e.key === "ArrowLeft" || e.key === "d" || e.key === "ArrowRight") player.dx = 0;
});

function update() {
    // Se o jogo não estiver rolando (START ou GAME_OVER), não atualiza a física
    if (gameState !== "PLAYING") return;

    // Aplica a velocidade à posição
    player.x += player.dx;
    player.y += player.dy;

    // Impede o jogador de sair da tela
    if (player.x < 0) player.x = 0;
    if (player.x + player.size > canvas.width) player.x = canvas.width - player.size;
    if (player.y < 0) player.y = 0;
    if (player.y + player.size > canvas.height) player.y = canvas.height - player.size;

    // Detecção de Colisão (AABB)
    if (
        player.x < target.x + target.size &&
        player.x + player.size > target.x &&
        player.y < target.y + target.size &&
        player.y + player.size > target.y
    ) {
        // Ponto marcado!
        score++;
        if (scoreElement) scoreElement.innerText = score;

        // Adiciona +1 segundo ao tempo a cada coleta (modo sobrevivência infinito)
        timeLeft += 1;
        if (timeElement) timeElement.innerText = timeLeft;

        // Reposiciona o alvo aleatoriamente
        target.x = Math.random() * (canvas.width - target.size);
        target.y = Math.random() * (canvas.height - target.size);
    }
}

function draw() {
    // 1. Limpa o quadro anterior
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2. Desenha o Jogador (Cyan)
    ctx.fillStyle = "#00ffcc";
    ctx.fillRect(player.x, player.y, player.size, player.size);

    // 3. Desenha o Alvo (Rosa/Vermelho)
    ctx.fillStyle = "#ff0055";
    ctx.fillRect(target.x, target.y, target.size, target.size);

    // 4. Telas de Estado (Tela Inicial ou Derrota / Game Over)
    if (gameState === "START") {
        ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#00ffcc";
        ctx.font = "bold 26px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("CAÇADOR DE PIXELS", canvas.width / 2, canvas.height / 2 - 35);

        ctx.fillStyle = "#ffffff";
        ctx.font = "15px sans-serif";
        ctx.fillText("Colete o máximo de pixels antes do tempo acabar!", canvas.width / 2, canvas.height / 2);
        ctx.fillText("Cada pixel coletado dá +1 segundo de bônus.", canvas.width / 2, canvas.height / 2 + 25);

        ctx.fillStyle = "#00ff88";
        ctx.font = "bold 16px sans-serif";
        ctx.fillText("▶ Pressione ENTER para Começar", canvas.width / 2, canvas.height / 2 + 65);
    } else if (gameState === "GAME_OVER") {
        ctx.fillStyle = "rgba(0, 0, 0, 0.75)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#ff4444";
        ctx.font = "bold 28px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("FIM DE JOGO! 💀", canvas.width / 2, canvas.height / 2 - 25);

        ctx.fillStyle = "#ffd700";
        ctx.font = "bold 18px sans-serif";
        ctx.fillText(`Pontuação Final: ${score} pontos`, canvas.width / 2, canvas.height / 2 + 10);

        ctx.fillStyle = "#ffffff";
        ctx.font = "15px sans-serif";
        ctx.fillText("Pressione ENTER ou 'R' para tentar novamente", canvas.width / 2, canvas.height / 2 + 45);
    }
}

// O Coração da Engine: O Game Loop
function gameLoop() {
    update(); // Processa a física e lógica
    draw();   // Pinta o resultado na tela

    requestAnimationFrame(gameLoop); // Repete o ciclo infinitamente
}

// Inicia o Game Loop (jogo fica aguardando o ENTER na tela inicial)
gameLoop();