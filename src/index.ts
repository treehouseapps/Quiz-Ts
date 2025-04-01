import { questions } from "./questions.js";

const question = document.getElementById('question') as HTMLElement;
const choiceElement = document.getElementById('choice') as HTMLElement;
const nextButton = document.getElementById('nextButton') as HTMLButtonElement;
const prevButton = document.getElementById('prevButton') as HTMLButtonElement;
const calculateButton = document.getElementById('calculateButton') as HTMLButtonElement;
const finalScoreElement = document.getElementById('finalScore') as HTMLElement;
const scoreModal = document.getElementById('scoreModal') as HTMLElement;
const closeModal = document.getElementById('closeModal') as HTMLElement;

let score = 0
let pageNumberIndex = 0;
let click = 0
calculateButton.disabled = true

// Track selected choices
const selectedChoices: Record<number, string> = {};

displayQuestion(pageNumberIndex);
buttonOnOff();

function displayQuestion(index: number) {
    let currentNumber = questions[index];

    question.innerHTML = currentNumber.question;
    choiceElement.innerHTML = '';

    function claculate() {
        if (click == 30) {
            calculateButton.disabled = false
        }
    }
    currentNumber.choice.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice;

        // Restore previous selection
        if (selectedChoices[index] !== undefined) {
            if (selectedChoices[index] === choice) {
                button.style.backgroundColor = currentNumber.answer === choice ? "green" : "red";
            }
            button.disabled = true; // Disable buttons if already selected
        }

        button.addEventListener('click', () => {
            click = click + 1
            claculate()
            if (selectedChoices[index] === undefined) { // Prevent re-selection
                selectedChoices[index] = choice;

                if (currentNumber.answer === choice) {
                    button.style.backgroundColor = "green";
                    IncreaseScore();
                } else {
                    button.style.backgroundColor = "red";
                }

                const allChoices = choiceElement.querySelectorAll('button');
                allChoices.forEach(btn => btn.disabled = true);
            }
        });

        choiceElement.appendChild(button);
    });
}

nextButton.addEventListener('click', () => {
    pageNumberIndex++;
    displayQuestion(pageNumberIndex);
    buttonOnOff();
});

prevButton.addEventListener('click', () => {
    pageNumberIndex--;
    displayQuestion(pageNumberIndex);
    buttonOnOff();
});
calculateButton.addEventListener('click', () => {
    finalScoreElement.innerText = score.toString(); // Update score
    scoreModal.classList.remove('d-none'); // Show modal
});
closeModal.addEventListener('click', () => {
    scoreModal.classList.add('d-none'); // Hide modal
});

// Hide modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === scoreModal) {
        scoreModal.classList.add('d-none'); // Hide modal
    }
});
function IncreaseScore() {
    score += 1;
}

function buttonOnOff() {
    prevButton.disabled = pageNumberIndex === 0;
    nextButton.disabled = pageNumberIndex === 29;
}
