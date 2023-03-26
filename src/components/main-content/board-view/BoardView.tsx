import { css } from "@emotion/css";
import { useState } from "react";
import { useUsers } from "../../../services/users";
import { boardFilters, getBoardFilterStyles } from "../../../styles/board";
import { TextInput } from "../../common/TextInput";
import { PageHeader } from "../PageHeader";
import { getAvatarStyling } from "../../../styles/common";
import { Divider, Skeleton, Tooltip } from "@mui/material";
import { Swimlane } from "./Swimlane";
import { useTickets } from "../../../services/tickets";
import { processingUser, swimlanes } from "../../../utils/utils";
import { TicketModal } from "./TicketModal";
import { TicketRepresentation } from "../../../types/tickets";

export const BoardView = () => {
  const [searchInput, setSearchInput] = useState("");
  const [userFilter, setUserFilter] = useState("");
  const [onlyMyIssues, setOnlyMyIssues] = useState(false);
  const [recentlyUpdated, setRecentlyUpdated] = useState(false);

  const [selectedTicket, setSelectedTicket] = useState("");
  const [open, setOpen] = useState(false);

  const onTicketClick = (ticketId: string) => {
    setOpen(true);
    setSelectedTicket(ticketId);
  };

  const onModalClose = () => {
    setOpen(false);
    setSelectedTicket("");
  };

  const filterActive =
    searchInput || onlyMyIssues || recentlyUpdated || userFilter;

  const clearFilters = () => {
    setSearchInput("");
    setUserFilter("");
    setOnlyMyIssues(false);
    setRecentlyUpdated(false);
  };

  const {
    isLoading: usersLoading,
    isError,
    data: userData,
    error,
  } = useUsers();

  const { isLoading: ticketsLoading, data: ticketData } = useTickets();

  const filteredTickets = ticketData?.data.filter((ticket) => {
    if (searchInput && ticket.title.toLowerCase().search(searchInput) === -1)
      return false;

    if (userFilter && userFilter !== ticket.user_id) return false;

    if (onlyMyIssues && ticket.user_id !== processingUser.id) return false;

    if (
      recentlyUpdated &&
      new Date().getTime() - ticket.last_updated > 24 * 60 * 60 * 1000
    )
      return false;

    return true;
  });

  const loadingUsers = [1, 2, 3, 4].map(() => {
    return <Skeleton variant="circular" width={32} height={32} />;
  });
  const userAvatars = userData?.data.map((user) => {
    return (
      <Tooltip
        title={[user.first_name, user.last_name].join("")}
        placement="top"
      >
        <div
          className={getAvatarStyling(
            user.photo_url,
            "32px",
            userFilter === user.id
          )}
          key={user.id}
          onClick={() => {
            setUserFilter(userFilter === user.id ? "" : user.id);
          }}
        />
      </Tooltip>
    );
  });

  return (
    <div className={css({ width: "100%" })}>
      <div
        className={css({
          width: "auto",
          backgroundColor: "white",
        })}
      >
        <PageHeader
          projectName="Central Perk Project"
          pageName="Kanban Board"
        />
        <div style={{ marginTop: "30px" }}>
          <div className={boardFilters}>
            <TextInput
              value={searchInput}
              onChange={(e: any) => {
                setSearchInput(e.target.value);
              }}
              width="160px"
            />
            <div className={css({ display: "flex", paddingRight: "-10px" })}>
              {usersLoading ? loadingUsers : userAvatars}
            </div>
            <div
              className={getBoardFilterStyles(false, onlyMyIssues)}
              onClick={() => {
                setOnlyMyIssues(!onlyMyIssues);
              }}
            >
              Only My Issues
            </div>
            <div
              className={getBoardFilterStyles(false, recentlyUpdated)}
              onClick={() => {
                setRecentlyUpdated(!recentlyUpdated);
              }}
            >
              Recently Updated
            </div>
            {filterActive && <Divider orientation="vertical" flexItem />}
            {filterActive && (
              <div
                className={getBoardFilterStyles(false, false)}
                onClick={() => {
                  clearFilters();
                }}
              >
                Clear All
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className={css({
          marginTop: "30px",
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          justifyContent: "flex-start",
        })}
      >
        {swimlanes.map((lane, i) => {
          return (
            <Swimlane
              title={lane.title}
              tickets={filteredTickets?.filter(
                (ticket) => ticket.swimlane === lane.identifier
              )}
              onTicketClick={onTicketClick}
            />
          );
        })}
      </div>
      <TicketModal
        open={open}
        ticketId={selectedTicket}
        onModalClose={onModalClose}
      />
    </div>
  );
};
