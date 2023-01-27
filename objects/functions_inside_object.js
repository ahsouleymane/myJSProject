// Creating functions inside Object

let obj = {
    firstName:'Yasmina',
    lastName:'Omar',
    age:7,
    class:'CP',
    displayDetails : function details() {
        console.log(`${obj.firstName} ${obj.lastName} years old and is in ${obj.class} grade`)
    },

    details2() {
        console.log(`${obj.firstName} ${obj.lastName} years old and is in ${obj.class} grade`)
    }

}

obj.displayDetails()
obj.details2()