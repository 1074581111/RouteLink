import { Platform } from 'react-native';

export type Scheme = 'light' | 'dark';

/** 'monospace' is an Android alias only; iOS needs a real family name. */
export const MONO_FONT = Platform.select({ ios: 'Menlo', default: 'monospace' });

export interface Palette {
  /** iOS systemGroupedBackground: the plain page background. */
  background: string;
  /** iOS secondarySystemGroupedBackground: grouped lists and cards. */
  card: string;
  /** Sheets and the cards inside them (iOS elevated grouped colours; lighter in dark mode). */
  sheet: string;
  sheetCard: string;
  /** iOS tertiarySystemFill: text fields, pressed rows, selected options. */
  fill: string;
  text: string;
  textSecondary: string;
  textTertiary: string;
  separator: string;
  accent: string;
  accentText: string;
  success: string;
  warning: string;
  danger: string;
  /** Floating chrome (tab bar, bar buttons, sheets) where real Liquid Glass is not available. */
  glassFill: string;
  glassFillStrong: string;
  glassBorder: string;
  shadow: string;
  /** Series colours for charts: download, upload. */
  chartDown: string;
  chartUp: string;
}

/** iOS 26 system colours: grouped background, cards on top, glass only for floating chrome. */
/** iOS 18 redesign: SOLID colors only. No transparency, no glass effects.
 *  Dark mode follows iOS Settings app: pure black background, systemGray cards. */
export const palettes: Record<Scheme, Palette> = {
  light: {
    background: '#F2F2F7',
    card: '#FFFFFF',
    sheet: '#FFFFFF',
    sheetCard: '#F2F2F7',
    fill: '#E5E5EA',
    text: '#000000',
    textSecondary: '#3C3C43',
    textTertiary: '#8E8E93',
    separator: '#C6C6C8',
    accent: '#007AFF',
    accentText: '#FFFFFF',
    success: '#34C759',
    warning: '#FF9500',
    danger: '#FF3B30',
    glassFill: '#FFFFFF',
    glassFillStrong: '#FFFFFF',
    glassBorder: '#C6C6C8',
    shadow: '#000000',
    chartDown: '#007AFF',
    chartUp: '#30B0C7',
  },
  dark: {
    background: '#000000',
    card: '#1C1C1E',
    sheet: '#1C1C1E',
    sheetCard: '#2C2C2E',
    fill: '#2C2C2E',
    text: '#FFFFFF',
    textSecondary: '#98989F',
    textTertiary: '#636366',
    separator: '#38383A',
    accent: '#0A84FF',
    accentText: '#FFFFFF',
    success: '#30D158',
    warning: '#FF9F0A',
    danger: '#FF453A',
    glassFill: '#1C1C1E',
    glassFillStrong: '#2C2C2E',
    glassBorder: '#38383A',
    shadow: '#000000',
    chartDown: '#0A84FF',
    chartUp: '#40C8E0',
  },
};

export const radius = { card: 24, button: 16, field: 14, pill: 999 } as const;
export const spacing = { xs: 4, s: 8, m: 12, l: 16, xl: 24, xxl: 32 } as const;

export const type = {
  largeTitle: { fontSize: 34, fontWeight: '700', letterSpacing: 0.37 },
  title: { fontSize: 22, fontWeight: '700', letterSpacing: 0.35 },
  headline: { fontSize: 17, fontWeight: '600', letterSpacing: -0.41 },
  body: { fontSize: 17, fontWeight: '400', letterSpacing: -0.41 },
  subhead: { fontSize: 15, fontWeight: '400', letterSpacing: -0.24 },
  footnote: { fontSize: 13, fontWeight: '400', letterSpacing: -0.08 },
  caption: { fontSize: 12, fontWeight: '400', letterSpacing: 0 },
  mono: { fontSize: 13, fontFamily: MONO_FONT },
} as const;
