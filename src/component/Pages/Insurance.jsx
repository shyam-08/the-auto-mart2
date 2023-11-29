import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./About.css";
import BasicTabs2 from './BasicTabs2';
import { motion } from "framer-motion";
export default class Insurance extends Component {
  render() {
    return (
      <div>
        <div className="Insurance section-1 head-text ">
          <div >
            <Navbar />
            <img src="src\component\img\banner-img-1.jpg" alt="insurance-img" style={{
              height: 'auto', maxWidth: '100%', marginLeft: '0px'
            }} />
            <div className='text-on-image '>
              <h3 >MORE THAN</h3>
              <motion.h3 animate={{onClick:"1.5"}} >JUST A CAR INSURANCE</motion.h3>
              <p>Solutions for everything that you car needs</p>

            </div>
          </div>
        </div>
        <div className="Section-2Insurance col-sm-12" style={{ backgroundColor: "whitesmoke", padding: "50px", color: "whitesmoke" }}>
          <BasicTabs2/>
        </div>
        <div className='Section-3Insurance'>
          <div className="container  col-sm-12">
            <h2>BE TAM ASSURED</h2>
            <p>Life constitutes of both smooth and bumpy roads.</p>
            <p>At The Auto Mart, we bring to you a private car package policy that adds convenience and balance to your car coverage.</p>
            <ul style={{ padding: "20px", display: "flex", listStyle: "none", flexWrap:"wrap"}}>

              <li style={{ padding: "30px" }} >
                <span><img src="src\component\img\assured-list-icon-1.png" alt="" style={{ margin: "1px" }} /></span>

                <h6>Renewal
                  Discounts</h6>
              </li>
              <li style={{ padding: "30px" }} >
                <img src="src\component\img\assured-list-icon-2.png" alt="" style={{ margin: "1px" }} />
                <h6>

                  Accidental
                  Cover
                </h6>
              </li>
              <li style={{ padding: "30px" }}>
                <img src="src\component\img\assured-list-icon-3.png" alt="" style={{ margin: "1px" }} />
                <h6>

                  Depreciation
                  Cover
                </h6>
              </li>
              <li style={{ padding: "30px" }}>
                <img src="src\component\img\assured-list-icon-4.png" alt="" style={{ margin: "1px" }} />
                <h6>

                  Third Party
                  Cover
                </h6>
              </li>
              <li style={{ padding: "30px" }}>
                <img src="src\component\img\assured-list-icon-5.png" alt="" style={{ margin: "1px" }} />
                <h6>

                  Personal Accident
                  Cover
                </h6>
              </li>

            </ul>
          </div>
        </div>
        <div className="Section-4Insurance">
          <div className='container'>
            <p>THE AUTO MART</p>
            <h3>ADVANTAGE</h3>
            <div className="row">
              <div className='col-md-4 col-sm-12 Vacate-Career' style={{ width: "32%", margin: "7px" }}>
                <img src="src\component\img\anvantage-icon-1.jpg" alt="anvantage-icon-1" className='Sec4-Ins-img' />
                <h3>FLEXIBLE PLANS</h3>
                <p>At BBT, we offer you comparisons across various parameters thereby helping you choose the ideal one.</p>
              </div>
              <div className='col-md-4 col-sm-12 Vacate-Career' style={{ width: "32%", margin: "7px" }} >
                <img src="src\component\img\anvantage-icon-2.jpg" alt="anvantage-icon-2" className='Sec4-Ins-img' />
                <h3>EXPERT ADVICE.</h3>
                <p>Unbiased advice helping you through the process of selecting and buying the best insurance plan.</p>
              </div>
              <div className=' col-md-4  col-sm-12 Vacate-Career' style={{ width: "32%", margin: "7px" }}>
                <img src="src\component\img\anvantage-icon-3.jpg" alt="anvantage-icon-3" className='Sec4-Ins-img' />
                <h3>POLICY IN YOUR INBOX.</h3>
                <p>Once you buy the right policy, we ensure that your policy is express delivered to your inbox.</p>
              </div>
            </div>
          </div>
        </div>


        <Footer />
      </div>
    )
  }
}
