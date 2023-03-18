import { css } from "@emotion/css";
import { Link } from "react-router-dom";
import {
  boardAvatar,
  navigation,
  navigationItem,
  navigationItems,
} from "../../styles/Navigation";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import DynamicFeedOutlinedIcon from "@mui/icons-material/DynamicFeedOutlined";
import { useState } from "react";
import { NavigationMenuItemInDev } from "./NavigationMenuItemInDev";
import { grey } from "../../styles/colors";

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

const menuOptionsInDevelopment = [
  {
    title: "Reports",
    icon: "reports",
  },
  {
    title: "Issues and Epics",
    icon: "epics",
  },
  {
    title: "Advanced Issue Stats",
    icon: "stats",
  },
];

export const Navigation = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={navigation}>
      <div className={boardAvatar}>
        <img
          src="https://i.ibb.co/S686zGM/rocket3.png"
          alt="Project Icon"
          style={{
            height: "40px",
            width: "40px",
            border: "2px",
            borderRadius: "3px",
          }}
        ></img>
        <div
          className={css({
            color: "black",
            margin: "auto",
            marginLeft: "10px",
          })}
        >
          Central Perk
          <div className={css({ color: grey, fontsize: "13px" })}>
            Software Project
          </div>
        </div>
      </div>
      <div className={navigationItems}>
        {menuOptions.map((menuItem, i) => {
          return (
            <NavigationMenuTab
              url={menuItem.url}
              title={menuItem.title}
              icon={menuItem.icon}
              active={activeTab === i}
              onTabClick={() => setActiveTab(i)}
              key={i}
            />
          );
        })}
      </div>
      <hr
        style={{ borderTop: "1px solid rgb(193, 199, 208)", width: "200px" }}
      ></hr>
      <div
        className={css({
          width: "200px",
          margin: "auto",
          justifyContent: "center",
          marginTop: "8px",
        })}
      >
        {menuOptionsInDevelopment.map((menuItem, i) => {
          return (
            <NavigationMenuItemInDev
              title={menuItem.title}
              icon={menuItem.icon}
              active={false}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
};

interface NavigationMenuTabProps {
  url: string;
  title: string;
  icon: string;
  active: boolean;
  onTabClick: () => void;
}

const NavigationMenuTab = ({
  url,
  title,
  icon,
  active,
  onTabClick,
}: NavigationMenuTabProps) => {
  return (
    <Link
      to={url}
      className={css({ textDecoration: "none", color: "inherit" })}
      onClick={() => onTabClick()}
    >
      <div className={navigationItem}>
        <div className={css({ paddingLeft: "10px" })}>
          {renderIcon(icon, active)}
        </div>
        <div className={css({ color: "black", fontSize: "14.7px" })}>
          {title}
        </div>
      </div>
    </Link>
  );
};

export const renderIcon = (title: string, status: boolean) => {
  const color: any = status ? "primary" : "active";
  switch (title) {
    case "board":
      return <TableChartOutlinedIcon color={color} />;
    case "settings":
      return <SettingsOutlinedIcon color={color} />;
    case "reports":
      return <AssessmentOutlinedIcon color={color} />;
    case "epics":
      return <DynamicFeedOutlinedIcon color={color} />;
    case "stats":
      return <QueryStatsOutlinedIcon color={color} />;
    default:
      return <SettingsOutlinedIcon color={color} />;
  }
};
