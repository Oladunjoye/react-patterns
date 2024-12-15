import { ComponentType } from "react";
import { UserProps } from "../playground/Card";

export const withUserData = <P extends object>(
  Component: ComponentType<P & UserProps>
) => {
  const userData = { name: "Joye", age: 20 };
  return (props: P) => {
    return <Component {...props} user={userData} />;
  };
};
