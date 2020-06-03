import styled from "styled-components";

export const Container = styled.header`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   background-color: ${({ theme }) => theme.colors.greySoft};
   border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
   height: 50px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 5px 10px
`;

export const BackButton = styled.button`
   background-color: transparent;
   border: none;
   color: inherit;
   outline: none;
   cursor: pointer;
   &:hover,
   &:focus {
      color: ${({ theme }) => theme.colors.primary}
   }
`;

export const Title = styled.h3`
   margin: 0;
   font-size: 18px;
`;
