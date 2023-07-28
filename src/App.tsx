import { useState } from "react";
import { styled } from "styled-components";
import { Text } from "Style";
import { Form } from "Components";
import { ITodo } from "model";
import { TodoList } from "Components";

export const App = () => {
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  return (
    <Layout>
      <Text as="h1">My Todo List</Text>
      <Form todoList={todoList} setTodoList={setTodoList} />
      <Main>
        <TodoList
          todoList={todoList}
          setTodoList={setTodoList}
          status={false}
        />
        <TodoList todoList={todoList} setTodoList={setTodoList} status={true} />
      </Main>
    </Layout>
  );
};

const Layout = styled.div`
  width: 1200px;
  height: 100vh;
  margin: auto;
`;

const Main = styled.main``;
