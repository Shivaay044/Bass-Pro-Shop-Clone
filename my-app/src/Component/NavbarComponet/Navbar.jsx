import { Link, NavLink } from "react-router-dom";
import { Box, Divider, Flex, Img } from '@chakra-ui/react'
import {  Spacer } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import {  InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon, SpinnerIcon } from "@chakra-ui/icons";
import { GoLocation}  from 'react-icons/go'
import {HiOutlineUserCircle} from 'react-icons/hi'
import {GiShoppingCart} from 'react-icons/gi'
import { Icon } from "@chakra-ui/react";
import {BsArrowRightCircleFill} from 'react-icons/bs'
import React from 'react';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';




const links = [
    {path:'/',title:'Home',link1:'link1',link2:'link2',link3:'link3'},
    {path:'/boating',title:'Boating',link1:'link1',link2:'link2',link3:'link3'},
    {path:'/shooting',title:'Shooting',link1:'link1',link2:'link2',link3:'link3'},
    {path:'/camping',title:'Camping',link1:'link1',link2:'link2',link3:'link3'},
    {path:'/home&gift',title:'Home & Gift',link1:'link1',link2:'link2',link3:'link3'},
    {path:'/bargainCave',title:'Bargain Cave',link1:'link1',link2:'link2',link3:'link3'},
]


export default function Navbar(){
    return(
        <Box>
        <Box  w='100%' p={4} fontFamily='cursive'  >
        <Flex justifyContent='space-around'>
         <Box>
         <Icon boxSize={22} as={GoLocation} /> <b>My Store: <NavLink to='/location'>Find A Store</NavLink></b>
         </Box>
          <Box >
            <b>FREE Shipping on Orders $50+</b>
          </Box>
          <Box>
            <b>Winter Clothing   |  <Icon as={BsArrowRightCircleFill}></Icon> </b>
          </Box>
          </Flex>
        </Box>
        
        
        <hr/>

        <Box w='100%' p={20} >
        <Flex >
        <Spacer/>
        <Box w='10%' alignItems='center' height='40px'>
        <Img  
        w='100%'
        h='100%'
        src='https://assetshare.basspro.com/content/dam/bps-general-assets/web/site-elements/images/Redesign/Header/bass-pro-logo-2x.png'>
        </Img>
        </Box>
        <Spacer/>

        <Box w='40%'>
       <InputGroup >
        <InputLeftElement
          m='12'
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
          size="xs"
        />
        <Input w='100%' 
        pt={10} 
        pb={10} 
        pl={30}
        pr={17} 
        borderRadius={30}
        variant="outline"
         placeholder={`What can we help you find?`} />
      </InputGroup>
        </Box>
        <Spacer/>
        <Box height='100%' w='20%' >
        <Flex>
        <Box>
             <HiOutlineUserCircle size={40} />
        </Box>
        <Box ml={15}>
             <GiShoppingCart size={40}/>
          <Box bg='yellowgreen' borderRadius={60} display='inline-block'  position='relative' right={10} top={-20}>
           10
         </Box>
        </Box>
        </Flex>
        </Box>
        
        </Flex>
        </Box>

        <hr/>
        <Box p={5} >
        <Link>
        <Flex>
        {
            links.map((el)=>(
                <>
                <Spacer/>
              <MDBDropdown>
              <MDBDropdownToggle tag='a' >
                {el.title}
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem link><NavLink  to={el.path}>{el.title}</NavLink> </MDBDropdownItem>
                <MDBDropdownItem link><NavLink  to={el.path}>{el.link1}</NavLink> </MDBDropdownItem>
                <MDBDropdownItem link><NavLink  to={el.path}>{el.link2}</NavLink> </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
            <Spacer/>
                 {/* <Spacer/>
                <Box p='4'>
                  <NavLink  to={el.path}>{el.title}</NavLink> 
                </Box>
                <Spacer/> */}
                </>  
            ))
        } 
        </Flex>
        </Link>
        </Box>
        <hr></hr>
        </Box>
    )
}


