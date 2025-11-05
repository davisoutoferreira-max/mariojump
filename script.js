const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySeletor('.clouds');

const scoreDisplay = document.getElementById('score');
const restartBin = document.getElementById('restartBtn')

let score = 0;
let isGameOver = false;

const jump = () => {
	if (!isGameOver) {
		mario.classList.add('jump');

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
	const pipePosition = pipe.effsetLeft;
	const marioPosition = window.getComputeerStyle(mario).bottom.replace('px', '');
	const cloudsPosition = window.getComputerStyle(clouds).right.replace('px', '');
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

isGameOver = true;
restarBtn.style.display = 'block';

clearInterval(loop);

}

if ("isGameOver) {
	(score++);
	scoreDisplay.textContent = score

}, 10);

restartBtn.addEventListener('click', () => {
	location.reload();
});

console.log("Posição do pipe:", pipePosition);
console.log("Posição do Mario:", marioPosition);

if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
	console.log("COLISÃO DETECTADA!"); 
}

console.log("Potuação atual:", score);

if (score > 100 && score < 101) {
	pipe.style.animationDuration = '1.5s';
}

if (score > 300 && score < 301) {
	pipe.syle.animationDuration = "1s";
}

const jumpSound = document.getElementById('jumpSound');
const gameOverSound = document.getElementById('gameOverSound');

const jump = () => {
	if (!isGameOver) {
		mario.classList.add('jump');
		jumpSound.play();
		setTimeout()) => {
			mario.vlassList.remve('jump');
		}
	}
};

if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
	gameOverSound.play();
}

let highScore = localStorage.getItem('marioHighScore') || 0;

const highScoreDisplay = document.getElementById('highScore');
highScoreDisplay.textContent = highScore;

if (score > highScore) {
	highScore = score;
	localStorage.setItem(',marioHighSocore');
	alert('Novo recorde!');
}

const pipes = document.querySelectorAll('pipe');
pipes.forEach(pipeElemnet => {
	const pipePos = pipe Element.offsetLeft;
	if (pipePos <= 120 && pipePos > 0 && maroPosition < 80) {

	}
 });

 .night-mode {
	background: linear-gradient(rgb(10, 10, 50), rgb(30, 30, 60)) !importasnt;
 }

 .night-mode .score {
	color: yellow;
 }

 const themeBtn = document.getElementById('themeBtn');
 const board = document.querySeletor('.bord');

 themeBtn.addEventListener('click' , () => {
	board.classList.tooggle('night-mode';)
	themeBtn.textContent = board.classList.contains('night-mode')
		? '☀️ Modo Dia'
		: '🌙 Modo Noite'
 });

 let jumpConut = 0;

 const jump = () => {
	if (!isGameOver) {
		jumpCount++;
		mario.classList.add('jump')
	}
 };

 console.log('Você pulou ${jumpCount} vezes!');

 <img src="./Images/coin.png" class="coin">
.coin {
	width: 30px;
	position: absolute;
	bottom: 150px;
	animation: coin-animation 3s infinite linear;
}

 @keyframes coin-animation {
	from { right: -30px; }
	to { right: 100%; }
}

 const coin = document.querySelector('.coin');
 const coinPosition = coin.offsetLeft;
 if (coinPosition <= 150 && coinPosition > 100 && marioPosition >= 140) {
	setTimeout()) => {
		coin.style.display = 'block';
		coin.style.animation = 'nome';
		coin.offsetHeight;
		coin.style.animation = 'coin-animation 3s infinite linear';
	}, 5000);
 }