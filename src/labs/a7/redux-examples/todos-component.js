import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, todoDoneToggle } from "./reducers/todo-reducer";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const [todo, setTodo] = useState({ do: "" });
  const dispatch = useDispatch();
  const createTodoClickHandler = () => {
    dispatch(addTodo(todo));
  };
  const deleteTodoClickHandler = (idx) => {
    dispatch(deleteTodo(idx));
  };
  const toggleTodoDone = (todo) => {
    dispatch(todoDoneToggle(todo));
  };
  const todoChangeHandler = (event) => {
    const doValue = event.target.value;
    const newTodo = {
      do: doValue,
    };
    setTodo(newTodo);
  };

  return (
    <>
      <h3>Todos</h3>
      <ul className="list-group">
        <li className="list-group-item">
          <button onClick={createTodoClickHandler} className="btn btn-primary w-25 float-end">
            Create
          </button>
          <input onChange={todoChangeHandler} className="form-control w-75" value={todo.do} />
        </li>
        {todos.map((todo, idx) => (
          <li key={todo._id} className="list-group-item">
            <button
              onClick={() => deleteTodoClickHandler(idx)}
              className="btn btn-danger float-end ms-2"
            >
              Delete
            </button>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => toggleTodoDone(todo)}
              className="me-2"
            />
            {todo.do}
          </li>
        ))}
      </ul>
    </>
  );
};
export default Todos;
