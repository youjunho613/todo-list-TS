import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITodo } from "model";

interface IRedux {
  todoList: ITodo[];
}

const initialState: IRedux = { todoList: [] };

const todoList = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodoList: (state: IRedux, action: PayloadAction<ITodo>): IRedux => ({
      ...state,
      todoList: [...state.todoList, action.payload],
    }),
    removeTodo: (state: IRedux, action: PayloadAction<number>): IRedux => ({
      ...state,
      todoList: state.todoList.filter(
        (todo: ITodo): boolean => todo.id !== action.payload
      ),
    }),
    modifyTodo: (state: IRedux, action: PayloadAction<number>): IRedux => ({
      ...state,
      todoList: state.todoList.map(
        (todo: ITodo): ITodo =>
          todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      ),
    }),
  },
});

export const { addTodoList, removeTodo, modifyTodo } = todoList.actions;
export default todoList.reducer;
