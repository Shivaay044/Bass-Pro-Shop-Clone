
import { AuthContext } from "../../../Context/AuthContext"
import { Radio, RadioGroup } from "@chakra-ui/react";
import { Stack, Box, Text,Button } from "@chakra-ui/react";
import {useState } from "react";
import {  BsCheck2All } from "react-icons/bs";
import React from "react";
import { Icon } from "@chakra-ui/react";
import { useContext } from "react";



export default function FishCategory({setCate}){
    const [value, setValue] = useState(null);
    const {setBoatFilter} = useContext(AuthContext)

    setBoatFilter(value)

    const handleResetFilter =()=>{
      setValue(null)
      setCate(null)
    }

    return(
        <Box>
        <Text fontSize={20}>FILTER BY FishCategory</Text>
        <Box>
          <RadioGroup fontFamily={"cursive"} onChange={setValue} value={value}>
            <Stack direction="column">
              <Radio value="Fishing Reels">
                {value == "Fishing Reels" ? (
                  <Icon boxSize={22} as={BsCheck2All} />
                ) : null}{" "}
                FISHING REELS{" "}
              </Radio>
              <Radio value="Jigs">
                {value == "Jigs" ? (
                  <Icon boxSize={22} as={BsCheck2All} />
                ) : null}{" "}
                JIGS
              </Radio>
              <Radio value="Fishing Food">
                {value == "Fishing Food" ? (
                  <Icon boxSize={22} as={BsCheck2All} />
                ) : null}{" "}
                FISHING FOOD
              </Radio>
            </Stack>
          </RadioGroup>
        </Box>
        <hr></hr>

        <Button borderRadius="20px" border={'navajowhite'} onClick={handleResetFilter}>RESET FILTER</Button>
      </Box>
      
    )
}