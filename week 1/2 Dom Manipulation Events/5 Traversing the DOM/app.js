let val

const list=document.querySelector('ul.collection')
const listItem=document.querySelector('li.collection-item:first-child')

val=listItem
val=list
// Get Child Nodes
val=list.childNodes
// val=list.childNodes[0]
// val=list.childNodes[0].nodeName
// val=list.childNodes[0].nodeType


// 1-Element
// 2- Attribute(deprecated)
// 3-Text Node
// 8- Comment
// 9- Document itself
// 10- Doctype

// Get Children Elements Nodes

val=list.children
val=list.children[1]
val=list.children[1].textContent='hello'
 
 // Children of children
val=list.children[3].children[0].id='test-link'
val=list.children[3].children[0]
 
 //First child

val=list.firstChild
val=list.firstElementChild

// Last Child

val=list.lastChild
val=list.listElementChild

//Count child Elements
val=list.childElementCount

// Get parent Node

val=listItem.parentNode
val=listItem.parentElement
val=listItem.parentElement.parentElement

// Get next sibling
val=listItem.nextSibling
val=listItem.nextElementSibling.nextElementSibling
.previousElementSibling


// Get Pre sibling
val= listItem.previousSibling
val=listItem.previousElementSibling





console.log(val)