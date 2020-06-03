import React, { useContext, useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';

import { Navigation } from "src/presentation/components/Navigation";
import { Loading } from "src/presentation/components/Loading";
import { ChatItem } from "src/presentation/components/ChatItem";
import { databaseContext } from "src/contexts/DatabaseContext";
import { useCurrentUser } from "src/hooks/useCurrentUser";
import { IUser, IChat, ChatType } from "src/services/interfaces";

import { Items, Item } from "./Users.styled";

interface UsersProps {}

export const Users: React.FC<UsersProps> = () => {
   const history           = useHistory();
   const { user }          = useCurrentUser();
   const { db }            = useContext(databaseContext);

   const [users, setUsers]     = useState<IUser[]>([]);
   const [loading, setLoading] = useState(true);

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
         db.users.where('id').notEqual(user.id || 0).toArray()
         .then(data => {
            setUsers(data);
            setLoading(false);
         });
      }
   }, [db])

   return (
      <Navigation title="Usuarios" itemActived="3">
         {
            users.length > 0 ? (
               <Items>
                  {
                     users.map(value => (
                        <Item key={value.id}>
                           <ChatItem name={value.nick} onClick={() => handleClick(value)} />
                        </Item>
                     ))
                  }
               </Items>
            ) : (
               <Loading message={loading ? 'Cargando usuarios. Espere por favor.' : 'No existen usuarios por el momento.'} />
            )
         }
      </Navigation>
   );
}
