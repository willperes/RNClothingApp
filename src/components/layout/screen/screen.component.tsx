import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";

import { useAppSafeArea } from "@/hooks/use-app-safe-area/use-app-safe-area.hook";
import { useAppTheme } from "@/hooks/use-app-theme/use-app-theme.hook";

import {
  ScrollViewContainer,
  ViewContainer,
} from "./components/screen-container.component";

import { Box, BoxProps } from "../box/box.component";

export interface ScreenProps extends BoxProps {
  aderComponent?: React.ReactNode;
  scrollable?: boolean;
  canGoBack?: boolean;
  title?: string;
  noHorizontalPadding?: boolean;
}

export function Screen({
  children,
  scrollable,
  canGoBack = false,
  title,
  style,
  noHorizontalPadding = false,
  ...boxProps
}: React.PropsWithChildren<ScreenProps>) {
  const { top, bottom } = useAppSafeArea();
  const { colors } = useAppTheme();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal={noHorizontalPadding ? undefined : "s24"}
          style={[
            {
              paddingTop: top,
              paddingBottom: bottom,
            },
            style,
          ]}
          {...boxProps}
        >
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
