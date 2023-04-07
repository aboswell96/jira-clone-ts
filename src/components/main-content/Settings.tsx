import { useSettings, useUpdateSettings } from "../../services/settings";
import { mainText } from "../../styles/ticketModal";
import {
  EditableTextField,
  getTextAreaStyling,
} from "../common/EditableTextField";
import { PageHeader } from "./PageHeader";

export const Settings = () => {
  const settings = useSettings();

  const updateSettingsMutation = useUpdateSettings();

  const projectName = settings?.data?.settings.filter(
    (s) => s.setting_name === "projectName"
  )?.[0]?.setting_value;

  const projectDescription = settings?.data?.settings.filter(
    (s) => s.setting_name === "projectDescription"
  )?.[0]?.setting_value;

  return (
    <div>
      <PageHeader pageName="Settings" />
      <div className={mainText}>Project Name</div>
      {!settings.isLoading && (
        <EditableTextField
          initValue={projectName || ""}
          onSubmit={(newVal: string) =>
            updateSettingsMutation.mutate({
              setting_name: "projectName",
              setting_value: newVal,
            })
          }
          css={getTextAreaStyling("35%", "24px", "35px", "20px", "12px")}
        />
      )}
      <div className={mainText}>Project Description</div>
      {!settings.isLoading && (
        <EditableTextField
          initValue={projectDescription || ""}
          onSubmit={(newVal: string) =>
            updateSettingsMutation.mutate({
              setting_name: "projectDescription",
              setting_value: newVal,
            })
          }
          css={getTextAreaStyling("35%", "24px", "35px", "20px", "12px")}
        />
      )}
    </div>
  );
};
