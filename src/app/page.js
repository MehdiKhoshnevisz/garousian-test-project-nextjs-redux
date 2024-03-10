import { TodoAdd } from "./components/TodoAdd";
import { TodoList } from "./components/TodoList";
import { TodoFilter } from "./components/TodoFilter";

import todoStyles from "./styles/todo.module.css";

export default function Home() {
  return (
    <main className={todoStyles.main}>
      <div>
        <h1 className={todoStyles.todoTitle}>ToDo App</h1>
        <TodoAdd />
        <TodoFilter />
        <TodoList />
      </div>
    </main>
  );
}
