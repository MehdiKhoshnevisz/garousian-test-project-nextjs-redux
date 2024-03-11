import { createAsyncThunk } from "@reduxjs/toolkit";

import { STATUSES } from "@/app/constants";
import waitForResponse from "@/app/services/api";

export const toggleTodo = createAsyncThunk("todo/toggle", async (id) => {
  const res = await waitForResponse(id);
  return res;
});

export const toggleReducer = (builder) => {
  builder
    .addCase(toggleTodo.pending, (state) => {
      state.actionStatus = STATUSES.LOADING;
    })
    .addCase(toggleTodo.fulfilled, (state, action) => {
      state.actionStatus = STATUSES.SUCCESS;
      const todo = state.todoList.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    })
    .addCase(toggleTodo.rejected, (state) => {
      state.actionStatus = STATUSES.ERROR;
    });
};
