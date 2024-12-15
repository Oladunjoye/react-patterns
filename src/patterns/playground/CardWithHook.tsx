import { useCurrentUser } from "../hooks/useCurrentUser";

export const CardWithHook = () => {
  const user = useCurrentUser();
  console.log(user);

  return (
    <div style={{ display: "flex", marginRight: "10px" }}>
      <p> {user?.name} </p>
      <p> {user?.age} </p>
    </div>
  );
};
