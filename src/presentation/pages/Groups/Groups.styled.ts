import styled from "styled-components";

export const Items = styled.ul`
`;

export const Item = styled.li`
   border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
   a {
      display: block;
   }
`;
