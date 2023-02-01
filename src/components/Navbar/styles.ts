import styled, { css } from "styled-components";

interface NavbarProps {
  showSearch: boolean;
}

export const Container = styled.div<NavbarProps>`
  ${({ showSearch, theme }) => css`
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    background: white;
    width: 100%;
    height: 70px;
    border-bottom: 1px solid ${theme.colors.border};

    .cart {
      display: flex;
      position: relative;
      padding: 7px;
    }

    .cart-navbar-icon {
      color: black;
      cursor: pointer;
    }

    > input {
      height: 40px;
      width: 1200px;
      border-radius: 18px;
      border: 1px solid ${theme.colors.border};
      padding: 10px;
      text-align: center;
      display: ${showSearch ? "flex" : "none"};
    }

    .cart-dot {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 20px;
      height: 20px;
      background: ${theme.colors.orangered};
      border-radius: 50%;
      position: absolute;
      margin-left: 20px !important;
      margin-top: -8px !important;
      > span {
        color: ${theme.colors.white};
      }
    }
  `}
`;
