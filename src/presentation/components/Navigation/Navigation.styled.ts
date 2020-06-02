import styled from "styled-components";

export const Container = styled.section`
   height: 100%;
   overflow: auto;
   position: relative;
   padding: 50px 0;
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

export const Button = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: ${({ theme }) => theme.colors.greySoft};
   &:hover {
      color: ${({ theme }) => theme.colors.primary};
   }
`;
