// // get Element by id
// console.log(document.getElementById("app-title"))
// console.log(document.getElementById("app-title").id)

// Set Attributes

// document.getElementById("app-title").setAttribute("class", "new-class")
document.getElementById("app-title").title = "shooping List"
document.getElementById("app-title").setAttribute("class", "title")
const title = document.getElementById("app-title")
console.log(title)
// document.getElementById("app-title").setAttribute("class", "new-class3")
// document.getElementById("app-title").setAttribute("class", "new-class4")

// Get/change content

title.textContent = "hello"
title.innerText = "hello again"
title.innerHTML = "<strong>Shopping List</strong>"

// change style

title.style.color = "red"
title.style.fontSize = "20px"
title.style.fontWeight = "bold"

title.style.padding = "10px"
title.style.backgroundColor = "black"
title.style.borderRadius = "10px"

// Document.querySelector

console.log(document.querySelector("h1"))
console.log(document.querySelector("#app-title"))
console.log(document.querySelector(".container"))
console.log(document.querySelector("input[type='text']"))
console.log(document.querySelector("li:nth-child(2)").innerText)

const second = document.querySelector("li:nth-child(2)")

second.style.color = "red"
second.innerHTML = "red"

// Use these methods on other elements

const list = document.querySelector("ul")
console.log(list)
const firstItem = document.querySelector("li")
firstItem.style.color = "blue"
