import React from "react";
import { Box } from "@chakra-ui/react";
import Footer from '../Component/NavbarComponet/Footer'
import Navbar from "../Component/NavbarComponet/Navbar";

function LocationPg() {
  return (
    <>
    <Navbar/>
    <Box mt='-16px'>
      <iframe  src="https://www.google.com/maps/d/u/0/embed?mid=19h5FZHOcNIR89avwWmfdp1L07S0Yy0k&ehbc=2E312F" width="100%" height="500"></iframe>
    </Box>
    <Footer/>
    </>
    );
}

export default LocationPg;
