import { useQuery } from "@tanstack/react-query";
import { UsersRepresentation } from "../types/users";
import { users } from "./apis";

export const useUsers = () => {
  return useQuery<UsersRepresentation>(["users"], async () => {
    const data = await fetch(users);
    return await data.json();
  });
};
