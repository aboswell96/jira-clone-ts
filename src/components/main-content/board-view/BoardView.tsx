import { css } from "@emotion/css";
import { useState } from "react";
import { useUsers } from "../../../services/users";
import { boardFilters, getBoardFilterStyles } from "../../../styles/board";
import { TextInput } from "../../common/TextInput";
import { PageHeader } from "../PageHeader";
import { getAvatarStyling } from "../../../styles/common";
import { Divider, Skeleton, Tooltip } from "@mui/material";

export const BoardView = () => {
  const [searchInput, setSearchInput] = useState("");
  const [userFilter, setUserFilter] = useState("");
  const [onlyMyIssues, setOnlyMyIssues] = useState(false);
  const [recentlyUpdated, setRecentlyUpdated] = useState(false);

  const filterActive = searchInput || onlyMyIssues || recentlyUpdated;

  const clearFilters = () => {
    setSearchInput("");
    setUserFilter("");
    setOnlyMyIssues(false);
    setRecentlyUpdated(false);
  };

  const { isLoading, isError, data, error } = useUsers();
  const loadingUsers = [1, 2, 3, 4].map(() => {
    return <Skeleton variant="circular" width={32} height={32} />;
  });
  const userAvatars = data?.data.map((user) => {
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
    <div
      className={css({
        width: "auto",
        backgroundColor: "white",
        marginLeft: "40px",
        marginRight: "40px",
      })}
    >
      <PageHeader projectName="Central Perk Project" pageName="Kanban Board" />
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
            {isLoading ? loadingUsers : userAvatars}
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
  );
};
