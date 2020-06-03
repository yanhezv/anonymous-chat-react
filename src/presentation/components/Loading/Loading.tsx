import React from "react";

import { Container, Text } from "./Loading.styled";

interface LoadingProps {
   message: string;
}

export const Loading: React.FC<LoadingProps> = ({ message }) => {
   return (
      <Container>
         <Text>{message}</Text>
      </Container>
   );
}
