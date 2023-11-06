// import React from 'react'
// import Navbar from './Navbar'
// import Footer from './Footer'
// import CarBrand from './CarBrand'
// import MultipleSelectPlaceholder from './MultipleSelectPlaceholder'
// // import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';

// export default function CompareCars() {
//   return (
//     <div>
//       <div className='Section-1CompareCar'>
//         <div>
//             <Navbar/>
//         </div>
//         <div>
//           <img src="src\component\img\luxury-car-speeds-by-modern-building-dusk-generative-ai_188544-8048.avif" alt="" style={{height:"550px",width:"1350px"}} />
//         </div>
//       </div>

//       <div className='Section-2CompareCar' style={{
//         padding:"20px"
//       }}>
//         <div className='container'>
//         <span>please select at least two car for comparison</span>
//           <div className="row">
//             <div className="col-md-6">
//             <h5>Add First Car</h5>

//             <MultipleSelectPlaceholder/>
//             </div>
//             <div className="col-md-6">
//               <h5>Add Second Car</h5>
//               <MultipleSelectPlaceholder/>
//             </div>

//           </div>
//           <div>
//           <Button variant="contained" style={{justifyContent:"center"}}>Compare car</Button>
//           </div>

//         </div>
//       </div>

//       <div className='Section-3CompareCar'>
//         <div>
//             <Footer/>
//         </div>
//       </div>
//     </div>
//   )
// }
import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import MultipleSelectPlaceholder from './MultipleSelectPlaceholder';
import Button from '@mui/material/Button';

export default function CompareCars() {
  const [selectedCars, setSelectedCars] = useState({
    car1: null,
    car2: null,
  });

  const handleCarSelection = (car, carNumber) => {
    setSelectedCars({
      ...selectedCars,
      [carNumber]: car,
    });
  };

  const compareCars = () => {
    if (selectedCars.car1 && selectedCars.car2) {
      const car1 = selectedCars.car1;
      const car2 = selectedCars.car2;

      // Perform comparisons (Example: Price and Fuel Efficiency)
      const priceComparison = car1.price - car2.price;
      const fuelEfficiencyComparison = car1.fuelEfficiency - car2.fuelEfficiency;

      // Display the comparison results
      alert(`Comparison Results:
        - Price: Car 1 is ${priceComparison > 0 ? 'more expensive' : 'cheaper'} than Car 2.
        - Fuel Efficiency: Car 1 is ${fuelEfficiencyComparison > 0 ? 'more fuel-efficient' : 'less fuel-efficient'} than Car 2.`);
    } else {
      alert('Please select at least two cars for comparison.');
    }
  };

  return (
    <div>
      {/* ...Your existing code for sections 1 and 2... */}
      <div className='Section-1CompareCar'>
         <div>
             <Navbar/>
         </div>
         <div className='col-md-12 col-sm-12'>
           <img src="src\component\img\luxury-car-speeds-by-modern-building-dusk-generative-ai_188544-8048.avif" alt="" style={{height:"550px",width:"100%"}} />
         </div>
       </div>
      <div className='Section-2CompareCar' style={{ padding: '80px' }}>
        <div className='container'>
          <h2 style={{textAlign:"center",padding:"20px"}}>Compare Cars</h2>
          <span>Please select at least two cars for comparison</span>
          <div className='row'>
            <div className='col-md-6 col-sm-12'>
              <h5>Add First Car</h5>
              <MultipleSelectPlaceholder
                onCarSelect={(car) => handleCarSelection(car, 'car1')}
              />
            </div>
            <div className='col-md-6 col-sm-12'>
              <h5>Add Second Car</h5>
              <MultipleSelectPlaceholder
                onCarSelect={(car) => handleCarSelection(car, 'car2')}
              />
            </div>
          </div>
          <div>
            <Button variant='contained' style={{ justifyContent: 'center' }} onClick={compareCars}>
              Compare Cars
            </Button>
          </div>
        </div>
        
      </div>
      <div className='Section-3Compare' >
          <div  >
            <Footer />
          </div>
        </div>
      {/* ...Your existing code for section 3... */}
    </div>
  );
}