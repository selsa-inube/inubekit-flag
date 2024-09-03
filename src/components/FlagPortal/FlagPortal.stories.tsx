import { Button } from "@inubekit/button";
import { FlagPortal } from ".";
import { FlagProvider } from "../../providers/FlagsProvider";
import { useFlag } from "../../hooks/useFlag";
import { ElementType } from "react";

const story = {
  title: "feedback/FlagPortal",
  components: [FlagPortal],
  decorators: [
    (Story: ElementType) => (
      <FlagProvider>
        <Story />
      </FlagProvider>
    ),
  ],
};

const Default = () => {
  const { addFlag } = useFlag();

  const handleClick = () => {
    addFlag({
      title: "Title",
      description: "Description",
      appearance: "primary",
      duration: 100000,
    });
  };

  return <Button onClick={handleClick}>Show Message</Button>;
};

export { Default };
export default story;
