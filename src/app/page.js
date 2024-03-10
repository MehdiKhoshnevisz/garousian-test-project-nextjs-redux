"use client";

import { useSelector } from "react-redux";

import { TodoAdd } from "./components/TodoAdd";
import { TodoTask } from "./components/TodoTask";
import { TodoFilter } from "./components/TodoFilter";
import { TodoTaskWrapper } from "./components/TodoTaskWrapper";

import todoStyles from "./styles/todo.module.css";

export default function Home() {
  const { todoList } = useSelector((state) => state.todo);

  return (
    <main className={todoStyles.main}>
      <div>
        <h1 className={todoStyles.todoTitle}>ToDo App</h1>
        <TodoAdd />
        <TodoFilter />
        <TodoTaskWrapper>
          {todoList.map((todo, index) => (
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
