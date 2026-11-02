"use strict";
// function printDouble(msg: string) {
//     console.log(msg);
//     console.log(msg);
// };
const btn = document.getElementById("btn"); // ! means stop worrying this is guaranteed not to be null.
const input = document.getElementById("todoinput"); // type assertion is used by as keyword.
const form = document.querySelector("form");
const list = document.querySelector("#todolist");
const todos = readTodos();
todos.forEach(createTodo);
// console.log(btn)
function readTodos() {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
;
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false
    };
    createTodo(newTodo);
    todos.push(newTodo);
    saveTodos();
    // console.log("submitted!!")
    input.value = "";
});
function createTodo(todo) {
    const newLI = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox"; // same thing with     <input type="checkbox" checked> in the html file
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", function () {
        todo.completed = checkbox.checked;
        saveTodos();
    });
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
