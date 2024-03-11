import { createAsyncThunk } from "@reduxjs/toolkit";

import { STATUSES } from "@/app/constants";
import waitForResponse from "@/app/services/api";

export const addTodo = createAsyncThunk("todo/add", async (task) => {
  const res = await waitForResponse(task);
  return res;
});

export const addReducer = (builder) => {
  builder
    .addCase(addTodo.pending, (state) => {
      state.addStatus = STATUSES.LOADING;
    })
    .addCase(addTodo.fulfilled, (state, action) => {
      state.addStatus = STATUSES.SUCCESS;
      state.todoList = [...state.todoList, { ...action.payload }];
    })
    .addCase(addTodo.rejected, (state) => {
      state.addStatus = STATUSES.ERROR;
    });
};
