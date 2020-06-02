import React from "react";
import { Link } from 'react-router-dom';

import { Container, Title, EditButton } from "./AppBar.styled";

interface AppBarProps {
   title: string;
}

export const AppBar: React.FC<AppBarProps> = ({ title, ...props}) => {

   return (
      <Container>
         <Title>{title}</Title>
         <EditButton>
            <Link to="edit">Editar</Link>
         </EditButton>
      </Container>
   );
}
