import styled from "styled-components";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 24px 104px;
  border-bottom: 2px solid black;

  @media (max-width: 768px) {
    padding: 24px;
    gap: 20px;
  }
`;
