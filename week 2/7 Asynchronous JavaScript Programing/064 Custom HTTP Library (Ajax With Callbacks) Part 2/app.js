const http = new easyHTTP()
// http.get("https://jsonplaceholder.typicode.com/posts", function (err, posts) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(posts)
//   }
// })

// Get single post
// http.get("https://jsonplaceholder.typicode.com/posts/1", function (err, post) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(post)
//   }
// })

// Create Data
const data = {
  title: "Custome post",
  body: "This is a new post",
}

// create post
// http.post(
//   "https://jsonplaceholder.typicode.com/posts",
//   data,
//   function (err, post) {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log(post)
//     }
//   }
// )

// Update post

http.put(
  "https://jsonplaceholder.typicode.com/posts/10",
  data,
  function (err, post) {
    if (err) {
      console.log(err)
    } else {
      console.log(post)
    }
  }
)

// Delete post
http.delete(
  "https://jsonplaceholder.typicode.com/posts/1",
  function (err, response) {
    if (err) {
      console.log(err)
    } else {
      console.log(response)
    }
  }
)
