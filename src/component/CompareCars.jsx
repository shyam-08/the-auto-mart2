import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import CarBrand from './CarBrand'
import MultipleSelectPlaceholder from './MultipleSelectPlaceholder'
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function CompareCars() {
  return (
    <div>
      <div className='Section-1CompareCar'>
        <div>
            <Navbar/>
        </div>
        <div>
          <img src="src\component\img\luxury-car-speeds-by-modern-building-dusk-generative-ai_188544-8048.avif" alt="" style={{height:"550px",width:"1350px"}} />
        </div>
      </div>

      <div className='Section-2CompareCar' style={{
        padding:"20px"
      }}>
        <div className='container'>
        <span>please select at least two car for comparison</span>
          <div className="row">
            <div className="col-md-6">
            <h5>Add First Car</h5>

            <MultipleSelectPlaceholder/>
            </div>
            <div className="col-md-6">
              <h5>Add Second Car</h5>
              <MultipleSelectPlaceholder/>
            </div>
          
          </div>
          <div>
          <Button variant="contained" style={{justifyContent:"center"}}>Compare car</Button>
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
