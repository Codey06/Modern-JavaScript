// Book Constructor

function Book(title, author, isbn) {
  this.title = title
  this.author = author
  this.isbn = isbn
}

// UI Constructor
function UI() {}

// Add Book To List
UI.prototype.addBookToList = function (book) {
  const list = document.getElementById("book-list")
  // Create tr element
  const row = document.createElement("tr")
  // Insert cols
  row.innerHTML = `<td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</></td>`
  list.appendChild(row)
  console.log(row)
}
// clear filds

UI.prototype.clearFilds = function () {
  document.getElementById("title").value = ""
  document.getElementById("author").value = ""
  document.getElementById("isbn").value = ""
}

// Even Listeners
document.getElementById("book-form").addEventListener("submit", function (e) {
  // Get form values
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value
  console.log(title, author, isbn)

  // Instantiate book
  const book = new Book(title, author, isbn)

  // Instantiate UI
  const ui = new UI()
  //   console.log(ui)

  // Add book to list
  ui.addBookToList(book)

  // clear fields
  ui.clearFilds()

  e.preventDefault()
})
