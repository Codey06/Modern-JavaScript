"use stricr"
const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
const btnClosemodal = document.querySelector(".close-modal")
const btnOpenmodal = document.querySelectorAll(".show-modal")
console.log(btnOpenmodal)

for (let i = 0; i < btnOpenmodal.length; i++)
  console.log(btnOpenmodal[i].textContent)
