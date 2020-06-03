import React, { useState } from "react";

import { Navigation } from "src/presentation/components/Navigation";
import { ChatItem } from "src/presentation/components/ChatItem";
import { Loading } from "src/presentation/components/Loading";

import { Items, Item } from "./Searcher.styled";

interface SearcherProps {
}

export const Searcher: React.FC<SearcherProps> = ({ ...props}) => {
   const [results] = useState<any[]>([]);
   const [loading] = useState(false);

   return (
      <Navigation title="Buscador" itemActived="4">
         {
            results.length > 0 ? (
               <Items>
                  {
                     results.map(result => (
                        <Item key={result.id}>
                           <ChatItem name={result.name} href={`/chat/${result.chat_id}`} />
                        </Item>
                     ))
                  }
               </Items>
            ) : (
               <Loading message={loading ? 'Cargando resultados.' : 'Busquemos algunos chats.'} />
            )
         }
      </Navigation>
   );
}
