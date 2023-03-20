import { useQuery } from "@tanstack/react-query";
import { UserRepresentation, UsersRepresentation } from "../types/users";
import { unassigned } from "../utils/utils";
import { users } from "./apis";

export const useUsers = () => {
  return useQuery<UsersRepresentation>(["users"], async () => {
    const data = await fetch(users);
    return await data.json();
  });
};

export const useUser = (userID?: string) => {
  return useQuery<UserRepresentation>(
    ["user", userID],
    async () => {
      const data = await fetch(users + "/" + userID);
      return await data.json();
    },
    { enabled: !!userID }
  );
};
