interface Chicken {
    breed: string;
    eggsPerWeek: number;
    name: string
    age: number
}

const norma: Chicken = {
    breed: "Silkie",
    eggsPerWeek: 4,
    name: "Norma",
    age: 2
}

// tsc -w index.ts or tsc --watch  // automatically making changes to the js file by watching ts file !!!
// tsc command will compile all ts files. tsc farmstand.ts will compile just the farmstand.ts file !!!

const juniper: Chicken = {
    breed: "Silkie",
    eggsPerWeek: 5,
    name: "Juniper",
    age: 1
}

// function doThing(thing) {
//     console.log(thing);
// }

