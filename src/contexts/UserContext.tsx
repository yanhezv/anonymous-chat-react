import React, { createContext, useState, useEffect, useContext } from "react";
import { IUser } from "src/services/interfaces";
import { databaseContext } from "./DatabaseContext";

interface IUserContext {
   user: IUser,
   edit: (user: IUser) => void
}

export const userContext = createContext<IUserContext>({
   user: { nick: 'Anónimo'},
   edit: (user) => {}
});

export const UserContextProvider: React.FC = ({children}) => {
   const { db } = useContext(databaseContext);

   const [currentUser, setCurrentUser] = useState<IUser>({ nick: 'Anónimo' });

   const editCurrentUser = (user: IUser) => {
      if (db && user.id) {
         db.users.update(user.id, {nick: user.nick})
         .then((data) => {
            // console.log(data);
         })

      }
      setCurrentUser(user);
      sessionStorage.setItem("username", JSON.stringify(user));
   }

   useEffect(() => {
      const currentUser = sessionStorage.getItem("username");
      if (currentUser) {
         setCurrentUser(JSON.parse(currentUser));
      }
      else if (db !== null) {
         db.users.toArray().then((data) => {
            const user = { nick: `Anónimo ${data.length + 1}` };

            db.users.add(user).then((id) => {
               sessionStorage.setItem("username", JSON.stringify({ ...user, id }));
               setCurrentUser({ ...user, id });
            });
         })
      }
   }, [db]);

   return (
      <userContext.Provider value={{ user: currentUser, edit: editCurrentUser }}>
         {children}
      </userContext.Provider>
   );
}
