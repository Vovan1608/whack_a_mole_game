const square = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.getElementById('time-left');
let score = document.getElementById('score');

let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;

function randomSquare() {
	square.forEach(className => className.classList.remove('mole'));

	let randomPosition = square[Math.floor(Math.random() * 9)];
	randomPosition.classList.add('mole');

	hitPosition = randomPosition.id;
}

square.forEach(square => {
	square.addEventListener('mousedown', () => {
		if (square.id === hitPosition) {
			result += 1;
			score.textContent = result;
			hitPosition = null;
		}
	});
});

function moveMole() {
	timerId = setInterval(randomSquare, 1000);
}

moveMole();

function countDown() {
	currentTime -= 1;
	timeLeft.textContent = currentTime;

	if (!currentTime) {
		clearInterval(countDownTimerId);
		clearInterval(timerId);
		alert(`GAME OVER!!! Your finaly score is ${result}`);
	}
}

let countDownTimerId = setInterval(countDown, 1000);