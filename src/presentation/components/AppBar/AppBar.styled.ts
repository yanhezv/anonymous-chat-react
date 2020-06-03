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

export const Input = styled.input`
   background-color: white;
   border: none;
   width: calc(100% - 100px);
   color: inherit;
   outline: none;
   height: 100%;
   padding: 5px;
   border-radius: 4px;
`;

export const Title = styled.h3`
   margin: 0;
   font-size: 18px;
`;
export const EditButton = styled.button`
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
