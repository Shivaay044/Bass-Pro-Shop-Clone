import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button,
  } from '@chakra-ui/react';
import axios from 'axios';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
  import {TfiShoppingCartFull} from 'react-icons/tfi'
import { AuthContext } from '../../../Context/AuthContext';
import { Toaster } from 'react-hot-toast';
  
  
  const IMAGE =
    'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';
  
  export default function BoatingProCard({title,brand,price,image,id,category}) {

   const {boating,getCart} = useContext(AuthContext)


   


   const handleCart = (id)=>{
     let obj = boating.reduce((acc,el)=>{
      if(el.id==id){
        
        acc = {...el}
      }
      return acc
     },{})
    
     axios.post(`http://localhost:8080/cart`,
      obj
     )
     .then(()=>getCart(),toast("Item added to Cart!"))
     .catch((err)=>console.log(err))

   }

    return (

        
      <Center py={12}>
      <Toaster toastOptions={{style:{color:"coral"}}}/>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
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
              src={image}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              {brand}
            </Text>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              {category}
            </Text>
            <Heading fontSize={'sm'} fontFamily={'body'} fontWeight={500}>
              {title}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'xl'}>
                ${price}
              </Text>
              <Text textDecoration={'line-through'} color={'gray.600'}>
                $199
              </Text>
              <Button onClick={()=>{handleCart(id)}} borderRadius={6}><TfiShoppingCartFull/></Button>
            </Stack>
          </Stack>
        </Box>
      </Center>
    );
  }