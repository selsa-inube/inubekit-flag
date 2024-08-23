import { action } from "@storybook/addon-actions";

import { props, parameters } from "./props";
import { IFlag, Flag } from ".";
import { FlagProvider } from "../../providers/FlagsProvider";

const story = {
  title: "feedback/Flag",
  components: [Flag],
  parameters,
  argTypes: {
    ...props,
  },
};

const Default = (args: IFlag) => (
  <FlagProvider>
    <Flag {...args} />{" "}
  </FlagProvider>
);
const closeFlag = () => {
  action("Flag closed")();
};
Default.args = {
  title: "Title",
  description: "Description",
  appearance: "primary",
  duration: 10000,
  closeFlag: closeFlag,
};

export { Default };
export default story;
