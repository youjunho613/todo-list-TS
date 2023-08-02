import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { ITodo } from "model";

const initialState: ITodo[] = [];

const todoList = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodoList: (state: ITodo[], action: PayloadAction<ITodo>): ITodo[] => [
      ...state,
      action.payload,
    ],
    removeTodo: (state: ITodo[], action: PayloadAction<number>): ITodo[] =>
      state.filter((todo: ITodo): boolean => todo.id !== action.payload),

    isDoneTodo: (state: ITodo[], action: PayloadAction<number>): ITodo[] =>
      state.map(
        (todo: ITodo): ITodo =>
          todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      ),

    modifyTodo: (state: ITodo[], action: PayloadAction<ITodo>) =>
      state.map(
        (todo: ITodo): ITodo =>
          todo.id === action.payload.id
            ? {
                ...todo,
                title: action.payload.title,
                content: action.payload.content,
              }
            : todo
      ),
  },
});

export const { addTodoList, removeTodo, isDoneTodo, modifyTodo } =
  todoList.actions;
export default todoList.reducer;
