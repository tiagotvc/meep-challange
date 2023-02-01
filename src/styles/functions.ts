import { css } from "styled-components";
import comun from "@/styles/images/rare.jpg";
import legendary from "@/styles/images/legendary.jpg";
import rare from "@/styles/images/bk1.jpg";
import veryRare from "@/styles/images/veryRare.jpg";

export const setBackgroundImage = {
  comum: () => css`
    background: ${`url(${comun.src})`};
  `,
  lendário: () => css`
    background: ${`url(${legendary.src})`};
  `,
  raro: () => css`
    background: ${`url(${rare.src})`};
  `,
  rarissimo: () => css`
    background: ${`url(${veryRare.src})`};
  `,
};

export const setBgColor = {
  comum: () => css`
    background: SeaGreen;
  `,
  lendário: () => css`
    background: goldenrod;
  `,
  raro: () => css`
    background: CornflowerBlue;
  `,
  rarissimo: () => css`
    background: OrangeRed;
  `,
};
export const seFontColor = {
  comum: () => css`
    color: SeaGreen;
  `,
  lendário: () => css`
    color: goldenrod;
  `,
  raro: () => css`
    color: CornflowerBlue;
  `,
  rarissimo: () => css`
    color: OrangeRed;
  `,
};

export const shadowColor = {
  comum: () => {
    return "SeaGreen";
  },
  lendário: () => {
    return "goldenrod";
  },
  raro: () => {
    return "CornflowerBlue";
  },
  rarissimo: () => {
    return "OrangeRed";
  },
};
