import styled from "styled-components";

export const Container = styled.section`
   height: 100%;
   overflow: hidden;
   position: relative;
   padding: 50px 0;
`;
export const Messages = styled.div`
   max-height: 100%;
   overflow: auto;
`;

export const InputContainer = styled.form`
   position: absolute;
   bottom: 0;
   left: 0;
   width: 100%;
   background-color: ${({ theme }) => theme.colors.greySoft};
   border-top: 1px solid ${({ theme }) => theme.colors.secondary};
   display: flex;
   height: 50px;
   align-items: stretch;
`;

export const Input = styled.input`
   background-color: white;
   border: none;
   width: calc(100% - 100px);
   color: inherit;
   outline: none;
   padding: 5px 10px;
`;

export const SendButton = styled.button`
   background-color: ${({ theme }) => theme.colors.secondary};
   border: none;
   width: 100px;
   color: inherit;
   outline: none;
   cursor: pointer;
   &:hover,
   &:focus {
      color: ${({ theme }) => theme.colors.primary}
   }
`;
