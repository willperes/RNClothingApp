import React from "react";
import { useColorScheme } from "react-native";

import { ThemeProvider } from "@shopify/restyle";

import { darkTheme, lightTheme } from "@/constants/theme";
import AppTabs from "@/routes/app-tabs.component";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider theme={colorScheme === "dark" ? lightTheme : darkTheme}>
      <AppTabs />
    </ThemeProvider>
  );
}
