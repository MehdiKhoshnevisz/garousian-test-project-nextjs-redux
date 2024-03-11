"use client";

import { useState } from "react";

import useTodo from "../hooks/useTodo";
import todoStyles from "../styles/todo.module.css";

export const TodoAdd = () => {
  const {
    dispatch,
    state: { addStatus },
    reducers: { addTodo },
  } = useTodo();

  const [todoItem, setTodoItem] = useState({
    id: "",
    label: "",
    completed: false,
  });

  const onInputChange = (event) => {
    const { value } = event.target;
    setTodoItem({ ...todoItem, label: value });
  };

  const onAddClick = () => {
    setTodoItem({ ...todoItem, label: "", id: +new Date() });
    dispatch(addTodo(todoItem));
  };

  const buttonText = addStatus === "loading" ? "در حال افزودن" : "اضافه کن";

  return (
    <div className={todoStyles.addToDInputWrapper}>
      <input
        value={todoItem.label}
        className={todoStyles.input}
        placeholder="آیتم جدید اضافه کنید"
        onChange={onInputChange}
      />
      <button
        className={todoStyles.button}
        disabled={!todoItem.label}
        onClick={onAddClick}
      >
        {buttonText}
      </button>
    </div>
  );
};
