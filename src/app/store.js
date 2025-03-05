import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "../features/todo/todoSlice";
import stashReducer from "../features/stashSlice";

export const store = configureStore({
  reducer: { todo: todoReducer, stash: stashReducer },
});
