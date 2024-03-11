"use client";

import todoStyles from "../styles/todo.module.css";

export const TodoTask = (props) => {
  const { label, id, completed, onDelete, onToggle, isLoading } = props;

  return (
    <li
      className={`${todoStyles.listItem} ${
        isLoading && todoStyles.listItemLoading
      }`}
    >
      <input
        id={id}
        type="checkbox"
        checked={completed}
        onChange={onToggle}
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
