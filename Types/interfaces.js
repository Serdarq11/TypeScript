"use strict";
// interfaces
// interfaces serve almost the exact same purpose as type aliases. (with a slightly different syntax)
// we can use them to create reusable, modular types that describe the shapes of objects.
// only objects
const pt = { x: 123, y: 1234 };
const thomas = {
    id: 3,
    first: "Thomas",
    last: "Hardy",
    nickname: "Tom", // but nickname is not required
    sayHi: () => { return "Hello!"; }
};
const shoes = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount(amount) {
        const newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    }
};
console.log(shoes.applyDiscount(0.4));
const elton = {
    name: "Elton",
    age: 0.5,
    breed: "Australian Shepherd",
    bark() { return "woof! woof!"; }
};
const chewy = {
    name: "Chewy",
    age: 4.5,
    breed: "Lab",
    bark() { return "Bark!"; },
    job: "bomb"
};
const pierre = {
    name: "Pierre",
    id: 123,
    email: "pierre@gmail.com",
    level: "senior",
    languages: ["JS", "Python"]
};
