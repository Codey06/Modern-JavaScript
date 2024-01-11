// Default Params
function registedUser(user ='Bot') {
    // if(!user){
    //     user='bot'

    // }
    return user +' is registered'
    
}

console.log(registedUser());

// Rest Params

// function restParams(num1,num2,num3,num4,num5) {
//     console.log(num1,num2,num3,num4,num5)
// }
// restParams(1,2,3,4,5)

function restParams(...nume) {
 let total=0;
 for(let num of nume){

    total+=num


 }


    return total
}
console.log(restParams(1,2,3,4,5,6,100))

// object as parms
 function loginuser(user){
    return `this is the name of ${user.name} and
    this is  his id ${user.id}`
 }
 const usr={
    id:1,
    name:'mustaf'
 }
 console.log(loginuser({
    id:2,
    name:'hassan'
 }))

 // Arrays As parmas
 function arr(rondm){
    const rondo=Math.floor(Math.random()*rondm.length)

    const item =rondm[rondo]

    console.log(item)
 }
 arr([1,2,3,4,5,6,7,8,9,10])

function getRandom(arr){
    const randomIndex=Math.floor(Math.random()* arr.length);
    const item=arr[randomIndex];


    console.log(item)
}

getRandom([1,2,3,4,5,6])

// function getRandom(...arr){
//     const randomIndex=Math.floor(Math.random()* arr.length);
//     const item=arr[randomIndex];


//     console.log(item)
// }

// getRandom(1,2,3,4,5,6)