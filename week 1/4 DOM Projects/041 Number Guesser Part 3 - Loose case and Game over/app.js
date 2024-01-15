/*
GAME FUNCTION
- Player must guess a number between a min and max
- Player gets a certin amount of guesses
- Notify Player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3

// UI Elements
const game = document.getElementById("game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message")

// Assign UI min and max
minNum.textContent = min
maxNum.textContent = max

// Listen for guess

guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value)

  // validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(
      `Please Enter Number Between ${min}
        and ${max}`,
      "red"
    )
  }
  // Check if won
  if (guess === winningNum) {
    // Game Over  - Won
    gameOver(true, `${winningNum} is correct YOU WIN!`)
  } else {
    // Wrong nunmber
    guessesLeft -= 1

    if (guessesLeft === 0) {
      // Game Over - lost
      gameOver(
        false,
        `Game Over, you lost. The correct number was
      ${winningNum}`
      )
    } else {
      // Game continues - answer wrong
      // change border color
      guessInput.style.borderColor = "red"

      // Clear Input
      guessInput.value = ""

      // Tell the user its wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, "red")
    }
  }
})

// Game over
function gameOver(won, msg) {
  let color
  won === true ? (color = "green") : (color = "red")

  //disable input
  guessInput.disabled = true
  // Change border color
  guessInput.style.borderColor = color
  // set text color
  message.style.color = color
  // Set Message
  setMessage(msg)
}

// Set message
function setMessage(msg, color) {
  message.style.color = color
  message.textContent = msg
}
