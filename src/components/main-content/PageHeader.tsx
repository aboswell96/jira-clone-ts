import { css } from "@emotion/css";
import { useSettings } from "../../services/settings";
import { grey } from "../../styles/colors";
import { useContext } from "react";
import { ThemeContext } from "../../App";

interface PageHeaderProps {
  pageName: string;
}

export const PageHeader = ({ pageName }: PageHeaderProps) => {
  const { data, isLoading } = useSettings();
  const themeContext = useContext(ThemeContext);

  const name = data?.settings.filter(
    (setting) => setting.setting_name === "projectName"
  )?.[0]?.setting_value;

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
          fontFamily: "CircularStdMedium",
        })}
      >
        {["Projects", name, pageName].join(" / ")}
      </div>
      <div
        className={css({
          whiteSpace: "nowrap",
          marginTop: "10px",
          fontSize: "24px",
          fontFamily: "CircularStdMedium",
          color: themeContext.theme === "light" ? "black" : "white",
        })}
      >
        {pageName}
      </div>
    </div>
  );
};
