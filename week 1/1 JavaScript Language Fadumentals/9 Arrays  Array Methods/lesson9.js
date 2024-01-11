// Create some arrays
 const numbers=[43,56,33,23,44,36,6]
 const numbers2=new Array(22,45,33,76,54)
 const fruit=['Apple','banana','orange','Pear']
 const mixed=[22,'hello',true,undefined,null,{a:1,b:2},new Date()]

 let val;
 //Get array length

 val=numbers.length

 //Check if is Array
 val=Array.isArray(numbers)

 // get single value

 val=numbers[3]
 val=numbers[0]

 // Insert into Array

 numbers[2]=100;

 //find index value
 val=numbers.indexOf(36);

                         //mutating Arrays
// Add on to the end
 // numbers.push(250)

 // // Add on the front
 // numbers.unshift(120)

 // //Take off from the end

 // numbers.pop()

 // //Take off from the front
 // numbers.shift(120)

 // // Splice values

 // numbers.splice(1,3,5)

 // //Reverse

 // numbers.reverse()

 // Concatenate Array
  val=numbers.concat(numbers2)

  // Sorting arrays
   val=fruit.sort()
   // val=numbers.sort()

   // Use the "compare Function"

   // val=numbers.sort(function(x,y){
   //  return x-y
   // })
   //  // Reverse sort
   // val=numbers.sort(function(x,y){
   //  return y-x
   // })

   //find

    function under50(num){
        return num < 50

    }

    val = numbers.find(under50)

 console.log(numbers);
 console.log(val)
