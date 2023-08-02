import { css, styled } from "styled-components";

interface TextStyleProps {
  color?: string;
  fontSize?: number;
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  fontAlign?: "left" | "center" | "right";
}

export const StyleText = styled.p.attrs<TextStyleProps>(props => ({
  as: props.as || "p",
}))`
  ${props => css`
    font-weight: 500;

    color: ${props.color
      ? props.theme.colors[props.color]
      : props.theme.colors.black};

    text-align: ${props.fontAlign};

    ${props.as === "p" &&
    css`
      font-size: ${props.fontSize ? props.fontSize : 16}px;
      font-weight: ${props.fontWeight ? props.fontWeight : 500};
    `}
    ${props.as === "h1" &&
    css`
      font-size: ${props.fontSize ? props.fontSize : 40}px;
      font-weight: 600;
    `}
      ${props.as === "h2" &&
    css`
      font-size: ${props.fontSize ? props.fontSize : 30}px;
      font-weight: 600;
    `}
      ${props.as === "span" && css``}
      ${props.as === "label" &&
    css`
      font-size: ${props.fontSize ? props.fontSize : 25}px;
      font-weight: 600;
    `};
  `}
`;
