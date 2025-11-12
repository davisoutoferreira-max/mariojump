const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const coin = document.querySelector('.coin');

const scoreDisplay = document.getElementById('score');
const highScoreDisplay = document.getElementById('highScore');
const restartBtn = document.getElementById('restartBtn');
const themeBtn = document.getElementById('themeBtn');
const board = document.querySelector('.board');

const jumpSound = document.getElementById('jumpSound');
const gameOverSound = document.getElementById('gameOverSound');

let score = 0;
let highScore = localStorage.getItem('marioHighScore') || 0;
let isGameOver = false;
let jumpCount = 0;

highScoreDisplay.textContent = highScore;

const jump = () => {
    if (!isGameOver) {
        jumpCount++;
        mario.classList.add('jump');
        jumpSound.play();

        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }
};

document.addEventListener("keydown", (event) => {
    if (event.code === 'Space') {
        jump();
    }
});

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = +window.getComputedStyle(clouds).right.replace('px', '');
    const coinPosition = coin.offsetLeft;

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        clouds.style.animation = 'none';
        clouds.style.right = `${cloudsPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './Images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        gameOverSound.play();

        isGameOver = true;
        restartBtn.style.display = 'block';

        clearInterval(loop);

        if (score > highScore) {
            highScore = score;
            localStorage.setItem('marioHighScore', highScore);
            alert('Novo recorde!');
        }
    }

    if (coinPosition <= 150 && coinPosition > 100 && marioPosition >= 140) {
        setTimeout(() => {
            coin.style.display = 'block';
            coin.style.animation = 'none';
            coin.offsetHeight;
            coin.style.animation = 'coin-animation 3s infinite linear';
        }, 5000);
    }

    if (!isGameOver) {
        score++;
        scoreDisplay.textContent = score;

        if (score === 100) {
            pipe.style.animationDuration = '1.5s';
        }

        if (score === 300) {
            pipe.style.animationDuration = '1s';
        }
    }
}, 10);

restartBtn.addEventListener('click', () => {
    location.reload();
});

themeBtn.addEventListener('click', () => {
    board.classList.toggle('night-mode');
    themeBtn.textContent = board.classList.contains('night-mode')
        ? '☀️ Modo Dia'
        : '🌙 Modo Noite';
});
