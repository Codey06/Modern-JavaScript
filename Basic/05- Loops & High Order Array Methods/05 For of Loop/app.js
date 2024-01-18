// for of loop
// loop through arrays

// const items = ["mustaf", "ahmed", "jirow", "sharmaake", "hassan"]
// for (const item of items) {
//   console.log(item)
// }

// const object = [
//   {
//     name: "mustaf",
//     age: 23,
//     city: "cairo",
//   },
//   {
//     name: "mustaf",
//     age: 23,
//     city: "cairo",
//   },

//   {
//     name: "mustaf",
//     age: 23,
//     city: "cairo",
//   },
// ]

// for (const key of object) console.log(key)

// loop over  string

const str = "hello world"
for (const st of str) console.log(st)

// loop over maps

const map = new Map()
map.set("name", "mustaf")
map.set("age", 23)
map.set("city", "cairo")

for (const [key, value] of map) {
  console.log(key, value)
}
