import {Routes,Route} from "react-router-dom"
import HomePg from '../Pages/HomePg'
import FishingPg from '../Pages/FishingPg'
import BoatingPg from '../Pages/BoatingPg'
import CampingPg from '../Pages/CampingPg'
import HomeGifPg from '../Pages/HomeGifPg'
import ShootingPg from '../Pages/ShootingPg'
import BargainCavePg from '../Pages/BargainCavePg'
import LocationPg from "../Pages/LocationPg"

export default function AllRoutes(){

    return(
        <Routes>
            <Route path="/" element={<HomePg/>}/>
            <Route path="/Fishing" element={<FishingPg/>}/>
            <Route path="/boating" element={<BoatingPg/>}/>
            <Route path="/shooting" element={<ShootingPg/>}/>
            <Route path="/camping" element={<CampingPg/>}/>
            <Route path="/home&gift" element={<HomeGifPg/>}/>
            <Route path="/bargainCave" element={<BargainCavePg/>}/>
            <Route path="/location" element={<LocationPg/>}/>
            <Route path="*" element={<h2>Page Not Found</h2>}/>
        </Routes>
    )
}