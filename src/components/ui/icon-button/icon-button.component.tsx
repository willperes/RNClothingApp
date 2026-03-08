import { PressableBox, PressableBoxProps } from "@/components/layout";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "@/utils/layout/layout.utils";

import { iconButtonVariants } from "./icon-button.presets";

import { Icon, IconProps } from "../icon/icon.component";

export interface IconButtonProps extends PressableBoxProps {
  icon: IconProps["name"];
  variant?: "primary";
  disabled?: boolean;
  onPress: () => void;
}

export function IconButton({
  icon,
  variant = "primary",
  disabled = false,
  onPress,
  ...pressableBoxProps
}: IconButtonProps) {
  const preset = iconButtonVariants[variant][disabled ? "disabled" : "default"];

  return (
    <PressableBox
      {...pressableBoxProps}
      onPress={onPress}
      width={horizontalScale(40)}
      height={verticalScale(40)}
      alignItems="center"
      justifyContent="center"
      backgroundColor={preset.backgroundColor}
      style={{ borderRadius: 1000 }}
    >
      <Icon name={icon} size={moderateScale(16)} color={preset.fillColor} />
    </PressableBox>
  );
}
