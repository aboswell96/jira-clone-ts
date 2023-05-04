import { css } from "@emotion/css";
import { useContext, useState } from "react";
import {
  getNavigationItemStyling,
  titleNotImplemented,
} from "../../styles/navigation";
import { renderIcon } from "./Navigation";
import { ThemeContext } from "../../App";

interface NavigationMenuItemInDevProps {
  title: string;
  icon: string;
  active: boolean;
}

export const NavigationMenuItemInDev = ({
  title,
  icon,
  active,
}: NavigationMenuItemInDevProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const themeContext = useContext(ThemeContext);

  const onMouseEnter = () => {
    setIsHovered(true);
  };

  const onMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={getNavigationItemStyling(themeContext.theme === "dark")}
    >
      <div className={css({ paddingLeft: "10px" })}>
        {renderIcon(icon, active)}
      </div>
      {isHovered ? (
        <div className={titleNotImplemented}>IN DEVELOPMENT</div>
      ) : (
        <div
          className={css({
            color: active
              ? "#1976d2"
              : themeContext.theme === "dark"
              ? "white"
              : "black",
            fontSize: "14.7px",
          })}
        >
          {title}
        </div>
      )}
    </div>
  );
};
