import TodoItem from "./todo-item";
import todos from "./todos.json";

const TodoList = () => {
  return (
    <>
      <h3>Todo list</h3>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.title} todo={todo} />
        ))}
      </ul>
    </>
  );
};
export default TodoList;
