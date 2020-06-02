import { } from 'styled-components';
import { chatTheme } from './theme/Theme';

declare module 'styled-components' {
   type Theme = typeof chatTheme;
   export interface DefaultTheme extends Theme { }
}
