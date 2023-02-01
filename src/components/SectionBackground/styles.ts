import styled, { css, DefaultTheme } from "styled-components";

type Background = {
  background?: boolean;
};

const containerBackgroundActivate = (theme: DefaultTheme) => css`
  background: ${theme.colors.primaryColor};
  color: ${theme.colors.white};
`;

export const Container = styled.div<Background>`
  ${({ theme, background }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    ${background && containerBackgroundActivate(theme)};
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  `}
`;
