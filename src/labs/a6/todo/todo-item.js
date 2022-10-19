import PropTypes from "prop-types";

const TodoItem = ({ todo }) => {
  return (
    <li>
      <input type="checkbox" defaultChecked={todo.done} />
      &nbsp; {todo.title} ({todo.status})
    </li>
  );
};

// Remember: propTypes must come after the component definition
TodoItem.propTypes = {
  todo: PropTypes.shape({
    done: PropTypes.bool,
    title: PropTypes.string,
    status: PropTypes.string,
  }),
};

export default TodoItem;
