import { css } from "@emotion/css";
import {
  getSwimlaneStyling,
  swimlaneBody,
  swimlaneHeader,
} from "../../../styles/board";
import { TicketRepresentation } from "../../../types/tickets";
import { UserRepresentation } from "../../../types/users";
import { TicketCard } from "../../common/TicketCard";

interface SwimlaneProps {
  title: string;
  tickets?: TicketRepresentation[];
}

export const Swimlane = ({ title, tickets }: SwimlaneProps) => {
  const ticketCards = tickets?.map((ticket, i) => {
    return <TicketCard ticket={ticket} />;
  });

  return (
    <div className={css(getSwimlaneStyling(false, false))}>
      <div className={swimlaneHeader}>{title.toLocaleUpperCase()}</div>
      <div className={swimlaneBody}>{ticketCards}</div>
    </div>
  );
};
