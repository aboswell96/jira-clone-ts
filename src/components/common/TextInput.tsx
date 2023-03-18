import { css } from "@emotion/css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

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
  return (
    <div className={css({ position: "relative" })}>
      <input
        className={css({
          height: "28px",
          color: "black",
          backgroundColor: "#f4f5f7",
          border: "1px solid #dfe1e6",
          borderRadius: "4px",
          outline: "none",
          textIndent: "35px",
        })}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      ></input>
      <div className={css({ position: "absolute", top: "5px", left: "10px" })}>
        <SearchOutlinedIcon color={"disabled"} />
      </div>
    </div>
  );
};
