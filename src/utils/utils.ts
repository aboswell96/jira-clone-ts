import { UserRepresentation } from "../types/users";

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
