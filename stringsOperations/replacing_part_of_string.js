/*
Replacing parts of string
    1. Find and Replace using static string (only first match)
    2. Find and Replace using Regex
*/

let str1 = 'I Like Learning Like New Like Skills'

let str2 = str1.replace('Like', 'Love')

console.log(str2)

let str3 = str1.replace(/Like/, 'Love')

console.log(str3)

let str4 = str1.replace(/Like/g, 'Love')

console.log(str4)

let str5 = str1.replace(/Like/gi, 'Love')

console.log(str5)

let str6 = '$56FGG8789$%^&*9ghj()(*667'

let str7 = str6.replace(/\w/g, '')

console.log(str7)