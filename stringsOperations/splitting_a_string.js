/*
Splitting a string using delmiter
String gets converted to array after aplitting
*/

let str1 = 'Alamissi_Hannbery_Jumma'

let str2 = 'Alamissi$Hannbery$Jumma'

console.log(str1.split('_'))

console.log(str2.split(/[^A-Za-z0-9]/))