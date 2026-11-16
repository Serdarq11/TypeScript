import {add, sample as randomSample, PI} from "./utils.js"; // we type js not ts because we are using CommonJS module system
import User, { userHelper } from "./user.js";   // there is no curly braces for default export, but there is curly braces for named export. so it means I can give any name for User class, but I have to use the same name for userHelper function.

const sample = 12142;   // this is a variable, not a function. so it will not conflict with the sample function imported from utils.ts
console.log(randomSample([12, 3, 34]));
console.log(add(1, 2));
console.log(PI);
userHelper();
