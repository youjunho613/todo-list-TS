import { configureStore } from "@reduxjs/toolkit";
import todoList from "../modules/todoListSlice";

const store = configureStore({
  reducer: { todoList },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
