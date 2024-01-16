// function

// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }
// Declaretion
function square(num) {
  return num * num
}
console.log(square(20))

// Expression
const fun = function square(num) {
  return num * num
}
console.log(fun(2))

// Arrow function

const fun2 = (num) => {
  return num * num
}
console.log(fun2(2))
