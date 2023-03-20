import { css } from "@emotion/css";
import { Outlet } from "react-router-dom";
import { Navigation } from "../navigation/Navigation";
import { SideBar } from "../sidebar/Sidebar";

export const MainContent = () => {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        height: "100vh",
        width: "100%",
        minWidth: "760px",
        gap: 0,
      })}
    >
      <SideBar />
      <Navigation />
      <div
        className={css({
          marginLeft: "40px",
          marginRight: "40px",
          marginTop: "30px",
          width: "100%",
        })}
      >
        <Outlet />
      </div>
    </div>
  );
};
