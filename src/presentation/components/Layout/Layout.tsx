import React from "react";
import { Container, Application } from "./Layout.styled";

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({children}) => {
   return (
      <Container>
         <Application>
            { children }
         </Application>
      </Container>
   );
}
