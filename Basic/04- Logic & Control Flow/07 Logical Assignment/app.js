// || = assigns the reight side value only if the left
//  is a false CSSMathValue
// ||
let a = true
// if (!a) {
//   a = 10
// }

// a = a || 30
// a ||= 10
console.log(a)

//     && - assigns the right side value only if the left is a
//  truthly value

let b = false
if (!b) {
  b = 20
}
console.log(b)
b = b && 30
console.log(b)

//  ??= assign the right side value only if the left is null or undefined

let c = null
if (c === null || c === undefined) {
  c = 40
}
// console.log(c)

c = c ??= 50
c ??= 60

console.log(c)
