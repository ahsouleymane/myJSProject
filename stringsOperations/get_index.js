
/*

Find position (index) of a sub-string in main string
    1. indexOf    2. lastIndexOf

*/


let str1 = 'tik tak tok tek tuk tak tik tak'

let pos = str1.indexOf('tak')

console.log(str1.indexOf('zz'))
console.log(str1.indexOf('tuk'))
console.log(str1.indexOf('tak'))
console.log(str1.indexOf('tak', pos+1))
console.log(str1.lastIndexOf('tak'))