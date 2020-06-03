import React, { useState } from "react";

import { IGroup } from "src/services/interfaces";
import { Navigation } from "src/presentation/components/Navigation";
import { ChatItem } from "src/presentation/components/ChatItem";
import { Loading } from "src/presentation/components/Loading";

import { Items, Item } from "./Groups.styled";

interface GroupsProps {}

export const Groups: React.FC<GroupsProps> = () => {

   const [groups]  = useState<IGroup[]>([]);
   const [loading] = useState(false);

   return (
      <Navigation title="Grupos" itemActived="2">
         {
            groups.length > 0 ? (
               <Items>
                  {
                     groups.map(group => (
                        <Item key={group.id}>
                           <ChatItem name={group.name} href={`/chat/${group.chat_id}`} />
                        </Item>
                     ))
                  }
               </Items>
            ) : (
               <Loading message={loading ? 'Cargando grupos.' : 'No cuenta con grupos disponibles.'} />
            )
         }
      </Navigation>
   );
}
