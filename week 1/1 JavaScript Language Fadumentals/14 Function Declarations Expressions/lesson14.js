// // FUNCTION DECLARATIONS

// function greet(firstName=" Mustaf",lastName=" Aba") {
// 	// if (typeof firstName=== 'undefined') {firstName=' mustaf '}
// 	// 	if (typeof lastName=== 'undefined') {lastName= ' jirow'}
// 	// console.log('hello');
// 	return 'hello'+firstName+ ''+lastName

// }
// // console.log(greet(' Ahmed ',"Ali"))

// // FUNCTION EXPRESIONS

// const square=function(x=3){
// 	return x*x
// }
// // console.log(square())

// // IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS-IIFEs

// (function(){
// 	console.log('IIFE Ran ..');
// })();

// (function (name) {
// 	console.log('Hello '+name);
// })("Mustaf");


// // PROPERTY METHODS

const todo={
	 add:function(){
	 	console.log('Add todo..')
	 },
	 edit:function(id){
	 	console.log(`Edit todo id ${id}`)

	 }

}
todo.delete=function(){
	console.log('Delete todo...'); 
}
todo.add();
todo.edit(2022);
todo.delete();




