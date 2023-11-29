import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// import {rollsroys} from '.public\img\rollsroyce.png'
// const img =require("src\component\Img\rollsroyce.png")
// import Data from './Data'
// import { motion } from "framer-motion"
// const car = {
//   //     Name:'2016 RANGE ROVER VOGUE LWD',
//   //     KMS:'82000 ||',
//   //     RegState:'Jharkhand || ',
//   //     RegYear:'2020 || ' ,
//   //     FuelType:'Petrol || '

// }

  // ]}
  // {
  //     id: "4",
  //     title:"Volvo",
  //     category:"sedan",
  //     price:"100000",
  //     img:"src\component\img\rangerover-vogue-white-mumbai-01-17.jpg",
  //     desc:"Very Fresh Car"

  // },
  // {
  //     id: "5",
  //     title:"Mercedes",
  //     category:"coupe",
  //     price:"100000",
  //     img:"src\component\img\rangerover-vogue-white-mumbai-01-17.jpg",
  //     desc:"Very Fresh Car"

  // }



 function Card () {
  // const [cars, setCars] = useState/(require('.public\img\rollsroyce.png'));
  const Cars = [


    {
      id: "1",
      title: "BMW",
      category: "Sedan",
      price: "100000",
      img:"public\img\rollsroyce.png",

      // img: require("component\Img\Ford-Logo.webp"),
      desc: "Very Fresh Car "
    },
    {
      id: "2",
      title: "Audi A6",
      category: "sedan",
      price: "140000",
      img:"public\img\rollsroyce.png",
      desc: "Very Fresh Car"
    }
  ]  
  // var require/
  return (

    <div className='container'>
      <div className="row  justify-content-centre">
        {Cars.map((card) => {
          const {id,title,image,desc,price,category} = elem;
          <div key={id} className='col-md-4 col-sm-6 card my-3 border-1'>
            <div className='card-img-top text-centre'>
              <img src={img} alt="img" className='w-75' />
            </div>
            <div className="card-body fw-bold fs-4">
              <div className='card-title'>{title}--{price}
              </div>
              <div className='card-text'>
                {desc}
              </div>
            </div>
            {/* Cars.forEach((person) ={console.log(Card.name)} ) */}

          </div>
 })}
      </div>
    </div>

  )
}

// <div className='container'>
//   <div className="card" style={{ width: '25rem', margin: '10px' }}>
//     <img className="card-img-top" src="src\component\img\rangerover-vogue-white-mumbai-01-17.jpg" />
//     <div className="card-body">
//       <h5 className="card-title carName">{car.Name}</h5>
//       <ul >
//         <li style={{ display: 'inline-block', verticalAlign: 'top' }}><span>RegState:</span>
//           <span>{car.RegState}</span>
//         </li>
//         <li style={{ display: 'inline-block', verticalAlign: 'top' }}><span>RegYEAR:</span>
//           <span>{car.RegYear}</span>
//         </li>
//         <li style={{ display: 'inline-block', verticalAlign: 'top' }}><span>KMS:</span>
//           <span>{car.KMS}</span>
//         </li>
//         <li style={{ display: 'inline-block', verticalAlign: 'top' }}><span>FuelType:</span>
//           <span>{car.FuelType}</span>
//         </li>
//       </ul>

//     </div>
//   </div>
export default  Card