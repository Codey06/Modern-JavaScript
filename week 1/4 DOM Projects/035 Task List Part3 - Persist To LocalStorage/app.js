// Define UI Vars
const form = document.querySelector("#task-form")
const taskList = document.querySelector(".collection")
const clearBtn = document.querySelector(".clear-task")
const filter = document.querySelector("#filter")
const taskInput = document.querySelector("#task")

// Load  all event listeners
loadEventListeners()

// load all event listeners
function loadEventListeners() {
  // DOM Load Event
  document.addEventListener("DOMContentLoaded", getTasks)
  form.addEventListener("submit", addTask)
  // Remove Task Event
  taskList.addEventListener("click", removeTask)
  // Clear Task Event
  clearBtn.addEventListener("click", clearTasks)
  // Filter tasks even
  filter.addEventListener("keyup", filterTasks)
}
// get Task From LS
function getTasks() {
  let tasks
  if (localStorage.getItem("tasks") === null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"))
  }
  tasks.forEach(function (task) {
    // Create li Element
    const li = document.createElement("li")
    // Add class
    li.classList = "collection-item"
    // Create text node and append to li
    li.appendChild(document.createTextNode(task))

    // Create new link element
    const link = document.createElement("a")
    // Add class
    link.classList = "delete-item secondary-content"

    // Add Icon html
    link.innerHTML = '<i class="fa fa-remove"></i>'

    // Append link to li
    li.appendChild(link)

    // Append li to ul
    taskList.appendChild(li)
  })
}
// Add task

function addTask(e) {
  if (taskInput.value === "") {
    alert("Add task")
  }

  // Create li Element
  const li = document.createElement("li")
  // Add class
  li.classList = "collection-item"
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value))

  // Create new link element
  const link = document.createElement("a")
  // Add class
  link.classList = "delete-item secondary-content"

  // Add Icon html
  link.innerHTML = '<i class="fa fa-remove"></i>'

  // Append link to li
  li.appendChild(link)

  // Append li to ul
  taskList.appendChild(li)

  // Store in LS
  storeTaskInLocalStorage(taskInput.value)

  //Clear Input
  taskInput.value = ""

  e.preventDefault()
}
// Store  Task
function storeTaskInLocalStorage(task) {
  let tasks
  if (localStorage.getItem("tasks") === null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"))
  }
  tasks.push(task)
  localStorage.setItem("tasks", JSON.stringify(tasks))
}
// Remove Task
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Arr You Sure")) {
      e.target.parentElement.parentElement.remove()

      // Remove from the LS
      removeTaskFromLocalStorage(e.target.parentElement.parentElement)
    }
  }
}
// Remove from LS
function removeTaskFromLocalStorage(tasItem) {
  let tasks
  if (localStorage.getItem("tasks") === null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"))
  }
  tasks.forEach(function (task, index) {
    if (tasItem.textContent === task) {
      tasks.splice(index, 1)
    }
  })
  localStorage.setItem("tasks", JSON.stringify(tasks))
}
// Clear Tasks
function clearTasks() {
  taskList.innerHTML = ""

  // Faster

  while (taskInput.firstChild) {
    taskList.remove(taskList.firstChild)
  }
  // clear from ls
  cleartasksFromLocalStorage()
}
// clear tasks from ls
function cleartasksFromLocalStorage() {
  localStorage.clear()
}
// filter Tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase()
  document.querySelectorAll(".collection-item").forEach(function (task) {
    const item = task.firstChild.textContent
    if (item.toLowerCase().indexOf(text) > -1) {
      task.style.display = "block"
    } else {
      task.style.display = "none"
    }
  })
}
