// Falsy Values:
// -false
//     - 0
//     - ""or""(Emty string)
// -null
// undefined
// NaN

// Falsy

// const x = false;
// if (x) {
//   console.log("x is true");
// } else {
//   console.log("x is false");
// }
// console.log(Boolean(x));

// 0

// const x = 0;
// if (x) {
//   console.log("x is true");
// } else {
//   console.log("x is false");
// }

// console.log(Boolean(x));

// ""or""(Emty string)
// const x = "";
// if (x) {
//   console.log("x is true");
// } else {
//   console.log("x is false");
// }
// console.log(Boolean(x));

// null;

// const x = null;
// if (x) {
//   console.log("x is true");
// } else {
//   console.log("x is false");
// }
// console.log(Boolean(x));

// undefined;
// const x = false;
// if (x) {
//   console.log("x is true");
// } else {
//   console.log("x is false");
// }
// console.log(Boolean(x));

// // NaN

// const x = false;
// if (x) {
//   console.log("x is true");
// } else {
//   console.log("x is false");
// }

// console.log(Boolean(x));

////////////////////////////////////////////////////////
///////////////////////////////////////////////////////
//
//Truthly Values:
// - Everything else that is not falsy
// - true
// - '0' (0  in a string)
// - ' ' (space in a string)
// - 'false' (false in a string)
// - [] (empty array)
// - {} (empty object)
// - function(){}

// const x = {};
// if (x) {
//   console.log("x is true");
// } else {
//   console.log("x is false");
// }

// console.log(Boolean(x));

// Thurthy and fasly caveats

const children = 2;

if (children) {
  console.log(`You have ${children} chilren`);
} else {
  console.log("please enter number of children");
}

// Empty Array

// const array = [];

// if (array) {
//   console.log("list of posts");
// } else {
//   console.log("no posts");
// }

// cheacking for empty objects

const user = {
  //   name: "mustaf",
  //   email: "a@gmail.com",
  //   password: "123",
};

// if (Object.keys(user).length > 0) {
//   console.log("list of Users");
// } else {
//   console.log("no users");
// }

//  Loose equality (==)
console.log(false == 0);
console.log("" == 0);
console.log(null == undefined);

// Strict equality (===)

console.log(false === 0);
console.log("" === 0);

console.log(null === undefined);
