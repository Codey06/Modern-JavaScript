// // set local storage item
// localStorage.setItem('Name','jjirow')
// localStorage.setItem('Adderss','yaqshid')
// localStorage.setItem('Tell','99090')

// // set session storage item
// sessionStorage.setItem('musta','kyy')

// remove form storage

// localStorage.removeItem('Tell')

// get from Storage

// const name=localStorage.getItem('Name')
// const address=localStorage.getItem('Adderss')


// clear local storage

// localStorage.clear()
// console.log(name,address)

// Add local storage to the input Task

document.querySelector('form').addEventListener('submit',(e)=>{
	// console.log('123')

	const task= document.querySelector('#task').value;
	let tasks;
	if (localStorage.getItem('tasks')===null) {
		tasks=[];
	}
	else{
		tasks=JSON.parse(localStorage.getItem('tasks'))
	}
	tasks.push(task);
	localStorage.setItem('tasks',JSON.stringify(tasks))
	alert('task Saved'+tasks)
	// console.log(task)
	e.preventDefault();
})
const tasks=JSON.parse(localStorage.getItem('tasks'))

tasks.forEach(function(task){
	console.log(task)
	// localStorage.clear()
})


























