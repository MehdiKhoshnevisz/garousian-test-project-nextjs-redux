"use client";

import todoStyles from "@/app/styles/todo.module.css";

export const TodoTaskWrapper = ({ children }) => {
  return (
    <div>
      <ul className={todoStyles.list}>{children}</ul>
    </div>
  );
};
