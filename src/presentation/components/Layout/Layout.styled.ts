import styled from "styled-components";

export const Container = styled.div`
   background-color: ${ ({ theme }) => theme.colors.main };
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
`;

export const Application = styled.main`
   background-color: ${ ({ theme }) => theme.colors.greySoft };
   border-radius: 5px;
   overflow: hidden;
   width: 100%;
   max-width: 320px;
   height: 100%;
   max-height: 600px;
`;
