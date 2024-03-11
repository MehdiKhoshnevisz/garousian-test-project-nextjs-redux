"use client";

import { useSelector, useDispatch } from "react-redux";

import { filterByTodo } from "@/app/store/features/todo/todo.slice";
import {
  addTodo,
  deleteTodo,
  toggleTodo,
} from "@/app/store/features/todo/thunks";

const useTodo = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.todo);

  return {
    state,
    dispatch,
    reducers: {
      addTodo,
      deleteTodo,
      toggleTodo,
      filterByTodo,
    },
  };
};

export default useTodo;
