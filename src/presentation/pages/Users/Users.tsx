import React from "react";
import { Navigation } from "src/presentation/components/Navigation";

// import styles from "./Users.styled";

interface UsersProps {
}

export const Users: React.FC<UsersProps> = ({ ...props}) => {

   return (
      <Navigation title="Usuarios">
         <span>Users</span>
      </Navigation>
   );
}
