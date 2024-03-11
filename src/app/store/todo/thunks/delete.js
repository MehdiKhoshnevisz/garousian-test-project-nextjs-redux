import { createAsyncThunk } from "@reduxjs/toolkit";

import waitForResponse from "@/app/services/api";

export const deleteTodo = createAsyncThunk("todo/delete", async (id) => {
  const res = await waitForResponse(id);
  return res;
});

export const deleteReducer = (builder) => {
  builder
    .addCase(deleteTodo.pending, (state) => {
      state.actionStatus = "loading";
    })
    .addCase(deleteTodo.fulfilled, (state, action) => {
      state.actionStatus = "succeeded";
      state.todoList = state.todoList.filter(
        (todo, index) => todo.id !== action.payload
      );
    });
};
