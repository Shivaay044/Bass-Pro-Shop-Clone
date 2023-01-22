
import { AuthContext } from "../../../Context/AuthContext"
import { Radio, RadioGroup } from "@chakra-ui/react";
import { Stack, Box, Text,Button } from "@chakra-ui/react";
import {useState } from "react";
import {  BsCheck2All } from "react-icons/bs";
import React from "react";
import { Icon } from "@chakra-ui/react";
import { useContext } from "react";



export default function ShootingCategory({setCate}){
    const [value, setValue] = useState(null);
    const {setBoatFilter} = useContext(AuthContext)

    setBoatFilter(value)

    const handleResetFilter =()=>{
      setValue(null)
      setCate(null)
    }

    return(
        <Box>
        <Text fontSize={20}>FILTER BY ShootingCategory</Text>
        <Box>
          <RadioGroup fontFamily={"cursive"} onChange={setValue} value={value}>
            <Stack direction="column">
              <Radio value="Mouser">
                {value == "Mouser" ? (
                  <Icon boxSize={22} as={BsCheck2All} />
                ) : null}{" "}
                MOUSER{" "}
              </Radio>
              <Radio value="Automatic">
                {value == "Automatic" ? (
                  <Icon boxSize={22} as={BsCheck2All} />
                ) : null}{" "}
                AUTOMATIC
              </Radio>
              <Radio value="Guns">
                {value == "Guns" ? (
                  <Icon boxSize={22} as={BsCheck2All} />
                ) : null}{" "}
                GUNS
              </Radio>
            </Stack>
          </RadioGroup>
        </Box>
        <hr></hr>

        <Button borderRadius="20px" border={'navajowhite'} onClick={handleResetFilter}>RESET FILTER</Button>
      </Box>
      
    )
}