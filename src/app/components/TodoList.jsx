"use client";

import { useState } from "react";

import useTodo from "../hooks/useTodo";
import { FILTERS, STATUSES } from "../constants";

import { TodoTask } from "./TodoTask";
import { TodoTaskWrapper } from "./TodoTaskWrapper";

export const TodoList = () => {
  const {
    dispatch,
    state: { todoList, actionStatus, filterBy },
    reducers: { toggleTodo, deleteTodo },
  } = useTodo();

  const [selected, setSelected] = useState();

  const filteredTodos = todoList.filter((todo) => {
    switch (filterBy) {
      case FILTERS.ALL:
        return true;
      case FILTERS.DOING:
        return !todo.completed;
      case FILTERS.DONE:
        return todo.completed;
      default:
        return true;
    }
  });

  const onDelete = (id) => {
    setSelected(id);
    dispatch(deleteTodo(id));
  };

  const onToggle = (id) => {
    setSelected(id);
    dispatch(toggleTodo(id));
  };

  return (
    <TodoTaskWrapper>
      {filteredTodos.map((todo, index) => (
        <TodoTask
          key={index}
          id={todo.id}
          label={todo.label}
          completed={todo.completed}
          onDelete={() => onDelete(todo.id)}
          onToggle={() => onToggle(todo.id)}
          isLoading={todo.id === selected && actionStatus === STATUSES.LOADING}
        />
      ))}
    </TodoTaskWrapper>
  );
};
