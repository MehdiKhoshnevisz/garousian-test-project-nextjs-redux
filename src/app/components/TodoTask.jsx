import { useDispatch } from "react-redux";

import { toggleTodo, deleteTodo } from "../store/todoReducer";

import todoStyles from "../styles/todo.module.css";

export const TodoTask = (props) => {
  const { label, id, completed } = props;
  const dispatch = useDispatch();

  const onChange = () => {
    dispatch(toggleTodo(id));
  };

  const onDelete = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <li className={todoStyles.listItem}>
      <input
        id={id}
        type="checkbox"
        checked={completed}
        onChange={onChange}
        className={todoStyles.checkbox}
      />
      <label htmlFor={id} className={todoStyles.listItemTitle}>
        {label}
      </label>
      <span onClick={onDelete} className={todoStyles.delete}>
        ✕
      </span>
    </li>
  );
};
