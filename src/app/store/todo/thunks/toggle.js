import { createAsyncThunk } from "@reduxjs/toolkit";

import waitForResponse from "@/app/services/api";

export const toggleTodo = createAsyncThunk("todo/toggle", async (id) => {
  const res = await waitForResponse(id);
  return res;
});

export const toggleReducer = (builder) => {
  builder
    .addCase(toggleTodo.pending, (state) => {
      state.actionStatus = "loading";
    })
    .addCase(toggleTodo.fulfilled, (state, action) => {
      state.actionStatus = "succeeded";
      const todo = state.todoList.find(
        (todo, index) => todo.id === action.payload
      );
      if (todo) {
        todo.completed = !todo.completed;
      }
    });
};
