import { css } from "@emotion/css";
import { Outlet } from "react-router-dom";
import { Navigation } from "../navigation/Navigation";
import { SideBar } from "../sidebar/Sidebar";
import { ThemeContext } from "../../App";
import { useContext } from "react";

export const MainContent = () => {
  const themeContext = useContext(ThemeContext);
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
          paddingLeft: "40px",
          paddingRight: "40px",
          paddingTop: "30px",
          width: "100%",
          backgroundColor: themeContext.theme === "light" ? "white" : "#010409",
        })}
      >
        <Outlet />
      </div>
    </div>
  );
};
