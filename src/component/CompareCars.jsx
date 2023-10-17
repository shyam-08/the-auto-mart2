import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import CarBrand from './CarBrand'

export default function CompareCars() {
  return (
    <div>
      <div className='Section-1CompareCar'>
        <div>
            <Navbar/>
        </div>
      </div>

      <div className='Section-2CompareCar'>
        <div>
          <h2>COMPARE CARS</h2>
          <div className="row">
            <div className="col-md-6">
              <CarBrand/>
            </div>
            <div className="col-md-6"></div>

          </div>


        </div>
      </div>
      
      <div className='Section-3CompareCar'>
        <div>
            <Footer/>
        </div>
      </div>
    </div>
  )
}
