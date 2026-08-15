<div align="center">
<h1>🎮 Pixel Hunt (Caçador de Pixels)</h1>
</div>
<div align="center">
 <img width="600" alt="image" src="https://github.com/user-attachments/assets/0fa6b274-34ed-464f-839f-be525f1b87b8" />
</div>


<div align="center">

**Language / Idioma:**  
[ 🇧🇷 Português ](#-português) &nbsp;|&nbsp; [ 🇺🇸 English ](#-english)

</div>

---

<a name="-português"></a>
## 🇧🇷 Português

Um jogo 2D simples desenvolvido em **HTML5**, **CSS3** e **JavaScript Vanilla**, criado com o objetivo principal de **compreender e praticar os conceitos fundamentais da API HTML5 `<canvas>` e o funcionamento de um Game Loop**.

### 📌 Índice
- [🎯 Objetivo Educacional](#-objetivo-educacional)
- [🕹️ Mecânicas do Jogo](#️-mecânicas-do-jogo)
- [🎮 Controles](#-controles)
- [📁 Estrutura de Arquivos](#-estrutura-de-arquivos)
- [🚀 Como Executar](#-como-executar)
- [🌐 Switch to English](#-english)

---

### 🎯 Objetivo Educacional

Este projeto foi desenvolvido para fins de aprendizado, servindo como uma introdução prática ao desenvolvimento de jogos na web sem a utilização de frameworks ou bibliotecas externas. 

#### 💡 Principais Conceitos de HTML Canvas e Game Dev Abordados:
- **Contexto de Renderização 2D (`CanvasRenderingContext2D`):** Manipulação de elementos gráficos, métodos de desenho (`fillRect`, `clearRect`), estilização (`fillStyle`, `font`, `textAlign`) e renderização de textos no Canvas (`fillText`).
- **Game Loop (`requestAnimationFrame`):** Criação do loop principal de execução para sincronizar a taxa de quadros (FPS), separando a atualização de lógica/física (`update()`) da renderização visual (`draw()`).
- **Física Básica & Vetores:** Movimentação fluida de entidades através de posições `(x, y)` e vetores de velocidade `(dx, dy)`.
- **Detecção de Colisão AABB (Axis-Aligned Bounding Box):** Verificação de interseção entre caixas delimitadoras do jogador e do pixel alvo.
- **Máquina de Estados de Jogo (*State Machine*):** Controle de fluxo entre os estados `START` (tela inicial), `PLAYING` (partida em andamento) e `GAME_OVER` (fim de jogo).
- **Entrada de Usuário (*Input Handling*):** Captura e manipulação de eventos de teclado (`keydown` e `keyup`).
- **Temporização e Mecânicas de Jogo:** Uso de `setInterval` para temporizadores decrescentes e adição de tempo dinâmico por ação.

---

### 🕹️ Mecânicas do Jogo

- **Objetivo:** Coletar o máximo de pixels antes que o tempo se esgote.
- **Sobrevivência:** O jogo inicia com um temporizador de **20 segundos**.
- **Bônus de Tempo:** A cada pixel coletado, você ganha **+1 ponto** e **+1 segundo adicional** no cronômetro.
- **Derrota:** Se o tempo chegar a **0 segundos**, a partida encerra exibindo a sua pontuação final.

---

### 🎮 Controles

| Tecla | Ação |
| :--- | :--- |
| **`Enter`** | Iniciar a partida / Reiniciar após Game Over |
| **`W` / `⬆ Seta Cima`** | Mover para cima |
| **`S` / `⬇ Seta Baixo`** | Mover para baixo |
| **`A` / `⬅ Seta Esquerda`** | Mover para a esquerda |
| **`D` / `➡ Seta Direita`** | Mover para a direita |
| **`R`** | Reiniciar a partida a qualquer momento |

---

### 📁 Estrutura de Arquivos

```text
Pixel-hunt/
├── index.html       # Estrutura da página, HUD e elemento <canvas>
├── style.css        # Folha de estilos centralizada
├── game.js          # Toda a lógica do Canvas, Game Loop, física e colisões
└── README.md        # Documentação e objetivos do projeto
```

---

### 🚀 Como Executar

1. Clone ou baixe este repositório no seu computador.
2. Abra o arquivo **`index.html`** em qualquer navegador web moderno (Google Chrome, Firefox, Edge, etc.).
3. Pressione **`ENTER`** e divirta-se caçando pixels!

[🔼 Voltar ao topo](#-pixel-hunt-caçador-de-pixels)

---

<a name="-english"></a>
## 🇺🇸 English

A simple 2D game built with **HTML5**, **CSS3**, and **Vanilla JavaScript**, created primarily to **understand and practice the core fundamentals of the HTML5 `<canvas>` API and how a Game Loop works**.

### 📌 Table of Contents
- [🎯 Educational Purpose](#-educational-purpose)
- [🕹️ Game Mechanics](#️-game-mechanics)
- [🎮 Controls](#-controls-1)
- [📁 Project Structure](#-project-structure)
- [🚀 How to Run](#-how-to-run)
- [🌐 Mudar para Português](#-português)

---

### 🎯 Educational Purpose

This project was built for educational purposes as a hands-on introduction to web game development without external frameworks or libraries.

#### 💡 Key HTML Canvas & Game Dev Concepts Covered:
- **2D Rendering Context (`CanvasRenderingContext2D`):** Drawing and managing graphics, basic rendering methods (`fillRect`, `clearRect`), styling (`fillStyle`, `font`, `textAlign`), and text rendering directly on canvas (`fillText`).
- **Game Loop (`requestAnimationFrame`):** Implementing the main execution loop to sync with screen refresh rates (FPS), cleanly decoupling game logic/physics (`update()`) from visual rendering (`draw()`).
- **Basic Physics & Vectors:** Smooth entity movement using coordinate positions `(x, y)` and velocity vectors `(dx, dy)`.
- **AABB Collision Detection (Axis-Aligned Bounding Box):** Detecting overlap and collision between bounding boxes of the player and target.
- **Game State Machine:** Managing state transitions across `START` (welcome/ready screen), `PLAYING` (active gameplay), and `GAME_OVER` (session end).
- **Input Handling:** Listening to and processing keyboard events (`keydown` and `keyup`).
- **Timing & Game Dynamics:** Using `setInterval` for countdown timers and dynamic time bonus rewards per interaction.

---

### 🕹️ Game Mechanics

- **Objective:** Collect as many pixels as possible before time runs out.
- **Survival Mode:** The game starts with a countdown timer of **20 seconds**.
- **Time Bonus:** Each collected pixel awards **+1 point** and **+1 additional second** to the clock.
- **Game Over:** If the timer reaches **0 seconds**, the game ends and displays your final score.

---

### 🎮 Controls

| Key | Action |
| :--- | :--- |
| **`Enter`** | Start game / Restart after Game Over |
| **`W` / `⬆ Up Arrow`** | Move up |
| **`S` / `⬇ Down Arrow`** | Move down |
| **`A` / `⬅ Left Arrow`** | Move left |
| **`D` / `➡ Right Arrow`** | Move right |
| **`R`** | Restart the game at any time |

---

### 📁 Project Structure

```text
Pixel-hunt/
├── index.html       # HTML structure, HUD, and <canvas> element
├── style.css        # Centralized styling stylesheet
├── game.js          # Core Canvas rendering, Game Loop, physics, and collisions
└── README.md        # Documentation and project objectives
```

---

### 🚀 How to Run

1. Clone or download this repository to your computer.
2. Open **`index.html`** in any modern web browser (Google Chrome, Firefox, Edge, etc.).
3. Press **`ENTER`** and have fun hunting pixels!

[🔼 Back to top](#-pixel-hunt-caçador-de-pixels)
