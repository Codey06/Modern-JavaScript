// init Github
const github = new Github()
// Search input
const searchUser = document.getElementById("searchUser")
// Searrc Input event listener
searchUser.addEventListener("keyup", (e) => {
  // Get input Text
  const usertext = e.target.value

  if (usertext !== "") {
    // make http call
    github.getUser(usertext).then((data) => {
      if (data.profile.message === "Not Found") {
        // Show alert
      } else {
        // Show profile
      }
    })
  } else {
    // Clear profile
  }
})
