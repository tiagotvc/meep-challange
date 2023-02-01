import { seFontColor } from "@/styles/functions";
import styled, { css, DefaultTheme } from "styled-components";
import { HeadingProps } from ".";

const titleSize = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  big: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xhuge};
    ${mediaFont(theme)};
  `,
};

const mediaFont = (theme: DefaultTheme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.font.sizes.xlarge};
  }
`;

const titleCase = (uppercase: boolean) => css`
  text-transform: ${uppercase ? "uppercase" : "none"};
`;

export const Title = styled.h1<HeadingProps>`
  ${({ theme, titleColor, size, uppercase }) => css`
    color: ${titleColor};
    margin-block-start: 0 !important;
    margin-block-end: 0.2em !important;
    ${titleSize[size](theme)};
    ${titleCase(uppercase)};
    ${seFontColor[titleColor]};
  `}
`;
