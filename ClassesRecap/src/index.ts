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

    constructor(
        public first: string, 
        public last: string,
        protected _score: number) {
    }

    private secretMethod(): void {
        console.log("Secret method");
    }

    get fullName(): string {
        return `${this.first} ${this.last}`;
    }

    get score(): number {
        return this._score;
    }

    set score(newScore: number) {
        if (newScore < 0) {
            throw new Error("Score cannot be negative");
        }
        this._score = newScore;
    }
}


class SuperPlayer extends Player {
    public isAdmin: boolean = true;

    maxScore() {
        this._score = 9999; // This will work because _score is protected, so it can be accessed from subclasses
    }
}


const elton = new Player("Elton", "Steele", 100);
// elton.fullName = "Elton John"; // Error: Cannot assign to 'fullName' because it is a read-only property.

elton.score = 200; // This will work because we have a setter for score

interface Colorful {
    color: string;
}

interface Printable {
    print(): void;
}

class Bike implements Colorful {
    constructor(public color: string) {}    
}

class Jacket implements Colorful, Printable {
    constructor(public brand: string, public color: string) {}

    print(){
        console.log(`${this.brand} jacket in ${this.color} color`);
    }
}

const bike1 = new Bike("red");
const jacket1 = new Jacket("Prada", "black");


// abstract class

abstract class Employee {
    constructor(public first: string, public last: string) {}
    abstract getPay(): number; // abstract method, must be implemented in subclasses
    greet() {
        console.log(`Hello, ${this.first} ${this.last}`);
    }
}

class FullTimeEmployee extends Employee {
    constructor(public first: string, public last: string, private salary: number){
    super(first, last)
    }
    getPay() {
        // Implementation for full-time employee pay
        return this.salary;
    }
};

class PartTimeEmployee extends Employee {
    constructor(public first: string, public last: string, private hourlyRate: number, private hoursWorked: number){
    super(first, last)
    }
    getPay() {
        // Implementation for part-time employee pay
        return this.hourlyRate * this.hoursWorked;
    }
};

const betty = new FullTimeEmployee("Betty", "White", 9500);
console.log(betty.getPay()); // Output: 9500
const bill = new PartTimeEmployee("Bill", "Billerson", 24, 1100);
console.log(bill.getPay()); // Output: 26400