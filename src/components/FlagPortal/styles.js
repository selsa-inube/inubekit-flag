import styled from "styled-components";

const StyledContainer = styled.ul`
  position: fixed;
  margin: 0;
  padding: 0;
  right: 64px;
  bottom: 32px;
  @media screen and (max-width: 528px) {
    bottom: 16px;
    right: 32px;
  }
`;

export { StyledContainer };
