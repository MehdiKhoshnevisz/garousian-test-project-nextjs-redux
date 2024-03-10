import { filters } from "../constants";
import useTodo from "../hooks/useTodo";

import todoStyles from "../styles/todo.module.css";

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
      <option value={filters.ALL}>همه</option>
      <option value={filters.DOING}>در حال انجام</option>
      <option value={filters.DONE}>انجام شده</option>
    </select>
  );
};
