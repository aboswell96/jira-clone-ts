import { css } from "@emotion/css";
import moment from "moment";
import { useUser } from "../../services/users";
import { getAvatarStyling } from "../../styles/common";
import { CommentRepresentation } from "../../types/tickets";
import { unassigned } from "../../utils/utils";

interface CommentCardProps {
  comment: CommentRepresentation;
}

export const CommentCard = ({ comment }: CommentCardProps) => {
  const {
    isLoading,
    isError,
    data: userInfo,
    error,
  } = useUser(comment.user_id);

  return !isLoading ? (
    <div
      className={css({ display: "flex", flexDirection: "row", gap: "25px" })}
    >
      <div
        className={getAvatarStyling(
          userInfo ? userInfo.photo_url : unassigned.photo_url,
          "32px",
          false
        )}
      />
      <div className={css({ display: "flex", flexDirection: "column" })}>
        <div
          className={css({
            display: "flex",
            flexDirection: "row",
            gap: "12px",
          })}
        >
          <div
            className={css({
              fontSize: "15px",
              color: "#42526E",
            })}
          >
            {[userInfo!.first_name, userInfo!.last_name].join(" ")}
          </div>
          <div
            className={css({
              fontSize: "14.5px",
              color: "#42526E",
            })}
          >
            {moment(Number(comment.time_created)).calendar()}
          </div>
        </div>
        <div
          className={css({
            fontSize: "15px",
            color: "#42526E",
            paddingTop: "10px",
          })}
        >
          {comment.msg}
        </div>
      </div>
    </div>
  ) : (
    <div>Loading</div>
  );
};
