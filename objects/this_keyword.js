// Concept of 'this' keyword

let obj = {
    firstName:'Yasmina',
    lastName:'Omar',
    age:7,
    class:'CP',
    details() {
        console.log(`${this.firstName} ${this.lastName} years old and is in ${this.class} grade`)
    }

}

obj2 = obj

obj = null

console.log(obj2)

obj2.details()