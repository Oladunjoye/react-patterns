import { withUserData } from "../hoc/withUserData";

type User = {
  name: string;
  age: number;
};
export type UserProps = {
  user: User;
};
export const Card = ({ user }: UserProps) => {
  const { name, age } = user;
  return (
    <div>
      <p> {name} </p>
      <p> {age} </p>
    </div>
  );
};

export const CardWithUserData = withUserData(Card);
