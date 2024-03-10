import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const todo = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.todoList = [state.todoList, ...action.payload];
    },
  },
});

export const { setTodos } = todo.actions;
export default todo.reducer;
