document.getElementById("button1").addEventListener("click", loadCustomer)
document.getElementById("button2").addEventListener("click", loadCustomers)
// load customer
function loadCustomer() {
  const xhr = new XMLHttpRequest()
  xhr.open("GET", "customer.json", true)

  xhr.onload = function () {
    if (this.status === 200) {
      //   console.log(this.responseText)
      const customer = JSON.parse(this.responseText)
      const ouput = `
        <ul>
        <li>ID: ${customer.id}</li>
        <li>Name: ${customer.name}</li>
        <li>Company: ${customer.company}</li>
        <li>phone: ${customer.phone}</li>
        
        </ul>`
      document.getElementById("customer").innerHTML = ouput
    }
  }

  xhr.send()
}
// Load Customers

function loadCustomers() {
  const xhr = new XMLHttpRequest()
  xhr.open("GET", "customers.json", true)

  xhr.onload = function () {
    if (this.status === 200) {
      //   console.log(this.responseText)
      let ouput = ""
      const customers = JSON.parse(this.responseText)
      customers.forEach((customers) => {
        ouput += `<ul>
          <li>ID: ${customers.id}</li>
         <li>Name: ${customers.name}</li>
         <li>Company: ${customers.company}</li>
          <li>phone: ${customers.phone}</li>

          </ul>`
        document.getElementById("customers").innerHTML = ouput
      })

      // const ouput = `
      //     <ul>
      //     <li>ID: ${customers.id}</li>
      //     <li>Name: ${customer.name}</li>
      //     <li>Company: ${customer.company}</li>
      //     <li>phone: ${customer.phone}</li>

      //     </ul>`
      //   document.getElementById("customer").innerHTML = ouput
    }
  }

  xhr.send()
}
