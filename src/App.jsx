import { useState } from 'react'
import { motion } from "framer-motion"
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css'
import AboutUs from './component/AboutUs'
import SaleCar from './component/SaleCar'
import Footer from './component/Footer'
import Card from './component/Card'
import ContactUs from './component/ContactUs'
import AboutTam from './component/AboutTam'
import BuyingCar from './component/BuyingCar'
import FinanceCar from './component/FinanceCar'
import Insurance from './component/Insurance'
import SellingCar from './component/SellingCar'
import TamSquad from './component/TamSquad'
import WhyUs from './component/WhyUs'
import UsedCar from './component/UsedCar'
import Navbar from './component/Navbar'
import Faq from './component/Faq'
import EmiCalculator from './component/EmiCalculator'
import Home from './component/Home'
import Career from './component/Career'
import CompareCars from './component/CompareCars'
import SwipeableTextMobileStepper from './component/SwipeableTextMobileStepper'
import BasicTabs from './component/BasicTabs'
import BasicTabs2 from './component/BasicTabs2'
import InsuranceTab from './component/InsuranceTab'
import MultipleSelectPlaceholder from './component/MultipleSelectPlaceholder'


function App() {
  return (
    <>
      {/* main component  */}
      <Home/>
      {/* <AboutUs /> */}
      {/* <ContactUs/>  */}
   
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
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/SignIn' element={<SignIn />} /> */}
          {/* <Route path='/SignUp' element={<SignUp />} /> */}
          {/* <Route path='/TamSquad' element={<TamSquad/> } />
          <Route path='/WhyUs' element={<AboutUs />} />
          <Route path='/ContactUs' element={<ContactUs/>} />
          <Route path='/Insurance' element={<Insurance/>} />
          <Route path='/<Faq' element={<Faq/> } />
          <Route path='/Career' element={<Career/>} />
          <Route path='/UsedCar' element={ <UsedCar/>} />
          <Route path='/EmiCalculator' element={ <EmiCalculator/>} />
          <Route path='/SaleCar' element={<SaleCar/>} />
          <Route path='/CompareCars' element={<CompareCars/>} />
 */}
        {/* </Routes> */}
      {/* </BrowserRouter> */} 

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
