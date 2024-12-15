import { ComponentType } from "react";

export const withLogProps = <T extends object>(Component: ComponentType<T>) => {
  return (props: T) => {
    console.log(props);
    return <Component {...props} />;
  };
};

export const UserInfo = ({ test }: { test: string }) => {
  return <div> User Info {test}</div>;
};

export const UserInfoWithLogger = withLogProps(UserInfo);
