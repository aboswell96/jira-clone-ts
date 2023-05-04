import { css } from "@emotion/css";
import {
  getSwimlaneStyling,
  swimlaneBody,
  swimlaneHeader,
} from "../../../styles/board";
import { TicketRepresentation } from "../../../types/tickets";
import { TicketCard } from "../../common/TicketCard";
import { useContext } from "react";
import { ThemeContext } from "../../../App";

interface SwimlaneProps {
  title: string;
  tickets?: TicketRepresentation[];
  onTicketClick: any;
}

export const Swimlane = ({ title, tickets, onTicketClick }: SwimlaneProps) => {
  const themeContext = useContext(ThemeContext);

  const ticketCards = tickets?.map((ticket, i) => {
    return <TicketCard ticket={ticket} onClick={onTicketClick} />;
  });

  return (
    <div
      className={css(getSwimlaneStyling(themeContext.theme === "dark", false))}
    >
      <div className={swimlaneHeader}>
        {[title.toLocaleUpperCase(), ticketCards?.length].join(" ")}
      </div>
      <div className={swimlaneBody}>{ticketCards}</div>
    </div>
  );
};
