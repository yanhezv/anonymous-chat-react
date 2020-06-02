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
   padding: 10px
`;

export const Title = styled.h3`
   margin: 0;
   font-size: 18px;
`;
export const EditButton = styled.div`
`;
