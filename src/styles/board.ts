import { css } from "@emotion/css";
import { grey2 } from "./colors";

export const boardFilters = css({
  display: "flex",
  flexDirection: "row",
  gap: "20px",
});

export const boardFilter = css({
  backgroundColor: "white",
  border: "none",
  color: grey2,
  borderRadius: "3px",
  fontSize: "14.5px",
});
