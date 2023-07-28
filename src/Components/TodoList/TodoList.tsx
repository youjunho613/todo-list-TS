import { Button, Text } from "Style";
import { StyleLi, StyleUl, ButtonBox } from "./TodoList.style";
import { ITodo } from "model";

interface OwnProps {
  todoList: ITodo[];
  setTodoList: React.Dispatch<React.SetStateAction<ITodo[]>>;
  status: boolean;
}

export const TodoList = ({ todoList, setTodoList, status }: OwnProps) => {
  const deleteHandler = (id: number) =>
    setTodoList(todoList.filter(todo => todo.id !== id));

  const modifyHandler = (id: number) => {
    const editData = todoList.map(todo => {
      return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo;
    });
    setTodoList([...editData]);
  };

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
