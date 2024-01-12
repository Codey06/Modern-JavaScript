// Define UI Vars
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load  all event listeners
loadEventListeners();

// load all event listeners
function loadEventListeners() {
  form.addEventListener("submit", addTask);
  //   taskList.addEventListener("click", deleteTask);
  //   clearBtn.addEventListener("click", clearTasks);
  //   filter.addEventListener("change", filterTasks);
}

// Add task

function addTask(e) {
  //   const task = taskInput.value.trim();
  //   if (task) {
  //     const li = document.createElement("li");
  //     li.classList.add("collection-item");
  //     li.innerHTML = `<span class="title">${task}</span> <a href="#" class="secondary-content"><i class="material-icons">close</i></a>`;
  //     taskList.appendChild(li);
  //     taskInput.value = "";
  //   }
  if (taskInput.value === "") {
    alert("Add task");
  }

  // Create li Element
  const li = document.createElement("li");
  // Add class
  li.classList = "collection-item";
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));

  // Create new link element
  const link = document.createElement("a");
  // Add class
  link.classList = "delete-item secondary-content";

  // Add Icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';

  // Append link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  //Clear Input
  taskInput.value = "";

  e.preventDefault();
}
