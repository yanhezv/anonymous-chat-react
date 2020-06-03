import React from "react";
import { Link } from 'react-router-dom';
import { useCurrentUser } from "src/hooks/useCurrentUser";

import { AppBar } from "../AppBar";
import { Container, Content, BottonNavigationBar, Items, Item, Button } from "./Navigation.styled";

interface NavigationProps {
   title: string;
}

export const Navigation: React.FC<NavigationProps> = ({ title, ...props}) => {
   const { user } = useCurrentUser();

   return (
      <Container>
         <AppBar title={`${user.nick} | ${title}`}/>

         <Content>
            { props.children }
         </Content>

         <BottonNavigationBar>
            <Items>
               <Item><Link to={`/chats`}><Button>Chats</Button></Link></Item>
               <Item><Link to={`/groups`}><Button>Grupos</Button></Link></Item>
               <Item><Link to={`/users`}><Button>Usuarios</Button></Link></Item>
               <Item><Link to={`/search`}><Button>Buscar</Button></Link></Item>
            </Items>
         </BottonNavigationBar>
      </Container>
   );
}
