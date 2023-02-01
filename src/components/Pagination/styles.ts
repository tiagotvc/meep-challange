import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: 10px;
    position: fixed;
    justify-content: center;
    margin-top: 67px !important;
    background: white;
    z-index: 1000;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

    .mobile-pagination {
      display: none;
    }

    .normal-pagination {
      display: flex;
    }

    .page-item {
      display: flex;
      width: 26px;
      height: 26px;
      margin-left: 8px !important;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 5px;
      border-radius: 5px;
      cursor: pointer;
      box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    }

    @media (max-width: 1633px) {
      .page-item {
        display: flex;
        width: 24px;
        height: 24px;
        margin-left: 5px !important;
      }
    }

    @media (max-width: 1440px) {
      .page-item {
        display: flex;
        width: 24px;
        height: 24px;
        margin-left: 5px !important;
      }
    }

    @media (max-width: 1367px) {
      .page-item {
        display: flex;
        width: 22px;
        height: 22px;
        margin-left: 3px !important;
      }
    }

    @media (max-width: 1229px) {
      .normal-pagination {
        display: none;
      }

      .mobile-pagination {
        display: flex;
        justify-content: space-around;
        align-items: center;
        > button {
          margin-left: 10px !important;
          width: 90px;
          height: 30px;
          border-radius: 18px;
          border: 1px solid lightgray;
          color: white;
          background: orangered;

          &:hover {
            background: CornflowerBlue;
          }
        }

        > span {
          margin-left: 10px !important;
        }
      }
    }
  `}
`;
