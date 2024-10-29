import { StoryObj, Meta } from "@storybook/react";
import { Loader } from "./Loader";

export default { 
   component: Loader,
} as Meta<typeof Loader>;
type Story = StoryObj<typeof Loader>;

export const IndeterminateLoader: Story = {
   args: {
     variant: "indeterminate"
   },
};

export const DeterminateLoader: Story = {
   args: {
      variant: "determinate",
      value: 17
   },
};