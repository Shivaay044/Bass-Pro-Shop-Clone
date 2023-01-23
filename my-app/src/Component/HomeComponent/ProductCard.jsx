import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios'
  
  const IMAGE =
    'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

  
  
  
    export default function ProductCard() {
    const[data,setData] = useState([])
   useEffect(()=>{
      getData()
   },[])

   const getData = async() =>{
    try {
     let res = await fetch('https://tough-wasp-sun-hat.cyclic.app/carousel')
     let data = await res.json()
     setData(data)
    } catch (error) {
     console.log(error)
    }
 }
  



    return (
      <Center py={12}>
        <Box
          role={'group'}
          m={10}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          
          {
            data.map((el)=>(
              <>
              <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${IMAGE})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={el.img}
            />
          </Box>
              <Stack pt={10} align={'center'}>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              {el.name}
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
              {el.category}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'xl'}>
               ${el.price}
              </Text>
              <Text textDecoration={'line-through'} color={'gray.600'}>
                {el.id}
              </Text>
            </Stack>
          </Stack>
          </>
            ))
           }
          
        </Box>
      </Center>
    );
  }