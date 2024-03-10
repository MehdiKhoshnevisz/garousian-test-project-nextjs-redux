import { useDispatch } from "react-redux";

import { filters } from "../constants";
import { filterByTodo } from "../store/todoReducer";

import todoStyles from "../styles/todo.module.css";

export const TodoFilter = () => {
  const dispatch = useDispatch();

  const onChange = (event) => {
    const { value } = event.target;
    dispatch(filterByTodo(value));
  };

  return (
    <select className={todoStyles.select} onChange={onChange}>
      <option value={filters.ALL}>همه</option>
      <option value={filters.DOING}>در حال انجام</option>
      <option value={filters.DONE}>انجام شده</option>
    </select>
  );
};
