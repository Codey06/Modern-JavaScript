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
    //disable input
    guessInput.disabled = true
    // Change border color
    guessInput.style.borderColor = "green"
    // Set Message
    setMessage(`${winningNum} is correct YOU WIN!`, "green")
  } else {
  }
})

// Set message
function setMessage(msg, color) {
  message.style.color = color
  message.textContent = msg
}
