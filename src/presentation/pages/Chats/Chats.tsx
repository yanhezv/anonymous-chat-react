import React, { useContext, useState, useEffect } from "react";
import { Navigation } from "src/presentation/components/Navigation";
import { ChatItem } from "src/presentation/components/ChatItem";

import { Items, Item } from "./Chats.styled";
import { databaseContext } from "src/contexts/DatabaseContext";
import { IChat } from "src/services/interfaces";
import { useCurrentUser } from "src/hooks/useCurrentUser";

interface ChatsProps {
}

export const Chats: React.FC<ChatsProps> = ({ ...props}) => {
   const { user } = useCurrentUser();
   const { db } = useContext(databaseContext);
   const [chats, setChats] = useState<IChat[]>([]);

   useEffect(() => {
      if (db) {
         db.userChats.where('user_id').equals(user.id || 0).toArray().then(data => {
            console.log("USER CHATS",data);
            // setChats(data);
         });
      }
   }, [db])

   return (
      <Navigation title="Chats">

         <Items>
            {
               chats.map(chat => (
                  <Item key={chat.id}>
                     <ChatItem name={chat.name} message="" href="/" />
                  </Item>
               ))
            }
         </Items>
      </Navigation>
   );
}
