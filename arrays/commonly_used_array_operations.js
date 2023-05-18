/*
Converting array to string - JOIN
Get string representation of array - TOSTRING
Converting string to array - SPLIT
Reversing an array - REVERSE
Get section of an array - SLICE 
*/

let colors = ["Red", "Blue", "Green", "Black", "White"]
console.log(colors)
console.log(colors.slice(1))
console.log(colors.slice(1, 4))
console.log(colors.join("_"))
console.log(colors.toString())
console.log(colors.reverse())
console.log(colors.slice(1))

let s = "A_B_C_D_E"
console.log(s.split("_"))