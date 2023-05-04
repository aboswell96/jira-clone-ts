import { css } from "@emotion/css";

export const boldText = {
  fontFamily: "CircularStdBold",
  fontStyle: "normal",
  fontWeight: "normal",
  src: `url('/fonts/CircularStd-Bold.woff2')`,
};

export const bookText = {
  fontFamily: "CircularStdBook",
  fontStyle: "normal",
  fontWeight: "normal",
  src: 'url("/fonts/CircularStd-Book.woff2") format(truetype)',
};

export const mediumText = {
  fontFamily: "CircularStdMedium",
  fontStyle: "normal",
  fontWeight: "normal",
  src: `url('/fonts/CircularStd-Medium.woff2')`,
};

export const getAvatarStyling = (
  backgroundImg: string,
  size: string,
  active: boolean
) => {
  return css({
    display: "block",
    backgroundImage: `url(${backgroundImg})`,
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "#ebecf0",
    borderRadius: "100%",
    // marginLeft: "auto",
    cursor: "pointer",
    height: size,
    width: size,
    outline: active ? "3px solid #4c9aff" : "none",
    flexShrink: 0,
  });
};

export const getTicketStyling = (darkTheme: boolean) => {
  return css({
    backgroundColor: darkTheme ? "#161b22" : "white",
    boxShadow: "rgb(9 30 66 / 25%) 0px 1px 2px 0px",
    transition: "background 0.1s ease 0s",
    borderRadius: "3px",
    cursor: "pointer",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "11px",
    color: darkTheme ? "white" : "#172b4d",
    fontFamily: "CircularStdBook",
    "&:hover": {
      backgroundColor: darkTheme ? "#21262d" : "#ebecf0",
    },
  });
};

export const getSiteMenuItemStyling = (expanded?: boolean) => {
  return css([
    {
      width: "auto",
      height: "40px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "3px",
      overflow: "hidden",
      fontFamily: "CircularStdBook",
      transition: "background 0.1s ease 0s",
      cursor: "pointer",
      "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
    },
    expanded && {
      gap: "15px",
      justifyContent: "flex-start",
      paddingLeft: "15px",
    },
  ]);
};
