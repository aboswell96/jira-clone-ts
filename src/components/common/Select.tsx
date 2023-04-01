import { css } from "@emotion/css";
import { useState } from "react";
import { subTitle } from "../../styles/ticketModal";

export interface SelectItem {
  text: string;
  img?: JSX.Element;
  id: string;
}

export interface SelectProps {
  value?: string;
  items?: SelectItem[];
  header: string;
  onSelectItem: (itemId: string) => any;
}

const currentValue = css({
  backgroundColor: "#F4F5F7",
  height: "32px",
  fontSize: "12px",
  color: "#172B4D",
  cursor: "pointer",
  width: "169px",
  border: "1px solid #dfe1e6",
  "&:hover": { backgroundColor: "#ebecf0" },
});

const itemStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "5px",
  justifyContent: "center",
  height: "inherit",
});

export const Select = ({ value, items, header, onSelectItem }: SelectProps) => {
  const [expanded, setExpanded] = useState(false);
  // console.log(value);
  // console.log(items);
  return (
    <div>
      <div className={subTitle}>{header}</div>
      <div
        className={css({ width: "170px" })}
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        <div className={currentValue}>
          <div className={itemStyle}>
            {items?.filter((i) => i.id === value)?.[0]?.img}
            {items?.filter((i) => i.id === value)?.[0]?.text}
          </div>
        </div>
        <div>
          {expanded &&
            items
              ?.filter((i) => {
                return i.id !== value;
              })
              .map((item) => {
                return (
                  <div
                    className={currentValue}
                    onClick={() => {
                      // setValue(item.id);
                      onSelectItem(item.id);
                    }}
                    key={item.id}
                    // style={{ position: "absolute" }}
                  >
                    <div className={itemStyle}>
                      {item?.img}
                      {item.text}
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};
