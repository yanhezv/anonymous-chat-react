import React, { useContext, useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';

import { Navigation } from "src/presentation/components/Navigation";
import { databaseContext } from "src/contexts/DatabaseContext";
import { IUser, IChat, ChatType } from "src/services/interfaces";

import { Items, Item } from "./Users.styled";
import { ChatItem } from "src/presentation/components/ChatItem";
import { useCurrentUser } from "src/hooks/useCurrentUser";

interface UsersProps {}

export const Users: React.FC<UsersProps> = () => {
   const history           = useHistory();
   const { user }          = useCurrentUser();
   const { db }            = useContext(databaseContext);
   const [users, setUsers] = useState<IUser[]>([]);

   const handleClick = (userSelected: IUser) => {
      if (db && userSelected.id) {
         const chat: IChat = {
            name: userSelected.nick,
            type: ChatType.Private,
         }
         db.chats.add(chat).then((chatId) => {
            Promise.all([
               db.userChats.add({user_id: user.id || 0, chat_id: chatId}),
               db.userChats.add({user_id: userSelected.id || 0, chat_id: chatId}),
            ]).then(() => {
               history.push(`/chat/${chatId}`)
            })
         })
      }
   };

   useEffect(() => {
      if (db) {
         db.users.toArray().then(data => {
            setUsers(data);
         });
      }
   }, [db])

   return (
      <Navigation title="Usuarios">
         <Items>
            {
               users.map(value =>{
                  if (value.id === user.id) {
                     return null;
                  }
                  return (
                     <Item key={value.id}>
                        <ChatItem name={value.nick} onClick={() => handleClick(value)} />
                     </Item>
                  )
               })
            }
         </Items>
      </Navigation>
   );
}
