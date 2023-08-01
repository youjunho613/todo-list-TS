import { Button, Input, StyleText } from "Components";
import { Link } from "react-router-dom";
import { Params, useNavigate, useParams } from "react-router";
import { styled } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "redux/config/configStore";
import { modifyTodo, removeTodo } from "redux/modules";
import { ITodo } from "model";
import { ChangeEvent, FormEvent, useState } from "react";

export const Detail = () => {
  const params: Readonly<Params<string>> = useParams();
  const navigator = useNavigate();
  const todo: ITodo | undefined = useSelector((state: RootState) =>
    state.todoList.find((todo: ITodo): boolean => todo.id === Number(params.id))
  );

  const dispatch = useDispatch();
  const deleteHandler = (id: number) => {
    dispatch(removeTodo(id));
    navigator("/");
  };

  const initialValue: ITodo = {
    title: "",
    content: "",
    id: todo?.id || 0,
    isDone: todo?.isDone || false,
  };

  const [isModify, setIsModify] = useState(false);
  const [modifyValue, setModifyValue] = useState<ITodo>(initialValue);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void =>
    setModifyValue({ ...modifyValue, [event.target.name]: event.target.value });

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(modifyTodo(modifyValue));
    setModifyValue(initialValue);
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

  return (
    <Layout>
      {isModify ? (
        <StyleBox as="form" onSubmit={onSubmitHandler}>
          <StyleText>ID : {todo?.id}</StyleText>
          <Input
            name={"title"}
            value={modifyValue.title}
            placeholder={todo?.title}
            onChange={onChangeHandler}
          />
          <Input
            name={"content"}
            value={modifyValue.content}
            placeholder={todo?.content}
            onChange={onChangeHandler}
          />
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
    </Layout>
  );
};

const Layout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 50px;

  width: 1200px;
  max-width: 1200px;

  height: 100vh;
  min-width: 800px;

  padding: 30px 40px;
  margin: 0px auto;
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
