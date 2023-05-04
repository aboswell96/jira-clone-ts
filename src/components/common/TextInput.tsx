import { css } from "@emotion/css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useContext } from "react";
import { ThemeContext } from "../../App";

interface TextInputProps {
  value: string;
  onChange: any;
  placeholder?: string;
  width?: string;
}

export const TextInput = ({
  value,
  onChange,
  placeholder,
  width,
}: TextInputProps) => {
  const themeContext = useContext(ThemeContext);
  return (
    <div className={css({ position: "relative" })}>
      <input
        className={css({
          height: "28px",
          color: themeContext.theme === "light" ? "black" : "white",
          backgroundColor:
            themeContext.theme === "light" ? "#f4f5f7" : "#161b22",
          border: "1px solid #dfe1e6",
          borderRadius: "4px",
          outline: "none",
          textIndent: "35px",
          fontFamily: "CircularStdBook",
          "&:hover": {
            backgroundColor:
              themeContext.theme === "light" ? "#ebecf0" : "#21262d",
          },
          "&:focus": {
            backgroundColor:
              themeContext.theme === "light" ? "white" : "#21262d",
            outline: "2px solid #4c9aff",
          },
        })}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      ></input>
      <div className={css({ position: "absolute", top: "5px", left: "10px" })}>
        <SearchOutlinedIcon
          color={themeContext.theme === "light" ? "disabled" : "primary"}
        />
      </div>
    </div>
  );
};
