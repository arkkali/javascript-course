console.log('=== DOM ELEMENT SELECTION ===');

const messageEl = document.querySelector('.message');
console.log(messageEl);
const scoreEl = document.querySelector('.score');
let score = 20;
let highscore = 0; // ✅ define globally
console.log(scoreEl);
const guessEl = document.querySelector('.guess');
console.log(guessEl);

console.log('Current message:', messageEl.textContent);
console.log('Current score:', scoreEl.textContent);

console.log('Elements updated!');

const numberEl = document.querySelector('.number');
numberEl.textContent = 0;
console.log('Number:', numberEl);

const guessInput = document.querySelector('.guess');
guessInput.value = 7;
console.log('Guess:', guessInput);

guessInput.value = '0';
console.log('Guess set to:', guessInput.value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('Secret number:', secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  console.log('Check button clicked!');

  const guess = Number(document.querySelector('.guess').value);
  console.log('Player guessed:', guess);

  if (guess === secretNumber) {
    console.log('Correct guess!');
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    // ✅ update highscore correctly
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretNumber) {
    console.log('Too high!!!');
    document.querySelector('.message').textContent = '📈 Too high!';
    score--;
  } else if (guess < secretNumber) {
    console.log('Too low!!!');
    document.querySelector('.message').textContent = '📉 Too low!';
    score--;
  }

  document.querySelector('.score').textContent = score;

  // ✅ lose condition checks score, not scoreEl
  if (score < 1) {
    document.querySelector('.message').textContent = '💥 You lost!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.guess').disabled = true;
    document.querySelector('.check').disabled = true;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  document.querySelector('.guess').disabled = false;
  document.querySelector('.check').disabled = false;
});
