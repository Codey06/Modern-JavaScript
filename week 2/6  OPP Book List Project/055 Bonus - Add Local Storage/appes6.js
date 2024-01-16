class Book {
  constructor(title, author, isbn) {
    this.title = title
    this.author = author
    this.isbn = isbn
  }
}
class UI {
  addBookToList(book) {
    const list = document.getElementById("book-list")
    // Create tr element
    const row = document.createElement("tr")
    // Insert cols
    row.innerHTML = `<td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</></td>`
    list.appendChild(row)
    // console.log(row)
  }
  showAlert(message, className) {
    // Create div
    const div = document.createElement("div")
    // Add classes
    div.className = `alert ${className}`
    // Add text
    div.appendChild(document.createTextNode(message))
    // Get parent
    const conatainer = document.querySelector(".container")
    const form = document.querySelector("#book-form")
    // insert Alert
    conatainer.insertBefore(div, form)

    // time out after 3 second
    setTimeout(function () {
      document.querySelector(".alert").remove()
    }, 1000)
  }
  // Delete form
  deleteForm(target) {
    if (target.className === "delete") {
      target.parentElement.parentElement.remove()
    }
  }
  // Clear fields
  clearFilds() {
    document.getElementById("title").value = ""
    document.getElementById("author").value = ""
    document.getElementById("isbn").value = ""
  }
}
// Local Storage Classes
class Store {
  static getBook() {
    let books
    if (localStorage.getItem("books") === null) {
      books = []
    } else {
      books = JSON.parse(localStorage.getItem("books"))
    }
    return books
  }
  static DisplayBook() {
    const books = Store.getBook()
    books.forEach((book) => {
      const ui = new UI()
      ui.addBookToList(book)
    })
  }
  static addBook(book) {
    const books = Store.getBook()
    books.push(book)
    localStorage.setItem("books", JSON.stringify(books))
  }
  static removeBook(isbn) {
    const books = Store.getBook()
    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1)
      }
    })
    localStorage.setItem("books", JSON.stringify(books))
  }
}
// DOM Load Event

document.addEventListener("DOMContentLoaded", Store.DisplayBook)

// Even Listeners Add Book
document.getElementById("book-form").addEventListener("submit", function (e) {
  // Get form values
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value
  // console.log(title, author, isbn)

  // Instantiate book
  const book = new Book(title, author, isbn)

  // Instantiate UI
  const ui = new UI()
  //   console.log(ui)

  // Validate
  if (title === "" || author === "" || isbn === "") {
    // Error Alert
    ui.showAlert("Please fill in All fields", "error")
  } else {
    // Add book to list
    ui.addBookToList(book)
    // Add book to store
    Store.addBook(book)

    //show success
    ui.showAlert("Book Added", "success")

    // clear fields
    ui.clearFilds()
  }

  e.preventDefault()
})
// Evevt Listener For Delete
document.getElementById("book-list").addEventListener("click", function (e) {
  // Instantiate UI
  const ui = new UI()

  // show Alert
  ui.showAlert("Book Remove?", "success")

  // delete form
  ui.deleteForm(e.target)

  // remove book from store
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent)
  // console.log(e.target)
  e.preventDefault()
})
