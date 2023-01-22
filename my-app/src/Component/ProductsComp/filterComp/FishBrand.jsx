import { Button, Radio, RadioGroup } from "@chakra-ui/react";
import { Stack, Box, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import {  BsCheck2All } from "react-icons/bs";
import Category from "./BoatCategory"
import React from "react";
import { AuthContext } from "../../../Context/AuthContext";
import { Icon } from "@chakra-ui/react";
import FishCategory from "./FishCategory";

function FishBrand() {
  const [value, setValue] = useState(null);


  const { setFilter} = useContext(AuthContext);

  setFilter(value);

  

 

  return (
    <>
      <Text fontSize={40}>FILTER BY</Text>
      <hr></hr>
      <Box>
        <Text fontSize={20}>FILTER BY Brand</Text>
        <Box>
          <RadioGroup fontFamily={"cursive"} onChange={setValue} value={value}>
            <Stack direction="column">
              <Radio value="Bass Pro">
                {value == "Bass Pro" ? (
                  <Icon boxSize={22} as={BsCheck2All} />
                ) : null}{" "}
                BASS PRO{" "}
              </Radio>
              <Radio value="Lew's">
                {value == "Lew's" ? (
                  <Icon boxSize={22} as={BsCheck2All} />
                ) : null}{" "}
                LEW'S
              </Radio>
              <Radio value="Shimano">
                {value == "Shimano" ? (
                  <Icon boxSize={22} as={BsCheck2All} />
                ) : null}{" "}
                SHIMANO
              </Radio>
            </Stack>
          </RadioGroup>
        </Box>
      </Box>
      <hr></hr>
       <FishCategory setCate={setValue}/>
      
     
    </>
  );
}

export default FishBrand;
