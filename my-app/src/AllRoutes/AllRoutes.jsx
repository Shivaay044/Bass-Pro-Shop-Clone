import {Routes,Route} from "react-router-dom"
import HomePg from '../Pages/HomePg'
import FishingPg from '../Pages/FishingPg'
import BoatingPg from '../Pages/BoatingPg'
import CampingPg from '../Pages/CampingPg'
import HomeGifPg from '../Pages/HomeGifPg'
import ShootingPg from '../Pages/ShootingPg'
import ClothingCavePg from '../Pages/ClothingCavePg'
import LocationPg from "../Pages/LocationPg"
import CartPg from "../Pages/CartPg"
import LoginSignUpPg from "../Pages/LoginSignUpPg"
import PrivateRoute from "../Component/PrivateRoutes.jsx/PrivateRoute"
import HomeGifCard from "../Component/ProductsComp/ProductCard/HomeGifCard"


export default function AllRoutes(){

    return(
        <Routes>
            <Route path="/" element={ <HomePg/>}

            />
            <Route path="/Fishing" element={
              <PrivateRoute>
                    <FishingPg/>
              </PrivateRoute>
           
            
            }/>
            <Route path="/boating" element={<BoatingPg/>}/>
            <Route path="/shooting" element={
             <PrivateRoute>
                    <ShootingPg/>
             </PrivateRoute>
           

            }/>
            <Route path="/camping" element={<CampingPg/>}/>
            <Route path="/home&gift" element={<HomeGifPg/>}/>
            <Route path="/bargainCave" element={<ClothingCavePg/>}/>
            <Route path="/location" element={<LocationPg/>}/>
            <Route path="/cart" element={
              
                 <CartPg/>
              

            }/>
            <Route path="/register-login" element={<LoginSignUpPg/>}/>
            <Route path="*" element={<h2>Page Not Found</h2>}/>
        </Routes>
    )
}