import React, { useContext } from "react";
import { border, Box,Grid,Text } from "@chakra-ui/react";
import { Flex, Spacer } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import ClothingBrand from '../Component/ProductsComp/filterComp/ClothingBrand'
import axios from 'axios';
import ClothingCard from "../Component/ProductsComp/ProductCard/ClothingCard";
import Footer from '../Component/NavbarComponet/Footer'
import Navbar from "../Component/NavbarComponet/Navbar";
import { AuthContext } from "../Context/AuthContext";
import SortSelectTag from "../Component/ProductsComp/ShortingComp/SortSelectTag";


function ClothingPg() {
    


    const {clothing} = useContext(AuthContext)


  return (
    <>
    <Navbar/>
   <Flex >

    <Box w='20%' m={10} h='auto'  border='1px solid black'>
    
    <Text fontSize={40}>FILTER BY</Text>
    <hr></hr>
    <ClothingBrand/>

    </Box>
    
    <Box w='80%'  m={10} border='1px solid black'>
    <Flex justifyContent='space-between' m={25}>
      <Box>
      <Text fontFamily='fantasy' fontSize={20}>CLOTHING CORNER</Text>
      </Box>
      <Box >
         <SortSelectTag/>
      </Box>
      </Flex>
      <hr></hr>
      <Box  border='1px solid black'>
          <Grid templateColumns='repeat(3,1fr)'
             templateRows='repeat(2,1fr)'>

          {
            clothing.map((el)=>(
              <ClothingCard
              id={el.id}
              brand={el.category}
              title={el.name}
              category={el.category}
              price={el.maxofferprice}
              image={el.img}
              />

            ))
          }

          </Grid>
          
      </Box>
    </Box>
   </Flex>
   <Footer/>
    </>
  );
}

export default ClothingPg;
