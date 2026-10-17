import { StyleSheet, View } from 'react-native';

import { useTheme } from '../theme/ThemeProvider';
import { defaultRadius, type GlassSurfaceProps } from './types';

/**
 * iOS 18 redesign: SOLID surfaces only. No Liquid Glass, no blur, no transparency.
 * The expo-glass-effect import is removed entirely.
 * Props API unchanged for compatibility.
 */
export function GlassSurface({ variant = 'card', radius, style, children, ...rest }: GlassSurfaceProps) {
  const { colors } = useTheme();
  const borderRadius = radius ?? defaultRadius(variant);

  const isFloating = variant === 'floating' || variant === 'pill';

  return (
    <View
      style={[
        styles.base,
        isFloating && styles.floating,
        {
          borderRadius,
          backgroundColor: colors.card,
          borderColor: colors.separator,
        },
        style,
      ]}
      {...rest}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    overflow: 'hidden',
    borderWidth: StyleSheet.hairlineWidth,
  },
  floating: {
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#000000',
  },
});
