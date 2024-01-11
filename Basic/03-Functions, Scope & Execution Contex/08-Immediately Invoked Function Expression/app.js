

(function(){
const user='Ahmed'
console.log(user)
const hello=()=>console.log('this is amazing IIFE')
hello();
})();

(function(name){
    console.log('Hello '+name)
})('Mustaf');

(function hello() {
console.log('Hello')

})();
(function hello(){
console.log('hello')
})()

