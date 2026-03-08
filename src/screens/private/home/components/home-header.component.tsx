import { Box } from "@/components/layout";
import { IconButton, UserPicture } from "@/components/ui";
import { useAuth } from "@/providers/auth/auth.provider";

export function HomeHeader() {
  const { currentUser } = useAuth();

  return (
    <Box flexDirection="row" alignItems="center" justifyContent="space-between">
      <UserPicture
        size="small"
        pictureURL={currentUser?.profilePicture ?? null}
      />
      <IconButton variant="primary" icon="brokenBag2" onPress={() => {}} />
    </Box>
  );
}
