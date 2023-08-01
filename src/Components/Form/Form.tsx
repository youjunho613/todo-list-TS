import { ITodo } from "model";
import { ChangeEvent, FormEvent, useState } from "react";
import { ColumnBox, FlexBox, StyleForm } from "./Form.style";
import { useDispatch, useSelector } from "react-redux";
import { addTodoList } from "redux/modules";
import { RootState } from "redux/config/configStore";
import { Button, Input, StyleText } from "Components";
// import { useForm } from "hooks/useForm";

const initialValue: ITodo = { title: "", content: "", id: 1, isDone: false };
// 150자 유효성 검사
export const Form = () => {
  const [value, setValue] = useState<ITodo>(initialValue);
  const todoList = useSelector((state: RootState) => state.todoList);
  const dispatch = useDispatch();

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const length = todoList.length;
    const todoId: number = length > 0 ? todoList[length - 1].id + 1 : 1;
    dispatch(addTodoList({ ...value, id: todoId }));
    setValue(initialValue);
  };
  // const { register } = useForm<ITodo>(initialValue);
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void =>
    setValue({ ...value, [event.target.name]: event.target.value });

  return (
    <StyleForm onSubmit={onSubmitHandler}>
      <ColumnBox>
        <FlexBox>
          <StyleText as="label" htmlFor="title">
            제목
          </StyleText>
          <Input
            id={"title"}
            name={"title"}
            value={value.title}
            onChange={onChangeHandler}
          />
        </FlexBox>
        <FlexBox>
          <StyleText as="label" htmlFor="content">
            내용
          </StyleText>
          <Input
            id={"content"}
            name={"content"}
            value={value.content}
            onChange={onChangeHandler}
          />
        </FlexBox>
      </ColumnBox>
      <Button>작성하기</Button>
    </StyleForm>
  );
};
