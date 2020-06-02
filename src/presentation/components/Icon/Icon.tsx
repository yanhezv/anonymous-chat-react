import React from "react";
// import styles from "./Icon.styled";

interface IconProps {
   size?: '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x'
}

export const Icon: React.FC<IconProps> = ({size = '3x', children}) => {
   return (
      <i>
         {children}
      </i>
   );
}
