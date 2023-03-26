import { css } from "@emotion/css";

interface ButtonProps {
  css?: string;
  text: string;
  onClick: any;
}

export const Button = ({ css, text, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={css}>
      {text}
    </button>
  );
};

export const getButtonStyling = (
  backgroundColor: string,
  color: string,
  marginTop: string,
  hoverColor: string
) => {
  return css({
    backgroundColor: backgroundColor,
    width: "115px",
    height: "30px",
    borderRadius: "4px",
    border: `1px solid ${backgroundColor}`,
    color: color,
    fontSize: "14.5px",
    marginTop: marginTop,
    "&:hover": {
      backgroundColor: hoverColor,
      cursor: "pointer",
    },
    "&:active": {
      backgroundColor: "#004ab8",
    },
  });
};
