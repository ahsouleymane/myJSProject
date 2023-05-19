/*
Creating a JS object using function
*/

function createStudent(name, age, country, residence){
    const student = {}
    student["name"] = name
    student["age"] = age
    student["country"] = country
    student["residence"] = residence
    return student
}

const s1 = createStudent("Rayyane", 2, "Niger", "yantala")

const student1 = {
    name: "Ahmad Oumarou",
    age: 3,
    country: "Niger",
    residence: "banifandou"
}

const student2 = {
    name: "Fatouma Zara",
    age: 1,
    country: "Niger",
    residence: "Bassora"
}

console.log(s1)
console.log(student1)
console.log(student2)
