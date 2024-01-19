// Array map

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newArr = arr.map((item) => item * 2)

console.log(newArr)

// Same with foreach
// const double = []

// arr.forEach((item) => double.push(item * 2))

// console.log(double)
// const companies = [
//   { name: "comapany one", category: "Finance", start: 1981, end: 2004 },
//   { name: "comapany two", category: "Retail", start: 1992, end: 2008 },
//   { name: "comapany three", category: "Marketing", start: 1999, end: 2010 },
//   { name: "comapany four", category: "Sales", start: 2000, end: 2010 },
//   { name: "comapany five", category: "Marketing", start: 2000, end: 2010 },
//   { name: "comapany six", category: "Sales", start: 2000, end: 2010 },
//   { name: "comapany seven", category: "Finance", start: 2000, end: 2010 },
//   { name: "comapany eight", category: "Marketing", start: 2000, end: 2010 },
//   { name: "comapany nine", category: "techology", start: 2011, end: 2016 },
//   { name: "comapany ten", category: "Retail", start: 1981, end: 1989 },
// ]

// // create an array of company names

// const companyNames = companies.map((item) => item.start)

// console.log(companyNames)

// const companyCategory = companies.map((item) => item.category)

// console.log(companyCategory)
// // create an array of company names and category
// const info = companies.map((companies) => {
//   return {
//     name: companies.name,
//     category: companies.category,
//   }
// })
// console.log(info)

// // Create an array of onjects with the name and the length of each  company in years

// const comapanyYears = companies.map((companies) => {
//   return {
//     name: companies.name,
//     length: companies.end - companies.start + " years",
//   }
// })
// console.log(comapanyYears)

// Chain map methods

const squareAndDouble = arr
  .map((numbers) => Math.sqrt(numbers))
  .map((sqrt) => sqrt * 2)

const squareAndDouble2 = arr
  .map(function (num) {
    return Math.sqrt(num)
  })
  .map(function (sqrt) {
    return sqrt * 2
  })
  .map(function (sqrtDoubles) {
    return sqrtDoubles * 3
  })

//  Chaining different methods
const numfill = arr.filter((num) => num % 2 === 0)
console.log(numfill)
