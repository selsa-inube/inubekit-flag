import styled from "styled-components";

const StyledContainer = styled.div`
  position: fixed;
  bottom: 32px;
  right: 64px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 400px;
  @media (max-width: 400px) {
    bottom: 24px;
    right: -24px;
  }
`;

export { StyledContainer };
