// Typeof Narrowing:
function triple(value: number | string) {
  if (typeof value === "string") {
    return value.repeat(3);
  }
  return value * 3;
}

const el = document.getElementById("idk");
if (el) {   // TypeScript knows that el is not null here, so we can safely access its properties and methods without worrying about null or undefined values.
  el;
} else {
  el;
}

// Truthiness Narrowing:
const printLetters = (word?: string) => {
  if (word) {
    for (let char of word) {
      console.log(char);
    }
  } else {
    console.log("YOU DID NOT PASS IN A WORD!");
  }
};

// EQUALITY NARROWING
function someDemo(x: string | number, y: string | boolean) {    
  if (x === y) {    // TypeScript knows that x and y must be of the same type here, so we can safely access their properties and methods without worrying about type errors.
    x.toUpperCase();
  }
}

// IN Operator Narrowing
interface Movie {
  title: string;
  duration: number;
}

interface TVShow {
  title: string;
  numEpisodes: number;
  episodeDuration: number;
}

function getRuntime(media: Movie | TVShow) {
  if ("numEpisodes" in media) { // TypeScript knows that media must be a TVShow here, so we can safely access its properties and methods without worrying about type errors.
    return media.numEpisodes * media.episodeDuration;
  }
  return media.duration;
}

console.log(getRuntime({ title: "Amadeus", duration: 140 }));
console.log(
  getRuntime({ title: "Spongebob", numEpisodes: 80, episodeDuration: 30 })
);

// Instanceof Narrowing:
function printFullDate(date: string | Date) {
  if (date instanceof Date) {
    console.log(date.toUTCString());
  } else {
    console.log(new Date(date).toUTCString());
  }
}

// Instanceof Narrowing:
class User {
  constructor(public username: string) {}
}
class Company {
  constructor(public name: string) {}
}

function printName(entity: User | Company) {
  if (entity instanceof User) { // TypeScript knows that entity must be a User here, so we can safely access its properties and methods without worrying about type errors.
    entity;
  } else {
    entity;
  }
}


// Type Predicates

interface Cat {
  name: string;
  numLives: number;
}
interface Dog {
  name: string;
  breed: string;
}

function isCat(animal: Cat | Dog): animal is Cat {  // animal is Cat is a type predicate. It tells TypeScript that if this function returns true, then animal must be a Cat. This allows TypeScript to narrow the type of animal to Cat within the if block.
  return (animal as Cat).numLives !== undefined;    
}

function makeNoise(animal: Cat | Dog): string {
  if (isCat(animal)) {  // typescript knows that animal must be a Cat here, so we can safely access its properties and methods without worrying about type errors.
    animal;
    return "Meow";
  } else {
    animal;
    return "Woof!";
  }
}

// Discriminated Unions
interface Rooster {
  name: string;
  weight: number;
  age: number;
  kind: "rooster";
}

interface Cow {
  name: string;
  weight: number;
  age: number;
  kind: "cow";
}

interface Pig {
  name: string;
  weight: number;
  age: number;
  kind: "pig";
}

interface Sheep {
  name: string;
  weight: number;
  age: number;
  kind: "sheep";
}

type FarmAnimal = Pig | Rooster | Cow | Sheep;

function getFarmAnimalSound(animal: FarmAnimal) {
  switch (animal.kind) {    // TypeScript knows that animal must be a FarmAnimal here, so we can safely access its properties and methods without worrying about type errors.
    case "pig": 
      return "Oink!";
    case "cow":
      return "Moooo!";
    case "rooster":
      return "Cockadoodledoo!";
    case "sheep":
      return "Baaa!";
    default:
      // We should never make it here, if we handled all cases correctly
      //   const shouldNeverGetHere: never = animal;
      //   return shouldNeverGetHere
      const _exhaustiveCheck: never = animal;   // this willl throw an error if we forget to handle a case in the switch statement. This is a way to ensure that we have handled all possible cases of the FarmAnimal type.
      return _exhaustiveCheck;
  }
}

const stevie: Rooster = {
  name: "Stevie Chicks",
  weight: 2,
  age: 1.5,
  kind: "rooster",
};

console.log(getFarmAnimalSound(stevie));