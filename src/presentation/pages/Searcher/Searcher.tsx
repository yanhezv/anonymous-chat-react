import React from "react";
import { Navigation } from "src/presentation/components/Navigation";

// import styles from "./Searcher.styled";

interface SearcherProps {
}

export const Searcher: React.FC<SearcherProps> = ({ ...props}) => {

   return (
      <Navigation title="Buscador">
         <span>Search</span>
      </Navigation>
   );
}
