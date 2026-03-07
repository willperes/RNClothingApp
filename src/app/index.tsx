import { Text } from "react-native";

import { Screen } from "@/components/screen/screen.component";
import { useAppTheme } from "@/hooks/use-app-theme/use-app-theme.hook";

export default function HomeScreen() {
  const theme = useAppTheme();

  return (
    <Screen flex={1} alignItems="center" justifyContent="center">
      <Text style={{ color: theme.colors.backgroundContrast }}>Home Page</Text>
    </Screen>
  );
}
