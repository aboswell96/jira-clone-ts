import { css } from "@emotion/css";
import { useState } from "react";
import { useUsers } from "../../../services/users";
import { boardFilters } from "../../../styles/board";
import { TextInput } from "../../common/TextInput";
import { PageHeader } from "../PageHeader";
import { getAvatarStyling } from "../../../styles/common";

export const BoardView = () => {
  const [searchInput, setSearchInput] = useState("");
  const [userFilter, setUserFilter] = useState("");

  const { isLoading, isError, data, error } = useUsers();
  console.log(userFilter);
  const userAvatars = data?.data.map((user) => {
    return (
      <div
        className={getAvatarStyling(
          user.photo_url,
          "32px",
          userFilter === user.id
        )}
        key={user.id}
        onClick={() => {
          setUserFilter(user.id);
        }}
      ></div>
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
            {userAvatars}
          </div>
          <div
            className={css({
              backgroundImage: "https://i.ibb.co/b636CY2/monica-geller-2.jpg",
            })}
          ></div>
        </div>
      </div>
    </div>
  );
};
