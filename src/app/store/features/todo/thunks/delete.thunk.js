import { createAsyncThunk } from "@reduxjs/toolkit";

import { STATUSES } from "@/app/constants";
import waitForResponse from "@/app/services/api";

export const deleteTodo = createAsyncThunk("todo/delete", async (id) => {
  const res = await waitForResponse(id);
  return res;
});

export const deleteReducer = (builder) => {
  builder
    .addCase(deleteTodo.pending, (state) => {
      state.actionStatus = STATUSES.LOADING;
    })
    .addCase(deleteTodo.fulfilled, (state, action) => {
      state.actionStatus = STATUSES.SUCCESS;
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
    })
    .addCase(addTodo.rejected, (state) => {
      state.actionStatus = STATUSES.ERROR;
    });
};
