"use client";

import { filters } from "./constants";
import useTodo from "./hooks/useTodo";

import { TodoAdd } from "./components/TodoAdd";
import { TodoTask } from "./components/TodoTask";
import { TodoFilter } from "./components/TodoFilter";
import { TodoTaskWrapper } from "./components/TodoTaskWrapper";

import todoStyles from "./styles/todo.module.css";

export default function Home() {
  const {
    state: { todoList, filterBy },
  } = useTodo();

  const filteredTodos = todoList.filter((todo) => {
    switch (filterBy) {
      case filters.ALL:
        return true;
      case filters.DOING:
        return !todo.completed;
      case filters.DONE:
        return todo.completed;
      default:
        return true;
    }
  });

  return (
    <main className={todoStyles.main}>
      <div>
        <h1 className={todoStyles.todoTitle}>ToDo App</h1>
        <TodoAdd />
        <TodoFilter />
        <TodoTaskWrapper>
          {filteredTodos.map((todo, index) => (
            <TodoTask
              key={index}
              label={todo.label}
              id={index}
              completed={todo.completed}
            />
          ))}
        </TodoTaskWrapper>
      </div>
    </main>
  );
}
