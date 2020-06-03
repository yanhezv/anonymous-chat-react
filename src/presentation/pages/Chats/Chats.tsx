import React, { useContext, useState, useEffect } from "react";
import { Navigation } from "src/presentation/components/Navigation";
import { ChatItem } from "src/presentation/components/ChatItem";

import { Items, Item } from "./Chats.styled";
import { databaseContext } from "src/contexts/DatabaseContext";
import { IChat } from "src/services/interfaces";
import { useCurrentUser } from "src/hooks/useCurrentUser";
import { Loading } from "src/presentation/components/Loading";

interface ChatsProps {}

export const Chats: React.FC<ChatsProps> = () => {
   const { user }              = useCurrentUser();
   const { db }                = useContext(databaseContext);
   const [chats, setChats]     = useState<IChat[]>([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      if (db) {
         db.userChats.where('user_id').equals(user.id || 0).toArray().then(data => {
            const arrayChats = data.map(value => value.chat_id);
            db.chats.bulkGet(arrayChats).then(resp => {
               setChats(resp);
               setLoading(false);
            })
         });
      }
   }, [db])

   return (
      <Navigation title="Chats" itemActived="1">
         {
            chats.length > 0 ? (
               <Items>
                  {
                     chats.map(chat => (
                        <Item key={chat.id}>
                           <ChatItem name={chat.name} href={`/chat/${chat.id}`} />
                        </Item>
                     ))
                  }
               </Items>
            ) : (
               <Loading message={loading ? 'Cargando chats.' : 'No cuenta con chats disponibles.'}/>
            )
         }
      </Navigation>
   );
}
