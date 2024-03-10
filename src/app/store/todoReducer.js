import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [
    {
      label: "تسک اول",
      completed: false,
    },
    {
      label: "تسک دوم",
      completed: false,
    },
    {
      label: "تسک سوم",
      completed: true,
    },
  ],
};

const todo = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoList = [...state.todoList, { ...action.payload }];
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (todo, index) => index !== action.payload
      );
    },
    toggleTodo: (state, action) => {
      const todo = state.todoList.find(
        (todo, index) => index === action.payload
      );
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todo.actions;
export default todo.reducer;
