import React from "react";
import { createContext } from "react";
import { useEffect, useState } from 'react';
import axios from "axios"


let initCred = {
  name:"",
  username:"",
  email:"",
  password:""
}

let initLoginCred = {
  email:"",
  password:""
}

export const  AuthContext = createContext()

function AuthContextProvider({children}) {
  const [cart,setCart] = useState([])
  const [Credential,setCredential] = useState(initCred)
  const [LoginCredential,setLoginCredential] = useState(initLoginCred)
  const [isAuth,setIsAuth] = useState(false)

    const [boating, setBoating] = useState([]);
    const [camping,setCamping] =useState([])
    const [clothing,setClothing] =useState([])
    const [fishing,setFishing] =useState([])
    const [homeGif,setHomeGif] =useState([])
    const [shooting,setShooting] =useState([])
    const [search,setSearch] = useState("")

    const [sort,setSort] = useState("asc")

    const [filter,setFilter] = useState(null)
    const [Boatfilter,setBoatFilter] = useState(null)
    

    const [dlt,setDelete] = useState("")



    useEffect(() => {
    
        getBoating();
        getCamping();
        getClothing();
        getFishing();
        getHomeGif();
        getShooting();
        getCart();
        Delete();

       

    }, [search,sort,filter,Boatfilter,dlt]);

    console.log(cart.length)

    const getCart= () => {
      axios
        .get(`http://localhost:8080/cart`)
        .then((res) => setCart(res.data))
        .catch((err)=>console.log(err))
    };

    const Delete =()=>{
      axios.delete(`http://localhost:8080/cart/${dlt}`)
      getCart();
    }

   
    const getBoating = () => {
      axios
        .get(`http://localhost:8080/boating`,{
          params:{
            q:search,
            _sort:"maxofferprice",
            _order:sort,
            ec_brand:filter,
            category:Boatfilter
          }
        })
        .then((res) => setBoating(res.data));
    };

    const getCamping = ()=>{
      axios.get(`http://localhost:8080/camping`,{
        params:{
          q:search,
          _sort:"maxofferprice",
          _order:sort,
          ec_brand:filter,
            category:Boatfilter
        }
      })
      .then((res)=>setCamping(res.data))
    }

  
    const getClothing = ()=>{
      axios.get(`http://localhost:8080/clothing`,{
        params:{
          q:search,
          _sort:"maxofferprice",
          _order:sort,
          ec_brand:filter,
          category:Boatfilter
        }
      })
      .then((res)=>setClothing(res.data))
    }

    

    const getFishing = ()=>{
      axios.get(`http://localhost:8080/fishing`,{
        params:{
          q:search,
          _sort:"maxofferprice",
          _order:sort,
          ec_brand:filter,
          category:Boatfilter,
          ec_brand:filter,
            category:Boatfilter
        }
      })
      .then((res)=>setFishing(res.data))
    }

    const getHomeGif = ()=>{
      axios.get(`http://localhost:8080/home`,{
        params:{
          q:search,
          _sort:"maxofferprice",
          _order:sort,
          ec_brand:filter,
            category:Boatfilter
        }
      })
      .then((res)=>setHomeGif(res.data))
    }

    const getShooting = ()=>{
      axios.get(`http://localhost:8080/shooting`,{
        params:{
          q:search,
          _sort:"maxofferprice",
          _order:sort,
          ec_brand:filter,
            category:Boatfilter
        }
      })
      .then((res)=>setShooting(res.data))
    }

    

  

    
 
  return (
    <AuthContext.Provider value={{getCart,setDelete,cart,isAuth,setIsAuth,LoginCredential,setLoginCredential,
    Credential,setCredential,setBoatFilter,setFilter,setSearch,setSort,
    boating,camping,clothing,fishing,homeGif,shooting}}>
     {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
