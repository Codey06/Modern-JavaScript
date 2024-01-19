// Array Reduce
const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((acc, curr) => acc + curr, 0)
console.log(sum)
const sum2 = numbers.reduce(function (acc, curr) {
  return acc + curr
}, 0)
console.log(sum)

// Using a for loop

const sum22 = () => {
  let acc = 0
  for (const curr of numbers) {
    acc += curr
  }
  return acc
}
console.log(sum22())

const cart = [
  {
    id: 1,
    name: "shirt",
    price: 10,
    quantity: 1,
  },
  {
    id: 2,
    name: "pants",
    price: 20,
    quantity: 2,
  },
  {
    id: 3,
    name: "shoes",
    price: 30,
    quantity: 3,
  },
]

const totalPrice = cart.reduce((acc, curr) => {
  return acc + curr.price * curr.quantity
}, 0)

console.log(totalPrice)
