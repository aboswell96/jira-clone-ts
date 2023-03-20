import { css } from "@emotion/css";

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
    marginLeft: "auto",
    cursor: "pointer",
    height: size,
    width: size,
    outline: active ? "3px solid #4c9aff" : "none",
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
    "&:hover": {
      backgroundColor: darkTheme ? "#21262d" : "#ebecf0",
    },
  });
};
