// document.getElementById
console.log(document.getElementById('task-title'))

//Get things from the elements
console.log(document.getElementById('task-title').id)
console.log(document.getElementById('task-title').className)
const tastTitle=document.getElementById('task-title');
//Change Style
tastTitle.style.background='#333'
tastTitle.style.color='#fff'
tastTitle.style.padding='5px'
// tastTitle.style.display='none'

// change content
tastTitle.textContent='Task List'
tastTitle.innerHTML='My Task'
tastTitle.innerHTML="<span style='color:red'>Task List</span>"

// document.querySelector()
console.log(document.querySelector('#task-title'))
console.log(document.querySelector('h5'))
console.log(document.querySelector('.card-title'))

document.querySelector('li').style.color='red'
document.querySelector('ul li').style.color='blue'
document.querySelector('li:last-child').style.color='blue'
document.querySelector('li:nth-child(3)').textContent='blue'
document.querySelector('li:nth-child(4)').style.color='Yellow'
document.querySelector('li:nth-child(even)').style.background='blue'
document.querySelector('li:nth-child(odd)').style.background='#ccc'
document.querySelector('li:nth-child(4)').style.background='#f4f4f4'


