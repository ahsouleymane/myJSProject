/**
 * Super class in JS
 */

class Employee {
    constructor(id, name, email) {
        this.id = id
        this.name = name
        this.email = email
    }

    getId() {
        return this.id
    }

    getName() {
        return this.name
    }

}

class Manager extends Employee {
    constructor(id, name, email, managerId) {
        super(id, name, email)
        this.managerId = managerId
    }
    createReport() {
        console.log("Manager Report Created")
    }
}

let manager1 = new Manager(12583, "Souleymane", "souk95@gmail.com", 100)

// manager1.createReport()
// console.log(manager1.getId())
// console.log(manager1.getName())

console.log(manager1)