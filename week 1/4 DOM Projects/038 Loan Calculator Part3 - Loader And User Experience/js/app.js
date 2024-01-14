// Listen for submit
document.getElementById("loan-form").addEventListener("submit", function (e) {
  //Hide results
  document.getElementById("result").style.display = "none"
  //Show Loader
  document.getElementById("loading").style.display = "block"
  setTimeout(calculateResults, 2000)

  e.preventDefault()
})

// Calculate Results
function calculateResults() {
  // UI Vars
  const amount = document.getElementById("amount")
  const intrest = document.getElementById("intrest")
  const years = document.getElementById("years")
  const monthlyPayment = document.getElementById("monthly-payment")
  const totalPayment = document.getElementById("total-peyment")
  const totalIntrest = document.getElementById("total-interest")

  const principal = parseFloat(amount.value)
  const calculatedInterest = parseFloat(intrest.value) / 100 / 12
  const calculatedPayments = parseFloat(years.value) * 12

  // Compute monthly payment

  const x = Math.pow(1 + calculatedInterest, calculatedPayments)
  const monthly = (principal * x * calculatedInterest) / (x - 1)

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2)
    totalPayment.value = (monthly * calculatedPayments).toFixed(2)
    totalIntrest.value = (monthly * calculatedPayments - principal).toFixed(2)

    // Show Result
    document.getElementById("result").style.display = "block"
    // Hide Loader
    document.getElementById("loading").style.display = "none"
  } else {
    // console.log("Please Cheack Your Numbers")
    ShowError("Please Cheack Your Numbers")
  }
}
// Show Error
function ShowError(error) {
  // Show Result
  document.getElementById("result").style.display = "none"

  // Hide Loader
  document.getElementById("loading").style.display = "none"

  // Create a div
  const errorDiv = document.createElement("div")

  // Get Elements
  const card = document.querySelector(".card")
  const heading = document.querySelector(".heading")

  // Add class
  errorDiv.className = "alert alert-danger"

  // Create Text Node and append to div
  errorDiv.appendChild(document.createTextNode(error))

  // Insert error above heading
  card.insertBefore(errorDiv, heading)

  // clear Error after 3 seconds
  setTimeout(clearError, 2000)
}
function clearError(e) {
  document.querySelector(".alert").remove()
}
