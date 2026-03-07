import { Theme } from "@/constants/theme";
import { useTheme } from "@shopify/restyle";

export function useAppTheme() {
  return useTheme<Theme>();
}