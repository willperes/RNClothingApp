import React from "react";

import { NativeTabs } from "expo-router/unstable-native-tabs";

import { useAppTheme } from "@/hooks/use-app-theme/use-app-theme.hook";

export default function AppTabs() {
  const theme = useAppTheme();

  return (
    <NativeTabs
      backgroundColor={theme.colors.background}
      indicatorColor={theme.colors.backgroundSecondary}
      labelStyle={{ selected: { color: theme.colors.textPrimary } }}
    >
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          src={require("@/assets/images/tabIcons/home.png")}
          renderingMode="template"
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="explore">
        <NativeTabs.Trigger.Label>Explore</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          src={require("@/assets/images/tabIcons/explore.png")}
          renderingMode="template"
        />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
