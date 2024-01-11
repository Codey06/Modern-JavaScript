// // Calculator Challenge
// function calculator(num1, num2, operator) {
//     switch (operator) {
//         case "+":
//             return num1 + num2;
//         case "-":
//             return num1 - num2;
//         case "*":
//             return num1 * num2;
//         case "/":
//             return num1 / num2;
//         default:
//             return "Invalid operator";
//     }
// }

// console.log(calculator(10, 20, "%%"));

function calculator(num1, num2, operator) {
    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            result = "Invalid operator";
            break;
    }
    // console.log(result)
    return result;
}

console.log(calculator(10, 20, "+"));