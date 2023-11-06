import { useState } from 'react'
import { motion } from "framer-motion"
import {BrowserRouter,
   Routes,

   Link,
  Route
} from 'react-router-dom';

import './App.css'
import AboutUs from './component/Pages/AboutUs'
import SaleCar from './component/Pages/SaleCar'
import Footer from './component/Pages/Footer'
import Card from './component/Pages/Card'
import ContactUs from './component/Pages/ContactUs'
import AboutTam from './component/Pages/AboutTam'
import BuyingCar from './component/Pages/BuyingCar'
import FinanceCar from './component/Pages/FinanceCar'
import Insurance from './component/Pages/Insurance'
import SellingCar from './component/Pages/SellingCar'
import TamSquad from './component/Pages/TamSquad'
import WhyUs from './component/Pages/WhyUs'
import UsedCar from './component/Pages/UsedCar'
import Navbar from './component/Pages/Navbar'
import Faq from './component/Pages/Faq'
import EmiCalculator from './component/Pages/EmiCalculator'
import Home from './component/Pages/Home'
import Career from './component/Pages/Career'
import CompareCars from './component/Pages/CompareCars'
import SwipeableTextMobileStepper from './component/Pages/SwipeableTextMobileStepper'
import BasicTabs from './component/Pages/BasicTabs'
import BasicTabs2 from './component/Pages/BasicTabs2'
import InsuranceTab from './component/Pages/InsuranceTab'
import MultipleSelectPlaceholder from './component/Pages/MultipleSelectPlaceholder'
import ParallaxCarousel from './component/Pages/ParallaxCarousel';
import { Navigate } from "react-router-dom";


function App() {
  return (
    <>
      {/* main component  */}
      {/* <Home/> */}
      {/* <AboutUs /> */}
      {/* <ContactUs/> 
    */}
    {/* <ParallaxCarousel/> */}
      {/* <Insurance/> */}
      {/* <WhyUs /> */}
      {/* <TamSquad/> */}
      {/* <Faq/> */}
      {/* <Career/> */}
      {/* <UsedCar/> */}
      {/* <EmiCalculator/> */}
      {/* <SaleCar/> */}
      {/* <CompareCars/> */}
      {/* <BuyingCar/> */}
      {/* <FinanceCar/> */}
      {/* <MultipleSelectPlaceholder/> */}
      <BrowserRouter>
      
        <Routes>
          <Route path='/' exact       element={<Home />} />
            <Route path='/TamSquad' element={<TamSquad/> } /> 
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/WhyUs' element={<WhyUs />} />
          <Route path='/ContactUs' element={<ContactUs/>} />
          <Route path='/Insurance' element={<Insurance/>} />
          <Route path='/Faq' element={<Faq/>} />
          <Route path='/Career' element={<Career/>} />
          <Route path='/UsedCar' element={ <UsedCar/>} />
          <Route path='/EmiCalculator' element={ <EmiCalculator/>} />
          <Route path='/SaleCar' element={<SaleCar/>} />
          <Route path='/CompareCars' element={<CompareCars/>} />

        </Routes>
     </BrowserRouter>   

      {/* other component  */}
      {/* <AboutTam/> */}
      {/* <Navbar/> */}
      {/* <Footer/>       */}
      {/* <Card/> */}
      {/* <SellingCar/> */}
      {/* <BasicTabs/> */}
      {/* <BasicTabs2/> */}
      {/* <InsuranceTab/> */}
      {/* <SwipeableTextMobileStepper/> */}
    </>
  )
}

export default App
