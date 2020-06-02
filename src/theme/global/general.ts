import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
   html {
      box-sizing: border-box;
      color: #262626;
   }

   *,
   *::before,
   *::after {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
   }

   ul {
      list-style: none;
   }

   a {
      text-decoration: none;
      color: inherit;
   }
`;
