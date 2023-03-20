import { css } from "@emotion/css";
import { grey } from "../../styles/colors";

interface PageHeaderProps {
  projectName: string;
  pageName: string;
}

export const PageHeader = ({ projectName, pageName }: PageHeaderProps) => {
  return (
    <div>
      <div
        className={css({
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          whiteSpace: "nowrap",
          color: grey,
          fontSize: "15px",
        })}
      >
        {["Projects", projectName, pageName].join(" / ")}
      </div>
      <div
        className={css({
          whiteSpace: "nowrap",
          marginTop: "10px",
          fontSize: "24px",
        })}
      >
        {pageName}
      </div>
    </div>
  );
};
