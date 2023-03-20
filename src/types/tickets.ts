export interface TicketRepresentation {
  title: string;
  description: string;
  swimlane: string;
  priority: string;
  type: string;
  id: string;
  user_id: string;
  reporter_id: string;
  last_updated: number;
  time_created: number;
}

export interface TicketsRepresentation {
  total: number;
  data: TicketRepresentation[];
}