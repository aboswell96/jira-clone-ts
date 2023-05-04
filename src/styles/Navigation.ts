import { css } from "@emotion/css";
import { lightGrey } from "./colors";

export const getNavigationStyling = (darkTheme: boolean) => {
  return css({
    backgroundColor: darkTheme ? "#0d1117" : lightGrey,
    width: "230px",
    marginLeft: "64px",
    flexShrink: 0,
  });
};

export const navigationItems = css({
  width: "200px",
  margin: "auto",
  justifyContent: "center",
  paddingTop: "30px",
});

export const getNavigationItemStyling = (darkTheme: boolean) => {
  return css({
    width: "100%",
    height: "40px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "15px",
    borderRadius: "3px",
    overflow: "hidden",
    backgroundColor: darkTheme ? "#0d1117" : lightGrey,
    color: darkTheme ? "white" : "black",
    transition: "background 0.1s ease 0s",
    fontFamily: "CircularStdBook",
  });
};

export const navigationItemInDevelopment = css({
  width: "100%",
  height: "40px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "15px",
  borderRadius: "3px",
  overflow: "hidden",
  backgroundColor: lightGrey,
  color: "black",
  transition: "background 0.1s ease 0s",
});

export const titleNotImplemented = css({
  color: "#42526e",
  backgroundColor: "#dfe1e6",
  padding: "5px 0px 5px 8px",
  width: "140px",
  borderRadius: "3px",
  fontSize: "11.5px",
  fontWeight: "normal",
  fontFamily: "CircularStdBook",
});

export const boardAvatar = css({
  display: "flex",
  marginLeft: "20px",
  marginTop: "25px",
  fontSize: "15px",
});
