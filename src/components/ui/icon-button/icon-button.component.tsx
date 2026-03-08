import { PressableBox } from "@/components/layout";

import { Icon, IconProps } from "../icon/icon.component";

export interface IconButtonComponentProps {
  icon: IconProps["name"];
  size?: number;
  onPress: () => void;
}

export function IconButtonComponent({
  icon,
  size = 16,
  onPress,
}: IconButtonComponentProps) {
  return (
    <PressableBox onPress={onPress}>
      <Icon name={icon} size={size} />
    </PressableBox>
  );
}
