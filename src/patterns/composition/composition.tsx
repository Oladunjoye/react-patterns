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

export const RedButton = <T extends Omit<ButtonProps, "color">>(props: T) => (
  <Button {...props} color={"crimson"} />
);
export const GreenSmallButton = (
  props: Omit<ButtonProps, "size" | "color">
) => <Button {...props} size="small" color={"green"} />;
