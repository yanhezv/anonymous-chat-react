import styled from "styled-components";

export const Container = styled.article`
   width: 100%;
   background-color: ${({ theme }) => theme.colors.greySoft};
   height: 100%;
   display: flex;
   justify-content: space-between;
   padding: 5px;
   cursor: pointer;

   &:hover {
      background-color: #dedede;
   }
`;

export const Photo = styled.div`
   width: 50px;
   height: 50px;
   border-radius: 50%;
   background-color: ${({ theme }) => theme.colors.secondary};
   color: ${({ theme }) => theme.colors.greySoft};
   display: flex;
   justify-content: center;
   align-items: center;
`;

export const Info = styled.div`
   width: calc(100% - 60px);
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;
`;

export const Title = styled.h3`
   margin: 0;
   font-size: 18px;
`;

export const Message = styled.div`
`;
