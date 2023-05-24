/*
Null Prototype Object
 */

const a = {}

function b(){

}

const c = {}

a.__proto__.Prop1 = "Test Prop1"

console.log(a.Prop1)
console.log(b.Prop1)
console.log(c.Prop1)




/* console.log(a.__proto__)
console.log(b.__proto__.__proto__)

if (a.__proto__ === b.__proto__.__proto__){
    console.log("Same")
}else{
    console.log("Not Same")
} */