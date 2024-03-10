import { useSelector, useDispatch } from "react-redux";

import {
  addTodo,
  deleteTodo,
  toggleTodo,
  filterByTodo,
} from "../store/todoReducer";

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
