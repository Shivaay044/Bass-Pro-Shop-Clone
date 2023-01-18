import React, { Component, useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box,Center,Image} from "@chakra-ui/react";




export default class MultipleItems extends Component {

    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };

   
      return (
        <Box p={5}>
          <Box textAlign='center'> <h2>HOT THIS WEEK</h2> </Box>
          <Slider  {...settings}>
            <Box mt={10}>
            <Box display='inline-block' borderBottomRadius={10} boxShadow='rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'  w='97%' h='300px' m='auto'  >
              <Image m='auto' src="https://assets.basspro.com/image/list/fn_select:jq:first(.%5b%5d%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/2593481.json?$Prod_PLPThumb$"></Image>
              <Center><b>$999.98</b></Center>
              <br/>
              <Center fontStyle='oblique'>Garmin Panoptix </Center>
              <br/>
            </Box>
            </Box>

            <Box mt={10}>
            <Box display='inline-block' borderBottomRadius={10} boxShadow='rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'  w='97%' h='300px' m='auto'   >
              <Image m='auto' src="https://assets.basspro.com/image/list/fn_select:jq:first(.%5B%5D%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/2645888.json?$Prod_PLPThumb$"></Image>
              <Center><b>$99.98</b></Center>
              <br/>
              <Center fontStyle='oblique'>Spypoint  Cellular </Center>
              <br/>
            </Box>
            </Box>

            <Box mt={10}>
            <Box display='inline-block' borderBottomRadius={10} boxShadow='rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'  w='97%' h='300px' m='auto'  >
              <Image m='auto' src="https://assets.basspro.com/image/list/fn_select:jq:first(.%5b%5d%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/3037740.json?$Prod_PLPThumb$"></Image>
              <Center><b>$109.98</b></Center>
              <br/>
              <Center fontStyle='oblique'>Hunting Boots </Center>
              <br/>
            </Box>
            </Box>

            <Box mt={10}>
            <Box display='inline-block' borderBottomRadius={10} boxShadow='rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'  w='97%' h='300px' m='auto'  >
              <Image m='auto' src="https://assets.basspro.com/image/list/fn_select:jq:first(.%5b%5d%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/3443007.json?$Prod_PLPThumb$"></Image>
              <Center><b>$14.98</b></Center>
              <br/>
              <Center fontStyle='oblique'>Jackson Shirt</Center>
              <br/>
            </Box>
            </Box>

            <Box mt={10}>
            <Box display='inline-block' borderBottomRadius={10} boxShadow='rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'  w='97%' h='300px' m='auto'  >
              <Image m='auto' src="https://assets.basspro.com/image/list/fn_select:jq:first(.%5b%5d%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/2428284.json?$Prod_PLPThumb$"></Image>
              <Center><b>$216</b></Center>
              <br/>
              <Center fontStyle='oblique'>FOXPR Game Call</Center>
              <br/>
            </Box>
            </Box>

            <Box mt={10}>
            <Box display='inline-block' borderBottomRadius={10} boxShadow='rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'  w='97%' h='300px' m='auto'  >
              <Image m='auto' src="https://assets.basspro.com/image/list/fn_select:jq:first(.%5B%5D%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/2685172.json?$Prod_PLPThumb$"></Image>
              <Center><b>$250.00</b></Center>
              <br/>
              <Center fontStyle='oblique'> 12 Soft Cooler</Center>
              <br/>
            </Box>
            </Box>

            <Box mt={10}>
            <Box display='inline-block' borderBottomRadius={10} boxShadow='rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'  w='97%' h='300px' m='auto'  >
              <Image m='auto' src="https://assets.basspro.com/image/list/fn_select:jq:first(.%5B%5D%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/2882307.json?$Prod_PLPThumb$"></Image>
              <Center><b>$216</b></Center>
              <br/>
              <Center fontStyle='oblique'>name</Center>
              <br/>
            </Box>
            </Box>

            <Box mt={10}>
            <Box display='inline-block' borderBottomRadius={10} boxShadow='rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'  w='97%' h='300px' m='auto'  >
              <Image m='auto' src="https://assets.basspro.com/image/list/fn_select:jq:first(.%5b%5d%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/3376495.json?$Prod_PLPThumb$"></Image>
              <Center><b> $27</b>6</Center>
              <br/>
              <Center fontStyle='oblique'>Long-Sleeve Ladies</Center>
              <br/>
            </Box>
            </Box>
    
            <Box mt={10}>
              <Box display='inline-block' borderBottomRadius={10} boxShadow='rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'  w='97%' h='300px' m='auto'  >
              <Image m='auto' src="https://assets.basspro.com/image/list/fn_select:jq:first(.%5B%5D%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/2645888.json?$Prod_PLPThumb$"></Image>
              <Center><b> $31</b>6</Center>
              <br/>
              <Center fontStyle='oblique'>ECLIPSE Tents</Center>
              <br/>
              </Box>
            </Box>

          </Slider>
        </Box>
      );
    }
  }