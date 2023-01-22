
import { AuthContext } from "../../../Context/AuthContext"
import { Radio, RadioGroup } from "@chakra-ui/react";
import { Stack, Box, Text,Button } from "@chakra-ui/react";
import {useState } from "react";
import {  BsCheck2All } from "react-icons/bs";
import React from "react";
import { Icon } from "@chakra-ui/react";
import { useContext } from "react";



export default function ClothingCategory({setCate}){
    const [value, setValue] = useState(null);
    const {setBoatFilter} = useContext(AuthContext)

    setBoatFilter(value)

    const handleResetFilter =()=>{
      setValue(null)
      setCate(null)
    }

    return(
        <Box>
        <Text fontSize={20}>FILTER BY ClothingCategory</Text>
        <Box>
          <RadioGroup fontFamily={"cursive"} onChange={setValue} value={value}>
            <Stack direction="column">
              <Radio value="RADIO">
                {value == "RADIO" ? (
                  <Icon boxSize={22} as={BsCheck2All} />
                ) : null}{" "}
                RADIO{" "}
              </Radio>
              <Radio value="Fish Finder">
                {value == "Fish Finder" ? (
                  <Icon boxSize={22} as={BsCheck2All} />
                ) : null}{" "}
                FISH FINDER
              </Radio>
              <Radio value="Marine Electronics">
                {value == "Marine Electronics" ? (
                  <Icon boxSize={22} as={BsCheck2All} />
                ) : null}{" "}
                MARINE ELEC
              </Radio>
            </Stack>
          </RadioGroup>
        </Box>
        <hr></hr>

        <Button borderRadius="20px" border={'navajowhite'} onClick={handleResetFilter}>RESET FILTER</Button>
      </Box>
      
    )
}