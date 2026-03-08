import React from "react";
import { Pressable } from "react-native";

import { BrokenBag2Icon } from "@/assets/icons/broken-bag-2.component";
import { ThemeColor } from "@/constants/theme";
import { useAppTheme } from "@/hooks/use-app-theme/use-app-theme.hook";
import { moderateScale } from "@/utils/layout/layout.utils";

export interface IconBaseProps {
  size: number;
  color: string;
  fillColor: string;
}

export interface IconProps {
  name: IconName;
  color?: ThemeColor;
  fillColor?: ThemeColor;
  size?: number;
  onPress?: () => void;
}

export function Icon({
  name,
  color = "backgroundContrast",
  fillColor = "background",
  size = 16,
  onPress,
}: IconProps) {
  const { colors } = useAppTheme();

  const SVGIcon = iconRegistry[name];
  const iconProps: React.ComponentProps<typeof SVGIcon> = {
    size: moderateScale(size),
    color: colors[color],
    fillColor: colors[fillColor],
  };

  if (onPress) {
    return (
      <Pressable testID={`Icon-${name}`} hitSlop={10} onPress={onPress}>
        <SVGIcon {...iconProps} />
      </Pressable>
    );
  }

  return <SVGIcon {...iconProps} />;
}

const iconRegistry = {
  brokenBag2: BrokenBag2Icon,
};

type IconType = typeof iconRegistry;
type IconName = keyof IconType;
