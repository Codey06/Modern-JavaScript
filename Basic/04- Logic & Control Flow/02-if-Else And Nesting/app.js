const d = new Date(6, 30, 2022, 6, 0, 8);
const hour = d.getHours();
// if (hour < 12) {
//     console.log("Good Morning");
// } else if (hour < 18) {
//     console.log("Good Afternoon");
// } else {
//     console.log("Good Night");
// }

//Nested if 

if (hour < 12) {
    console.log("Good Morning");
    if (hour === 6) {
        console.log("Wake Up!");



    } else if (hour === 7) {
        console.log("work!");
    }
} else if (hour < 18) {
    console.log("Good Afternoon");
} else {
    console.log("Good Night");
}

console.log(hour);

if (hour >= 7 && hour < 15) {
    console.log("its working time");
} else {
    console.log("its not working time");
}

//  ||

if (hour === 6 || hour === 20) {
    console.log("brush your teth");
}