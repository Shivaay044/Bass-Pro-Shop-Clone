import { Button, Radio, RadioGroup } from "@chakra-ui/react";
import { Stack, Box, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import {  BsCheck2All } from "react-icons/bs";
import Category from "./BoatCategory"
import React from "react";
import { AuthContext } from "../../../Context/AuthContext";
import { Icon } from "@chakra-ui/react";

function FilterByBrand() {
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
              <Radio value="Lowrance">
                {value == "Lowrance" ? (
                  <Icon boxSize={22} as={BsCheck2All} />
                ) : null}{" "}
                LOWRANCE{" "}
              </Radio>
              <Radio value="Garmin">
                {value == "Garmin" ? (
                  <Icon boxSize={22} as={BsCheck2All} />
                ) : null}{" "}
                GARMIN
              </Radio>
              <Radio value="Humminbird">
                {value == "Humminbird" ? (
                  <Icon boxSize={22} as={BsCheck2All} />
                ) : null}{" "}
                HUMMINBIRD
              </Radio>
            </Stack>
          </RadioGroup>
        </Box>
      </Box>
      <hr></hr>
       <Category setCate={setValue}/>
      
     
    </>
  );
}

export default FilterByBrand;
