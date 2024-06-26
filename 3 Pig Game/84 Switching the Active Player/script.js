// 'use strict';
// Selecting elements
const player0El = document.querySelector('.player--0');
const player01El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currenScore = 0;
let activePlayer = 0;

// Rolling dice functionality

btnRoll.addEventListener('click', function () {
  // 1. Generating a rondom dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  // 2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  // 3. Check for  rolled
  if (dice !== 1) {
    // Add dice to current score
    currenScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currenScore;
  } else {
    // switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currenScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player01El.classList.toggle('player--active');
  }
});
