import { css } from "@emotion/css";
import { getAvatarStyling, getTicketStyling } from "../../styles/common";
import { TicketRepresentation } from "../../types/tickets";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import BugReportIcon from "@mui/icons-material/BugReport";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useUser } from "../../services/users";
import { unassigned } from "../../utils/utils";

interface TicketCardProps {
  ticket: TicketRepresentation;
}

export const TicketCard = ({ ticket }: TicketCardProps) => {
  console.log(ticket);
  const { isLoading, isError, data, error } = useUser(ticket.user_id);

  console.log(data);

  return (
    <div className={css(getTicketStyling(false))}>
      {ticket.title}
      <div
        className={css({
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        })}
      >
        <div
          className={css({
            display: "flex",
            flexDirection: "row",
          })}
        >
          <div>{renderTicketTypeIcon(ticket.type)}</div>
          <div>{renderTicketSeverityIcon(ticket.priority)}</div>
        </div>
        <div>
          {
            <div
              className={getAvatarStyling(
                data ? data.photo_url : unassigned.photo_url,
                "24px",
                false
              )}
            ></div>
          }
        </div>
      </div>
    </div>
  );
};

const renderTicketTypeIcon = (type: string) => {
  const fontSize = 18;

  switch (type) {
    case "story":
      return <BookmarkIcon sx={{ color: "#65ba43", fontSize: { fontSize } }} />;
    case "task":
      return <CheckBoxIcon color="primary" sx={{ fontSize: { fontSize } }} />;
    case "bug":
      return <BugReportIcon color="action" sx={{ fontSize: { fontSize } }} />;
    default:
      return <BookmarkIcon color="success" sx={{ fontSize: { fontSize } }} />;
  }
};

const renderTicketSeverityIcon = (priority: string) => {
  var color = "";
  const fontSize = 18;
  switch (priority) {
    case "sev2":
      color = "#cd1316";
      break;
    case "sev1":
      color = "#e97f33";
      break;
    case "high":
      color = "#57a55a";
      break;
    case "low":
      color = "#2d8738";
      break;
    default:
      color = "#2d8738";
  }

  if (priority === "sev2" || priority === "sev1") {
    return (
      <ArrowUpwardIcon sx={{ color: { color }, fontSize: { fontSize } }} />
    );
  } else {
    return (
      <ArrowDownwardIcon sx={{ color: { color }, fontSize: { fontSize } }} />
    );
  }
};
