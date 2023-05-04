import { css } from "@emotion/css";
import { indigo } from "../../styles/colors";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { getSiteMenuItemStyling } from "../../styles/common";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ThemeContext } from "../../App";

export const SideBar = () => {
  const [expanded, setExpanded] = useState(false);
  const themeContext = useContext(ThemeContext);

  const changeTheme = () => {
    themeContext.setTheme(themeContext.theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className={css({
        height: "100vh",
        backgroundColor: indigo,
        transition: "width 0.1s",
        margin: 0,
        position: "absolute",
        zIndex: 1,
        width: expanded ? "200px" : "64px",
        paddingTop: "30px",
      })}
      onMouseEnter={() => {
        setExpanded(true);
      }}
      onMouseLeave={() => {
        setExpanded(false);
      }}
    >
      <Link to="board" style={{ textDecoration: "none", color: "inherit" }}>
        <img
          src="https://i.ibb.co/fGyrz6b/jira-icon.png"
          alt="Icon"
          className={css({
            height: "32px",
            width: "32px",
            margin: "auto",
            display: "block",
            paddingTop: "35px",
            marginLeft: expanded ? "15px" : "",
          })}
        />
      </Link>
      <div className={css({ paddingTop: "30px" })}>
        <div
          className={getSiteMenuItemStyling(expanded)}
          onClick={() => {
            changeTheme();
          }}
        >
          <div className={css({ margin: expanded ? 0 : "auto" })}>
            <DarkModeIcon sx={{ color: "white", fontSize: 30 }} />
          </div>
          <div className={css({ color: "white", fontSize: "14.7px" })}>
            {expanded && "Dark Theme"}
          </div>
        </div>
      </div>
    </div>
  );
};
