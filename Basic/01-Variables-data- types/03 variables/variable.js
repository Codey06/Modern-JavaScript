// Ways to declare a variable
// var, let, const

let firstname = 'brad';
let lastname = 'doe';


console.log(firstname, lastname);

let age = 30;

console.log(age);

// let isMarried = true;

// console.log(isMarried);

let isMarried = false;

console.log(isMarried);

// const isMarried = true;

// console.log(isMarried);

// const isMarried = true;

// Naming Conventions

// -Only letters,numbers, underscores and dollar signs

// - can't start with a number


// Multi-word Formatind
// firstName=camelCase
// first_name= underscore
// FirstName= PascalCase
// firstname= lowercase


// Re-assigning variables

age = 31

console.log(age)

let score
score = 1
console.log(score)

if (true) {
    score = score + 1

}

console.log(score)


// const x = 100;
// // not working  
// x = 200;


const arr = [1, 2, 3, 4]

// not working
// arr[1, 2, 3, 4, 5]
// working
arr.push(6)
console.log(arr)

const person = {
    name: 'brad',
    age: 30,
    isMarried: true
}

console.log(person)

person.age = 3
person.isMarried = false
person.name = 'john'

console.log(person)
    // Declare multple values at once

let a, b, c;

a = 10;

b = 20;

c = 30;

console.log(a, b, c)

const d = 5,
    e = 39,
    f = 30;

console.log(d, e, f)