import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Title, BackButton } from './AppBarChat.styled';

interface AppBarChatProps {
   title: string;
}

export const AppBarChat: React.FC<AppBarChatProps> = ({ title }) => {
   const history = useHistory();

   const handleBackButton = () => {
      history.goBack();
   }

   return (
      <Container>
         <BackButton onClick={handleBackButton}>Regresar</BackButton>
         <Title>{title}</Title>
      </Container>
   );
}
