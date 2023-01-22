import React, { useContext, useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { Image,Box, Button } from '@chakra-ui/react';
import { AuthContext } from '../Context/AuthContext';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { Navigate, NavLink } from 'react-router-dom';





function LoginSignUpPg() {
 
  const [justifyActive, setJustifyActive] = useState('tab1')
  const [CredentialArr,setCredentialArr] = useState([])
  const {setCredential,Credential,LoginCredential,setLoginCredential} = useContext(AuthContext)

  const {setIsAuth,isAuth} = useContext(AuthContext)
 
  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  const handleCredential = (e)=>{
    const {name,value} = e.target
    setCredential({...Credential,[name]:value})
  }

   const handleRegister = ()=>{
    setCredentialArr([...CredentialArr,{...Credential}])

    axios.post(` http://localhost:8080/user`,{
      ...Credential
    }).then((res)=>toast.success("Register successfully"))
      .catch((err)=>toast.error(err))
   }

  const handleLoginCredential = (e)=>{
    const {name,value} = e.target
    setLoginCredential({...LoginCredential,[name]:value})
  }
  
  const handleLogin = ()=>{
    let is = false
    axios.get(`http://localhost:8080/user`)
    .then((res)=>setCredentialArr(res.data))
    .catch((err)=>toast.error(err))

     let user_name

    CredentialArr.forEach((el)=>{
      if(el.email==LoginCredential.email&&el.password==LoginCredential.password){ 
       is = true
       user_name = el.name
      }
    })
    if(is){
        toast.success("Login Success!")
        setTimeout(()=>{
          setIsAuth(true)
          localStorage.setItem("user_name",user_name)
        },400)
    }else{
      toast.error("Opps !Wrong Credential")
    }
  }

  
  if(isAuth){
    return <Navigate to = '/'/>
   }


  return (
    <>
    {/* <Button onClick={notify}>hello</Button> */}
    <Box>
    <Box w='10%'>
        <Image w="100%" h="100%" src="https://img.freepik.com/free-vector/supermarket-logo-design-with-green-cart_23-2148464170.jpg?w=2000"></Image>
    </Box>
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>

          <div className="text-center mb-3">
            <p>Sign in with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          <MDBInput onChange={handleLoginCredential} name='email' wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
          <MDBInput onChange={handleLoginCredential} name='password' wrapperClass='mb-4' label='Password' id='form2' type='password'/>

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <MDBBtn disabled={LoginCredential.email==""||LoginCredential.password==""} onClick={handleLogin}  className="mb-4 w-100">Sign in</MDBBtn>
          <p className="text-center">Not a member? <a href="#!">Register</a></p>

        </MDBTabsPane>

        <MDBTabsPane  show={justifyActive === 'tab2'}>

          <div className="text-center mb-3">
            <p>Sign un with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          <MDBInput required onChange={handleCredential} name='name' wrapperClass='mb-4' label='Name' id='form1' type='text'/>
          <MDBInput required onChange={handleCredential} name='username' wrapperClass='mb-4' label='Username' id='form1' type='text'/>
          <MDBInput required onChange={handleCredential} name='email' wrapperClass='mb-4' label='Email' id='form1' type='email'/>
          <MDBInput required onChange={handleCredential} name='password' wrapperClass='mb-4' label='Password' id='form1' type='password'/>

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
          </div>

          <MDBBtn disabled={Credential.email==""||Credential.password==""} onClick={handleRegister} className="mb-4 w-100">Sign up</MDBBtn>

        </MDBTabsPane>

      </MDBTabsContent>
    
    </MDBContainer>
   
    </Box>
    
    <Toaster/>
    </>
  );
}

export default LoginSignUpPg;