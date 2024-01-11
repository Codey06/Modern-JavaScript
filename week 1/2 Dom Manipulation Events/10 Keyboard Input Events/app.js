const form=document.querySelector('form');
const taskInput=document.getElementById('task');
const heading=document.querySelector('h5')
const select=document.querySelector('select')

// Clear input

taskInput.value='';
console.log(form)

// form.addEventListener('submit', runEvent);

// function runEvent(e) {
// 	console.log('hello')
// }
// runEvent()

 // form.addEventListener('submit',runEvent);
// Keydown
// taskInput.addEventListener('keydown',runEvent)
// Keyup
// taskInput.addEventListener('keyup',runEvent)
//keypress
// taskInput.addEventListener('keypress',runEvent)
 // Focus
// taskInput.addEventListener('focus',runEvent)

// Blur
// taskInput.addEventListener('blur',runEvent)

//Cut
// taskInput.addEventListener('cut',runEvent
// )
// //Paste
// taskInput.addEventListener('paste',runEvent
// )

// Input

taskInput.addEventListener('input',runEvent
)
// change

select.addEventListener('change',runEvent
)
 function runEvent(e){
 	console.log(`Event Type is: ${e.type}`);

    console.log(e.target.value)
    // heading.innerText=e.target.value

    // Get input Value

 	// console.log(taskInput.value)

 	// e.preventDefault()
 }
 // runEvent()

