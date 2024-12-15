import { ElementType } from "react";
import { RedButton } from "./composition";

type ButtonProps = {
  size: string;
  color: string;
  text: string;
};

export const Button = ({ size, color, text }: ButtonProps) => {
  return (
    <button
      style={{
        fontSize: size === "small" ? "8px" : "20px",
        backgroundColor: color,
      }}
    >
      {text}
    </button>
  );
};

export const partialComponent = <T extends Partial<ButtonProps>>(
  Component: ElementType,
  partialProps: T
) => {
  return (props: Omit<ButtonProps, keyof T> & T) => {
    return <Component {...partialProps} {...props} />;
  };
};

export const RedPartialComponentButton = partialComponent(Button, {
  color: "crimson",
});

export const GreenSmallPartialComponentButton = partialComponent(Button, {
  color: "green",
  size: "small",
});

export const RedSmallPCButton = partialComponent(RedButton, { size: "small" });
