// How to create nested objects

let obj = {
    firstName:'Yasmina',
    lastName:'Omar',
    age:7,
    class:2,
    address:{
        adressLine1: "Banifandou 2",
        adressLine2: "Decroly",
        city: "Niamey",
        postalCode: 8080,
        country: "Niger"
    }
}

obj.address.zone = "prime"
console.log(obj.address)