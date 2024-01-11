const clearBtn=document.querySelector('.clear-tasks');
const card=document.querySelector('.card');
const heading=document.querySelector('h5');

//Click


// clearBtn.addEventListener('click',runEvent)

// // Doubleclick

// clearBtn.addEventListener('dblclick',runEvent)
  
  // Mousedown
// clearBtn.addEventListener('mousedown',runEvent)
//  Mouseup
// clearBtn.addEventListener('mouseup',runEvent)
 // MOuseenter
// card.addEventListener('mouseenter',runEvent)

// // mouseleave
// card.addEventListener('mouseleave',runEvent)
// // mouseover
// card.addEventListener('mouseover',runEvent)

// // mouseout
// card.addEventListener('mouseout',runEvent)
 // mousemove
card.addEventListener('mousemove',runEvent)

// Event handler
function runEvent(e){
	console.log(`EVENT TYPE: ${e.type}`)
heading.textContent=`MouseX: ${e.offsetX} MouseY:${e.offsetY}`;
document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},40)`
}