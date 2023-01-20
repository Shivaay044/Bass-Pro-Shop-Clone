import { Checkbox, Radio, RadioGroup } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import {BsAlarm, BsCheck2All} from 'react-icons/bs'


import React from "react";
import { AuthContext } from '../../Context/AuthContext';
import { Icon } from '@chakra-ui/react';

function FilterByBrand() {

      
    const [value, setValue] = useState(null)
     
    const {setFilter} = useContext(AuthContext)

     setFilter(value)

    
    return (
        <>
      <RadioGroup fontFamily={'cursive'} onChange={setValue} value={value}>
        <Stack direction='column'>
          <Radio  value='Lowrance'>{value=="Lowrance"?<Icon boxSize={22} as={BsCheck2All} />:null} LOWRANCE </Radio>
          <Radio value='Garmin'>{value=="Garmin"?<Icon boxSize={22} as={BsCheck2All} />:null} GARMIN</Radio>
          <Radio value='Humminbird'>{value=="Humminbird"?<Icon boxSize={22} as={BsCheck2All} />:null} HUMMINBIRD</Radio>
        </Stack>
      </RadioGroup>
      </>
    )
  }

export default FilterByBrand;



