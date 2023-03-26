import { SelectItem } from "../components/common/Select";
import { UserRepresentation } from "../types/users";

import BookmarkIcon from "@mui/icons-material/Bookmark";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import BugReportIcon from "@mui/icons-material/BugReport";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { getAvatarStyling } from "../styles/common";

export const processingUser = {
  first_name: "Joey",
  last_name: "Tribbiani",
  photo_url: "https://i.ibb.co/vhJVFpQ/joey-tribbiani-3.jpg",
  id: "2da8b05c-c121-11ed-afa1-0242ac120002",
};

export const swimlanes = [
  {
    title: "Backlog",
    identifier: "backlog",
  },
  {
    title: "In Development",
    identifier: "inDevelopment",
  },
  {
    title: "In Progress",
    identifier: "inProgress",
  },
  {
    title: "Done",
    identifier: "done",
  },
];

export const unassigned: UserRepresentation = {
  first_name: "Unassigned",
  last_name: "",
  photo_url: "https://ibb.co/M9PdhH9",
  id: "-1",
};

export const getIssueTypeItems = (): SelectItem[] => {
  return [
    {
      text: "Story",
      img: <BookmarkIcon sx={{ color: "#65ba43", fontSize: 18 }} />,
      id: "story",
    },
    {
      text: "Bug",
      img: <BugReportIcon color="action" sx={{ fontSize: 18 }} />,
      id: "bug",
    },
    {
      text: "Task",
      img: <CheckBoxIcon color="primary" sx={{ fontSize: 18 }} />,
      id: "task",
    },
  ];
};

export const getIssueStatusItems = (): SelectItem[] => {
  return [
    { text: "Backlog", id: "backlog" },
    { text: "In Development", id: "inDevelopment" },
    { text: "In Progress", id: "inProgress" },
    { text: "Done", id: "done" },
  ];
};

export const getUserItems = (users: UserRepresentation[]): SelectItem[] => {
  const unassignedItem: SelectItem = {
    text: unassigned.first_name,
    img: (
      <div
        className={getAvatarStyling(unassigned.photo_url, "24px", false)}
      ></div>
    ),
    id: unassigned.id,
  };
  const userItems: SelectItem[] = users?.map((u) => {
    return {
      text: [u.first_name, u.last_name].join(" "),
      id: u.id,
      img: <div className={getAvatarStyling(u.photo_url, "24px", false)}></div>,
    };
  });

  userItems.push(unassignedItem);
  return userItems;
};

export const getIssuePriorityItems = (): SelectItem[] => {
  return [
    {
      text: "Highest",
      img: <ArrowUpwardIcon sx={{ color: "#cd1316", fontSize: 18 }} />,
      id: "sev2",
    },
    {
      text: "Higher",
      img: <ArrowUpwardIcon sx={{ color: "#e97f33", fontSize: 18 }} />,
      id: "sev1",
    },
    {
      text: "Medium",
      img: <ArrowDownwardIcon sx={{ color: "#57a55a", fontSize: 18 }} />,
      id: "high",
    },
    {
      text: "Lowest",
      img: <ArrowDownwardIcon sx={{ color: "#2d8738", fontSize: 18 }} />,
      id: "low",
    },
  ];
};
