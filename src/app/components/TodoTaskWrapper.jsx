"use client";

import todoStyles from "../styles/todo.module.css";

export const TodoTaskWrapper = ({ children }) => {
  return (
    <div>
      <ul className={todoStyles.list}>{children}</ul>
    </div>
  );
};
