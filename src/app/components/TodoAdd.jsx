"use client";

import { useState } from "react";

import { STATUSES } from "@/app/constants";

import useTodo from "@/app/hooks/useTodo";
import todoStyles from "@/app/styles/todo.module.css";

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

  const buttonText =
    addStatus === STATUSES.LOADING ? "در حال افزودن" : "اضافه کن";

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
