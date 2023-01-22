import { Button, Radio, RadioGroup } from "@chakra-ui/react";
import { Stack, Box, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import {  BsCheck2All } from "react-icons/bs";
import CampingCategory from "../filterComp/CampingCategory"
import React from "react";
import { AuthContext } from "../../../Context/AuthContext";
import { Icon } from "@chakra-ui/react";

function CampingBrand() {
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
              <Radio value="Coleman">
                {value == "Coleman" ? (
                  <Icon boxSize={22} as={BsCheck2All} />
                ) : null}{" "}
                COLEMAN{" "}
              </Radio>
              <Radio value="Eclipse">
                {value == "Eclipse" ? (
                  <Icon boxSize={22} as={BsCheck2All} />
                ) : null}{" "}
                ECLIPSE
              </Radio>
              <Radio value="Cabela's">
                {value == "Cabela's" ? (
                  <Icon boxSize={22} as={BsCheck2All} />
                ) : null}{" "}
                CABELA"S
              </Radio>
            </Stack>
          </RadioGroup>
        </Box>
      </Box>
      <hr></hr>
       <CampingCategory setCate={setValue}/>
      
     
    </>
  );
}

export default CampingBrand;
