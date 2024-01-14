class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
  greeting() {
    return `hello there ${this.firstName} ${this.lastName}`
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName)
    this.phone = phone
    this.membership = membership
  }
  static getMemberShipCost() {
    return 500
  }
}
const john = new Customer("john", "doe", "2125-1541-225", "standard")
console.log(john.greeting())
console.log(Customer.getMemberShipCost())
