import { Link, NavLink } from "react-router-dom";
import { Box, Button, Center, Divider, Flex, Img } from '@chakra-ui/react'
import {  Spacer } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import {  InputGroup, InputLeftElement,Text } from "@chakra-ui/react";
import { SearchIcon, SpinnerIcon } from "@chakra-ui/icons";
import { GoLocation}  from 'react-icons/go'
import {HiOutlineUserCircle} from 'react-icons/hi'
import {GiShoppingCart} from 'react-icons/gi'
import { Icon } from "@chakra-ui/react";
import {BsArrowRightCircleFill} from 'react-icons/bs'
import {FaSignOutAlt} from 'react-icons/fa'
import React, { useContext } from 'react';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-hot-toast";

let logo ="https://img.freepik.com/free-vector/supermarket-logo-design-with-green-cart_23-2148464170.jpg?w=2000"


const links = [
    {path:'/',title:'Home'},
    {path:'/fishing',title:'Fishing',link1:'Fishing Reels',link2:'Fish Food',link3:'Fish Finder'},
    {path:'/boating',title:'Boating',link1:'Baoting Accesories ',link2:'Marine Electronics',link3:'Trolling Motors'},
    {path:'/shooting',title:'Shooting',link1:'Mouser',link2:'Automatic',link3:'GLCT'},
    {path:'/camping',title:'Camping',link1:'Dome Tent',link2:'Cabin Tent',link3:'Eclipse'},
    {path:'/home&gift',title:'Home & Gift',link1:'Decor',link2:'Gaint Berber',link3:'Coral'},
    {path:'/bargainCave',title:'Clothing Cave',link1:'Calvin',link2:'Louise Phiphleep',link3:'Lewis'},
]


export default function Navbar(){




const {setSearch} = useContext(AuthContext)

   const {isAuth,setIsAuth,cart} = useContext(AuthContext)

   const handleSearch = (e)=>{
      let {value} = e.target
      setSearch(value)
   }

  let user_name = localStorage.getItem("user_name")
    

    return(
        <Box>
        <Box  w='100%' p={3} fontFamily='cursive'  >
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

        <Box alignItems={'center'} justifySelf={'center'} w='100%' h={100} p={20} >
        <Flex>
        <Spacer/>
        <Box w='10%' alignItems='center' height='40px'>
        <Img 
        mt='-60'
        ml={'-35px'} 
        w='180%'
        h='400%'
        objectFit='contain'
        src={logo}>
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
        onChange={handleSearch}
         placeholder={`What can we help you find?`} />
      </InputGroup>
        </Box>
        <Spacer/>
        <Box  w='20%' >
        <Flex justifyContent={'space-evenly'}>
        <Box textAlign={'center'}>
             <NavLink to='/register-login'>
             <HiOutlineUserCircle size={40} />
             
                {
                 isAuth?<Text fontWeight={'semibold'} fontFamily={'monospace'} color={'black'} textAlign={'center'}>Hey! {user_name}</Text>:""
                }
            
             </NavLink>
        </Box>
        <Box ml={15}>
            <NavLink to='/cart'> <GiShoppingCart color="black" size={40}/></NavLink>
          <Box bg='cadetblue' fontWeight={'bold'} textAlign={'center'} w={20} h={20} borderRadius={20} display='inline-block'  position='relative' right={4} top={-12}>
          {cart.length}
         </Box>
        </Box>

        <Box>
        <Button isDisabled={isAuth===false} onClick={()=>{setIsAuth(false);toast.success("Logout success")}} border={"none"} bg={'Background'}>
        <FaSignOutAlt size={40}/>
        </Button>
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


