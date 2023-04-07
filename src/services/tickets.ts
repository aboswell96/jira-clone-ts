import { useMutation, useQuery } from "@tanstack/react-query";
import { queryClient } from "..";
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

interface TicketMutationVariables {
  newTicket: TicketRepresentation;
  ticketId: string;
}

export const useUpdateTicketById = () => {
  const updateTicketById = async (variables: TicketMutationVariables) => {
    console.log("useUpdateTicketById called with " + JSON.stringify(variables));
    delete variables.newTicket["comments"];
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(variables.newTicket),
    };
    const response = await fetch(
      tickets + "/" + variables.ticketId,
      requestOptions
    );

    return await response.json();
  };

  return useMutation(updateTicketById, {
    onSuccess: (data, variables: TicketMutationVariables) => {
      queryClient.invalidateQueries(["tickets"]);
      queryClient.invalidateQueries(["ticket", variables.ticketId]);
    },
  });
};
