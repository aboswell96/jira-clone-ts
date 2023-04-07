import { useMutation, useQuery } from "@tanstack/react-query";
import { queryClient } from "..";
import {
  SettingRepresentation,
  SettingsRepresentation,
} from "../types/settings";
import { settings } from "./apis";

export const useSettings = () => {
  return useQuery<SettingsRepresentation>(["settings"], async () => {
    const data = await fetch(settings);
    return await data.json();
  });
};

interface SettingMutationVariables {
  setting_name: string;
  setting_value: string;
}

export const useUpdateSettings = () => {
  const updateSettings = async (variables: SettingMutationVariables) => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        setting_name: variables.setting_name,
        setting_value: variables.setting_value,
      }),
    };
    const response = await fetch(
      settings + "/" + variables.setting_name,
      requestOptions
    );

    return await response.json();
  };

  return useMutation(updateSettings, {
    onSuccess: () => {
      queryClient.invalidateQueries(["settings"]);
    },
  });
};
