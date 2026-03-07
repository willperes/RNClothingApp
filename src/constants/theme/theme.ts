import { createTheme } from '@shopify/restyle';
import { Colors } from './colors';

export const lightTheme = createTheme({
  colors: Colors.lightTheme,
  spacing: {
    s4: 4,
    s8: 8,
    s10: 10,
    s12: 12,
    s14: 14,
    s16: 16,
    s20: 20,
    s24: 24,
    s32: 32,
    s40: 40,
    s48: 48,
    s56: 56,
  },
  borderRadii: {
    s8: 8,
    s12: 12,
    s16: 16,
  },
  textVariants: {
    defaults: {},
  },
})

export type Theme = typeof lightTheme;
export type ThemeColors = typeof lightTheme.colors;

export const darkTheme: Theme = createTheme({ ...lightTheme, colors: Colors.darkTheme });