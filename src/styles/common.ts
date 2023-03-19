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
