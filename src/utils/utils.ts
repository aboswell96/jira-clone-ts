import { UserRepresentation } from "../types/users";

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
