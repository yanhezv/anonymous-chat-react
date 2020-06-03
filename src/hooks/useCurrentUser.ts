import { useContext } from "react";
import { userContext } from "src/contexts/UserContext";

export function useCurrentUser() {
   const currentUser = useContext(userContext);

   return currentUser;
}
