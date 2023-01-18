let op = 'Division'

let num1 = 200
let num2 = 50

switch (op) {
    case "Addition":
        console.log('Addition is: ', (num1 + num2))
        break;

    case "Subtraction":
        console.log('Subtraction is: ', (num1 - num2))
        break;

    case "Multiplication":
        console.log('Multiplication is: ', (num1 * num2))
        break;

    case "Division":
        console.log('Division is: ', (num1 / num2))
        break;

    default:
        console.log('Invalide opération !!!')
        break;
}