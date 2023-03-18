import { css } from "@emotion/css";
import { useState } from "react";
import { navigationItem, titleNotImplemented } from "../../styles/Navigation";
import { renderIcon } from "./Navigation";

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
      className={navigationItem}
    >
      <div className={css({ paddingLeft: "10px" })}>
        {renderIcon(icon, active)}
      </div>
      {isHovered ? (
        <div className={titleNotImplemented}>IN DEVELOPMENT</div>
      ) : (
        <div className={css({ color: "black", fontSize: "14.7px" })}>
          {title}
        </div>
      )}
    </div>
  );
};
