import todoStyles from "../styles/todo.module.css";

export const TodoTask = (props) => {
  const { label, id, checked } = props;

  return (
    <li className={todoStyles.listItem}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        className={todoStyles.checkbox}
      />
      <label htmlFor={id} className={todoStyles.listItemTitle}>
        {label}
      </label>
      <span className={todoStyles.delete}>✕</span>
    </li>
  );
};
