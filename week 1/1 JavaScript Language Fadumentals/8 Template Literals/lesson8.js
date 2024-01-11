const name='mustaf'
const age=31
const job='Web developer'
const city='muqdisho'
let html

// Without Template string (es5)

html='<ul>' +
'<li>Name:' + name + '</li>'+
'<li>Age:' + age + '</li>' +
'<li>Job: ' +job + '</li>' +
'<li>City: '+city +'</li>' +
'</ul>'
function hello() {
	return 'hello'
}
html= 
`<ol>
<li>Name: ${name}</li>
<li>Age: ${age}</li>
<li>City:${city}</li>
<li>JOb: ${job}</li>
<li>${2+2}</li>
<li>${hello()}</li>
<li>${age >30 ?'over 30' : 'under 30'} </li>
<li> </li>

</ol>



`

document.body.innerHTML=html