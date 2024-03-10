import { TodoAdd } from "./components/TodoAdd";
import { TodoTask } from "./components/TodoTask";
import { TodoFilter } from "./components/TodoFilter";
import { TodoTaskWrapper } from "./components/TodoTaskWrapper";

import todoStyles from "./styles/todo.module.css";

export default function Home() {
  return (
    <main className={todoStyles.main}>
      <div>
        <h1 className={todoStyles.todoTitle}>ToDo App</h1>
        <TodoAdd />
        <TodoFilter />
        <TodoTaskWrapper>
          <TodoTask label="اولین تسک" id="task-1" />
          <TodoTask label="دومین تسک" id="task-2" />
          <TodoTask label="سومین تسک" id="task-3" checked />
        </TodoTaskWrapper>
      </div>
    </main>
  );
}
