import todoStyles from "../styles/todo.module.css";

export const TodoAdd = () => {
  return (
    <div className={todoStyles.addToDInputWrapper}>
      <input className={todoStyles.input} placeholder="آیتم جدید اضافه کنید" />
      <button className={todoStyles.button}>اضافه کن</button>
    </div>
  );
};
