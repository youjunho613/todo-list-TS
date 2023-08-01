import { styled } from "styled-components";

export const StyleUl = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;
  gap: 20px;

  width: 100%;
  min-height: 220px;
`;

export const StyleLi = styled.li`
  position: relative;

  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 20px;

  width: 300px;
  min-height: 150px;

  padding: 20px 20px 80px 20px;
  margin: 10px;

  box-shadow: 1px 4px 0 rgb(0, 0, 0, 0.5);

  border: 3px solid;
  border-radius: 20px;

  font-size: 1.1rem;
`;

export const ButtonBox = styled.div`
  position: absolute;
  left: 50%;
  bottom: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;

  width: 100%;

  transform: translateX(-50%);
`;
