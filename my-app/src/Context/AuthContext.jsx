import React from "react";
import { createContext } from "react";
import { useEffect, useState } from 'react';

export const  AuthContext = createContext()

function AuthContextProvider({children}) {

    const[data,setData] = useState([])
   useEffect(()=>{
      getData()
   },[])

   const getData = async() =>{
    try {
     let res = await fetch('http://localhost:8080/carousel')
     let data = await res.json()
     setData(data)
    } catch (error) {
     console.log(error)
    }
 }

  return (
    <AuthContext.Provider value={{data}}>
     {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
