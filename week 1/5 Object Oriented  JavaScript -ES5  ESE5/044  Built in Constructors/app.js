// String

var str = "Hello"
console.log(str)
var str2 = new String("hello")
str2.foo = "bar"
console.log(str2)
if (str === "hello") {
  console.log("hello")
} else {
  console.log("world")
}

// Number
const num1 = 4
const num2 = new Number(2)

// Boolean

const bool = true
const bool2 = new Boolean(true)

// Array

const arr = [1, 2, 3]
const arr2 = new Array(1, 2, 3)

// Object

const obj = {}
const obj2 = new Object({ name: "mustaf" })
console.log(obj2)

// Date

const date = new Date()
const date2 = new Date("2020-01-01")
const date3 = new Date(2020, 0, 1)

// RegExp

// function

function foo() {
  console.log("foo")
}

function foo2() {
  console.log("foo2")
}

const getSum2 = new Function("x", "y", "return 5+1")
console.log(getSum2(0, 0))

// class

class Foo {
  constructor() {
    console.log("Foo")
  }
}

// Regular Expressions

const regExp = /hello/
const regExp2 = new RegExp("hello")
console.log(regExp2.test("hello"))

// Symbol

// const sym = Symbol("hello")
// // const sym2 = new Symbol("hello")
// console.log(sym === sym2)

// Map
