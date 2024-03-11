import { createAsyncThunk } from "@reduxjs/toolkit";

import waitForResponse from "@/app/services/api";

export const addTodo = createAsyncThunk("todo/add", async (task) => {
  const res = await waitForResponse(task);
  return res;
});

export const addReducer = (builder) => {
  builder
    .addCase(addTodo.pending, (state) => {
      state.addStatus = "loading";
    })
    .addCase(addTodo.fulfilled, (state, action) => {
      state.addStatus = "succeeded";
      state.todoList = [...state.todoList, { ...action.payload }];
    });
};
