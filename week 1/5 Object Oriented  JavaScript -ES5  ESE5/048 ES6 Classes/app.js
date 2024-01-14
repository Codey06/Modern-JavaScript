class Person {
  constructor(firstname, lastname, dob) {
    this.firstname = firstname
    this.lastname = lastname
    this.birthday = new Date(dob)
  }
  greeting() {
    return `hello their ${this.firstname} ${this.lastname}`
  }
  calculateAge() {
    const diff = Date.now() - this.birthday.getTime()
    const ageDate = new Date(diff)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }
  getMarried(newLastName) {
    this.lastname = newLastName
  }
  static addNumbers(x, y) {
    return x + y
  }
}

const merry = new Person("mary", "Williams", "11-13-1980")

merry.getMarried("mustaf")

console.log(merry.greeting())
console.log(Person.addNumbers(54, 46))
