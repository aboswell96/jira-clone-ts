import { css } from "@emotion/css";
import { lightGrey } from "../styles/colors";

export const navigation = css({
  backgroundColor: lightGrey,
  width: "230px",
  marginLeft: "64px",
  flexShrink: 0,
});

export const navigationItems = css({
  width: "200px",
  margin: "auto",
  justifyContent: "center",
  paddingTop: "30px",
});

export const navigationItem = css({
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
