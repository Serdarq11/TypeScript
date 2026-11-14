"use strict";
// const nums: number[] = [];
// const nums: Array<number> = []; // This is the same as the above line. Array<number> is a generic type that represents an array of numbers.
const colors = [];
// Providing a type to querySelector:
const inputEl = document.querySelector("#username"); // The ! at the end of the querySelector means that we are telling TypeScript that we are sure that this element exists in the DOM. If we didn't use the !, TypeScript would give us an error because it thinks that this element might not exist in the DOM and therefore might be null.
console.dir(inputEl);
inputEl.value = "Hacked!";
const btn = document.querySelector(".btn"); // .btn is a class selector. 
// Without Generics...Lots of Repetition!
function numberIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
function booleanIdentity(item) {
    return item;
}
// function identity(item: any): any{
//   return item;
// }
// With A Generic...Super Reusable!
function identity(item) {
    return item;
}
identity(7);
identity("hello");
function getRandomElement(list) {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}
console.log(getRandomElement(["a", "b", "c"]));
console.log(getRandomElement([5, 6, 21, 354, 567, 234, 654]));
console.log(getRandomElement([1, 2, 3, 4])); // TypeScript can infer the type of the array elements, so we don't need to specify the type parameter explicitly.
// Generics With Constraints:
function merge(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
const comboObj = merge({ name: "colt" }, { pets: ["blue", "elton"] });
console.log(merge({ name: "Colt" }, { num: 9 }));
merge({ name: "colt" }, { pets: ["blue", "elton"] });
function printDoubleLength(thing) {
    return thing.length * 2;
}
// function printDoubleLength(thing: Lengthy): number {
//   return thing.length * 2;
// }
printDoubleLength("asdasd");
// printDoubleLength(234); //Not allowed! because number does not have a length property. This is where the constraint on the generic type T comes into play. It ensures that T must have a length property, so we can't pass in a number.
function makeEmptyArray() {
    return [];
}
const nums = makeEmptyArray(); // T is number here
const bools = makeEmptyArray(); // T is boolean here
class Playlist {
    constructor() {
        this.queue = [];
    }
    add(el) {
        this.queue.push(el);
    }
}
const songs = new Playlist();
const videos = new Playlist();
