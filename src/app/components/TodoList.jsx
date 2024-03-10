"use client";

import useTodo from "../hooks/useTodo";
import { filters } from "../constants";

import { TodoTask } from "./TodoTask";
import { TodoTaskWrapper } from "./TodoTaskWrapper";

export const TodoList = () => {
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
  );
};
