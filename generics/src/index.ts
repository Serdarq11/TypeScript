// const nums: number[] = [];
// const nums: Array<number> = []; // This is the same as the above line. Array<number> is a generic type that represents an array of numbers.
const colors: string[] = [];

// Providing a type to querySelector:
const inputEl = document.querySelector<HTMLInputElement>("#username")!; // The ! at the end of the querySelector means that we are telling TypeScript that we are sure that this element exists in the DOM. If we didn't use the !, TypeScript would give us an error because it thinks that this element might not exist in the DOM and therefore might be null.
console.dir(inputEl);
inputEl.value = "Hacked!";

const btn = document.querySelector<HTMLButtonElement>(".btn")!; // .btn is a class selector. 


// Without Generics...Lots of Repetition!
function numberIdentity(item: number): number {
  return item;
}
function stringIdentity(item: string): string {
  return item;
}
function booleanIdentity(item: boolean): boolean {
  return item;
}

// function identity(item: any): any{
//   return item;
// }

// With A Generic...Super Reusable!
function identity<T>(item: T): T {
  return item;
}

identity<number>(7);
identity<string>("hello");

function getRandomElement<T>(list: T[]): T {
  const randIdx = Math.floor(Math.random() * list.length);
  return list[randIdx];
}

console.log(getRandomElement<string>(["a", "b", "c"]));
console.log(getRandomElement<number>([5, 6, 21, 354, 567, 234, 654]));
console.log(getRandomElement([1, 2, 3, 4]));  // TypeScript can infer the type of the array elements, so we don't need to specify the type parameter explicitly.

// Generics With Constraints:
function merge<T extends object, U extends object>(object1: T, object2: U) {  // extends means that T and U must be objects. This is a constraint on the generic types T and U.
  return {
    ...object1,   // ... is the spread operator. It takes all the properties of object1 and adds them to the new object that is being returned.
    ...object2, // ... is the spread operator. It takes all the properties of object2 and adds them to the new object that is being returned.
  };
}

const comboObj = merge({ name: "colt" }, { pets: ["blue", "elton"] });
console.log(merge({ name: "Colt" }, { num: 9 }));
merge<{ name: string }, { pets: string[] }>(
  { name: "colt" },
  { pets: ["blue", "elton"] }
);

interface Lengthy {
  length: number;
}

function printDoubleLength<T extends Lengthy>(thing: T): number {
  return thing.length * 2;
}

// function printDoubleLength(thing: Lengthy): number {
//   return thing.length * 2;
// }

printDoubleLength("asdasd");
// printDoubleLength(234); //Not allowed! because number does not have a length property. This is where the constraint on the generic type T comes into play. It ensures that T must have a length property, so we can't pass in a number.

function makeEmptyArray<T = number>(): T[] {  // default type parameter T is number. If we don't specify a type parameter when calling this function, TypeScript will assume that T is number.
  return [];
}

const nums = makeEmptyArray()   // T is number here
const bools = makeEmptyArray<boolean>();  // T is boolean here

// A Generic Class Example
interface Song {
  title: string;
  artist: string;
}
interface Video {
  title: string;
  creator: string;
  resolution: string;
}

class Playlist<T> {
  public queue: T[] = [];
  add(el: T) {
    this.queue.push(el);
  }
}

const songs = new Playlist<Song>();
const videos = new Playlist<Video>();
