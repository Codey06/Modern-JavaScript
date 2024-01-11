const person={
	firstName:'Stave',
	lastName:'Smith',

	age:30,
	email:'stave@aol.com',
	hobbies:['reading','filiming'],

	adderss:{
		city:'miami',
		state:'fl'
	},
	getBirthYear:function () {
		return 2023 - this.age;
	}
} 
let val;

val =person;

// Get Specific Value

val=person.firstName;
val=person['lastName'];
val=person.age
val=person.hobbies[1]
val=person.adderss.state
val=person.adderss['city']
val=person.getBirthYear()



console.log(val);
const people=[

	{name:'john', age:30},
	{name:'Mustaf', age:28},
	{name:'Nancy', age:40}
]
for(let i=0; i<people.length; i++){
	console.log(people[i].name)
}


