import { Image } from "expo-image";

import { Box } from "@/components/layout";
import { horizontalScale, verticalScale } from "@/utils/layout/layout.utils";

type UserPictureSize = "small" | "medium" | "large";

interface UserPictureProps {
  pictureURL: string | null;
  size?: UserPictureSize;
}

export function UserPicture({ pictureURL, size = "medium" }: UserPictureProps) {
  const imageDimensions = sizes[size];
  const width = horizontalScale(imageDimensions);
  const height = verticalScale(imageDimensions);

  if (!pictureURL) {
    return (
      <Box
        width={width}
        height={height}
        bg="iconSecondary"
        style={{ borderRadius: 1000 }}
      />
    );
  }

  return (
    <Image
      source={pictureURL}
      style={{
        width: width,
        height: height,
        borderRadius: 1000,
      }}
    />
  );
}

const sizes: Record<UserPictureSize, number> = {
  small: 40,
  medium: 60,
  large: 80,
};
