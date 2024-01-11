// REPLACE ELEMENT

// Create Element

const newHeading=document.createElement('h2')

// Add id

newHeading.id='task-title'

// new Textnode

newHeading.appendChild(document.createTextNode('Task List'))

// Get old Heading

const oldHeading=document.getElementById('task-title')

// Parent
const cardAction=document.querySelector('.card-action')

// Replace
cardAction.replaceChild(newHeading,oldHeading)

// Remove Elements

const lis=document.querySelectorAll('li');
const list=document.querySelector('ul')

//Remove list item

lis[0].remove()

// Remove Child element
 list.removeChild(lis[4])


 // 	CLASSES & ATTR

  const firstLi= document.querySelector('li:first-child')
  const link=firstLi.children[0]

  let val;

  val=link.className
  val=link.classList
   val=link.classList[0]
link.classList.add('test')
link.classList.remove('test')
val=link

// Attributes
val=link.getAttribute('href')
val=link.setAttribute('href','http://google.com')
val=link.setAttribute('titles','google')
val=link.hasAttribute('titles')
link.removeAttribute('titles')
val=link
console.log(val)