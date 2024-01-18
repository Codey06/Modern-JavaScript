// document.querySelector(".get-jokes").addEventListener("click", getJokes)

// function getJokes(e) {
//   e.preventDefault()

//   const number = document.querySelector('input[type="number"]').value

//   const xhr = new XMLHttpRequest()

//   xhr.open(
//     "GET",
//     `https://v2.jokeapi.dev/joke/Programming?type=twopart&amount=${number}`,
//     true
//   )

//   xhr.onload = function () {
//     if (this.status === 200) {
//       const response = JSON.parse(this.responseText)
//       console.log(response)

//       let output = ""

//       if (response.error === false) {
//         response.jokes.forEach(function (joke) {
//           output += `<li>${joke.setup} ${joke.delivery}</li>`
//         })
//       } else {
//         output += `<li>Something went wrong</li>`
//       }

//       document.querySelector(".jokes").innerHTML = output
//     } else {
//       console.error("Error:", this.status)
//     }
//   }

//   xhr.send()
// }

// this is my code
document.querySelector(".get-jokes").addEventListener("click", getJokes)
function getJokes(e) {
  //   console.log("get jokes")
  const number = document.querySelector('input[type="number"]').value

  const xhr = new XMLHttpRequest()
  xhr.open(
    "GET",
    `https://v2.jokeapi.dev/joke/Programming?type=twopart&amount=${number}`,
    true
  )

  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText)
      let output = ""

      if (response.error === false) {
        response.jokes.forEach(function (joke) {
          output += `<li>${joke.setup} ${joke.delivery}</li>`
        })
      } else {
        output += `<li>Something went wrong</li>`
      }
      document.querySelector(".jokes").innerHTML = output
    } else {
      console.error("Error:", this.status)
    }
  }

  xhr.send()
  e.preventDefault()
}

// Listen for the click event on the button with class "get-jokes"
// document.querySelector(".get-jokes").addEventListener("click", getJokes)

// // Function to fetch Chuck Norris jokes
// function getJokes(e) {
//   // Prevent the default form submission behavior
//   e.preventDefault()

//   // Get the number of jokes from the input field
//   const number = document.querySelector('input[type="number"]').value

//   // Create a new XMLHttpRequest
//   const xhr = new XMLHttpRequest()

//   // Configure the request
//   xhr.open("GET", `https://api.icndb.com/jokes/random/${number}`, true)

//   // Set up the onload event handler
//   xhr.onload = function () {
//     if (this.status === 200) {
//       // Parse the JSON response
//       const response = JSON.parse(this.responseText)

//       // Check if the response is successful
//       if (response.type === "success") {
//         // Extract jokes from the response
//         const jokes = response.value.map((joke) => joke.joke)

//         // Display jokes in the console
//         console.log(jokes)

//         // Update the DOM or perform other actions with the jokes
//         // For example, you can display the jokes in a div with id "jokes-container"
//         const jokesContainer = document.getElementById("jokes-container")
//         jokesContainer.innerHTML =
//           "<h3>Chuck Norris Jokes:</h3>" + jokes.join("<br>")
//       } else {
//         console.error("Error fetching jokes")
//       }
//     }
//   }

//   // Send the request
//   xhr.send()
// }

// document.querySelector(".get-jokes").addEventListener("click", getJokes)

// function getJokes(e) {
//   const number = document.querySelector('input[type="number"]').value

//   const xhr = new XMLHttpRequest()

//   xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true)

//   xhr.onload = function () {
//     if (this.status === 200) {
//       const response = JSON.parse(this.responseText)

//       let output = ""

//       if (response.type === "success") {
//         response.value.forEach(function (joke) {
//           output += `<li>${joke.joke}</li>`
//         })
//       } else {
//         output += "<li>Something went wrong</li>"
//       }

//       document.querySelector(".jokes").innerHTML = output
//       }

//   }

//   xhr.send()

//   e.preventDefault()
// }
