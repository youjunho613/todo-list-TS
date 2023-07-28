import { Button, Input, Text } from "Style";
import { ITodo } from "model";
import { ChangeEvent, FormEvent, useState } from "react";
import { StyleForm } from "./Form.style";

const initialValue: ITodo = { title: "", content: "", id: 1, isDone: false };

interface OwnProps {
  todoList: ITodo[];
  setTodoList: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

export const Form = ({ todoList, setTodoList }: OwnProps) => {
  const [value, setValue] = useState<ITodo>(initialValue);

  const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const todoId =
      todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 1;
    setTodoList([...todoList, { ...value, id: todoId }]);
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
