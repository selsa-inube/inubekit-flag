import ReactDOM from "react-dom";
import { StyledContainer } from "./styles";
import { Flag } from "../Flag";
import { useFlag } from "../../hooks/useFlag";

const FlagPortal = () => {
  const { flags } = useFlag();

  return ReactDOM.createPortal(
    <StyledContainer>
      {flags.map((flag) => (
        <Flag
          key={flag.id}
          id={flag.id}
          title={flag.title}
          description={flag.description}
          appearance={flag.appearance}
          duration={flag.duration}
        />
      ))}
    </StyledContainer>,
    document.body,
  );
};

export { FlagPortal };
