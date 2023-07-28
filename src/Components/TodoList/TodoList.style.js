import { styled } from "styled-components";

export const StyleUl = styled.ul`
  display: flex;
  gap: 20px;

  width: 100%;
  min-height: 220px;
`;

export const StyleLi = styled.li`
  display: flex;
  flex-direction: column;

  min-width: 300px;

  padding: 20px;

  background-color: var(--color-gray0);

  border: 3px solid;
  border-radius: 20px;

  font-size: 1.1rem;

  list-style: none;
`;
export const ButtonBox = styled.div`
  display: inherit;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
