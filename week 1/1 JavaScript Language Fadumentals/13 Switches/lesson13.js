const color='Blue'
switch(color){
case 'red':
	console.log(`the color is ${color}`)
	break;
case 'Blue':
	console.log(`the color is ${color}`)
	break;
default:
	console.log("their is color you choose")
	break;

}

let day 
switch(new Date().getDay()){
case 0:
	day='Sunday';
	break;
case 1:
	day='Monday';
	break;
case 2:
	day='tuesday';
	break;
case 3:
	day='Wednesday';
	break;
case 4:
	day='thurday';
	break;
case 5:
	day='Firday';
	break;
case 6:
	day='Saturday';
	break;

}

console.log(`today is ${day}`)