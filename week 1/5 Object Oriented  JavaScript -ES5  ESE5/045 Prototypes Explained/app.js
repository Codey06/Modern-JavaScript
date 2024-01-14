// Object.prototype
// Person.prototype

// Personal Constructor
function Person(firstName, lastName, dob) {
  this.firstName = firstName
  this.lastName = lastName
  this.brithday = new Date(dob)
  //   this.calculateAge = function () {
  //     const diff = Date.now() - this.brithday.getTime()
  //     const ageDate = new Date(diff)
  //     return Math.abs(ageDate.getFullYear() - 1970)
  //   }
}

// Calculage age
Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.brithday.getTime()
  const ageDate = new Date(diff)
  return Math.abs(ageDate.getFullYear() - 1970)
}
// Get Full name

Person.prototype.getFullname = function () {
  return `${this.firstName} ${this.lastName}`
}

// Get Married

Person.prototype.getMarried = function (newLastName) {
  this.lastName = newLastName
}

const John = new Person("john", "doe", "8-12-90")
const mery = new Person("Mery", "Johnson", "March-20-1978")
console.log(mery.calculateAge())
console.log(John.calculateAge())
console.log(John.getFullname())
console.log(mery.getFullname())
mery.getMarried("mustaf")
console.log(mery.getFullname())
