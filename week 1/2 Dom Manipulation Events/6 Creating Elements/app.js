// Create Element

const li= document.createElement('li');

// Add class
li.className='collection-item'

// Add id

li.id='titles'

// Add attribute

li.setAttribute('titles','New Item')

// Create Text node and Append
li.appendChild(document.createTextNode('Hello'))
// Create New link Element
const link=document.createElement('a')

// Add classes
link.className='delete-item secondary-content'

//Add icon Html

link.innerHTML='<i class="fa fa-remove"></i>'
// Append link into li

li.appendChild(link)
// Append li as child to ul

document.querySelector('ul.collection').appendChild(li)

console.log(li)