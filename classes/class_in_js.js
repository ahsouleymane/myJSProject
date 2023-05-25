/**
 * Class is introduced in JS in ECMAScript 6 (ES6) release
 */  

function Employee(id, name, email){
    this.id = id
    this.name = name
    this.email = email
}

class User {
    constructor(id, name){
        this.id = id
        this.name = name
    }
}

let a = new Employee(12456, "Souleymane", "soul45@gmail.com")
let b = new User(321045, "Abdou")

console.log(a)
console.log(b)