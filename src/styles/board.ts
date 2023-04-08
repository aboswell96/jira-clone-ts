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
      fontFamily: "CircularStdBook",
      display: "flex",
      alignItems: "center",
      paddingInline: "10px",
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

export const getSwimlaneStyling = (darkTheme: boolean, hovered: boolean) => {
  return css([
    {
      backgroundColor: darkTheme ? "#0d1117" : "#f4f5f7",
      border: darkTheme ? "#0d1117" : "#f4f5f7",
      borderRadius: "2px",
      outline: "none",
      height: "100%",
      width: "25%",
      minWidth: "145px",
      padding: "5px",
    },
    hovered && {
      border: "5px solid #4c9aff",
      borderRadius: "4px",
    },
  ]);
};

export const swimlaneHeader = css({
  whiteSpace: "nowrap",
  marginTop: "10px",
  marginLeft: "10px",
  color: "#5e6c84",
  fontSize: "12.5px",
  fontFamily: "CircularStdBook",
});

export const swimlaneBody = css({
  display: "flex",
  flexDirection: "column",
  gap: "5px",
  marginTop: "20px",
  fontSize: "15px",
  justifyContent: "flex-start",
  width: "100%",
});
