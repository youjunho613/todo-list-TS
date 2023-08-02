import { Button, StyleText } from "Components";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "redux/config/configStore";
import { isDoneTodo } from "redux/modules";
import { ButtonBox, StyleLi, StyleUl } from "./TodoList.style";

interface IProps {
  status: boolean;
}

export const TodoList = ({ status }: IProps) => {
  const todoList = useSelector((state: RootState) => state.todoList);

  const dispatch = useDispatch();
  const isDoneHandler = (id: number) => dispatch(isDoneTodo(id));

  return (
    <>
      {status ? (
        <StyleText as="h2">Done..</StyleText>
      ) : (
        <StyleText as="h2">Ing..</StyleText>
      )}
      <StyleUl>
        {todoList
          .filter(todo => todo.isDone === status)
          .map(todo => {
            return (
              <StyleLi key={todo.id}>
                <StyleText fontSize={26}>{todo.title}</StyleText>
                <StyleText>{todo.content}</StyleText>
                <ButtonBox>
                  <Link to={`/detail/${todo.id}`}>
                    <Button>상세보기</Button>
                  </Link>
                  <Button onClick={() => isDoneHandler(Number(todo?.id))}>
                    완료
                  </Button>
                </ButtonBox>
              </StyleLi>
            );
          })}
      </StyleUl>
    </>
  );
};
