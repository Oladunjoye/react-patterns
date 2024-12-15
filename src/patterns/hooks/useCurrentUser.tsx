import { useEffect, useState } from "react";

type UserData = {
  name: string;
  age: string;
};
const fetchUserData = () => {
  return new Promise<UserData>((resolve) => {
    setTimeout(() => {
      resolve({ name: "Temitope", age: "89" });
    }, 1000);
  });
};

export const useCurrentUser = () => {
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const userData = await fetchUserData();
      setUser(userData);
    };

    getUser();
  }, []);
  return user;
};
