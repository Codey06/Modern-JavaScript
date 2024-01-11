function add(a,b){
    return a+b;r
}
console.log(add(2,3))

// Arrow Function syntax
const add1=(a,b)=>{
    return a+b;

}
console.log(add1(10,30))

// Implict Return
const multi=(a,b)=> a*b;

// Can leave of () with a single param
const multi2= a=> a*2;

// Returning Object
const createObj= ()=>({
    
        name:'mustaf',
        age:30
    
})
// Array function in a call back
const numbers=[1,2,3,4,5,6,7];

numbers.forEach(function add(n){
    console.log(n)

});
numbers.forEach((n)=>console.log(n))
    
console.log(multi(10,30))
console.log(multi2(30))
console.log(createObj().name)
