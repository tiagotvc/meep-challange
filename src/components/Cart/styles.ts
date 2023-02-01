import { shadowColor } from "@/styles/functions";
import styled, { css } from "styled-components";

interface CartProps {
  open?: boolean;
  rarity?: string;
}

export const Container = styled.div<CartProps>`
  ${({ theme, open }) => css`
    display: flex;
    position: fixed;
    padding: 5px;
    flex-direction: column;
    height: 100%;
    border: 1px solid ${theme.colors.border};
    left: ${open ? "0" : "-400px"};
    width: 250px;
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
    height: 40px;
    background: ${theme.colors.white};
    padding-bottom: 5px;
    border: 1px solid ${theme.colors.border};
    margin-bottom: 4px !important;

    > span {
      font-size: 20px;
      margin-left: 70px !important;
    }

    .cart-header-icon {
      color: ${theme.colors.black};
      cursor: pointer;
      margin-left: 70px !important;
    }
  `}
`;

export const ContainerItens = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    border: 1px solid ${theme.colors.border};
    position: relative;
    overflow: auto;
    height: 100%;
    flex: 1;
    max-height: 86.5%;

    ::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.orangered};
    }

    &::-webkit-scrollbar {
      width: 3px;
    }
  `}
`;
export const CartFooter = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 240px;
    height: 80px;
    border: 1px solid ${theme.colors.border};
    position: relative;
    position: fixed;
    bottom: 0;
    z-index: 2000;
    background: ${theme.colors.white};

    .subtotal {
      display: flex;
      flex-direction: row;
      width: 240px;
      justify-content: space-between;
      padding: 5px;
      border-bottom: 1px solid ${theme.colors.border};
    }

    > button {
      color: ${theme.colors.white};
      background: ${theme.colors.red};
      border: none;
      width: 180px;
      height: 35px;
      border-radius: 5px;
      cursor: pointer;
      border: 1px solid ${theme.colors.border};
      margin-top: 10px !important;
      &:hover {
        border: 1px solid ${theme.colors.black};
      }
    }

    @media (max-width: 600px) {
      width: 100%;
    }

    @media (max-width: 425px) {
      width: 100%;
    }
  `}
`;

export const ContainerCards = styled.div<CartProps>`
  ${({ rarity }) => css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      min-width: 190px;
      padding: 5px;
      background: ${shadowColor[rarity]};
      margin-top: 2px!important;

      > button {
        color: white;
        background: red;
        border: none;
        width: 100px;
        height: 25px;
        border-radius: 5px;
        cursor: pointer;
        border: 1px solid lightgray;

        &:hover {
          border: 1px solid black;
        }
       }
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
            color: white;
          }
        }
        .cart-itens-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: flex-end;
          color: white;

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
    
  `}
`;

export const EmptyCartCard = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 190px;
    min-height: 180px;
    padding: 5px;
    margin-top: 2px !important;
    background: white;

    > span {
      color: lightgray;
    }
  `}
`;
