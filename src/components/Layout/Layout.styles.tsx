import styled, { css } from "styled-components";

export const Content = styled("div")(
  () => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    > main {
      right: 500px;
    }
  `
);
