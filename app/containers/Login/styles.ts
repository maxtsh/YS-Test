import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 1rem;
`;

export const Card = styled.div`
  width: 600px;
  height: 400px;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;

  .card-header {
    display: flex;
    flex-direction: column;
    justify-content: center;

    &-title {
      text-align: center;
      font-size: 200%;
      font-weight: 700;
    }
  }

  .card-body {
    display: flex;
    flex-direction: column;

    &-inputgroup {
      margin-top: 1rem;
    }
  }

  .card-footer {
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;

    &-iconbutton {
      padding: 0 !important;

      &-button {
      }
    }
  }
`;
