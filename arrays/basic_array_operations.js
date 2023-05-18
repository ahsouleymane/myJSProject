/*
Add one or more items to the end of an array - PUSH
Remove the last item from the array - POP
Add one or more item to the start of the array - UNSHIFT
Remove the first item from an array - SHIFT
 */

let a = [10, 20, 30, 40, 50]

a.push(60, 70, 80)
console.log(a)

a.pop(80)
console.log(a)

a.unshift(88, 99)
console.log(a)

a.shift()
console.log(a)