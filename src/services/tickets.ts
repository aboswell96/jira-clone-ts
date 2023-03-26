import { useQuery } from "@tanstack/react-query";
import { TicketRepresentation, TicketsRepresentation } from "../types/tickets";
import { tickets } from "./apis";

export const useTickets = () => {
  return useQuery<TicketsRepresentation>(["tickets"], async () => {
    const data = await fetch(tickets);
    return await data.json();
  });
};

export const useTicket = (ticketId: string) => {
  return useQuery<TicketRepresentation>(
    ["ticket", ticketId],
    async () => {
      const data = await fetch(tickets + "/" + ticketId);
      return await data.json();
    },
    { enabled: !!ticketId }
  );
};
