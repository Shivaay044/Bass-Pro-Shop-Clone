import { Box, Button, Center, Flex,Text } from "@chakra-ui/react";
import React from "react";
import { Image } from "@chakra-ui/react";
import Carousel from '../Component/HomeComponent/Carousel'
import Footer from "../Component/NavbarComponet/Footer";
import Navbar from "../Component/NavbarComponet/Navbar";
import  { toast, Toaster } from 'react-hot-toast'
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

function HomePg() {

 

  return (
    <>
    <Toaster toastOptions={{duration:2000}} />
    <Navbar/>
      <Box>
        <Box border='1px solid black' w='93%' h='430px' m='auto'>
          <Image w='100%' h='100%'  boxSize='100%'
           objectFit='cover'
           src='https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_1920/v1673277784/DigitalCreative/2023/Homepage/wk2-1-11/BPS_Homepage-winter.png'></Image>
        </Box>
        <Carousel/>
        <Box mt={40}>
        <Box m='auto' w='90%'>
          <Image w='100%'  objectFit='cover' src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_1440/v1673968097/DigitalCreative/2023/Homepage/wk2-1-11/cep-banner.png"></Image>
        </Box>
        </Box>

        <Box m={10} >
        <Flex width='95%' m='auto'>
          <Box m='auto' w='90%' p='10px'>
          <Image w='100%' h='100%'  objectFit='cover' src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_945/v1673279793/DigitalCreative/2023/Homepage/wk2-1-11/After-hunt-sub.png"></Image>
          </Box>
          <Box m='auto' w='90%'>
          <Image w='100%' h='100%'  objectFit='cover' src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_945/v1673279793/DigitalCreative/2023/Homepage/wk2-1-11/BPS_saltwater-sub.png"></Image>
          </Box>
          </Flex>
        </Box>

        <Box m={10} >
            <Text  textAlign='center'><h1>SHOP BY CATEGORY</h1></Text>
        <Flex width='95%' m='auto'>
          <Box m='auto' w='30%' p='10px'>
          <Image w='100%' h='100%'  objectFit='cover' src="https://assets.basspro.com/image/upload/f_auto,q_auto/v1664485701/DigitalCreative/2022/Homepage/wk39/Cat-archery.png"></Image>
          <Center fontWeight='bold'>ARCHERY</Center>
          </Box>
          <Box m='auto' w='30%'  p='10px'>
          <Image w='100%' h='100%'  objectFit='cover' src="https://assets.basspro.com/image/upload/f_auto,q_auto/v1664485701/DigitalCreative/2022/Homepage/wk39/Cat-optics.png"></Image>
          <Center fontWeight='bold'>OPTICS</Center>
          </Box>
          <Box m='auto' w='30%'  p='10px'>
          <Image w='100%' h='100%'  objectFit='cover' src="https://assets.basspro.com/image/upload/f_auto,q_auto/v1664485701/DigitalCreative/2022/Homepage/wk39/Cat-hunting-Waders.png"></Image>
          <Center fontWeight='bold'>HUNTING WADERS</Center>
          </Box>
          <Box m='auto' w='30%'  p='10px'>
          <Image w='100%' h='100%'  objectFit='cover' src="https://assets.basspro.com/image/upload/f_auto,q_auto/v1664485701/DigitalCreative/2022/Homepage/wk39/Cat-flannel.png"></Image>
          <Center fontWeight='bold'>FLANNEL</Center>
          </Box>
          </Flex>
        </Box>

        <Box m={10} >
        <Text  textAlign='center'><h1>OUR TOP BRANDS</h1></Text>
        <Flex width='95%' m='auto'>
          <Box m='auto' w='20%' p='10px'>
          <Image w='100%' h='100%'  objectFit='cover' src="https://assets.basspro.com/image/upload/f_auto,q_auto/v1667848670/DigitalCreative/Site-Elements/bps-logo-mobile.png"></Image>
          </Box>
          <Box m='auto' w='20%'p='10px'>
          <Image w='100%' h='100%'  objectFit='cover' src="https://assetshare.basspro.com/content/dam/bps-general-assets/web/site-elements/logos/images/red-head/redhead-488.png"></Image>
          </Box>
          <Box m='auto' w='20%'p='10px'>
          <Image w='100%' h='100%'  objectFit='cover' src="https://assetshare.basspro.com/content/dam/bps-general-assets/web/site-elements/logos/images/cabelas/cabelas-logo.svg"></Image>
          </Box>
          <Box m='auto' w='20%'p='10px'>
          <Image w='100%' h='100%'  objectFit='cover' src="https://assetshare.basspro.com/content/dam/bps-general-assets/web/site-elements/logos/images/garmin/garmin.svg"></Image>
          </Box>
          <Box m='auto' w='20%'p='10px'>
          <Image w='100%' h='100%'  objectFit='cover' src="https://assetshare.basspro.com/content/dam/bps-general-assets/web/site-elements/logos/images/columbia/columbia-blue.svg"></Image>
          </Box>
          <Box m='auto' w='20%'p='10px'>
          <Image w='100%' h='100%'  objectFit='cover' src="https://assetshare.basspro.com/content/dam/bps-general-assets/web/site-elements/logos/images/vortex/vortex.svg"></Image>
          </Box>
          <Box m='auto' w='20%'p='10px'>
          <Image w='100%' h='100%'  objectFit='cover' src="https://assetshare.basspro.com/content/dam/bps-general-assets/web/site-elements/logos/images/leupold/leupold-black-vertical.svg"></Image>
          </Box>
          <Box m='auto' w='20%'p='10px'>
          <Image w='100%' h='100%'  objectFit='cover' src="https://assetshare.basspro.com/content/dam/bps-general-assets/web/site-elements/logos/images/under-armour/underarmour-black.svg"></Image>
          </Box>
          </Flex>
        </Box>
        <Footer/>
      </Box>
    </>
  );
}

export default HomePg;
