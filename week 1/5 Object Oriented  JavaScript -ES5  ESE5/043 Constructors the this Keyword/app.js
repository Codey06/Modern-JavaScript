// const brad = {
//   name: "Brad",
//   age: 25,
//   occupation: "Software Engineer",
// };
// console.log(brad);
// console.log(brad.age);
// console.log(brad.name);
// console.log(brad.occupation);
///////////////////////////////////////////
// Person Constructor
// function Person() {
//   this.name = "Mustaf";
// }
// const Maj = new Person();
//////////////////////////////////////////////
// function Person(name) {
//   this.name = name;
//   console.log(this);
// }
// const Maj = new Person("mustaf");
// const Ma = new Person("jirow");

// console.log(Maj);
// console.log(Ma);
/////////////////////////////////////////////////////

// function Person(name, age, occupation) {
//   this.name = name;
//   this.age = age;
//   this.occupation = occupation;
//   console.log(this);
// }
// const mustaf = new Person("Mustaf ", "21 ", "Eng");

function Person(name, dob, occupation) {
  this.name = name;
  this.birthday = new Date(dob);
  this.occupation = occupation;
  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  // const today = new Date();
  // const age = today.getFullYear() - this.birthday.getFullYear();
  // const m = today.getMonth() - this.birthday.getMonth();
  // const d = today.getDate() - this.birthday.getDate();
  // if (m < 0 || (m === 0 && d < 0)) {
  //   age--;
  // }
  // return age;
}

const mustaf = new Person("Mustaf ", "10-27-1994 ", "Eng");

console.log(mustaf.calculateAge());
