import React from "react";
import { Link } from 'react-router-dom';

import { AppBar } from "../AppBar";
import { Container, BottonNavigationBar, Items, Item, Button } from "./Navigation.styled";

interface NavigationProps {
   title: string;
}

export const Navigation: React.FC<NavigationProps> = ({ title, ...props}) => {
   return (
      <Container>
         <AppBar title= {title}/>

         { props.children }

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
