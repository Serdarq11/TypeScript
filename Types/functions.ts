function square(num: number){
    return num * num;
}

function greet(person: string){
    return `Hi there, ${person}!`;
}

const doSomething = (person: string, age: number, isFunny: boolean) => {};



square(3);
// greet(324); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
greet("serdar");

doSomething("serdar", 30, true);

function greeting(person: string = "stranger"){
    return `Hi there, ${person}!`;
}

greeting();
greeting("serdar");
// greeting(30); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

function square2(num: number): number{
    return num * num;
}

function rando(num: number){    // return type is inferred as number | string union type because of the if statement below.
    if(Math.random() < 0.5){
        return num.toString();
    }
    return num;
}

const add = (x: number, y: number): number => {
    return x + y;
}

const colors = ["red", "orange", "yellow"]

colors.map(color => {           // no need to declare also the type of colors, because ts is directly declaring it as a string because of map
    return color.toUpperCase()
})

function printTwice(msg: string): void {       // void type as default but we can type it again
    console.log(msg);
    console.log(msg);
    // return "";                              // error, because it is a void type
}

function makeError(msg: string): never {
    throw new Error(msg);
    // return ``;           // we said that we won't return anything . it is a never type of return
}


function gameLoop(): never{
    while(true){
        console.log("Game loop running!!")
    }
}