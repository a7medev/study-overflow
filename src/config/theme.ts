import { Platform } from 'react-native';

const FONT_FAMILY =
  Platform.OS === 'android' ? 'IBMPlexSansArabic-' : 'IBM Plex Sans Arabic ';

const theme = {
  colors: {
    primary: '#2C3141',
    secondary: '#985028',
    secondaryLight: '#CE8F6C',
    background: '#FFF1EA',
    white: '#FFFFFF',
    black: '#000000',
    error: '#dc1c1c',
  },
  fonts: {
    regular: FONT_FAMILY + 'Regular',
    bold: FONT_FAMILY + 'Bold',
  },
};

export type Theme = typeof theme;
export default theme;
