import { useState, useContext } from "react";
import {
  MdClear,
  MdOutlineChat,
  MdCheckCircleOutline,
  MdOutlineWarningAmber,
  MdErrorOutline,
} from "react-icons/md";

import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { CountdownBar } from "@inubekit/countdownbar";
import { Icon } from "@inubekit/icon";

import { IFlagAppearance } from "./props";
import {
  StyledFlag,
  StyledCountdownBarContainer,
  StyledCloseIconContainer,
} from "./styles";
import { FlagContext, FlagContextType } from "../../providers/FlagsProvider";

interface IFlag {
  id: string;
  title: string;
  description: string;
  appearance: IFlagAppearance;
  duration: number;
}

const iconMap: Record<IFlagAppearance, JSX.Element> = {
  primary: <MdOutlineChat />,
  gray: <MdOutlineChat />,
  dark: <MdOutlineChat />,
  success: <MdCheckCircleOutline />,
  warning: <MdOutlineWarningAmber />,
  danger: <MdErrorOutline />,
  help: <MdErrorOutline />,
};

const getIconForAppearance = (appearance: IFlagAppearance): JSX.Element => {
  return iconMap[appearance];
};

const Flag = (props: IFlag) => {
  const { id, title, description, appearance, duration } = props;
  const [isPaused, setIsPaused] = useState(false);
  const { removeFlag } = useContext(FlagContext) as FlagContextType;

  const newDescription = description.substring(0, 240);

  const selectedIcon = getIconForAppearance(appearance);

  const handleRemoveFlag = () => {
    removeFlag(id);
  };

  return (
    <StyledFlag
      $appearance={appearance}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Stack justifyContent="space-between" padding="16px">
        <Stack alignItems="center" gap="16px">
          <Icon size="24px" appearance={appearance} icon={selectedIcon} />
          <Stack direction="column" gap="6px">
            <Text type="label" size="large" textAlign="start" weight="bold">
              {title}
            </Text>
            <Text size="medium" appearance="gray" textAlign="start">
              {newDescription}
            </Text>
          </Stack>
        </Stack>
        <StyledCloseIconContainer>
          <Icon
            size="16px"
            onClick={handleRemoveFlag}
            appearance="dark"
            icon={<MdClear />}
          />
        </StyledCloseIconContainer>
      </Stack>
      {duration && (
        <StyledCountdownBarContainer>
          <CountdownBar
            paused={isPaused}
            appearance={appearance}
            duration={duration}
            onCountdown={handleRemoveFlag}
          />
        </StyledCountdownBarContainer>
      )}
    </StyledFlag>
  );
};

export { Flag };
export type { IFlag };
