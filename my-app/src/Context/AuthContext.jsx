import React from "react";
import { createContext } from "react";
import { useEffect, useState } from 'react';
import axios from "axios"

export const  AuthContext = createContext()

function AuthContextProvider({children}) {

    const [boating, setBoating] = useState([]);
    const [camping,setCamping] =useState([])
    const [clothing,setClothing] =useState([])
    const [fishing,setFishing] =useState([])
    const [homeGif,setHomeGif] =useState([])
    const [shooting,setShooting] =useState([])
    const [search,setSearch] = useState("")

    const [sort,setSort] = useState("asc")

    const [filter,setFilter] = useState(null)

    useEffect(() => {
    
        getBoating();
        getCamping();
        getClothing();
        getFishing();
        getHomeGif();
        getShooting();

    }, [search,sort,filter]);

    const getBoating = () => {
      axios
        .get(`http://localhost:8080/boating`,{
          params:{
            q:search,
            _sort:"maxofferprice",
            _order:sort,
            ec_brand:filter
          }
        })
        .then((res) => setBoating(res.data));
    };

    const getCamping = ()=>{
      axios.get(`http://localhost:8080/camping`,{
        params:{
          q:search,
          _sort:"maxofferprice",
          _order:sort
        }
      })
      .then((res)=>setCamping(res.data))
    }

  
    const getClothing = ()=>{
      axios.get(`http://localhost:8080/clothing`,{
        params:{
          q:search,
          _sort:"maxofferprice",
          _order:sort
        }
      })
      .then((res)=>setClothing(res.data))
    }


    const getFishing = ()=>{
      axios.get(`http://localhost:8080/fishing`,{
        params:{
          q:search,
          _sort:"maxofferprice",
          _order:sort
        }
      })
      .then((res)=>setFishing(res.data))
    }

    const getHomeGif = ()=>{
      axios.get(`http://localhost:8080/home`,{
        params:{
          q:search,
          _sort:"maxofferprice",
          _order:sort
        }
      })
      .then((res)=>setHomeGif(res.data))
    }

    const getShooting = ()=>{
      axios.get(`http://localhost:8080/shooting`,{
        params:{
          q:search,
          _sort:"maxofferprice",
          _order:sort
        }
      })
      .then((res)=>setShooting(res.data))
    }

  console.log(filter)
   
  return (
    <AuthContext.Provider value={{setFilter,setSearch,setSort,boating,camping,clothing,fishing,homeGif,shooting}}>
     {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
