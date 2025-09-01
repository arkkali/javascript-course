//JavaScript Fundamentals Part 2 - Hour 4
// Interactive Score Tracker - script.js

const score1El = document.getElementById("score-1");
const score2El = document.getElementById("score-2");

const addButtons = document.querySelectorAll(".btn-add");
const resetBtn = document.getElementById("btn-reset");

const winningInput = document.getElementById("winning-score");
const targetEl = document.querySelector(".target");

const statusEl = document.querySelector(".status");
const winnerBanner = document.querySelector(".winner");
const winnerNameEl = document.querySelector(".winner-name");

const player1Card = document.querySelector(".player-1");
const player2Card = document.querySelector(".player-2");


const game = {
  scores: { 1: 0, 2: 0 },
  target: Number(winningInput.value) || 5,
  isOver: false,
};


function renderScores() {
  score1El.textContent = game.scores[1];
  score2El.textContent = game.scores[2];
}

function setButtonsEnabled(enabled) {
  addButtons.forEach((btn) => (btn.disabled = !enabled));
}

function celebrate(winnerPlayer) {
  const loserPlayer = winnerPlayer === 1 ? 2 : 1;

  // Show banner
  winnerNameEl.textContent = `Player ${winnerPlayer}`;
  winnerBanner.classList.remove("hidden");

  // Style cards
  (winnerPlayer === 1 ? player1Card : player2Card).classList.add("winner");
  (loserPlayer === 1 ? player1Card : player2Card).classList.add("loser");

  // Update status text
  statusEl.textContent = `Game over — Player ${winnerPlayer} reached ${game.target}!`;
}

function clearCelebration() {
  winnerBanner.classList.add("hidden");
  player1Card.classList.remove("winner", "loser");
  player2Card.classList.remove("winner", "loser");
}

function checkForWinner() {
  for (const p of [1, 2]) {
    if (game.scores[p] >= game.target) {
      game.isOver = true;
      setButtonsEnabled(false);
      celebrate(p);
      return true;
    }
  }
  return false;
}

function incrementScore(player) {
  if (game.isOver) return;
  game.scores[player]++;
  renderScores();
  checkForWinner();
}

function resetGame() {
  game.scores[1] = 0;
  game.scores[2] = 0;
  game.isOver = false;

  renderScores();
  clearCelebration();
  setButtonsEnabled(true);

  statusEl.innerHTML = `First to <span class="target">${game.target}</span> wins!`;
  targetElRefetch();
}

function targetElRefetch() {
  const newTarget = document.querySelector(".target");
  if (newTarget) {
  }
}

// Add point buttons
addButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const player = Number(btn.dataset.player);
    incrementScore(player);
  });
});

// Reset button
resetBtn.addEventListener("click", resetGame);

// Winning score input 
winningInput.addEventListener("change", () => {
  let val = Math.floor(Number(winningInput.value));
  const min = Number(winningInput.min) || 1;
  const max = Number(winningInput.max) || 20;

  if (!Number.isFinite(val)) val = game.target;
  val = Math.max(min, Math.min(max, val));

  winningInput.value = String(val);
  game.target = val;

  // Update the on-screen target and reset the game to apply new rule
  targetEl.textContent = String(val);
  resetGame();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "1") incrementScore(1);
  else if (e.key === "2") incrementScore(2);
  else if (e.key.toLowerCase() === "r") resetGame();
});

targetEl.textContent = String(game.target);
renderScores();
setButtonsEnabled(true);
clearCelebration();
statusEl.innerHTML = `First to <span class="target">${game.target}</span> wins!`;

