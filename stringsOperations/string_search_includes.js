
// Validating the presence of sub-string in main string
// Includes method

let str1 = 'Donay dey ga kandé dondatcharey. Ay ne ha donay dey ga kandé dondatcharey'

let str2 = 'kandé'

let str3 = 'Kandé'

let pos = str1.indexOf('kandé')

console.log(str1.includes(str2))

console.log(str1.includes(str3))

console.log(str1.includes(str2, 0))

console.log(str1.includes(str2, pos+1))

console.log(str1.includes(str3, pos+1))