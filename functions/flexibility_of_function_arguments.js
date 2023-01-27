/*
    What if we provide less or more number of arguments
    while calling a function ?
*/

function abc(num1, num2) {
    console.log(num1)
    console.log(num2)
}

console.log('Display 1:')
abc(10, 15)

console.log('Display 2:')
abc(10)

console.log('Display 3:')
abc(10, 15, 20)