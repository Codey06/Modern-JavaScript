"use strict"
// console.log(document.querySelector(".message").textContent)
// document.querySelector(".message").textContent = " 🎉 Correct !"
// console.log(document.querySelector(".message").textContent)
// document.querySelector(".number").textContent = 13
// document.querySelector(".score").textContent = 10
// document.querySelector(".guess").value = 23
document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value
  console.log(guess)
  if (!guess) {
    document.querySelector(".message").textContent = "🎉 No Number You guess"
  }
})
