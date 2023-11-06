import React, { Component, useState } from 'react'
// for footer adn navbar section  
import Navbar from './Navbar'
import Footer from './Footer'
// import Card from './Card'
// for boostrap 
import 'bootstrap/dist/css/bootstrap.min.css'
import Data from './Data'
import Card from './Card'
import Button from './Button'
// for animation framer motioni library 
// import { motion } from "framer-motion"
function UsedCar () {
  const [Item,setItem]= useState(Cars);
  const menuItems = [...new set(Cars.map((Card)=>Card.category))]

 
   
const  filterItem=(cat)=>{
const newItem = Cars.filter((newval)=>newval.category===cat)
setItems(newItems);
}

    return (
      <div className='container-fluid'>
        <div className="row">
          <h1 className='text-center col-12 fw-bold mt-3 mb-5 '>Used cars</h1>
        <Button
        menuItems={menuItems}
        filterItems={filterItems}
        setItems={setItems}
        />
          <Card item={item}/>
        </div>
      </div>
    )
  }

export default  UsedCar
// {
  /*         
        <Navbar />
        <div className='section-2'>
          <div className='container-fluid'>
            <div className="row">
              <div className="col-md-4"><Card RegYEAR="2023"
                RegState="Rajasthan" FuelType="Deisel" /></div>
              <div className="col-md-4"><Card /></div>
              <div className="col-md-4"><Card /></div>
            </div>
            <div className="row">
              <div className="col-md-4"><Card /></div>
              <div className="col-md-4"><Card /></div>
              <div className="col-md-4"><Card /></div>
            </div>
            <div className="row">
              <div className="col-md-4"><Card /></div>
              <div className="col-md-4"><Card /></div>
              <div className="col-md-4"><Card /></div>
            </div>
            <div className="row">
              <div className="col-md-4"><Card /></div>
              <div className="col-md-4"><Card /></div>
              <div className="col-md-4"><Card /></div>
            </div>
            <div className="row">
              <div className="col-md-4"><Card /></div>
              <div className="col-md-4"><Card /></div>
              <div className="col-md-4"><Card /></div>
            </div>
          </div>
        </div>
        <Footer /> */
      // }
