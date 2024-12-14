import { Meta } from "@storybook/react";
import { SplitScreen } from "../patterns/layout-pattern/SplitScreen";

const meta = {
  title: "Components/Layout/SplitScreen",
  component: SplitScreen,
  tags: ["autodocs"],
} satisfies Meta<typeof SplitScreen>;

export default meta;
// type Story = StoryObj<typeof meta>;

const LeftText = () => {
  return (
    <div>
      {" "}
      <p> Left Section </p>{" "}
    </div>
  );
};
const RightText = () => <p> Right Section </p>;

export const SplitScreenWithText = () => {
  return (
    <SplitScreen>
      <LeftText />
      <RightText />
    </SplitScreen>
  );
};

export const SplitScreenWithTextAndCustomBg = () => {
  return (
    <SplitScreen
      containerProps={{ style: { background: "red", color: "white" } }}
    >
      <LeftText />
      <RightText />
    </SplitScreen>
  );
};
