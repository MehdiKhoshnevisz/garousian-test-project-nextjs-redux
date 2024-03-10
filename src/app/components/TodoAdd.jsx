import { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../store/todoReducer";

import todoStyles from "../styles/todo.module.css";

export const TodoAdd = () => {
  const dispatch = useDispatch();
  const [todoItem, setTodoItem] = useState({ label: "", completed: false });

  const onInputChange = (event) => {
    const { value } = event.target;
    setTodoItem({ ...todoItem, label: value });
  };

  const onAddClick = () => {
    dispatch(addTodo(todoItem));
    setTodoItem({ ...todoItem, label: "" });
  };

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
        اضافه کن
      </button>
    </div>
  );
};
