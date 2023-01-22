import React, { useContext } from "react";
import { Box,Grid,Text } from "@chakra-ui/react";
import { Flex} from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import FishingCard from "../Component/ProductsComp/ProductCard/FishingCard";
import Footer from '../Component/NavbarComponet/Footer'
import Navbar from "../Component/NavbarComponet/Navbar";
import { AuthContext } from "../Context/AuthContext";
import SortSelectTag from "../Component/ProductsComp/ShortingComp/SortSelectTag";
import FishBrand from "../Component/ProductsComp/filterComp/FishBrand";


function FishingPg() {
    
  const {fishing} = useContext(AuthContext)


  return (
    <>
    <Navbar/>
   <Flex >

    <Box w='20%' m={10} h='auto'  border='1px solid black'>
    
    <FishBrand/>

    </Box>
    
    <Box w='80%'  m={10} border='1px solid black'>
    <Flex justifyContent='space-between' m={25}>
      <Box>
      <Text fontFamily='fantasy' fontSize={20}>FISH FINDERS & NAVIGATION</Text>
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
            fishing.map((el)=>(
              <FishingCard
              id={el.id}
              brand={el.ec_brand}
              title={el.title}
              category={el.category}
              price={el.maxofferprice}
              image={el.topthumbnail}
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

export default FishingPg;
