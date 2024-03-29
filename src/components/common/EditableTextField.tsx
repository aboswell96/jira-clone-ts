import { css } from "@emotion/css";
import { useState } from "react";
import { Button, getButtonStyling } from "./Button";

interface EditableTextFieldProps {
  initValue?: string;
  css?: string;
  onSubmit: (newVal: string) => any;
}

export const EditableTextField = ({
  initValue = "",
  onSubmit,
  css,
}: EditableTextFieldProps) => {
  const [editting, setEditting] = useState(false);
  const [value, setValue] = useState(initValue || "");
  const defaultValue = initValue;

  const onChange = (e: any) => {
    if (!editting) {
      setEditting(true);
    }
    setValue(e.target.value);
  };

  const onSave = () => {
    onSubmit(value);
    setEditting(false);
  };

  const onCancel = () => {
    setEditting(false);
    setValue(defaultValue);
  };

  return (
    <div>
      <textarea className={css} value={value} onChange={onChange}></textarea>
      {editting && (
        <div>
          <Button
            text={"Save changes"}
            css={getButtonStyling("#0052cc", "white", "", "#005eeb")}
            onClick={onSave}
          />
          <Button
            text={"Cancel"}
            css={getButtonStyling("", "", "", "#dfe1e6")}
            onClick={onCancel}
          />
        </div>
      )}
    </div>
  );
};

export const getTextAreaStyling = (
  width?: string,
  height?: string,
  minHeight?: string,
  fontSize?: string,
  marginTop?: string,
  darkTheme?: boolean
) => {
  return css({
    width: width || "",
    height: height || "",
    minHeight: minHeight || "",
    backgroundColor: darkTheme ? "#161b22" : "#f4f5f7",
    border: "1px solid white",
    borderRadius: "4px",
    outline: "none",
    fontSize: fontSize,
    paddingTop: "1px",
    marginTop: marginTop || "",
    color: darkTheme ? "white" : "black",
    resize: "none",
    fontFamily: "CircularStdBook",
    "&:hover": {
      backgroundColor: darkTheme ? "#21262d" : "#ebecf0",
    },
    "&:focus": {
      backgroundColor: darkTheme ? "#21262d" : "white",
      border: "2px solid #4c9aff",
      paddingTop: "0",
      paddingLeft: "1px",
      paddingRight: "1px",
      paddingBottom: "0",
    },
  });
};
