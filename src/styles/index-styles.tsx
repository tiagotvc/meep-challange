import { Title } from "@/components/Heading/styles";
import styled, { css } from "styled-components";
import { setBackgroundImage, setBgColor } from "./functions";

interface Props {
  cartButton?: string;
  rarity?: string;
  shadowColor?: string;
}

export const Container = styled.div<Props>`
  ${({ cartButton, theme }) => css`
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;
    min-height: 95vh;
    align-items: center;
    justify-content: center;
    margin: 0 !important;
    padding: 0;

    .page-title {
      display: flex;
      position: absolute;
      top: 10rem !important;
      margin-right: 65rem !important;

      > span {
        font-size: 30px;
        cursor: pointer;
      }

      .icon-back {
        margin-right: 5px !important;
        margin-top: 2px !important;
        cursor: pointer;
      }
    }

    .add-cart {
      display: flex;
      position: relative;
      margin-top: -16rem !important;
      margin-left: -2.8rem !important;

      > button {
        display: flex;
        align-items: center;
        justify-content: center;
        ${setBgColor[cartButton]};
        color: #fff;
        cursor: pointer;
        padding: 12px 20px;
        border-radius: 50%;
        border: none;
        width: 70px;
        height: 70px;

        &:hover {
          border: 1px solid ${theme.colors.orangered};
        }
      }
    }

    @media (max-width: 1024px) {
      .add-cart {
        margin-top: 34rem !important;
        margin-left: -5.8rem !important;
      }
    }
  `}
`;
export const ContainerContent = styled.div<Props>`
  ${({ shadowColor }) => css`
    display: flex;
    width: 1200px;
    min-height: 250px;
    align-items: center;
    box-shadow: 0 0 5px ${shadowColor};

    @media (max-width: 1024px) {
      width: 450px;
      min-height: 600px;
      margin-top: 180px !important;
      border-radius: 18px;
    }

    @media (max-width: 425px) {
      width: 380px;
      margin-left: -1.5rem !important;
    }

    @media (max-width: 375px) {
      width: 350px;
      margin-left: -1.5rem !important;
    }
  `}
`;
export const ContainerImage = styled.div<Props>`
  ${({ rarity, shadowColor }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin-left: -3.5rem !important;
    height: 350px;
    width: 350px;
    border-radius: 50%;
    border: 1px solid lightgray;
    ${setBackgroundImage[rarity]}

    .background_image {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      height: 200px;
      width: 200px;
      border-radius: 50%;
      border: 1px solid lightgray;
      background: white;
    }

    @media (max-width: 1024px) {
      margin-left: 6rem !important;
      margin-top: -33rem !important;
      height: 260px;
      width: 260px;
      box-shadow: 0 0 5px ${shadowColor};

      .background_image {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        height: 180px;
        width: 180px;
        border-radius: 50%;
        border: 1px solid lightgray;
        background: white;
      }
    }

    @media (max-width: 425px) {
      margin-left: 3.5rem !important;
    }
  `}
`;
export const ContainerTitle = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-left: 18rem !important;
    margin-top: -2rem !important;
    text-align: center;

    @media (max-width: 1024px) {
      margin-left: 20rem !important;
    }

    @media (max-width: 425px) {
      margin-left: 16rem !important;
    }

    @media (max-width: 375px) {
      margin-left: 20rem !important;
    }
  `}
`;
export const ContainerDescription = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 140px;
    overflow: auto;
    width: 450px;
    position: relative;
    margin-left: 20rem !important;
    border: 1px solid lightgray;
    border-radius: 18px;
    padding: 15px;

    @media (max-width: 1024px) {
      height: 140px;
      width: 380px;
    }

    @media (max-width: 425px) {
      width: 320px;
      height: 160px;
      text-align: center;

      > h6 {
        font-size: 12px;
      }
    }

    @media (max-width: 375px) {
      width: 290px;
    }
  `}
`;
export const ContainerInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-left: 100px !important;
    text-align: justify;
    overflow-wrap: break-word;
    white-space: normal;

    .info-values {
      margin-left: 15px !important;
    }

    @media (max-width: 1024px) {
      margin-left: -18rem !important;
    }
  `}
`;

export const ContainerForm = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    position: relative;
    margin-left: 100px !important;
    border: 1px solid lightgrey;
    height: 200px;
    width: 200px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    margin-top: 20px !important;

    .form-names {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 10px !important;
      > ${Title} {
        padding-top: 5px;
      }
    }

    .form-values {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      margin-bottom: 10px !important;
      margin-left: 15px !important;

      > ${Title} {
        padding-top: 5px;
      }

      > input {
        width: 50px;
        padding-top: 5px;
        text-align: center;
      }
    }

    @media (max-width: 1024px) {
      margin-left: -18rem !important;
      margin-top: 24rem !important;
      border-radius: 20%;
      height: 150px;
    }
  `}
`;

export const ContainerCatalog = styled.div`
  ${({ theme }) => css`
    position: relative;

    .searchbar {
      width: 100%;
      height: 50px;
      border-radius: 10px;
      border: 1px solid lightgray !important;
      margin-bottom: 50px !important;
    }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: ${theme.spacings.small};
    margin-top: 150px !important;
  `}
`;
