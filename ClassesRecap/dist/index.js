"use strict";
// class Player {
//     public readonly first: string;
//     public readonly last: string;       // public is the default. public means that this property can be accessed from outside the class.
//     private score: number = 0;          // private means that this property can only be accessed from within the class. 
//     constructor(first: string, last: string) {
//         this.first = first;
//         this.last = last;
//     }
//     private secretMethod(): void {
//         console.log("Secret method");
//     }
// }
// elton.first = "Elton2"; // Error: Cannot assign to 'first' because it is a read-only property.
// elton.secretMethod();   // Error: Property 'secretMethod' is private
class Player {
    // public readonly first: string;
    // public readonly last: string;       // public is the default. public means that this property can be accessed from outside the class.
    // private score: number = 0;          // private means that this property can only be accessed from within the class. 
    constructor(first, last, _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
    }
    secretMethod() {
        console.log("Secret method");
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Score cannot be negative");
        }
        this._score = newScore;
    }
}
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this._score = 9999; // This will work because _score is protected, so it can be accessed from subclasses
    }
}
const elton = new Player("Elton", "Steele", 100);
// elton.fullName = "Elton John"; // Error: Cannot assign to 'fullName' because it is a read-only property.
elton.score = 200; // This will work because we have a setter for score
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(`${this.brand} jacket in ${this.color} color`);
    }
}
const bike1 = new Bike("red");
const jacket1 = new Jacket("Prada", "black");
// abstract class
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    greet() {
        console.log(`Hello, ${this.first} ${this.last}`);
    }
}
class FullTimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.first = first;
        this.last = last;
        this.salary = salary;
    }
    getPay() {
        // Implementation for full-time employee pay
        return this.salary;
    }
}
;
class PartTimeEmployee extends Employee {
    constructor(first, last, hourlyRate, hoursWorked) {
        super(first, last);
        this.first = first;
        this.last = last;
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getPay() {
        // Implementation for part-time employee pay
        return this.hourlyRate * this.hoursWorked;
    }
}
;
const betty = new FullTimeEmployee("Betty", "White", 9500);
console.log(betty.getPay()); // Output: 9500
const bill = new PartTimeEmployee("Bill", "Billerson", 24, 1100);
console.log(bill.getPay()); // Output: 26400
