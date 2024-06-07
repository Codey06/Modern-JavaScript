// "use strict"
// console.log(document.querySelector(".message").textContent)
// document.querySelector(".message").textContent = " 🎉 Correct !"
// console.log(document.querySelector(".message").textContent)
// document.querySelector(".number").textContent = 13
// document.querySelector(".score").textContent = 10
// document.querySelector(".guess").value = 23
const secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20

document.querySelector(".number").textContent = "?"
// console.log(number)
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value)
  console.log(guess, typeof guess)
  // When their No Input
  if (!guess) {
    document.querySelector(".message").textContent = "🎉 No Number You guess"
    document.querySelector(".number").textContent = secretNumber
  }
  //  When the player Wins
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = " 🎉 Correct !"
    document.querySelector("body").style.backgroundColor = "#60b347"
    document.querySelector(".number").style.width = "30rem"
    // document.querySelector(".number").textContent = secretNumber
  }
  // When the guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = " ☝ Too high !"
      score--
      document.querySelector(".score").textContent = score
    } else {
      document.querySelector(".message").textContent = "💥 You Lost"
      document.querySelector(".score").textContent = 0
    }
  }
  // When the guess is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = " 👇 Too low !"
      score--
      document.querySelector(".score").textContent = score
    } else {
      document.querySelector(".message").textContent = "💥 You Lost"
      document.querySelector(".score").textContent = 0
    }
  }
})

// Try Again
document.querySelector(".again").addEventListener("click", function () {
  score = 20
  // secretNumber = Math.trunc(Math.random() * 20) + 1
  document.querySelector(".guess").value = ""

  document.querySelector(".number").textContent = "?"
  document.querySelector(".score").textContent = 20
  document.querySelector(".message").textContent = "Start guessing..."
  document.querySelector("body").style.backgroundColor = "#222"
  document.querySelector(".number").style.width = "15rem"
})
