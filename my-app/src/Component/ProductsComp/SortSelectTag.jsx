import { Select } from '@chakra-ui/react'
import React, { useContext, useState } from "react";
import { AuthContext } from '../../Context/AuthContext';

function SortSelectTag() {
     const {setSort} = useContext(AuthContext)


   const handleSort = (e)=>{
       const { value} = e.target
       console.log(value)
       setSort(value)
   }

  return (
    <Select onChange={handleSort} variant='flushed'  placeholder='Sort by: Relevance'>
    <option value='asc'>Price(Low to High)</option>
    <option value='desc'>Price(High to Low)</option>
  </Select>
  );
}

export default SortSelectTag;
