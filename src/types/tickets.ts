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
  comments?: CommentRepresentation[];
}

export interface TicketsRepresentation {
  total: number;
  data: TicketRepresentation[];
}

export interface CommentRepresentation {
  msg: string;
  time_created: number;
  user_id: string;
  id: string;
}
