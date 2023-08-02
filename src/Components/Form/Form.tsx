import { Button, Input, StyleText } from "Components";
import { useInputForm } from "hooks/useForm";
import type { ITodo } from "model";
import { FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/config/configStore";
import { addTodoList } from "redux/modules";
import { ColumnBox, FlexBox, StyleForm } from "./Form.style";

const initialValue: Pick<ITodo, "title" | "content"> = {
  title: "",
  content: "",
};

export const Form = () => {
  const todoList = useSelector((state: RootState) => state.todoList);
  const dispatch = useDispatch();

  const { inputValue, setInputValue, register } = useInputForm(initialValue);

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const todoId =
      todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 1;
    dispatch(addTodoList({ ...inputValue, id: todoId, isDone: false }));
    setInputValue(initialValue);
  };

  return (
    <StyleForm onSubmit={onSubmitHandler}>
      <ColumnBox>
        <FlexBox>
          <StyleText as="label" htmlFor="title">
            제목
          </StyleText>
          <Input id={"title"} {...register("title")} required minLength={2} />
        </FlexBox>
        <FlexBox>
          <StyleText as="label" htmlFor="content">
            내용
          </StyleText>
          <Input id={"content"} {...register("content")} maxLength={150} />
        </FlexBox>
      </ColumnBox>
      <Button>작성하기</Button>
    </StyleForm>
  );
};
