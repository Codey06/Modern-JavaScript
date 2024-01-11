// window.alert('hello')
const xx=10
console.log(xx,'in the global scope')
function run(){
//     console.log(innerHeight)
// console.log(innerWidth)
const x=12
console.log(x,'in the function scope')


}
run()

if(true){
    const x=9;
    console.log(x,'in the block scope')
}

function add(){
    const y=50
    console.log(y+x,'in the function scope')
   
}

add()