import { Stack } from 'expo-router';
import type { ComponentProps } from 'react';
import { Platform } from 'react-native';

import { useTheme } from '@/ui/theme/ThemeProvider';

type StackOptions = NonNullable<ComponentProps<typeof Stack>['screenOptions']>;

/**
 * iOS 18 redesign: STANDARD opaque navigation headers. No transparency, no Liquid Glass.
 * A stack inside a tab or a modal. iOS: native large-title header with solid background.
 * Android: no native header — Screen draws the bar.
 * Titles and header items are set by each screen through <Screen title headerLeft headerRight>.
 */
export function AppStack() {
  const { colors } = useTheme();
  const screenOptions: StackOptions =
    Platform.OS === 'ios'
      ? {
          contentStyle: { backgroundColor: colors.background },
          headerLargeTitle: true,
          // ALWAYS opaque. No transparent headers on any iOS version.
          headerTransparent: false,
          headerShadowVisible: true,
          headerLargeTitleShadowVisible: false,
          headerTintColor: colors.accent,
          headerTitleStyle: { color: colors.text },
          headerLargeTitleStyle: { color: colors.text },
          // Explicit opaque bar background (iOS Settings app style)
          headerStyle: { backgroundColor: colors.background },
        }
      : { contentStyle: { backgroundColor: colors.background }, headerShown: false, animation: 'slide_from_right' };
  return <Stack screenOptions={screenOptions} />;
}
