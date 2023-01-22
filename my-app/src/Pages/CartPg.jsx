import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React, { useContext, useState } from "react";
import Footer from "../Component/NavbarComponet/Footer";
import { Box, Button } from "@chakra-ui/react";
import { AuthContext } from "../Context/AuthContext";
import { NavLink } from "react-router-dom";
import { toast } from 'react-hot-toast';
import { Toaster } from "react-hot-toast";

export default function CartPg() {
  const {cart,setDelete} = useContext(AuthContext);
  let sum=0

 const  handleDelete =(id)=>{
    setDelete(id)
 }

 const handelIncri = (id,event) =>{
  //const val = e.target.value
  // cart.map((el)=>{
  //   if(el.id==id){
  //     setIncri(val*el.maxofferprice)
  //   }
  // })
  
  //console.log(id,event)
 }



 

  return (
    <>
    <Toaster />
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol size="12">
              <MDBCard
                className="card-registration card-registration-2"
                style={{ borderRadius: "15px" }}
              >
                <MDBCardBody className="p-0">
                  <MDBRow className="g-0">
                    <MDBCol lg="8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <MDBTypography
                            tag="h1"
                            className="fw-bold mb-0 text-black"
                          >
                            Shopping Cart
                          </MDBTypography>
                          <MDBTypography className="mb-0 text-muted">
                            {cart.length} items
                          </MDBTypography>
                        </div>

                        <Box>
                          {cart.map((el) => (
                            <>
                              <hr className="my-4" />

                              <MDBRow key={el.id} className="mb-4 d-flex justify-content-between align-items-center">
                                <MDBCol md="2" lg="2" xl="2">
                                  <MDBCardImage
                                    src={el.topthumbnail}
                                    fluid
                                    className="rounded-3"
                                    alt="Cotton T-shirt"
                                  />
                                </MDBCol>
                                <MDBCol md="3" lg="3" xl="3">
                                  <MDBTypography
                                    tag="h6"
                                    className="text-muted"
                                  >
                                    {el.ec_brand}
                                  </MDBTypography>
                                  <MDBTypography
                                    tag="h6"
                                    className="text-black mb-0"
                                  >
                                    {el.title}
                                  </MDBTypography>
                                </MDBCol>
                                <MDBCol
                                  md="3"
                                  lg="3"
                                  xl="3"
                                  className="d-flex align-items-center"
                                >
                                  <MDBBtn color="link" className="px-2">
                                  {/* <Button isDisabled={incri===0} onClick={()=>handelIncri(-1,el.id)} border={'none'} h={3} w={3}>
                                    <MDBIcon fas icon="minus" />
                                  </Button> */}
                                  </MDBBtn>

                                  {/* <MDBInput
                                    type="number"
                                    min="0"
                                    defaultValue={1}
                                    size="sm"
                                    disabled
                                    value={incri}
                                  
                                  /> */}

                                <select
                                    defaultValue={1}
                                    onChange={()=>{handelIncri()}}
                                    className="select p-2 rounded bg-grey"
                                    style={{ width: "40%" }}
                                  >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>

                                  <MDBBtn color="link" className="px-2">
                                  {/* <Button  onClick={()=>handelIncri(+1,el.id)} border={'none'} h={3} w={3}>
                                    <MDBIcon fas icon="plus" />
                                  </Button> */}
                                  </MDBBtn>
                                </MDBCol>
                                <MDBCol
                                  md="3"
                                  lg="2"
                                  xl="2"
                                  className="text-end"
                                >
                                  <MDBTypography tag="h6"  className="mb-0">
                                    $ {el.maxofferprice}
                                  </MDBTypography>
                                </MDBCol>
                                <MDBCol
                                  md="1"
                                  lg="1"
                                  xl="1"
                                  className="text-end"
                                >
                                  <a href="#!" className="text-muted">
                                  <Button onClick={()=>handleDelete(el.id)} border={'none'} bg={'Background'}>
                                    <MDBIcon fas icon="times" />
                                  </Button>
                                  </a>
                                </MDBCol>
                              </MDBRow>
                            </>
                          ))}
                        </Box>

                        <hr className="my-4" />
    
                      <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                        {/* <MDBCol md="2" lg="2" xl="2">
                          <MDBCardImage
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img6.webp"
                            fluid className="rounded-3" alt="Cotton T-shirt" />
                        </MDBCol>
                        <MDBCol md="3" lg="3" xl="3">
                          <MDBTypography tag="h6" className="text-muted">
                            Shirt
                          </MDBTypography>
                          <MDBTypography tag="h6" className="text-black mb-0">
                            Cotton T-shirt
                          </MDBTypography>
                        </MDBCol>
                        <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
                          <MDBBtn color="link" className="px-2">
                            <MDBIcon fas icon="minus" />
                          </MDBBtn>
    
                          <MDBInput type="number" min="0" defaultValue={1}  size="sm" />
    
                          <MDBBtn color="link" className="px-2">
                            <MDBIcon fas icon="plus" />
                          </MDBBtn>
                        </MDBCol>
                        <MDBCol md="3" lg="2" xl="2" className="text-end">
                          <MDBTypography tag="h6" className="mb-0">
                            € 44.00
                          </MDBTypography>
                        </MDBCol>
                        <MDBCol md="1" lg="1" xl="1" className="text-end">
                          <a href="#!" className="text-muted">
                            <MDBIcon fas icon="times" />
                          </a>
                        </MDBCol> */}
                      </MDBRow>
    
                      
    
                      <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                        {/* <MDBCol md="2" lg="2" xl="2">
                          <MDBCardImage
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img7.webp"
                            fluid className="rounded-3" alt="Cotton T-shirt" />
                        </MDBCol>
                        <MDBCol md="3" lg="3" xl="3">
                          <MDBTypography tag="h6" className="text-muted">
                            Shirt
                          </MDBTypography>
                          <MDBTypography tag="h6" className="text-black mb-0">
                            Cotton T-shirt
                          </MDBTypography>
                        </MDBCol>
                        <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
                          <MDBBtn color="link" className="px-2">
                            <MDBIcon fas icon="minus" />
                          </MDBBtn>
    
                          <MDBInput type="number" min="0" defaultValue={1} size="sm" />
    
                          <MDBBtn color="link" className="px-2">
                            <MDBIcon fas icon="plus" />
                          </MDBBtn>
                        </MDBCol>
                        <MDBCol md="3" lg="2" xl="2" className="text-end">
                          <MDBTypography tag="h6" className="mb-0">
                            € 44.00
                          </MDBTypography>
                        </MDBCol>
                        <MDBCol md="1" lg="1" xl="1" className="text-end">
                          <a href="#!" className="text-muted">
                            <MDBIcon fas icon="times" />
                          </a>
                        </MDBCol> */}
                      </MDBRow>
    
                      
    
                      <div className="pt-5">
                        <MDBTypography tag="h6" className="mb-0">
                          <MDBCardText tag="a" href="#!" className="text-body">
                          <NavLink to='/'>
                          <MDBIcon fas icon="long-arrow-alt-left me-2" />
                             Back to shop 
                          </NavLink>
                          </MDBCardText>
                        </MDBTypography>
                      </div>
                    </div>
                  </MDBCol>
                  <MDBCol lg="4" className="bg-grey">
                    <div className="p-5">
                      <MDBTypography tag="h3" className="fw-bold mb-5 mt-2 pt-1">
                        Summary
                      </MDBTypography>
    
                      <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-4">
                          <MDBTypography tag="h5" className="text-uppercase">
                            items {cart.length}
                          </MDBTypography>
                          <MDBTypography tag="h5">{}</MDBTypography>
                        </div>

                        <MDBTypography tag="h5" className="text-uppercase mb-3">
                          Payment
                        </MDBTypography>

                        <div className="mb-4 pb-2">
                          <select
                            className="select p-2 rounded bg-grey"
                            style={{ width: "100%" }}
                          >
                            <option value="1">Standard-Delivery- €5.00</option>
                            <option value="2">Net Banking</option>
                            <option value="3">Pay On Delivery</option>
                            <option value="4">Credit Card</option>
                          </select>
                        </div>

                        <MDBTypography tag="h5" className="text-uppercase mb-3">
                          Give code
                        </MDBTypography>

                        <div className="mb-5">
                          <MDBInput size="lg" label="Enter your code" />
                        </div>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-5">
                          <MDBTypography tag="h5" className="text-uppercase">
                            Total price
                          </MDBTypography>
                          <MDBTypography tag="h5">
                            {
                              sum=cart.reduce((acc,el)=>{
                                 acc +=el.maxofferprice
                                 return acc
                              },0)
                            }
                          </MDBTypography>
                        </div>

                        <MDBBtn disabled={Array.isArray(cart)&&cart.length===0} onClick={()=>{ toast.success("Your Order is Placed")}} color="dark" block size="lg">
                          Place your Order
                        </MDBBtn>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <Footer />
    </>
  );
}
