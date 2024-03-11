import { createSlice } from "@reduxjs/toolkit";

import { addReducer } from "./thunks/add";
import { deleteReducer } from "./thunks/delete";
import { toggleReducer } from "./thunks/toggle";

import { filters } from "../../constants";

const initialState = {
  addStatus: "",
  actionStatus: "",
  filterBy: filters.ALL,
  todoList: [
    {
      id: +new Date() + 1,
      label: "تسک اول",
      completed: false,
    },
    {
      id: +new Date() + 2,
      label: "تسک دوم",
      completed: false,
    },
    {
      id: +new Date() + 3,
      label: "تسک سوم",
      completed: true,
    },
  ],
};

const todo = createSlice({
  name: "todo",
  initialState,
  reducers: {
    filterByTodo: (state, action) => {
      state.filterBy = action.payload;
    },
  },
  extraReducers: (builder) => {
    addReducer(builder);
    deleteReducer(builder);
    toggleReducer(builder);
  },
});

export const { filterByTodo } = todo.actions;

export default todo.reducer;
