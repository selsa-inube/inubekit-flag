import ReactDOM from "react-dom";
import { StyledContainer } from "./styles";
import { Flag } from "../Flag";
import { useFlag } from "../../hooks/useFlag";

const FlagPortal = () => {
  const { flags, removeFlag } = useFlag();

  return ReactDOM.createPortal(
    <StyledContainer>
      {flags.map((msg) => (
        <Flag
          key={msg.id}
          title={msg.title}
          description={msg.description}
          appearance={msg.appearance}
          duration={msg.duration}
          closeFlag={() => removeFlag(msg.id!)}
        />
      ))}
    </StyledContainer>,
    document.body,
  );
};

export { FlagPortal };
