import { questions } from "./questions.js";
const question = document.getElementById('question');
const choiceElement = document.getElementById('choice');
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');
const score = document.getElementById('score');
score.innerHTML = "0";
let pageNumberIndex = 0;
displayQuestion(pageNumberIndex);
buttonOnOff();
function displayQuestion(index) {
    //getting current question
    let currentNumber = questions[index];
    //displaying current question
    question.innerHTML = currentNumber.question;
    //clearing the choices 
    choiceElement.innerHTML = '';
    currentNumber.choice.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.addEventListener('click', () => {
            if (currentNumber.answer == choice) {
                button.style.backgroundColor = "green";
                IncreaseScore();
            }
            else {
                button.style.backgroundColor = "red";
            }
            const allChoices = choiceElement.querySelectorAll('button');
            allChoices.forEach(btn => btn.disabled = true);
        });
        choiceElement.appendChild(button);
    });
}
nextButton.addEventListener('click', () => {
    pageNumberIndex = pageNumberIndex + 1;
    displayQuestion(pageNumberIndex);
    console.log(pageNumberIndex);
    buttonOnOff();
});
prevButton.addEventListener('click', () => {
    pageNumberIndex = pageNumberIndex - 1;
    displayQuestion(pageNumberIndex);
    console.log(pageNumberIndex);
    buttonOnOff();
});
function IncreaseScore() {
    let currentScore = parseInt(score.innerText);
    currentScore += 1;
    score.innerText = currentScore.toString();
}
function buttonOnOff() {
    if (pageNumberIndex == 0) {
        prevButton.disabled = true;
        nextButton.disabled = false;
    }
    if (pageNumberIndex == 29) {
        prevButton.disabled = false;
        nextButton.disabled = true;
    }
    if (pageNumberIndex > 0 && pageNumberIndex < 29) {
        prevButton.disabled = false;
        nextButton.disabled = false;
    }
}
