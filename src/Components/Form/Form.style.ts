import { styled } from "styled-components";

export const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const ColumnBox = styled(FlexBox)`
  flex-direction: column;
  gap: 20px;
`;

export const StyleForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  margin: 40px;
`;
