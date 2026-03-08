import React from "react";
import { useColorScheme } from "react-native";

import { ThemeProvider } from "@shopify/restyle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { darkTheme, lightTheme } from "@/constants/theme";
import { AuthProvider } from "@/providers/auth/auth.provider";
import AppTabs from "@/routes/app-tabs.component";

const queryClient = new QueryClient();

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider theme={colorScheme === "dark" ? lightTheme : darkTheme}>
          <AppTabs />
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
