// Global Scope

var a=1
let b=2
const c=3

// alert('Global scope is: ',a,b,c)

// Function Scope

// function  test(){
// 	var a=9
// let b=10
// const c=11
// console.log('Function scope is: ',a,b,c)
// }
// test()


// if (true) {
// 	// IF  SCOPE
// var a=6
// let b=7
// const c=8
// console.log('if scope is: ',a,b,c)
// }

for(var a=0; a<10;a++){
	console.log(`loop: ${a}`)
}


console.log('Global scope is: ',a,b,c)