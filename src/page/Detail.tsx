import { Button, Header, Input, StyleText } from "Components";
import { useInputForm } from "hooks/useForm";
import type { ITodo } from "model";
import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Params, useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { RootState } from "redux/config/configStore";
import { modifyTodo, removeTodo } from "redux/modules";
import { styled } from "styled-components";

export const Detail = () => {
  const params: Readonly<Params<string>> = useParams();
  const navigator = useNavigate();
  const todo = useSelector((state: RootState) =>
    state.todoList.find((todo: ITodo): boolean => todo.id === Number(params.id))
  );

  const dispatch = useDispatch();
  const [isModify, setIsModify] = useState(false);

  const initialValue: Pick<ITodo, "title" | "content"> = {
    title: todo?.title || "",
    content: todo?.content || "",
  };

  const { inputValue, setInputValue, register } = useInputForm(initialValue);

  const deleteHandler = (id: number) => {
    dispatch(removeTodo(id));
    navigator("/");
  };

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(
      modifyTodo({
        ...inputValue,
        id: todo?.id as number,
        isDone: todo?.isDone as boolean,
      })
    );
    setInputValue(initialValue);
    setIsModify(false);
  };

  const buttons = (
    <ButtonBox>
      <Button type="button" onClick={() => deleteHandler(Number(todo?.id))}>
        삭제
      </Button>
      {isModify ? (
        <Button>완료</Button>
      ) : (
        <Button type="button" onClick={() => setIsModify(true)}>
          수정
        </Button>
      )}
      <Link to="/">
        <Button type="button">이전으로</Button>
      </Link>
    </ButtonBox>
  );

  if (!todo) {
    return (
      <Layout>
        <Header />
        <DetailBox>
          <StyleBox>
            {/* FIXME 왜 fontAlign && textAlign 만 경고를 띄우는지? */}
            <StyleText fontAlign="center" fontSize={40} color="red">
              Todo가 없습니다
            </StyleText>
            <ButtonBox>
              <Link to="/">
                <Button type="button">이전으로</Button>
              </Link>
            </ButtonBox>
          </StyleBox>
        </DetailBox>
      </Layout>
    );
  }

  return (
    <Layout>
      <Header />
      <DetailBox>
        {isModify ? (
          <StyleBox as="form" onSubmit={onSubmitHandler}>
            <StyleText>ID : {todo?.id}</StyleText>
            <Input {...register("title")} />
            <Input {...register("content")} />
            {buttons}
          </StyleBox>
        ) : (
          <StyleBox>
            <StyleText>ID : {todo?.id}</StyleText>
            <StyleText as="h2">{todo?.title}</StyleText>
            <StyleText>{todo?.content}</StyleText>
            {buttons}
          </StyleBox>
        )}
      </DetailBox>
    </Layout>
  );
};

const Layout = styled.div`
  width: 1200px;
  height: 100vh;
  margin: auto;
`;

const DetailBox = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const StyleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  gap: 20px;

  width: 700px;
  min-height: 400px;

  padding: 20px 20px 60px 20px;
  margin: 10px;

  box-shadow: 1px 4px 0 rgb(0, 0, 0, 0.5);

  border: 3px solid;
  border-radius: 20px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 50px;
`;
