/*
Search items in Array - INCLUDES
Find first index of an item - INDEXOF
Find last index of an item - LASTINDEXOF
 */

const planets = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
    "Mars",
]; 

console.log(planets.includes("Earth"))
console.log(planets.includes("earth"))

console.log(planets.indexOf("Mars"))
console.log(planets.indexOf("mars"))

console.log(planets.lastIndexOf("Mars"))
console.log(planets.lastIndexOf("mars"))