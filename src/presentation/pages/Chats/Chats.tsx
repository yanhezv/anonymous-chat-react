import React from "react";
import { Navigation } from "src/presentation/components/Navigation";
import { ChatItem } from "src/presentation/components/ChatItem";

import { Items, Item } from "./Chats.styled";

interface ChatsProps {
}

export const Chats: React.FC<ChatsProps> = ({ ...props}) => {

   return (
      <Navigation title="Chats">
         <Items>
            <Item>
               <ChatItem name="Omar Villanueva" message="Sin mensajes" href="/chat"/>
            </Item>
            <Item>
               <ChatItem name="Omar Villanueva" message="Sin mensajes" href="/chat"/>
            </Item>
            <Item>
               <ChatItem name="Omar Villanueva" message="Sin mensajes" href="/chat"/>
            </Item>
            <Item>
               <ChatItem name="Omar Villanueva" message="Sin mensajes" href="/chat"/>
            </Item>
         </Items>
      </Navigation>
   );
}
