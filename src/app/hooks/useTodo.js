"use client";

import { useSelector, useDispatch } from "react-redux";

import { filterByTodo } from "../store/todo";
import { addTodo, deleteTodo, toggleTodo } from "../store/todo/thunks";

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
