import React from "react";
import { Text } from "react-native";

import { Screen } from "@/components/layout";
import { useAppTheme } from "@/hooks/use-app-theme/use-app-theme.hook";

export default function ExploreScreen() {
  const theme = useAppTheme();

  return (
    <Screen flex={1} alignItems="center" justifyContent="center">
      <Text style={{ color: theme.colors.backgroundContrast }}>
        Explore Page
      </Text>
    </Screen>
  );
}
