# 🎮 Caçador de Pixels (Pixel Hunt)

Um jogo 2D simples desenvolvido em **HTML5**, **CSS3** e **JavaScript Vanilla**, criado com o objetivo principal de **compreender e praticar os conceitos fundamentais da API HTML5 `<canvas>` e o funcionamento de um Game Loop**.

---

## 🎯 Objetivo Educacional

Este projeto foi desenvolvido para fins de aprendizado, servindo como uma introdução prática ao desenvolvimento de jogos na web sem a utilização de frameworks ou bibliotecas externas. 

### 💡 Principais Conceitos de HTML Canvas e Game Dev Abordados:
- **Contexto de Renderização 2D (`CanvasRenderingContext2D`):** Manipulação de elementos gráficos, métodos de desenho (`fillRect`, `clearRect`), estilização (`fillStyle`, `font`, `textAlign`) e renderização de textos no Canvas (`fillText`).
- **Game Loop (`requestAnimationFrame`):** Criação do loop principal de execução para sincronizar a taxa de quadros (FPS), separando a atualização de lógica/física (`update()`) da renderização visual (`draw()`).
- **Física Básica & Vetores:** Movimentação fluida de entidades através de posições `(x, y)` e vetores de velocidade `(dx, dy)`.
- **Detecção de Colisão AABB (Axis-Aligned Bounding Box):** Verificação de interseção entre caixas delimitadoras do jogador e do pixel alvo.
- **Máquina de Estados de Jogo (*State Machine*):** Controle de fluxo entre os estados `START` (tela inicial), `PLAYING` (partida em andamento) e `GAME_OVER` (fim de jogo).
- **Entrada de Usuário (*Input Handling*):** Captura e manipulação de eventos de teclado (`keydown` e `keyup`).
- **Temporização e Mecânicas de Jogo:** Uso de `setInterval` para temporizadores decrescentes e adição de tempo dinâmico por ação.

---

## 🕹️ Mecânicas do Jogo

- **Objetivo:** Coletar o máximo de pixels antes que o tempo se esgote.
- **Sobrevivência:** O jogo inicia com um temporizador de **20 segundos**.
- **Bônus de Tempo:** A cada pixel coletado, você ganha **+1 ponto** e **+1 segundo adicional** no cronômetro.
- **Derrota:** Se o tempo chegar a **0 segundos**, a partida encerra exibindo a sua pontuação final.

---

## 🎮 Controles

| Tecla | Ação |
| :--- | :--- |
| **`Enter`** | Iniciar a partida / Reiniciar após Game Over |
| **`W` / `⬆ Seta Cima`** | Mover para cima |
| **`S` / `⬇ Seta Baixo`** | Mover para baixo |
| **`A` / `⬅ Seta Esquerda`** | Mover para a esquerda |
| **`D` / `➡ Seta Direita`** | Mover para a direita |
| **`R`** | Reiniciar a partida a qualquer momento |

---

## 📁 Estrutura de Arquivos

```text
Pixel-hunt/
├── index.html       # Estrutura da página, HUD e elemento <canvas>
├── style.css        # Folha de estilos complementares
├── game.js          # Toda a lógica do Canvas, Game Loop, física e colisões
└── README.md        # Documentação e objetivos do projeto
```

---

## 🚀 Como Executar

1. Clone ou baixe este repositório no seu computador.
2. Abra o arquivo **`index.html`** em qualquer navegador web moderno (Google Chrome, Firefox, Edge, etc.).
3. Pressione **`ENTER`** e divirta-se caçando pixels!
