import { ThemeColor } from "@/constants/theme";

export type IconButtonVariant = "primary";

type IconButtonUI = {
  fillColor: ThemeColor;
  backgroundColor: ThemeColor;
};

export const iconButtonVariants: Record<
  IconButtonVariant,
  { default: IconButtonUI; disabled: IconButtonUI }
> = {
  primary: {
    default: {
      fillColor: "primaryContrast",
      backgroundColor: "primary",
    },
    disabled: {
      // TODO: Add disabled color
      fillColor: "primaryContrast",
      backgroundColor: "primary",
    },
  },
};
