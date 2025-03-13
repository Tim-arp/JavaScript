let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const remainingGuess = document.querySelector('.lastResult');
const lowOrhigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

let playGame = true;
prevGuess = [];
numGuess = 0;
const p = document.createElement('p');

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // checks whether the given input is valid or not
  if (isNaN(guess)) {
    alert('Enter a valid number');
  } else if (guess < 1) {
    alert('Enter a number greater than 1');
  } else if (guess > 100) {
    alert('Enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      // displayGuess(guess);
      displayMessage(`Game Over. Random Number is ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // check whether the guess is highorlow
  if (guess > randomNumber) {
    displayMessage('Guessed Number is high');
  } else if (guess < randomNumber) {
    displayMessage('Guessed Number is low');
  } else if (guess === randomNumber) {
    displayMessage('You guessed it right');
  }
}

function displayGuess(guess) {
  // clears input slot and update prevguess
  userInput.value = '';
  guessSlot.innerHTML = prevGuess.join(', ');
  numGuess++;
  remainingGuess.innerHTML = `${10 - numGuess}`;
}

function displayMessage(message) {
  // display message
  lowOrhigh.innerHTML = `<h2> ${message} </h2>`
}

function endGame() {
  // ends the game
  userInput.value = ''
  userInput.setAttribute("disabled",'')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
  startOver.appendChild(p)
  playGame = false
  newGame()
}

function newGame() {
  // restart the game
  const newGamebutton = document.querySelector("#newGame")
  newGamebutton.addEventListener('click',function(e){
  randomNumber = parseInt(Math.random() * 100 + 1);
  prevGuess = [];
  numGuess = 0;
  guessSlot.innerHTML = '';
  remainingGuess.innerHTML = `${10 - numGuess} `;
  userInput.removeAttribute('disabled');
  startOver.removeChild(p);
  playGame = true;
  })
}
