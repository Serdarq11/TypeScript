//d.ts files means declaration files, which are used to provide type information for JavaScript libraries. They allow TypeScript to understand the types of variables, functions, and classes in those libraries, enabling better type checking and autocompletion in your code editor.

import axios from "axios";
import _ from "lodash"; //npm install --save-dev @types/lodash -> This command installs the type definitions for the Lodash library, which allows TypeScript to understand the types of Lodash functions and provide better type checking and autocompletion in your code editor.

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}


// axios
// .get<User>("https://jsonplaceholder.typicode.com/users/1").then((res) => {   // User is the type of the response data, which is expected to be a User object. This is a generic type parameter that tells TypeScript what type to expect for the response data.
//   console.log("WOOO!");
//   printUser(res.data);   // calling the printUser function and passing the data object as an argument. This function is defined below and is responsible for printing the user's name, email, and phone number to the console.
// }).catch(e => {
//     console.error("ERROR!", e);
// })


axios
.get<User[]>("https://jsonplaceholder.typicode.com/users").then((res) => {   // User is the type of the response data, which is expected to be a User object. This is a generic type parameter that tells TypeScript what type to expect for the response data.
  console.log("WOOO!");
  res.data.forEach(printUser);   // we used forEach to iterate over the array of users and call the printUser function for each user in the array. This is a more concise way to print all users instead of using a for loop.
}).catch(e => {
    console.error("ERROR!", e);
})



function printUser(user: User) {
  console.log(user.name);
  console.log(user.email);
  console.log(user.phone);
}


