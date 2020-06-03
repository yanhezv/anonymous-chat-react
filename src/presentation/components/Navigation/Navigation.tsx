import React from "react";
import { Link } from 'react-router-dom';
import { useCurrentUser } from "src/hooks/useCurrentUser";

import { AppBar } from "../AppBar";
import { Container, Content, BottonNavigationBar, Items, Item, Button } from "./Navigation.styled";

interface NavigationProps {
   title: string;
   itemActived: '1' | '2' | '3' | '4';
}

export const Navigation: React.FC<NavigationProps> = ({ title, itemActived, ...props}) => {
   const { user } = useCurrentUser();

   return (
      <Container>
         <AppBar title={`${user.nick} | ${title}`}/>

         <Content>
            { props.children }
         </Content>

         <BottonNavigationBar>
            <Items>
               <Item><Link to={`/chats`}><Button $active={itemActived === '1'}>Chats</Button></Link></Item>
               <Item><Link to={`/groups`}><Button $active={itemActived === '2'}>Grupos</Button></Link></Item>
               <Item><Link to={`/users`}><Button $active={itemActived === '3'}>Usuarios</Button></Link></Item>
               <Item><Link to={`/search`}><Button $active={itemActived === '4'}>Buscar</Button></Link></Item>
            </Items>
         </BottonNavigationBar>
      </Container>
   );
}
