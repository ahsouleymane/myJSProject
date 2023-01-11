            // AND            // OR             // XOR
let a = 50  // 0110010        // 0110010        // 0110010
let b = 100 // 1100100        // 1100100        // 1100100
            // 0100000 => 32  // 1110110 => 118 // 86

let c = a & b
let d = a | b
let e = a ^ b

// NOT
let f = ~a
let g = ~b

console.log(c)
console.log(d)
console.log(e)

console.log(f)
console.log(g)