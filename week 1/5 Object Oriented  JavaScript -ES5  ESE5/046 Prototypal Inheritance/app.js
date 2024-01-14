// Person Constructor
function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

Person.prototype.greating = function () {
  return `hello there ${this.firstName} ${this.lastName}`
}
const Person1 = new Person("Mustaf", "Jirow")
console.log(Person1.greating())

// Costumer constructor
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName)
  this.phone = phone
  this.membership = membership
}
// Inherit the person prototype methods

Customer.prototype = Object.create(Person.prototype)

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer
// Create customer
const Costumer1 = new Customer("tom", "adams", "1125-542-5541", "Standrad")

console.log(Costumer1)
// Customer greating
Customer.prototype.greating = function () {
  return `hello there ${this.firstName} ${this.lastName} welcome 
  to the company`
}

console.log(Costumer1.greating())
