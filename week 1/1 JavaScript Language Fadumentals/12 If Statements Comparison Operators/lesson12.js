// if (Something) {
// 	do Something
// }
// else{
// 	do Something else
// }
const id =100

// // EQUAL TO

// if (id == 100) {
// 	console.log('Correct')
// }
// else{
// 	console.log('Incorrect')
// }
// // NOT EQUAL TO
// if(id != 101){
// 	console.log('Correct')
// }
// else{
// 	console.log('Incorrect')
// }
// // EQUAL TO VALUE & TYPE
// if (id === 100) {
// 	console.log('Correct')
// }
// else{
// 	console.log('Incorrect')
// }
// // EQUAL TO VALUE AND TYPE

// if (id !== 100) {
// 	console.log('Correct')
// }
// else{
// 	console.log('Incorrect')
// }

// Test if undefined
// if (typeof id !== 'undefined') {
// 	console.log(`the id is ${id}`)
// }
// else{
// 	console.log('NO ID')
// }

// GREATER OR LESS THAN
 
// if (id <= 100) {
// 	console.log('Correct')
// }
// else{
// 	console.log('Incorrect')
// }


// IF ELSE

const color='blue'

if (color === 'red') {
	console.log('the color is red')
}
else if(color ==='blue'){
	console.log('the color is blue')
}
else {
	console.log(" their is no color you choose")
}
 // Logical operators

const name='stave'
const age=32
// AND &&
if (age>0 && age<12) {
	console.log(`${name}  is a child`)
}
else if( age>=13 && age<=19){
	console.log(`${name} is a teenager`)
}
else{
	console.log(`${name} is an Adult`)
}
// OR ||
 if (age<16 || age>65) {
 	console.log(`${name} can not run the race`)
 }
 else{
 	console.log(`${name} is registered for the race`)
 }

// TERNARY OPERATOR
  console.log(id === 100? 'correct' : 'incorrect');

// WITH OUT BRACES
  if (id ===100) 
  	console.log('correct')
  else
  	console.log('incorrect')
 




