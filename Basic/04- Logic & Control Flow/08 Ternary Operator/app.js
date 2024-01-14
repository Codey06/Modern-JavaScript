// Ternary Operator
const age = 21
// if (age >= 18) {
//   console.log("You can Vote")
// } else {
//   console.log("You can not vote")
// }
// Using a Ternary Operator
age >= 18 ? console.log("You can vote") : console.log("You can not vote")

// Assigning a conditional value to a variable

const age1 = 21
const canVote = age >= 18 ? "You can vote" : "You can not vote"
console.log(canVote)

// Multiple statement
const auth = true
// let redirect

// if (auth) {
//   alert("Welcome to the Dashboard")
//   redirect = "/dashboard"
// } else {
//   alert("Access dined !")
//   redirect = "/login"
// }

// const redirect = auth
//   ? (alert("Welcome to the Dashboard"), "/dashboard")
//   : (alert("Access dined !"), "/login")
// console.log(redirect)
auth && console.log("Welcome to the Dashboard")
