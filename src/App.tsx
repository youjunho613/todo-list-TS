import { styled } from "styled-components";
import { Text } from "Style";
import { Form, TodoList } from "Components";

export const App = () => {
  return (
    <Layout>
      <Text as="h1">My Todo List</Text>
      <Form />
      <Main>
        <TodoList status={false} />
        <TodoList status={true} />
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
