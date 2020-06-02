import React from "react";
import { Navigation } from "src/presentation/components/Navigation";

// import styles from "./Groups.styled";

interface GroupsProps {
}

export const Groups: React.FC<GroupsProps> = ({ ...props}) => {

   return (
      <Navigation title="Grupos">
         <span>Groups</span>
      </Navigation>
   );
}
