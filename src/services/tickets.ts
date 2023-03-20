import { useQuery } from "@tanstack/react-query";
import { TicketsRepresentation } from "../types/tickets";
import { tickets } from "./apis";

export const useTickets = () => {
  return useQuery<TicketsRepresentation>(["tickets"], async () => {
    const data = await fetch(tickets);
    return await data.json();
  });
};
