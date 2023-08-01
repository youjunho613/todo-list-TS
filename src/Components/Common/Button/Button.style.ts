import { styled } from "styled-components";

export const StyleButton = styled.button`
  padding: 7px;

  background-color: #0d6efd;
  box-shadow: 1px 4px 0 rgb(0, 0, 0, 0.5);

  border: none;
  border-radius: 5px;

  color: #ffffff;
  font-size: 16px;
  letter-spacing: 1.2px;

  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    box-shadow: 1px 1px 0 rgb(0, 0, 0, 0.5);
    position: relative;
    top: 2px;
  }
`;
