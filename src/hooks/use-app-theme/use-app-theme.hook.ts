import { useTheme } from "@shopify/restyle";

import { Theme } from "@/constants/theme";

export function useAppTheme() {
  return useTheme<Theme>();
}
