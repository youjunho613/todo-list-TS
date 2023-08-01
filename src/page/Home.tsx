import { Form, Header, TodoList } from "Components";
import { styled } from "styled-components";

export const Home = () => {
  return (
    <Layout>
      <Header />
      <Form />
      <main>
        <TodoList status={false} />
        <TodoList status={true} />
      </main>
    </Layout>
  );
};

const Layout = styled.div`
  width: 1200px;
  height: 100vh;
  margin: auto;
`;
