import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 100px);

  .add-user {
    width: 100%;
    margin-bottom: 1rem;
  }

  .table-actions {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .rs-table-cell-content {
    display: flex;
    align-items: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;
