import { useState } from "react";
import React  from 'react';

export const DataContext = React.createContext();



const DataContextProvider = ({children}) => {
 const [token, setToken] = useState("Login Page")

 const updateToken = (token) =>{
    setToken(token);
 }
  return (
   <DataContext.Provider value = {{
    token,
    updateToken

   }}>
   
    {children}
   </DataContext.Provider>
  )
}

export default DataContextProvider
