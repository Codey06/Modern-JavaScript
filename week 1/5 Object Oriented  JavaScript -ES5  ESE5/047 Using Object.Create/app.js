const personPrototype = {
  greating: function () {
    return `hello there ${this.firstName} ${this.lastName}`
  },
  getsMarried: function (newLastname) {
    this.lastName = newLastname
  },
}
const mery = Object.create(personPrototype)
console.log(mery)
mery.firstName = "mery"
mery.lastName = "addams"
mery.age = 30
mery.phone = 551212145245
mery.getsMarried("mustaf")

console.log(mery.greating())

const brad = Object.create(personPrototype, {
  firstName: { value: "brad" },
  lastName: { value: "traversy" },
  age: { value: 36 },
})
console.log(brad)
console.log(brad.greating())
