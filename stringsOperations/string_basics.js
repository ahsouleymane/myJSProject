
/*
Basic string operations
    1. String compare
    2. Upper/Lower case
    3. Trim
    4. Concatenation

*/

let str1 = 'I like Node JS'

let str2 = '   Delete espace   '

let str3 = 'Alamissi'

let str4 = 'Hannbery'

let str5 = 'Juma\'a'

console.log(str1.toUpperCase() === str1.toLowerCase())

console.log(str1.toUpperCase())
console.log(str1.toLowerCase())

console.log(str2.trim())
console.log(str2.trimStart())
console.log(str2.trimEnd())

console.log(str3 + str4 + str5)
console.log(str3 + ' ' + str4 + ' ' + str5)
console.log(str3.concat(str4, str5))
console.log(str3.concat(' ',str4,' ',str5))