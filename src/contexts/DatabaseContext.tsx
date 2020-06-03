import React, { createContext, useState, useEffect } from "react";
import { AppDatabase } from "src/services/AppDatabase";

export const databaseContext = createContext<{db: AppDatabase | null}>({
   db: null,
});

export const DatabaseContextProvider: React.FC = ({children}) => {
   const [db, setDb] = useState<AppDatabase | null>(null);

   useEffect(() => {
      const db = new AppDatabase();
      setDb(db);
   }, []);

   return (
      <databaseContext.Provider value={{db}}>
         {children}
      </databaseContext.Provider>
   );
}
