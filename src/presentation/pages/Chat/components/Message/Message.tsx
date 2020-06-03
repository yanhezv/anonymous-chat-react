import React from "react";

import { Container, Card, Text, Nick } from "./Message.styled";

interface MessageProps {
   nick: string;
   message: string;
   align: 'left' | 'right';
   onDelete?: () => void;
}

export const Message: React.FC<MessageProps> = ({ nick, message = "", align = 'left', onDelete = () => {} }) => {
   return (
      <Container $align={align}>
         <Card $align={align}>
            <Nick $align={align}>{nick}</Nick>
            <Text>{message}</Text>
         </Card>
      </Container>
   );
}
