import React from "react";
import { Link } from 'react-router-dom';

import { Container, Title, Photo, Info, Message } from "./ChatItem.styled";

interface ChatItemProps {
   name: string;
   message?: string;
   href?: string;
   onClick?: () => void;
}

export const ChatItem: React.FC<ChatItemProps> = ({ name, message = "", href, onClick = () => {} }) => {
   if (href) {
      return (
         <Link to={href}>
            <Container>
               <Photo>{name[0]}</Photo>
               <Info>
                  <Title>{name}</Title>
                  <Message>{message}</Message>
               </Info>
            </Container>
         </Link>
      );
   }
   return (
      <Container onClick={onClick}>
         <Photo>{name[0]}</Photo>
         <Info>
            <Title>{name}</Title>
            <Message>{message}</Message>
         </Info>
      </Container>
   );
}
