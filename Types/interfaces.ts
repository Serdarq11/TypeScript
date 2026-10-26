// interfaces
// interfaces serve almost the exact same purpose as type aliases. (with a slightly different syntax)
// we can use them to create reusable, modular types that describe the shapes of objects.
// only objects

// type Point = {
//     x: number;
//     y: number;
// }

interface Point {
    x: number;
    y: number;
}

const pt: Point = {x:123, y: 1234}

// readonly and optinal properties

interface Person {
    readonly id: number;
    first: string;
    last: string;
    nickname?: string;
    // sayHi: () => string;
    sayHi(): string
}

const thomas: Person = {
    id: 3, 
    first: "Thomas", 
    last: "Hardy", 
    nickname: "Tom",     // but nickname is not required
    sayHi: () => {return "Hello!"}
} 

// thomas.first = "dkyagbd" // not an error
// thomas.id = 3   // error, readonly



// method wit parameter
interface Product {
    name: string;
    price: number;
    applyDiscount(discount: number): number;
}

const shoes: Product = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount(amount: number){
        const newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    }
}

console.log(shoes.applyDiscount(0.4));



// reopening interfaces

interface Dog {
    name: string;
    age: number;
}

interface Dog {
    breed: string;
    bark(): string;
}

const elton: Dog = {
    name: "Elton",
    age: 0.5,
    breed: "Australian Shepherd",
    bark(){return "woof! woof!"}
}


// extending interfaces

interface ServiceDog extends Dog {
    job: "drug sniffer" | "bomb" | "guide dog";
}

const chewy: ServiceDog = {
    name: "Chewy",
    age: 4.5,
    breed: "Lab",
    bark(){return "Bark!"},
    job: "bomb"
}



// interface multiple inheritance

interface Human {
    name: string;
}

interface Employee {
    readonly id: number,
    email: string 
}

interface Engineer extends Human, Employee {
    level: string,
    languages: string[]
}

const pierre: Engineer = {
    name: "Pierre",
    id: 123,
    email: "pierre@gmail.com",
    level: "senior",
    languages: ["JS", "Python"]
}




