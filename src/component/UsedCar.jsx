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
export default class UsedCar extends Component {
  render() {
    const [Item,setItem]=useState(Data)
    const menuItems = [...new set(Data.map((val)=>val.category))]

const  filterItem=(cat)=>{
const newItem = Data.filter((newval)=>newval.category===cat)
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
}
{/*         
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
        <Footer /> */}
