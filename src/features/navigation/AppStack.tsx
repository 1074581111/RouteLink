import { Stack } from 'expo-router';
// isLiquidGlassAvailable() from expo-glass-effect misreports on some iOS 18 devices,
// so use an explicit OS version check instead.
import type { ComponentProps } from 'react';
import { Platform } from 'react-native';

import { useTheme } from '@/ui/theme/ThemeProvider';

type StackOptions = NonNullable<ComponentProps<typeof Stack>['screenOptions']>;

// Liquid Glass (iOS 26+) renders its edge effect over a transparent header. On earlier iOS
// there is no such effect: a transparent header lets scrolled content show through and
// overlap the title, so fall back to the standard bar background there.
// NOTE: explicit version check — isLiquidGlassAvailable() misreports true on iOS 18.
const IOS_MAJOR = Platform.OS === 'ios' ? parseInt(String(Platform.Version).split('.')[0], 10) : 0;
const LIQUID_GLASS = IOS_MAJOR >= 26;

/**
 * A stack inside a tab or a modal. iOS: native large-title header, transparent on iOS 26 so
 * the system renders its glass edge effect, standard bar background on earlier iOS.
 * Android: no native header — Screen draws an iOS 26–style bar. Titles and header items are
 * set by each screen through <Screen title headerLeft headerRight>.
 */
export function AppStack() {
  const { colors } = useTheme();
  const screenOptions: StackOptions =
    Platform.OS === 'ios'
      ? {
          // An explicit grouped background: iOS would paint the system background (white) here,
          // and white cards would disappear on it in light mode.
          contentStyle: { backgroundColor: colors.background },
          headerLargeTitle: true,
          headerTransparent: LIQUID_GLASS,
          headerShadowVisible: false,
          headerLargeTitleShadowVisible: false,
          headerTintColor: colors.accent,
          headerTitleStyle: { color: colors.text },
          headerLargeTitleStyle: { color: colors.text },
        }
      : { contentStyle: { backgroundColor: colors.background }, headerShown: false, animation: 'slide_from_right' };
  return <Stack screenOptions={screenOptions} />;
}
