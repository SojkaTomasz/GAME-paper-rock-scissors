const img = document.querySelectorAll('img');
const whoWin = document.querySelector('[data-summary="who-win"]');

let numbers = 0;
let wins = 0;
let losses = 0;
let draws = 0;

let yourChoice = '';
let yourChoiceShow = '';
let compChoice = '';
let result = '';

// WYBÓR UŻYTKOWNIKA
img.forEach((item) =>
	item.addEventListener('click', function (e) {
		const imgItem = e.target;
		yourChoice = e.target.dataset.option;
		yourChoiceShow = e.target.dataset.option;
		img.forEach((item) => {
			item.style.boxShadow = '';
		});
		imgItem.style.boxShadow = '0 0 0 6px #000';
	})
);

// PRZYCISK START GRA
document.querySelector('.start').addEventListener('click', () => {
	if (!yourChoice) {
		const showError = document.querySelector('.error');
		showError.style.display = 'block';
		document.querySelector('.error button').addEventListener('click', () => {
			showError.style.display = 'none';
		});
	} else {
		numbers++;
		choiseComputer();
		gameScore();
		displayResult();
		turnReset();
	}
});

// RESTE TURY

const turnReset = () => {
	img.forEach((item) => {
		item.style.boxShadow = '';
	});
	yourChoice = '';
};

// WYBÓR KOMPUTERA
function choiseComputer() {
	compChoice = img[Math.floor(Math.random() * 3)].dataset.option;
}

// KTO WYGRAŁ
const gameScore = () => {
	if (
		(yourChoice === 'papier' && compChoice === 'kamień') ||
		(yourChoice === 'kamień' && compChoice === 'nożyce') ||
		(yourChoice === 'nożyce' && compChoice === 'papier')
	) {
		wins++;
		result = 'Wygrana';
		whoWin.style.color = 'green';
	} else if (yourChoice === compChoice) {
		draws++;
		result = 'Remis';
		whoWin.style.color = 'gray';
	} else {
		losses++;
		result = 'Przegrana';
		whoWin.style.color = 'red';
	}
};

// WYŚWIETLENIE WYNIKÓW
const displayResult = () => {
	document.querySelector('[data-summary="your-choice"]').textContent =
		yourChoiceShow;
	document.querySelector('[data-summary="ai-choice"]').textContent = compChoice;
	whoWin.textContent = result;
	document.querySelector('.numbers span').textContent = numbers;
	document.querySelector('.wins span').textContent = wins;
	document.querySelector('.losses span').textContent = losses;
	document.querySelector('.draws span').textContent = draws;
};

// RESET GRY

document.querySelector('.reset').addEventListener('click', () => {
	img.forEach((item) => {
		item.style.boxShadow = '';
	});
	numbers = 0;
	wins = 0;
	losses = 0;
	draws = 0;
	yourChoice = '';
	yourChoiceShow = '';
	compChoice = '';
	result = '';
	displayResult();
});
