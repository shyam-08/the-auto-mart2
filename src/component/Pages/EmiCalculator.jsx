// import React, { useEffect } from 'react'
// import { useState } from 'react'
// import "./styles.css"
// import "./Config.jsx"
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { motion } from "framer-motion"
// export default function EmiCalculator() {
//     const [cost, setCost] = useState();
//     const [interest, setInterest] = useState(10);
//     const [fee, setfee] = useState(1);
//     const [downPayment, setDownPayment] = useState(0);
//     const [tenure, setTenure] = useState(12);
//     const [emi, setEmi] = useState(0);
//     const UpdateEMI = () => {
//         if (!cost) return;
//         const dp = Number(e.target.value)
//         setDownPayment(dp.toFixed(0));
//         // Calculate Emi and Upadte
//     }
//     const calculatedp=(emi)=>{
// if(!cost) return;

// const downPaymentPercentage= 100-(emi/calculateEMI(0))*100;
// return Number ((downPaymentPercentage/100)*cost).toFixed();
//     };
//     const UpdateDownPayment = () => {
//         if (!cost) return;
//         const emi = Number(e.target.value)
//         setEmi(dp.toFixed(0));
//         // Calculate downPayment and update
//     }
//     useEffect(()=>{
// if(!cost>0){
//     setDownPayment(0);
//     setEmi(0);
// }
//  const  emi=calculateEMI(downPayment);
// setEmi(emi);
//     },[])
//     const calculateEMI = (cost) => {
//         // Emi amount=[P*R*(1+R)*N]/[(1+R)*N-1]
//         if (!cost) return;
//         const loanAmt = cost - downpayment;
//         const rateOfInterest = Interest / 100;
//         const numOfYears = tenure / 12;

//         const EMI = (loanAmt * rateOfInterest * (1 + rateOfInterest) * numOfYears) / ((1 + rateOfInterest) ** numOfYears - 1);
//         return Number(EMI / 12).toFixed(0);
//     }
//     // const Updatedownpayment = () => { }
//     function numberWithCommas() {
//       var x = document.getElementById('abc').value;
//         x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//     }

//     return (
//         <div className='emical' style={{justifyContent:'center', alignItems:'center',alignContent:'center'}}>

//             <span className='title'>Emi Calculator</span>
//             <span className='subTitle'>Total cost of Assest</span>
//             <input
//                 type='number'
//                 value={cost}
//                 onChange={(e) => setCost(e.target.value)}
//                 placeholder='total cost of assest'
//             />
//             <span>Interest Rate(in %)</span>
//             <input
//                 type='number'
//                 value={interest}
//                 onChange={(e) => setCost(e.target.value)}
//                 placeholder='Rate of interest as per market standars'
//             />
//             <span>Processing fee (in %)</span>
//             <input
//                 type='number'
//                 value={fee}
//                 onChange={(e) => setCost(e.target.value)}
//                 onblur="numberWithCommas()"
//                 placeholder='processing fee'
//             />
//             <span  className='title'>DownPayment of your assest</span>
//        <span className='title' style={{textDecoration:'underline'}}>
//         Total Down Payment - {(Number(downPayment)+(cost-downPayment)*(fee/100)).toFixed(0)};
//         </span>
//             <div>
//                 <input
//                     type='range'
//                     min={0}
//                     max={cost}
//                     className='slider'
//                     value={emi}
//                     onChange={UpdateEMI}
//                     placeholder='Down Payement of your assest'
//                 />

//             </div>
//             <span>Loan per month</span>
//             <span className='title' style={{textDecoration:'underline'}}>
//         Total Loan Amount - {(emi*tenure)};
//         </span>
//             <div> <input
//                 type='range'
//                 min={calculateEMI(cost)}
//                 max={calculateEMI(0)}
//                 className='slider'
//                 value={emi}
//                 onChange={UpdateDownPayment}
//                 placeholder='your emi'

//             />
//                 <div className='lables'>
//                     <label>{calculateEMI(cost)}</label>
//                     <b>{numberWithCommas(downPayment)}</b>
//                     <label>{calculateEMI(0)}</label>
//                 </div>
//                 <span className='title'>
//                     Tenure
//                 </span>
//                  <div className="tenureContainer">
//                     {tenureData.map((t) => {
//                         return (
//                             <button className={`tenure ${t === tenure ? "selected" : ""}`} onClick={() => setTenure(t)}>{t}</button>
//                         );
//                     })}
//                 </div> 
//             </div>
//         </div>
//     )
// }
import React, { useState, useEffect } from "react";
import "./Styles.css";
import "./Config.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
// import div from '@mui/material/div';
const EmiCalculator = () => {
  const [cost, setCost] = useState();
  const [interest, setInterest] = useState(10);
  const [fee, setFee] = useState(1);
  const [downPayment, setDownPayment] = useState(0);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(0);

  const calculateEMI = (cost) => {
    // Emi amount=[P*R*(1+R)*N]/[(1+R)*N-1]
    if (!cost) return;
    const loanAmt = cost - downPayment;
    const rateOfInterest = interest / 100;
    const numOfYears = tenure / 12;

    const EMI = (loanAmt * rateOfInterest * (1 + rateOfInterest) * numOfYears) / ((1 + rateOfInterest) ** numOfYears - 1);
    return Number(EMI / 12).toFixed(0);
  };

  useEffect(() => {
    // Calculate EMI and update state
    const emi = calculateEMI(downPayment);
    setEmi(emi);
  }, [downPayment]);

  const UpdateEMI = (e) => {
    const dp = Number(e.target.value);
    setDownPayment(dp.toFixed(0));
  };

  const UpdateDownPayment = (e) => {
    // Calculate down payment and update state
    const emi = Number(e.target.value);
    setEmi(emi);
  };

  return (
    <Box>
      <div>
        <Navbar />
      </div>
      <div className=" Container emical" style={{ padding: "20px", margin: "20px 50px" }}>
        <h3 className="title" style={{ textAlign: "center" }}>Emi Calculator</h3>
        <h6 className="subTitle">Total cost of Asset</h6>
        <input
          type="number"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          placeholder="Total cost of asset"
        />
        <h6>Interest Rate(in %)</h6>
        <input
          type="number"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          placeholder="Rate of interest as per market standars"
        />
        <h6>Processing fee (in %)</h6>
        <input
          type="number"
          value={fee}
          onChange={(e) => setFee(e.target.value)}
          placeholder="processing fee"
        />
        <h6 className="title">DownPayment of your asset</h6>
        <span className="title" style={{ textDecoration: "underline" }}>
          Total Down Payment - {(Number(downPayment) + (cost - downPayment) * (fee / 100)).toFixed(0)}
        </span>
        <div>
          <input
            type="range"
            min={0}
            max={cost}
            className="slider"
            value={emi}
            onChange={UpdateEMI}
            placeholder="Down Payement of your assest"
          />
        </div>
        <h6>Loan per month</h6>
        <span className="title" style={{ textDecoration: "underline" }}>
          Total Loan Amount - {(emi * tenure).toLocaleString('en-US')}
        </span>
        <div>
          <input
            type="range"
            min={calculateEMI(cost)}
            max={calculateEMI(0)}
            className="slider"
            value={emi}
            onChange={UpdateDownPayment}
            placeholder="your emi"
          />
          <div className="lables">
            <label>{calculateEMI(cost)}</label>
            <b>{downPayment.toLocaleString('en-US')}</b>
            <label>{calculateEMI(0)}</label>
          </div>
        </div>
      </div>
      <div>
        <div>
          <Footer />
        </div>
      </div>
    </Box>
  );
};

export default EmiCalculator;