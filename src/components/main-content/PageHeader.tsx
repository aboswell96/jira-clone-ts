import { css } from "@emotion/css";
import { useSettings } from "../../services/settings";
import { grey } from "../../styles/colors";

interface PageHeaderProps {
  pageName: string;
}

export const PageHeader = ({ pageName }: PageHeaderProps) => {
  const { data, isLoading } = useSettings();
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
        })}
      >
        {["Projects", name, pageName].join(" / ")}
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
