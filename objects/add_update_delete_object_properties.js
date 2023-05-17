// Add, Update and Delete Object Properties

let obj = {
    firstName:'Yasmina',
    lastName:'Omar',
    age:7,
    class:2,
}

// Add

obj.middleName = "Hayat"
obj["height"] = 3.4

// Update

obj.firstName = "Amadou"

// Delete 

//obj.class = null
delete obj.class

console.log(obj) 