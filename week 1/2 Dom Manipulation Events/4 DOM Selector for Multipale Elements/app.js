// Document.getElementsByClassName

// const items=document.getElementsByClassName('collection-item')
// console.log(items)
// console.log(items[0])
// items[0].style.color='skyblue'
// items[3].textContent='Mustaf'

// const listItems=document.querySelector('ul').getElementsByClassName('collection-item')
// console.log(listItems)

// Document.getElementsByTagName
// let lis=document.getElementsByTagName('li')
// // console.log(lis)
// // console.log(lis[2])
// lis[0].style.color='skyblue'
// lis[3].textContent='Mustaf'

// // const lis=document.querySelector('ul').getElementsByClassName('collection-item')


// //cover HTML Collection into Array
// lis= Array.from(lis)
// lis.reverse()

// lis.forEach(function(li, index){
// 	console.log(li.className)
// 	li.textContent=`${index} :Hello`
// })
// console.log(lis)

// Document.querySelectorAll

const items=document.querySelectorAll('ul.collection li.collection-item')

items.forEach(function(li,index){
	li.textContent=`${index} :Hello`
})
const liOdd=document.querySelectorAll('li:nth-child(odd)')
const liEven=document.querySelectorAll('li:nth-child(even)')
liOdd.forEach(function(li,index){
	li.style.background='#ccc'
})
for (var i =0; i<liEven.length; i++) {
	liEven[i].style.background='#f4f4f4'
}
console.log(items)
















