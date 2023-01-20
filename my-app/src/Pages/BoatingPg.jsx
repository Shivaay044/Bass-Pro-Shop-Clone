import React, { useContext } from "react";
import { border, Box, Grid, Text } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import BoatingProCard from "../Component/ProductsComp/BoatingProCard";
import Footer from "../Component/NavbarComponet/Footer";
import Navbar from "../Component/NavbarComponet/Navbar";
import { AuthContext } from "../Context/AuthContext";
import SortSelectTag from "../Component/ProductsComp/SortSelectTag";
import FilterByBrand from "../Component/ProductsComp/FilterByBrand";


function BoatingPg() {
 

 
   const {boating} = useContext(AuthContext)
  

  console.log(boating);

  return (
    <>
     <Navbar/>
      <Flex>
        <Box w="20%" m={10} h="auto" border="1px solid black">
          <Text fontSize={40}>FILTER BY</Text>
          <hr></hr>
          <Box>
            <Text fontSize={20}>FILTER BY Brand</Text>
            <FilterByBrand/>
          </Box>
          <hr></hr>
          <Box>
            <Text fontSize={20}>FILTER BY Category</Text>
          </Box>
          <hr></hr>
          <Box>
            <Text fontSize={20}>FILTER BY Price</Text>
          </Box>
        </Box>

        <Box w="80%" m={10} border="1px solid black">
          <Flex justifyContent="space-between" m={25}>
            <Box>
              <Text fontFamily="fantasy" fontSize={20}>
                FISH FINDERS & NAVIGATION
              </Text>
            </Box>
            <Box>
              <SortSelectTag/>
            </Box>
          </Flex>
          <hr></hr>
          <Box border="1px solid black">
            <Grid templateColumns="repeat(3,1fr)" templateRows="repeat(2,1fr)">
              {boating.map((el) => (
                <BoatingProCard
                  id={el.id}
                  brand={el.ec_brand}
                  title={el.title}
                  price={el.maxofferprice}
                  image={el.topthumbnail}
                />
              ))}
            </Grid>
          </Box>
        </Box>
      </Flex>
      <Footer />
    </>
  );
}

export default BoatingPg;
