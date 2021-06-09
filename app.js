const square = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.getElementById('time-left');
let score = document.getElementById('score');

let result = 0;

function randomSquare() {
	square.forEach(className => className.classList.remove('mole'));

	let randomPosition = square[Math.floor(Math.random() * 9)];
	randomPosition.classList.add('mole');
}