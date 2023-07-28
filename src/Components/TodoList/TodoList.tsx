import { Button, Text } from "Style";
import { StyleLi, StyleUl, ButtonBox } from "./TodoList.style";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/config/configStore";
import { modifyTodo, removeTodo } from "redux/modules";

interface OwnProps {
  status: boolean;
}

export const TodoList = ({ status }: OwnProps) => {
  const todoList = useSelector((state: RootState) => state.todoList.todoList);
  console.log("todoList :", todoList);
  const dispatch = useDispatch();

  const deleteHandler = (id: number) => dispatch(removeTodo(id));

  const modifyHandler = (id: number) => dispatch(modifyTodo(id));

  return (
    <>
      {status ? <Text>Done..</Text> : <Text>Ing..</Text>}
      <StyleUl>
        {todoList
          .filter(todo => todo.isDone === status)
          .map(todo => {
            return (
              <StyleLi key={todo.id}>
                <Text>{todo.title}</Text>
                <Text>{todo.content}</Text>
                <ButtonBox>
                  <Button onClick={() => deleteHandler(todo.id)}>삭제</Button>
                  <Button onClick={() => modifyHandler(todo.id)}>완료</Button>
                </ButtonBox>
              </StyleLi>
            );
          })}
      </StyleUl>
    </>
  );
};
