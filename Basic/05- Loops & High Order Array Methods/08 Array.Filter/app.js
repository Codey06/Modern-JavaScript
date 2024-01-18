const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// const evenNumber = numbers.filter(function (num) {
//   return num % 2 === 0
// })
// console.log(evenNumber)
// const evenNumbr = numbers.filter((num) => num % 2 === 0)
// console.log(evenNumbr)

// Same ForEach
// const evenNumber = []

// numbers.forEach((num) => {
//   if (num % 2 === 0) {
//     evenNumber.push(num)
//   }
// })
// console.log(evenNumber)

const companies = [
  { name: "comapany one", category: "Finance", start: 1981, end: 2004 },
  { name: "comapany two", category: "Retail", start: 1992, end: 2008 },
  { name: "comapany three", category: "Marketing", start: 1999, end: 2010 },
  { name: "comapany four", category: "Sales", start: 2000, end: 2010 },
  { name: "comapany five", category: "Marketing", start: 2000, end: 2010 },
  { name: "comapany six", category: "Sales", start: 2000, end: 2010 },
  { name: "comapany seven", category: "Finance", start: 2000, end: 2010 },
  { name: "comapany eight", category: "Marketing", start: 2000, end: 2010 },
  { name: "comapany nine", category: "techology", start: 2011, end: 2016 },
  { name: "comapany ten", category: "Retail", start: 1981, end: 1989 },
]
//get only reatail compaines

//
// const retailCompanies = companies.filter(
//   (item) => item.start >= 1981 && item.end <= "2004"
// )
// console.log(retailCompanies)

// get companies that lasted 10 years or more
const longCompanies = companies.filter((item) => item.end - item.start > 10)
console.log(longCompanies)
