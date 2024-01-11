// // challenge 1
// // solution
// function getCelsius(f){
//     const C=((f-32)*5)/9;
//     return C;


    
// }
// // solution
// console.log(`the answer is ${getCelsius(85)} \xB0C`);

// // online  Arrow Function
// const celsius=(f)=>(f-32)*5/9
// console.log(celsius(85))

// // Challenge 2
// // function minMax(){
// // const number=[0,1,2,3,4,5,6]

// // const min=Math.min(...number)
// // const max=Math.max(...number)
// // console.log(min)
// // console.log(max)    
// // }
// // minMax()

// function minMax(arr){
//     const min=Math.min(...arr)
//     const max=Math.max(...arr);
//     return {
//         min,
//         max
//     }

// }
// console.log(minMax([1,2,3,4,55]))


// Chanllenge e

((length,width)=>{
 const area=length*width;
  const output=`The area of regtangle with the length of ${length} and the width of ${width} is ${area}`;
 

    console.log(output)

})(10, 5)