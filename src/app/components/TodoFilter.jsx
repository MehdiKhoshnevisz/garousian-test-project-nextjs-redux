import todoStyles from "../styles/todo.module.css";

export const TodoFilter = () => {
  return (
    <select className={todoStyles.select}>
      <option value="all">همه</option>
      <option value="doing">در حال انجام</option>
      <option value="done">انجام شده</option>
    </select>
  );
};
