import React, { useContext, useState, useEffect } from "react";
import { useParams, useHistory } from 'react-router-dom';
import { databaseContext } from "src/contexts/DatabaseContext";
import { IChat, IMessage } from "src/services/interfaces";

import { AppBar } from "src/presentation/components/AppBar";
import { Message } from "./components/Message";
import { Container, Messages, InputContainer, Input, SendButton } from "./Chat.styled";
import { useCurrentUser } from "src/hooks/useCurrentUser";

interface ChatProps {
}

export const Chat: React.FC<ChatProps> = ({ ...props}) => {

   const history    = useHistory();
   const { user }   = useCurrentUser();
   const { chatId } = useParams();
   const { db }     = useContext(databaseContext);

   const [chat, setChat]         = useState<IChat | null>(null);
   const [messages, setMessages] = useState<IMessage[]>([]);
   const [currentMessage, setCurrentMessage] = useState('');

   const handleClick = () => {
      console.log("CLICKKC", currentMessage);
      if(db && chat !== null) {
         db.messages.add({ chat_id: parseInt(chatId, 10) || 0, message: currentMessage, nick: user.nick })
         .then(()=> {
            db.messages.where('chat_id').equals(parseInt(chatId, 10) || 0).toArray()
            .then((msgs) => {
               setMessages(msgs);
            })
         })
      }
   }
   const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCurrentMessage(e.target.value);
   }

   useEffect(() => {
      if (db) {
         db.chats.where('id').equals(parseInt(chatId, 10) || 0).toArray()
         .then(data => {
            if(data.length > 0) {
               console.log("DATOSSS");

               db.messages.where('chat_id').equals(parseInt(chatId, 10) || 0).toArray()
               .then((msgs) => {
                  console.log("DATOSSS--------------");
                  setChat(data[0]);
                  console.log(msgs);

                  setMessages(msgs);
               })
            } else {
               history.push('/chats');
            }
         });
      }
   }, [db])

   if (chat === null) {
      return (
         <Container>
            <span>Cargando</span>
         </Container>
      )
   }

   return (
      <Container>
         <AppBar title={`${chat.name}`} />
         <Messages>
            {
               messages.map((message) => (
                  <Message
                     key     = {message.id}
                     nick    = {message.nick}
                     message = {message.message}
                     align   = { user.nick === message.nick ? 'right' : 'left'}
                  />
               ))
            }
         </Messages>
         <InputContainer>
            <Input
               placeholder = "Nuevo mensaje"
               value       = {currentMessage}
               onChange    = {handleChangeInput}
            />
            <SendButton onClick={handleClick}>Enviar</SendButton>
         </InputContainer>
      </Container>
   );
}
