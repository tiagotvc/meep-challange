import { setBackgroundImage, setBgColor } from "@/styles/functions";
import styled, { css } from "styled-components";

interface ContainerImageProps {
  rarity: string;
}

export const Container = styled.div`
  ${() => css`
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 180px 1fr auto;
    border-radius: 18px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    &:hover ${ContainerButton} {
      opacity: 1;
    }
  `}
`;
export const ContainerImage = styled.div<ContainerImageProps>`
  ${({ rarity }) => css`
    position: relative;
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    ${setBackgroundImage[rarity]}
  `}
`;
export const ImageBackground = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${theme.colors.white};
    border-radius: 50%;
    width: 140px;
    height: 140px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  `}
`;
export const CardBodyContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    padding: 20px 28px;

    .power {
      font-weight: bolder;
    }

    > h2 {
      font-size: 1.8em;
      margin: 4px auto 12px;
    }

    > p {
      color: ${theme.colors.mediumGray};
      font-size: 1.1em;
      line-height: 20px;
      text-align: center;
    }
  `}
`;
export const CardFooterContainer = styled.div<ContainerImageProps>`
  ${({ rarity, theme }) => css`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    border-bottom-left-radius: 18px;
    border-bottom-right-radius: 18px;
    ${setBgColor[rarity]};

    .info {
      font-size: 0.9em;
      padding: 10px;
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-right: 1px solid ${theme.colors.white};
    }
    .info:last-child {
      border: none;
    }

    .info .type {
      text-transform: uppercase;
      margin-top: 2px;
      font-size: 0.8em;
      font-weight: bold;
    }
  `}
`;
export const ContainerButton = styled.div<ContainerImageProps>`
  ${({ rarity, theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.default};
    border-radius: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.5s;

    > button {
      ${setBgColor[rarity]};
      color: #fff;
      outline: none;
      border: 2px solid ${theme.colors.border};
      cursor: pointer;
      padding: 12px 20px;
      transform: translateY(60px);
      border-radius: 50px;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 0.8em;
      font-weight: bolder;
      transition: opacity 0.3s;

      > a {
        text-decoration: none;
        color: ${theme.colors.white};
      }
    }

    > button:hover {
      opacity: 0.8;
    }
  `}
`;
