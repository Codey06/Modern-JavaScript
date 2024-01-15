// for ([initialExpression]; [conditionExpression], [increamentExpression])
//     statement'

// INITITAL EXPRESSION-Initializes a variable/couter
// CONDITION EXPRESSION- Condition that the loop will continue to run as long
// as it is met or until the condition is false
// INCREMENT EXPRESSION- Expression that will be execuated after each iteretion
// of the loop, Usually increaments the variable
// STATEMENT-  Code that will be executed each time the loop is run.
// to execute a 'block' of code, use the `{}` syntax

// for (let i = 0; i <= 10; i++) {
//   console.log("Number " + i)
// }
// for (let i = 0; i <= 10; i++) {
//   if (i === 7) {
//     console.log("this is my lucy number " + i)
//   } else {
//     console.log("Number " + i)
//   }
// }

// Nest Loop
// for (let i = 0; i <= 10; i++) {
//   console.log("Number " + i)
//   for (let j = 0; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`)
//   }
// }

// Loop through  an Array

const names = ["sara", "mustaf", "ali", "hussein"]

for (let i = 0; i < names.length; i++) {
  if (i == [1]) {
    console.log(`the best is ${names[1]}`)
  } else {
    console.log(names[i])
  }
}
