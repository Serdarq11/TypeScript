import type { Person } from "./types.js";   // we typed type because we are importing an interface, not a class or function. so it will not be included in the compiled js file.


export default class User implements Person{
    constructor(public username: string, public email: string) {}
    logout() {
        console.log(`${this.username} has logged out`);
    }
}

export function userHelper() {
    console.log("User Helper!!!");
}