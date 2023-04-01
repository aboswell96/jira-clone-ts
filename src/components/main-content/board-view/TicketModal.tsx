import { css } from "@emotion/css";
import Box from "@mui/material/Box/Box";
import Modal from "@mui/material/Modal";
import { ticketType } from "../../../styles/ticket";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import BugReportIcon from "@mui/icons-material/BugReport";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useTicket, useUpdateTicketById } from "../../../services/tickets";
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
  processingUser,
} from "../../../utils/utils";
import { useUsers } from "../../../services/users";
import { CommentRepresentation } from "../../../types/tickets";
import { CommentCard } from "../../common/CommentCard";
import { getAvatarStyling } from "../../../styles/common";
import { useState } from "react";
import { Button, getButtonStyling } from "../../common/Button";
import { report } from "process";

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
  pb: 25 / 8,
  pl: 35 / 8,
  minWidth: 750,
  //   bgcolor: darkTheme ? "#010409" : "background.paper",
  bgcolor: "background.paper",
  boxShadow: 24,
  verticalAlign: "top",
  transform: "translate(-50%, -50%)",
  //   border: darkTheme ? "2px solid white" : "",
  border: "",
  overflowY: "scroll",
  maxHeight: "90%",
};

export const TicketModal = ({
  ticketId,
  open,
  onModalClose,
}: TicketModalProps) => {
  const { isLoading: ticketLoading, data: ticket } = useTicket(ticketId);
  const { isLoading: usersLoading, data: userData } = useUsers();

  const [title, setTitle] = useState(ticket?.title);
  const [description, setDescription] = useState(ticket?.description);

  const updateTicketmutation = useUpdateTicketById();

  const updateTicket = (key: string, newVal: string): void => {
    if (ticket) {
      updateTicketmutation.mutate({
        ticketId: ticketId,
        newTicket: { ...ticket, [key]: newVal },
      });
    }
  };

  return !ticketLoading ? (
    <Modal
      open={open}
      onClose={() => {
        onModalClose();
      }}
      className={css({ overflow: "scroll" })}
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
          </div>
          <div className={sidePanel}>
            <Select
              header="Issue Type"
              value={ticket?.type || ""}
              items={getIssueTypeItems()}
              onSelectItem={(newVal: string) => {
                updateTicket("type", newVal);
              }}
            />
            <Select
              header="Status"
              value={ticket?.swimlane || ""}
              items={getIssueStatusItems()}
              onSelectItem={(newVal: string) => {
                updateTicket("swimlane", newVal);
              }}
            />
            {!usersLoading && (
              <Select
                header="Assignee"
                value={ticket?.user_id || "-1"}
                items={getUserItems(userData?.data!)}
                onSelectItem={(newVal: string) => {
                  updateTicket("user_id", newVal);
                }}
              />
            )}
            {!usersLoading && (
              <Select
                header="Reporter"
                value={ticket?.reporter_id || "-1"}
                items={getUserItems(userData?.data!)}
                onSelectItem={(newVal: string) => {
                  updateTicket("reporter_id", newVal);
                }}
              />
            )}
            <Select
              header="Priority"
              value={ticket?.priority || ""}
              items={getIssuePriorityItems()}
              onSelectItem={(newVal: string) => {
                updateTicket("priority", newVal);
              }}
            />
          </div>
        </div>
        <CommentsSection comments={ticket?.comments} />
      </Box>
    </Modal>
  ) : (
    <div />
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

const inputStyling = css({
  width: "100%",
  height: "44px",
  fontSize: "15px",
  backgroundColor: "white",
  border: "1px solid #dfe1e6",
  borderRadius: "4px",
  outline: "none",
  paddingTop: "1px",
  color: "#172b4d",
  cursor: "pointer",
  "&:hover": {
    border: "1px solid #c1c7d0",
  },
  "&:focus": {
    backgroundColor: "white",
    border: "2px solid #4c9aff",
    paddingTop: "0",
    paddingLeft: "1px",
    paddingRight: "1px",
    paddingBottom: "0",
  },
});

interface CommentsSectionProps {
  comments?: CommentRepresentation[];
}

const CommentsSection = ({ comments }: CommentsSectionProps) => {
  const [newComment, setNewComment] = useState("");
  const [editting, setEditting] = useState(false);

  const onSave = () => {
    setEditting(false);
  };

  const onCancel = () => {
    setNewComment("");
    setEditting(false);
  };

  return (
    <div>
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          gap: "25px",
          paddingTop: "25px",
        })}
      >
        <div className={mainText}>Comments</div>
        {comments?.map((c) => {
          return <CommentCard comment={c} />;
        })}
        <div
          className={css({
            display: "flex",
            flexDirection: "row",
            gap: "25px",
          })}
        >
          <div
            className={getAvatarStyling(
              processingUser.photo_url,
              "32px",
              false
            )}
          />
          <div
            className={css({
              display: "flex",
              flexDirection: "column",
              gap: "0",
              width: "100%",
            })}
          >
            <input
              value={newComment}
              type="text"
              onChange={(e) => {
                setNewComment(e.target.value);
                setEditting(true);
              }}
              className={inputStyling}
              placeholder="Add a comment..."
            />
            {editting && (
              <div>
                <Button
                  text={"Save changes"}
                  css={getButtonStyling("#0052cc", "white", "", "#005eeb")}
                  onClick={onSave}
                />
                <Button
                  text={"Cancel"}
                  css={getButtonStyling("", "", "", "#dfe1e6")}
                  onClick={onCancel}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
