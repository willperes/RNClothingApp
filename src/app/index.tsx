import { Text } from "react-native";

import { Screen } from "@/components/screen/screen.component";
import { useGetUserDetails } from "@/domain/user/hooks/get-user-details.hook";
import { useAppTheme } from "@/hooks/use-app-theme/use-app-theme.hook";

export default function HomeScreen() {
  const { data: userDetails } = useGetUserDetails();
  const theme = useAppTheme();

  return (
    <Screen flex={1} alignItems="center" justifyContent="center">
      <Text style={{ color: theme.colors.backgroundContrast }}>Home Page</Text>
      {userDetails && (
        <Text style={{ color: theme.colors.backgroundContrast }}>
          {userDetails.fullName}
        </Text>
      )}
    </Screen>
  );
}
