import React, { Component } from 'react'
// for navbar and foooter component 
import Navbar from './Navbar'
import Footer from './Footer';
// for styling 
import "./About.css";
// for bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css'
// for animation and styling framer motion 
// import { motion } from "framer-motion"
export default class WhyUs extends Component {
  render() {
    return (
      <div>
        <div className=' section-1 Why-bg'>
          <div >
            <Navbar />
            <img src="src\component\img\pexels-mike-bird-193995.jpg" alt="img" style={{
              height: "700px", width: "1350px"
            }} />
          </div>
        </div>
        <div className='Section-2'>
          <div className='container-fluid'>
            <div className="row" style={{
              padding: "70px"
            }}>
              <div className="col-md-4">
                <img src="src\component\img\whyus-experience-img1.jpg" alt="" style={{ height: "500px", width: "400px" }} />
              </div>
              <div className="col-md-8" style={{
                padding: "80px"
              }}>
                <h1>EXPERIENCE</h1>
                <h2>OVER 30+ YEARS OF EXPERIENCE</h2>
                <p>
                  From the finest German engineering to standout Italian designs;from English tradition to American classics, we have something for the keen and enthusiastic automobile aficionados. An array of 24 exotic brands with 75 to 100 cars under one roof to woo your sixth sense! Get your attention instead of notice, but your adrenaline pumping.</p>
                <div className="row" style={{
                  padding: '20px'
                }}>
                  <div className="col-md-4"><span>
                    <img src="src\component\img\outrightsell-icon.png" alt="outrightsell" style={{
                      padding: "5px", border: "1px solid black ", margin: "4px", borderRadius: "10px", height: "40px", width: "40px"
                    }} />
                    Our Clientele
                  </span>
                    <span><strong> 10k+</strong></span>
                  </div>
                  <div className="col-md-4"><span>

                    <img src="src\component\img\clock-icon.png" alt="clock-icon" style={{
                      padding: "5px", border: "1px solid black ", margin: "4px", borderRadius: "10px", height: "40px", width: "40px"
                    }} /> Established


                    <strong> 2009</strong></span></div>
                  <div className="col-md-4 "><span>

                    <img src="src\component\img\clock-icon.png" alt="clock-icon" style={{
                      padding: "5px", border: "1px solid black ", margin: "4px", borderRadius: "10px", height: "40px", width: "40px"
                    }} /> Supercars Sold


                    <strong> 5k+</strong></span></div>
                </div>


              </div>

            </div>
          </div>
        </div>
        <div className='Section-3'>
          <div className='container'>
            <h4>Our client</h4>
            <h2>People Trust Us For Our Expertise</h2>
            <p>
              BBT's showroom has become a hot destination for Bollywood stars and well known celebrities. Stars of the likes of Neha Dhupia and Yuvraj Singh have come down to catch a glimpse of BBT's exotic collection of dazzling high-performance cars.</p>
          </div>
        </div>
        <div className='Section-4' style={{ padding: "40px" }}>
          {/* <div className="container"> */}
          <div className="row">

            <div className="col-md-5" style={{
              padding: "60px", textAlign: "justify"

            }}>
              <h1> HIGHLY PROFESSIONAL</h1>
              <h3>AND PASSIONATE TEAM</h3>
              <p >We accept that the clients’ need and intrigue consistently starts things out and ought to be given the most effective attention. Our exotic vehicle assortment entices you to pick something novel and particular to suit your style . Find a remarkable universe of extravagance and energy at Big Boy Toyz with one of the best car extravaganza marked on offer. Allow your investigation to start!</p>
            </div>
            <div className="col-md-7">
              <img src="src\component\img\highlyprofessional-passionateteam.jpg" alt="" style={{ height: "500px", width: "700px", padding: "10px" }} />
            </div>
          </div>

          {/* </div> */}
        </div>
        <div className='section-5' style={{ padding: "40px", textAlign: "justify", width: "100%" ,textAlign:"center"}}>
          <div className="container">
            <h2>BEST CAR INSPECTION</h2>
              <h2>TEAM IN JAIPUR</h2>
            <ul style={{ listStyle: "none" }}>
              <li>
                <span> <img src="src\component\img\zerotolerance-icon.png" alt="zerotolerance-icon" style={
                  { height: "40px", width: "40px" }
                } />
                </span>
                <span><h3>ZERO TOLERANCE POLICY</h3></span>
                <span>We believe in transparent and fair dealings,no refurbished cars.</span>
              </li><hr />



              <li>
                <span> <img src="src\component\img\151checkpoints-icon.png" alt="151checkpoints-icon" style={
                  { height: "40px", width: "40px" }
                } /></span>
                <span> <h3>151 CHECK POINTS</h3></span>
                <span>Car comes with 360° inspection report with comfort and ease in driving pleasure.</span>
              </li><hr />

              <li>
                <span> <img src="src\component\img\rtophysicalcheck-icon.png" alt="rtophysicalcheck-icon" style={
                  { height: "40px", width: "40px" }
                } /></span>
                <span><h3>RTO PHYSICAL CHECK</h3></span>
                <span>  <p>We do a complete check of owner and vehicle history with no litigation case on it.</p></span>

              </li><hr />
              <li>
                <span> <img src="src\component\img\ncrcheck-icon.png" alt="ncrcheck-icon" style={
                  { height: "40px", width: "40px" }
                } /></span>
                <span> <h3>NCR CHECK</h3></span>
                <span> <p>Every car goes through a National Crime Record check at the time of procurement to eliminate any possibility of purchasing a car with an NCR case</p></span>
              </li>
              <hr />
              <li>

                <span><img src="src\component\img\fixedprice-icon.png" alt="" style={
                  { height: "40px", width: "40px" }
                } /></span>
                <span>
                  <h3>FIXED PRICE</h3>
                </span>
                <span>
                  <p>Our complete stock is listed online as we don't believe in inflating the prices to waste your time.</p>
                </span>

              </li><hr />

              <li>
                <span> <img src="src\component\img\confidentialityofseller-icon.png" alt="" style={
                  { height: "40px", width: "40px" }
                } />
                </span>
                <span>
                  <h3>BUY BACK AGREEMENT</h3>

                </span>
                <span>
                  <p>Assured buy back policy - drive any car from BBT for a year with 25% depreciation with kms limitation on it and 75% will be refunded back to your account.</p>

                </span>

              </li><hr />
              <li>

                <span>
                  <img src="src\component\img\confidentialityofseller-icon.png" alt="" style={
                    { height: "40px", width: "40px" }
                  } />

                </span>
                <span>
                  <h3>CLIENT'S CONFIDENTIALITY</h3>

                </span>
                <span>
                  <p>We never disclose our customer details with any third-party as we respect your privacy.</p>

                </span>

              </li><hr />
              <li>
                <span>
                  <img src="src\component\img\hasslefreebuyprocess-icon.png" alt="" style={
                    { height: "40px", width: "40px" }
                  } />
                </span>
                <span>
                  <h3>HASSLE FREE BUYING PROCESS</h3>

                </span>
                <span>
                  <p>We have 24*7 active boardline with constant update of our stock over social media and have a dedicated website to book your dream car online with secured banking options available Pan India.</p>

                </span>

              </li><hr />
              <li>

                <span>
                  <img src="src\component\img\limitedperiodwarranty-icon.png" alt="" style={
                    { height: "40px", width: "40px" }
                  } />

                </span>
                <span>
                  <h3>LIMITED PERIOD ENGINE & TRANSMISSION WARRANTY</h3>

                </span>
                <span>
                  <p>All cars that we sell comes with a backed up six months warranty on engine and transmission from BBT.</p>

                </span>

              </li><hr />
              <li>

                <span> <img src="src\component\img\serviceinsurance-historycheck-icon.png" alt="" style={
                  { height: "40px", width: "40px" }
                } />
                </span>
                <span>
                  <h3>SERVICE & INSURANCE HISTORY CHECK</h3>

                </span>
                <p>Cars comes with complete previous service history checked with authorised dealership and we also check that the previous insurance policy doens't comes with any kind of accidental claims on it.</p>
                <span></span>
              </li><hr />
            </ul>














          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
