import { css } from "@emotion/css";
import Box from "@mui/material/Box/Box";
import Modal from "@mui/material/Modal";
import { ticketType } from "../../../styles/ticket";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import BugReportIcon from "@mui/icons-material/BugReport";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useTicket } from "../../../services/tickets";
import moment from "moment";
import {
  mainPanel,
  mainText,
  sidePanel,
  subText,
  subTitle,
  ticketPanels,
  topRow,
} from "../../../styles/ticketModal";
import {
  EditableTextField,
  getTextAreaStyling,
} from "../../common/EditableTextField";
import { Select } from "../../common/Select";
import {
  getIssuePriorityItems,
  getIssueStatusItems,
  getIssueTypeItems,
  getUserItems,
} from "../../../utils/utils";
import { useUsers } from "../../../services/users";
import { CommentRepresentation } from "../../../types/tickets";
import { CommentCard } from "../../common/CommentCard";

interface TicketModalProps {
  ticketId: string;
  open: boolean;
  onModalClose: any;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  pt: 25 / 8,
  pr: 35 / 8,
  pb: 60 / 8,
  pl: 35 / 8,
  width: "55%",
  minWidth: 550,
  //   bgcolor: darkTheme ? "#010409" : "background.paper",
  bgcolor: "background.paper",
  boxShadow: 24,
  verticalAlign: "top",
  transform: "translate(-50%, -50%)",
  //   border: darkTheme ? "2px solid white" : "",
  border: "",
};

export const TicketModal = ({
  ticketId,
  open,
  onModalClose,
}: TicketModalProps) => {
  const {
    isLoading: ticketLoading,
    isError,
    data: ticket,
    error,
  } = useTicket(ticketId);

  const { isLoading: usersLoading, data: userData } = useUsers();

  console.log(ticket);

  return !ticketLoading ? (
    <Modal
      open={open}
      onClose={() => {
        onModalClose();
      }}
    >
      <Box sx={style}>
        <div className={topRow}>
          <div className={ticketType}>
            {RenderTicketTypeIcon(ticket?.type)}
            {ticket?.type.toUpperCase()}
          </div>
        </div>
        <div
          className={css({
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: "10px",
          })}
        ></div>
        <EditableTextField
          initValue={ticket?.title}
          css={getTextAreaStyling(
            "100%",
            "",
            "35px",
            ticket && ticket?.title.length > 60 ? "18px" : "24px",
            ""
          )}
        />
        <div className={ticketPanels}>
          <div className={mainPanel}>
            <div className={mainText}>Last Updated</div>
            <div className={subText}>
              {moment(Number(ticket?.last_updated)).calendar()}
            </div>
            <div className={mainText}>Description</div>
            <EditableTextField
              initValue={ticket?.description}
              css={getTextAreaStyling("100%", "100px", "", "15px", "")}
            />
            <CommentsSection comments={ticket?.comments} />
          </div>
          <div className={sidePanel}>
            <Select
              header="Issue Type"
              initValue={ticket?.type}
              items={getIssueTypeItems()}
              onSelectItem={() => {
                return;
              }}
            />
            <Select
              header="Status"
              initValue={ticket?.swimlane}
              items={getIssueStatusItems()}
              onSelectItem={() => {
                return;
              }}
            />
            {!usersLoading && (
              <Select
                header="Assignee"
                initValue={ticket?.user_id}
                items={getUserItems(userData?.data!)}
                onSelectItem={() => {
                  return;
                }}
              />
            )}
            {!usersLoading && (
              <Select
                header="Reporter"
                initValue={ticket?.user_id}
                items={getUserItems(userData?.data!)}
                onSelectItem={() => {
                  return;
                }}
              />
            )}
            <Select
              header="Priority"
              initValue={ticket?.priority}
              items={getIssuePriorityItems()}
              onSelectItem={() => {
                return;
              }}
            />
          </div>
        </div>
      </Box>
    </Modal>
  ) : (
    <div>Loading</div>
  );
};

const RenderTicketTypeIcon = (type?: string) => {
  const fontSize = 18;
  switch (type) {
    case "story":
      return <BookmarkIcon sx={{ color: "#65ba43", fontSize: { fontSize } }} />;
    case "task":
      return <CheckBoxIcon color="primary" sx={{ fontSize: { fontSize } }} />;
    case "bug":
      return <BugReportIcon color="action" sx={{ fontSize: { fontSize } }} />;
    default:
      return <BookmarkIcon sx={{ color: "#65ba43", fontSize: { fontSize } }} />;
  }
};

interface CommentsSectionProps {
  comments?: CommentRepresentation[];
}

const CommentsSection = ({ comments }: CommentsSectionProps) => {
  return (
    <div
      className={css({
        display: "flex",
        "flex-direction": "column",
        gap: "25px",
        paddingTop: "25px",
      })}
    >
      <div className={mainText}>Comments</div>
      {comments?.map((c) => {
        return <CommentCard comment={c} />;
      })}
    </div>
  );
};
