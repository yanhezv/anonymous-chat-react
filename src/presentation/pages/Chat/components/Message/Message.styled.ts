import styled from "styled-components";

export const Container = styled.article<{ $align: 'left' | 'right'}>`
   width: 100%;
   display: flex;
   justify-content: ${({$align}) => $align === 'left' ? 'flex-start' : 'flex-end' };
   padding: 5px;
`;

export const Card = styled.div<{ $align: 'left' | 'right' }>`
   max-width: 200px;
   border-radius: 8px;
   background-color: ${({ $align, theme }) => $align === 'left' ? theme.colors.secondary : theme.colors.primary };
   display: flex;
   flex-direction: column;
   align-items: ${({ $align }) => $align === 'left' ? 'flex-start' : 'flex-end' };
   padding: 10px
`;

export const Nick = styled.span<{ $align: 'left' | 'right' }>`
   color: ${({ $align, theme }) => $align === 'left' ? theme.colors.primary : theme.colors.secondary };
   font-size: 12px;
   margin-bottom: 5px;
`;

export const Text = styled.p`
   margin: 0;
   font-size: 15px;
`;
