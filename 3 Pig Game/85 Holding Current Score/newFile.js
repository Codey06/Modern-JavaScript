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
    //   current0El.textContent=currenScore
  } else {
    // switch to next player
  }
});
