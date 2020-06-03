import React, { useState, useEffect } from "react";

import { Container, Input, Title, EditButton } from "./AppBar.styled";
import { useCurrentUser } from "src/hooks/useCurrentUser";

interface AppBarProps {
   title: string;
}

export const AppBar: React.FC<AppBarProps> = ({ title }) => {
   const {user, edit }           = useCurrentUser();
   const [isEditing, setEditing] = useState(false);
   const [newNick, setNewNick]   = useState('');

   const handleEditButton = () => {
      if (isEditing && newNick.length > 0) {
         edit({...user, nick: newNick });
      }
      else {
         setNewNick(user.nick);
      }

      setEditing(!isEditing);
   }

   const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewNick(e.target.value);
   }

   useEffect(() => {
      setNewNick(user.nick);
   }, [user])

   return (
      <Container>
         {
            isEditing ? (
               <Input
                  value       = {newNick}
                  onChange    = {handleChangeInput}
                  placeholder = "Nombre de usuario"
               />
            ): (
               <Title>{title}</Title>
            )
         }
         <EditButton onClick={handleEditButton}>{ isEditing ? 'Guardar': 'Editar'}</EditButton>
      </Container>
   );
}
