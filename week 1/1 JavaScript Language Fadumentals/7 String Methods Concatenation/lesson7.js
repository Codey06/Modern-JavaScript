const firstName='Wiliam';
const lastName= 'Johnson'
const  age=29
const str="Hello My name is mustaf"
const tags=' web design, web develop,programing'
let val
val=firstName+lastName

//Concatenation

val=firstName +'  '+lastName
 // Append

val='Mustaf'
val+= ' jirow'
 val= 'Hello, May name is '+firstName+'and my age is ' +age

// Escaping

 val='that\'s awesome, I can\'t wait'


 // length

 val=firstName.length



 // concat()
 val= firstName.concat(' ',lastName);
  // change case

 val=firstName.toUpperCase();
 val=firstName.toLowerCase();

 val=firstName[0]

 //indexof()
  val=firstName.indexOf('5')
  val=firstName.lastIndexOf('1')

  // charAt()

  val=firstName.charAt('1');
  // Get last chart
  val=firstName.charAt(firstName.length -1);

  // substring()
  val=firstName.substring(0,4)
  // slice()
  val=firstName.slice(0,3)
  val=firstName.slice(-3)

  // split()
  val=str.split('')

  

  val=tags.split(',')

  // replace

  val=str.replace('mustaf','Jirow')

  // includes()

  val=str.includes('my')
console.log(val)















