import styled from "styled-components";
import { inube } from "@inubekit/foundations";

const StyledFlag = styled.div`
  width: 100%;
  max-width: 400px;
  height: 100%;
  max-height: 78px;
  border-radius: 4px;
  box-shadow:
    0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  overflow-wrap: anywhere;
  background-color: ${({ theme }) =>
    theme?.palette?.neutral?.N0 || inube.palette.neutral.N0};
`;

const StyledCountdownBarContainer = styled.div`
  margin-top: -4px;
  > div {
    border-radius: 4px;
  }
`;

const StyledCloseIconContainer = styled.div`
  & > figure {
    cursor: pointer;
  }
`;

export { StyledFlag, StyledCountdownBarContainer, StyledCloseIconContainer };
