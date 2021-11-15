import styled from "styled-components";
import Sidebar from "rsuite/Sidebar";

export const StyledSidebar = styled(Sidebar)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 4px rgb(0 0 0 / 12%), 0 0 10px rgb(0 0 0 / 6%);
  height: 100%;
`;

export const HeadTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 18px;
  font-size: 16px;
  height: 60px;
  background: #272c36;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
`;

export const Content = styled.div`
  padding: 1rem;
`;
