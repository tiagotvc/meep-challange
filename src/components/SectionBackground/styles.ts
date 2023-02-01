import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  `}
`;
