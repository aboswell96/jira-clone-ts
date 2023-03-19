import { css } from "@emotion/css";
import { grey2 } from "./colors";

export const boardFilters = css({
  display: "flex",
  flexDirection: "row",
  gap: "20px",
});

export const boardFilter = css({
  backgroundColor: "white",
  border: "none",
  color: grey2,
  borderRadius: "3px",
  fontSize: "14.5px",
});

export const getBoardFilterStyles = (darkTheme: boolean, active: boolean) => {
  return css([
    {
      backgroundColor: darkTheme ? "#010409" : "white",
      userSelect: "none",
      border: "none",
      color: grey2,
      borderRadius: "3px",
      fontSize: "14.5px",
      "&:hover": {
        cursor: "pointer",
        backgroundColor: darkTheme ? "#0d1117" : "#F4F5F7",
      },
    },
    active && {
      backgroundColor: darkTheme ? "#0d1117" : "#d2e5fe",
      color: "#0052cc",
    },
  ]);
};
