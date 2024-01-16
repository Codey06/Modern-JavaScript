document.getElementById("button").addEventListener("click", loadData)

function loadData() {
  //   console.log("1")
  // Create an XHR object
  const xhr = new XMLHttpRequest()

  // Open
  xhr.open("GET", "data.txt", true)
  //   console.log("READYSTATE", xhr.readyState)

  // Optional - Used for spinners/loaders
  xhr.onprogress = function () {
    console.log("READYSTATE", xhr.readyState)
  }

  xhr.onload = function () {
    console.log("READYSTATE", xhr.readyState)
    if (this.status === 200) {
      //   console.log(this.responseText)
      document.getElementById(
        "output"
      ).innerHTML = `<h1>${this.responseText}</h1>`
    }
    //   xhr.onreadystatechange = function () {
    //     console.log("READYSTATE", xhr.readyState)
    //     if (this.readyState === 4 && this.status === 200) {
    //       console.log(this.responseText)
    //       document.getElementById("output").innerHTML = this.responseText
  }
  xhr.onerror = function () {
    console.log("Request error.....")
  }

  xhr.send()
}

// readyState Values
// 0: request not initialzed
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready
// 5: request finished and no response is ready

// readyState Values
// 0 - UNSENT
// 1 - OPENED
// 2 - HEADERS_RECEIVED
// 3 - LOADING
// 4 - DONE

// HTTP Statuses
// 200 - OK
// 400 - Bad Request
// 401 - Unauthorized
// 403 - Forbidden
// 404 - Not Found
// 500 - Internal Server Error
