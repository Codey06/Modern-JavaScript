"use stricr"
const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
const btnClosemodal = document.querySelector(".close-modal")
const btnOpenmodal = document.querySelectorAll(".show-modal")
console.log(btnOpenmodal)
const openModal = function () {
  modal.classList.remove("hidden")
  overlay.classList.remove("hidden")
}
const closeBtn = function () {
  modal.classList.add("hidden")
  overlay.classList.add("hidden")
}
for (let i = 0; i < btnOpenmodal.length; i++)
  btnOpenmodal[i].addEventListener("click", openModal)

btnClosemodal.addEventListener("click", closeBtn)
overlay.addEventListener("click", closeBtn)
