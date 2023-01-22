import React from "react";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";




function PrivateRoute({children}) {
    const {isAuth} = useContext(AuthContext)
   

    console.log(isAuth)
    if(!isAuth){
        toast.error("login please")
    }

    if(!isAuth){
        return <>
        
                 
               <Navigate to = "/"/>
           
        
        
        </>
    }
    return children
}

export default PrivateRoute;





