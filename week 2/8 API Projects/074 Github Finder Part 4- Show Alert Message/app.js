// init Github
const github = new Github()

// init UI
const ui = new UI()
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
        ui.showAlert("User not found", "alert alert-danger")
      } else {
        // Show profile
        ui.showProfile(data.profile)
      }
    })
  } else {
    // Clear profile
    ui.clearProfile()
  }
})
