import TodoList from "./TodoList.js";

$("#wd-todo").append(`
   <div class="container">
       <h1>Todo example</h1>
       ${TodoList()}
   </div>
`);

const alice = { first: "Alice", last: "Wonderland", salary: 100000 };
let x = (alice.salary += 10000);
let y = (alice["salary"] = alice.salary + 10000);
console.log(x);
console.log(y);
