const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
const score = document.getElementById('userScore');
const opponentScore = document.getElementById('computerScore');


let userChoice;
let computerChoice;
let result;

let userScore = 0;
let computerScore = 0;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice

    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.trunc(Math.random() * 3)

    if (randomNumber === 0) {
        computerChoice = 'rock'
    }
    if (randomNumber === 1) {
        computerChoice = 'paper'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissor'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'It is Draw!'
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'you Won!'
        userScore = userScore + 1
    }
    if (computerChoice === 'rock' && userChoice === 'scissor') {
        result = 'you Lost!'
        computerScore = computerScore + 1;
    }
    if (computerChoice === 'paper' && userChoice === 'scissor') {
        result = 'you Won!'
        userScore = userScore + 1
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'you Lost!'
        computerScore = computerScore + 1;
    }
    if (computerChoice === 'scissor' && userChoice === 'rock') {
        result = 'you Won!'
        userScore = userScore + 1
    }
    if (computerChoice === 'scissor' && userChoice === 'paper') {
        result = 'you Lost!'
        computerScore = computerScore + 1;
    }
    resultDisplay.innerHTML = result;
    score.innerHTML = userScore;
    opponentScore.innerHTML = computerScore;
}