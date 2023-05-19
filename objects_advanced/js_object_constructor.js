/*
JS Object Constructor
*/

function Student(name, age, country, residence){
    this["name"] = name
    this["age"] = age
    this["country"] = country
    this["residence"] = residence
}

const s1 = new Student("Rayyane", 2, "Niger", "yantala")

console.log(s1)