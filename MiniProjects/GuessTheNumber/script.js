let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector('.guessField');
const submit = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const remainingGuess = document.querySelector('.lastResult');
const loworhigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    // console.log(guess)
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number that is higher than 1');
  } else if (guess > 100) {
    alert('Please enter a number that is lower than 100');
  } else {
    prevGuess.push(guess);
  }
  if (numGuess === 11) {
    displayGuess(guess);
    displayMessage(`Game Over. Random Number was ${randomNumber}`);
    endGame();
  } else {
    displayGuess(guess);
    checkGuess(guess);
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
  } else if (guess < randomNumber) {
    displayMessage(`You guessed is low`);
  } else if (guess > randomNumber) {
    displayMessage(`You guessed it high`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess},`;
  numGuess++;
  remainingGuess.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
  loworhigh.innerHTML = `<h2>${message}<\h2>`
}

function endGame(){
  
}