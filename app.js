const wordForm = document.querySelector("#word-form");
const wordFormContainer = document.querySelector("#word-form-container");
const hangmanContainer = document.querySelector("#hangman-container");
const letterForm = document.querySelector("#letter-form");
const correctWord = document.querySelector("#correct-word");

let word;
const correctLetters = [];

function displayWord() {
	correctWord.innerHTML = `
    ${word
		.split("")
		.map(
			letter => `
          <span class="letter">
            ${correctLetters.includes(letter) ? letter : "_"}
          </span>
        `
		)
		.join("")}
  `;

	const innerWord = correctWord.innerText.replace(/[ \n]/g, "");

	if (innerWord === word) {
		// finalMessage.innerText = "Congratulations! You won! 😃";
		// popup.style.display = "flex";
		// playable = false;
	}
}

function handleLetterSubmit(e) {
	e.preventDefault();
	const letter = e.target.letter.value;
	e.target.letter.value = "";

	if (letter.trim() == "") return;
	if (letter.length != 1) return;

	if (word.includes(letter)) {
		if (correctLetters.includes(letter)) return;
		correctLetters.push(letter);
		displayWord();
	}
}

function handleWordSubmit(e) {
	e.preventDefault();
	word = e.target.word.value;

	if (word.trim() == "") return;
	if (word.length < 4) return;

	wordFormContainer.style.display = "none";
	hangmanContainer.style.display = "flex";
	displayWord();
}

wordForm.addEventListener("submit", handleWordSubmit);
letterForm.addEventListener("submit", handleLetterSubmit);
