import { StoryObj, Meta } from "@storybook/react";
import { FeaturedLink } from "./FeaturedLink";

export default { 
   component: FeaturedLink,
} as Meta<typeof FeaturedLink>;
type Story = StoryObj<typeof FeaturedLink>;

export const Default: Story = {
   args: {
    title : 'Lorem ipsum dolor sit amet',
    description: "Phasellus ut pulvinar nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam commodo vitae mi at varius. In vitae odio congue, sagittis nisi et, vehicula orci. Proin sed aliquet ipsum, vel semper nunc. Morbi vel metus ut justo porttitor. "
   },
};