import { css } from "@emotion/css";
import { indigo } from "../../styles/colors";

export const SideBar = () => {
  return (
    <div
      className={css({
        height: "100vh",
        backgroundColor: indigo,
        transition: "width 0.1s",
        margin: 0,
        position: "absolute",
        zIndex: 1,
        width: "64px",
        paddingTop: "30px",
      })}
    ></div>
  );
};
