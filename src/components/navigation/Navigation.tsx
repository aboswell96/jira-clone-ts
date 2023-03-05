import { css } from "@emotion/css";
import { Link } from "react-router-dom";
import {
  navigation,
  navigationItem,
  navigationItems,
} from "../../types/Navigation";

const menuOptions = [
  {
    title: "Kanban Board",
    icon: "board",
    url: "board",
  },
  {
    title: "Project Settings",
    icon: "settings",
    url: "settings",
  },
];

export const Navigation = () => {
  return (
    <div className={navigation}>
      <div className={navigationItems}>
        {menuOptions.map((menuItem, i) => {
          return (
            <NavigationMenuTab url={menuItem.url} title={menuItem.title} />
          );
        })}
      </div>
    </div>
  );
};

interface NavigationMenuTabProps {
  url: string;
  title: string;
}

const NavigationMenuTab = ({ url, title }: NavigationMenuTabProps) => {
  return (
    <Link
      to={url}
      className={css({ textDecoration: "none", color: "inherit" })}
      //   onClick={}
    >
      <div className={navigationItem}>
        <div className={css({ color: "black", fontSize: "14.7px" })}>
          {title}
        </div>
      </div>
    </Link>
  );
};
