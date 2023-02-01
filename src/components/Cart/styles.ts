import styled, { css } from "styled-components";

interface CartProps {
  open: boolean;
}

export const Container = styled.div<CartProps>`
  ${({ theme, open }) => css`
    display: flex;
    position: fixed;
    padding: 5px;
    flex-direction: column;
    height: 100%;
    border: 1px solid lightgray;
    left: ${open ? "0" : "-400px"};
    max-width: 95vh;
    z-index: 2000;
    background: ${theme.colors.white};
    transition: all 1s;

    @media (max-width: 600px) {
      width: 100%;
      left: ${open ? "0" : "-850px"};
    }

    @media (max-width: 425px) {
      width: 100%;
      left: ${open ? "0" : "-450px"};
    }
  `}
`;

export const CartHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    height: 30px;
    background: ${theme.colors.white};
    padding-bottom: 5px;

    .cart-header-icon {
      color: black;
      cursor: pointer;
    }
  `}
`;

export const ContainerItens = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    border: 1px solid lightgray;
    position: relative;

    .cart-itens {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      min-width: 190px;
      padding: 5px;

      .cart-info {
        display: flex;
        flex-direction: row;

        .cart-itens-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;

          > span {
            text-transform: uppercase;
            font-size: 15px;
            font-weight: bolder;
            margin-top: 2px;
            color: black;
          }
        }
        .cart-itens-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: flex-end;
          color: black;

          > input {
            width: 30px;
          }
        }
      }
    }

    .cart-quantity {
      display: flex;
      width: 100%;
      > input {
        width: 30px;
      }
    }
  `}
`;
