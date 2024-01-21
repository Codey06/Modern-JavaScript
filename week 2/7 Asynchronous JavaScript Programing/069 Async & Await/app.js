// async function myFunc() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("hello")
//     }, 1000)
//   })
//   const errror = false
//   if (!errror) {
//     const res = await promise // Wait until promises is resolved
//     return res
//   } else {
//     await Promise.reject(new Error("something went wrog"))
//   }
// }
// myFunc()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))

async function getusers() {
  // await response of the fetch
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  // Only proceed once its resolved
  const data = await response.json()

  // only proceed once second promise is resolve
  return data
}
getusers().then((usrs) => console.log(usrs))
