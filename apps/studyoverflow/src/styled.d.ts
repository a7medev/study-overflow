import 'styled-components/native';

import { Theme } from './config/theme';

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {}
}
