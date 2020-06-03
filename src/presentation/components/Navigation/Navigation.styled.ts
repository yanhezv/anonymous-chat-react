import styled from "styled-components";

export const Container = styled.section`
   height: 100%;
   overflow: hidden;
   position: relative;
   padding: 50px 0;
`;

export const Content = styled.div`
   height: 100%;
   max-height: 100%;
   overflow: auto;
`;

export const BottonNavigationBar = styled.nav`
   position: absolute;
   bottom: 0;
   left: 0;
   width: 100%;
   background-color: ${({ theme }) => theme.colors.greySoft};
   border-top: 1px solid ${({ theme }) => theme.colors.secondary};
`;

export const Items = styled.ul`
   display: flex;
   height: 50px;
`;

export const Item = styled.li`
   width: 100%
`;

export const Button = styled.div<{ $active: boolean }>`
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: ${({ theme }) => theme.colors.greySoft};
   color: ${({ $active, theme }) => $active ? theme.colors.primary : theme.colors.text };
   font-weight: ${({ $active }) => $active ? 'bold' : 'normal' };
   &:hover {
      color: ${({ theme }) => theme.colors.primary};
   }
`;
