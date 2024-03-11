"use client";

import useTodo from "@/app/hooks/useTodo";
import { FILTERS } from "@/app/constants";

import todoStyles from "@/app/styles/todo.module.css";

export const TodoFilter = () => {
  const {
    dispatch,
    reducers: { filterByTodo },
  } = useTodo();

  const onChange = (event) => {
    const { value } = event.target;
    dispatch(filterByTodo(value));
  };

  return (
    <select className={todoStyles.select} onChange={onChange}>
      <option value={FILTERS.ALL}>همه</option>
      <option value={FILTERS.DOING}>در حال انجام</option>
      <option value={FILTERS.DONE}>انجام شده</option>
    </select>
  );
};
