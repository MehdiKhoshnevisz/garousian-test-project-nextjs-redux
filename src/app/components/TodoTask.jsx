import useTodo from "../hooks/useTodo";

import todoStyles from "../styles/todo.module.css";

export const TodoTask = (props) => {
  const {
    dispatch,
    reducers: { toggleTodo, deleteTodo },
  } = useTodo();

  const { label, id, completed } = props;

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
