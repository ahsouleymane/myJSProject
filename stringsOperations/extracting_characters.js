/*
Extracting characters from string
    1. charAt
    2. str[]
*/

let str = 'PERSEVERANCE'

console.log(str.charAt(0))

console.log(str[0])

console.log(str[str.length-1])

for (let i = 0; i <= str.length-1; i++){
    console.log(str[i])
}


temp = ''
for (let j = 0; j <= str.length-1; j++){
    temp = str[j] + temp //REVERSE
}

console.log(temp)