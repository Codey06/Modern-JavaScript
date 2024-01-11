// document.querySelector('.clear-tasks').addEventListener('click',function(e){
// 	console.log("Hello world")

// 	// e.preventDefault()
// })
document.querySelector('.clear-tasks')
.addEventListener('click',onClick)

function onClick(e){
	// console.log('click')

	let val
	val=e;

	// Event Target Element

	val=e.target
	val=e.target.id
	val=e.target.className
	val=e.target.classList

	// Event  Type

	val= e.type

	//TimesTamp

	 val=e.timeStamp

	 // Coords event relative to the window

	 val=e.clientX
	 val=e.clientY
// Coords event relative to the Element
	 val=e.offsetY
	 val=e.offsetX











console.log(val)
	}
