import { css } from "@emotion/css";

export const topRow = css({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  gap: "10px",
});

export const ticketPanels = css({ display: "flex", flexDirection: "row" });

export const mainPanel = css({ width: "65%" });

export const sidePanel = css({ width: "35%", marginLeft: "50px" });

export const mainText = css({
  display: "block",
  paddingTop: "25px",
  color: "#172b4d",
  marginLeft: "3px",
});

export const subText = css({
  fontSize: "14.5px",
  color: "#42526E",
  marginTop: "2px",
  marginLeft: "3px",
});

export const subTitle = css({
  paddingTop: "25px",
  fontSize: "12.5px",
  color: "#172b4d",
});
