import { Button, Input, Text } from "Style";
import { ITodo } from "model";
import { ChangeEvent, FormEvent, useState } from "react";
import { StyleForm } from "./Form.style";
import { useDispatch, useSelector } from "react-redux";
import { addTodoList } from "redux/modules";
import { RootState } from "redux/config/configStore";

const initialValue: ITodo = { title: "", content: "", id: 1, isDone: false };

export const Form = () => {
  const [value, setValue] = useState<ITodo>(initialValue);
  const todoList = useSelector((state: RootState) => state.todoList.todoList);
  const dispatch = useDispatch();

  const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const length = todoList.length;
    const todoId: number = length > 0 ? todoList[length - 1].id + 1 : 1;
    dispatch(addTodoList({ ...value, id: todoId }));
    setValue(initialValue);
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>): void =>
    setValue({ ...value, [event.target.name]: event.target.value });

  return (
    <StyleForm onSubmit={onSubmit}>
      <Text as="label" htmlFor="title"></Text>
      <Input
        id={"title"}
        name={"title"}
        value={value.title}
        onChange={onChange}
      />
      <Text as="label" htmlFor="content"></Text>
      <Input
        id={"content"}
        name={"content"}
        value={value.content}
        onChange={onChange}
      />
      <Button>작성하기</Button>
    </StyleForm>
  );
};
