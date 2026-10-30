"use strict";
// function printDouble(msg: string) {
//     console.log(msg);
//     console.log(msg);
// };
const todos = [];
const btn = document.getElementById("btn"); // ! means stop worrying this is guaranteed not to be null.
const input = document.getElementById("todoinput"); // type assertion is used by as keyword.
const form = document.querySelector("form");
const list = document.querySelector("#todolist");
// console.log(btn)
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false
    };
    createTodo(newTodo);
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
    // console.log("submitted!!")
    input.value = "";
});
function createTodo(todo) {
    const newLI = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox"; // same thing with     <input type="checkbox" checked> in the html file
    newLI.append(todo.text);
    newLI.append(checkbox);
    list.append(newLI);
}
// btn?.addEventListener("click", function(){
//     alert(input.value);
//     input.value = "";
// });
// let mystery: unknown = "Hello World!!";
// const numChars = (mystery as string).length;    // type assertions
