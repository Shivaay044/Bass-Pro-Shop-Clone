import { Button, Radio, RadioGroup } from "@chakra-ui/react";
import { Stack, Box, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import {  BsCheck2All } from "react-icons/bs";

import React from "react";
import { AuthContext } from "../../../Context/AuthContext";
import { Icon } from "@chakra-ui/react";
import ShootingCategory from "./ShootingCategory";

function ShootingBrand() {
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
              <Radio value="GLOCK">
                {value == "GLOCK" ? (
                  <Icon boxSize={22} as={BsCheck2All} />
                ) : null}{" "}
                GLOCK{" "}
              </Radio>
              <Radio value="GLCT">
                {value == "GLCT" ? (
                  <Icon boxSize={22} as={BsCheck2All} />
                ) : null}{" "}
                GLCT
              </Radio>
              <Radio value="BERETTA">
                {value == "BERETTA" ? (
                  <Icon boxSize={22} as={BsCheck2All} />
                ) : null}{" "}
                BERETTA
              </Radio>
            </Stack>
          </RadioGroup>
        </Box>
      </Box>
      <hr></hr>
       <ShootingCategory setCate={setValue}/>
      
     
    </>
  );
}

export default ShootingBrand;
