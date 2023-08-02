import { StyleText } from "Components/Common";
import { styled } from "styled-components";

export const Header = () => {
  return (
    <StyleHeader>
      <StyleText as="h1">My Todo List</StyleText>
    </StyleHeader>
  );
};

const StyleHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
`;
