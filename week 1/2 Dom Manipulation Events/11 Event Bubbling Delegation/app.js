// EVENT BUBBLING

// document.querySelector('.card-title').addEventListener('click',function(){
// 	console.log('card-title')
// })
// document.querySelector('.card').addEventListener('click',function(){
// 	console.log('card')
// })
// document.querySelector('.col').addEventListener('click',function(){
// 	console.log('col')
// })
// document.querySelector('.container').addEventListener('click',function(){
// 	console.log('container')
// })
// document.querySelector('.card-content').addEventListener('click',function(){
// 	console.log('card-content')
// })
// document.querySelector('.row').addEventListener('click',function(){
// 	console.log('row')
// 	// document.body.innerHTML='hello world'
// })

// const delIteam=document.querySelector('.delete-item');
document.body.addEventListener('click',(e)=>{

// 	if (e.target.className==='fa fa-remove') {
// 	console.log('delIteam')
// console.log(e.target)	
// 	}
// 	if (e.target.parentElement.className==='delete-item secondary-content') {
// 	console.log('delIteam')
// console.log(e.target)	
// 	}
if (e.target.parentElement.classList.contains('delete-item')) {
	console.log('delIteam')
	e.target.parentElement.parentElement.remove()
// console.log(e.target)	
	}

});
 