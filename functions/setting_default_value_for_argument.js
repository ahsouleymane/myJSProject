/*
How to set default value of an argument ?
*/

function abc(num1=25, num2=60 ) {
    console.log(num1)
    console.log(num2)
}

console.log('Display 1:')
abc(10) 

console.log('Display 2:')
abc(10, 20)

console.log('Display 3:')
abc(undefined, 35)