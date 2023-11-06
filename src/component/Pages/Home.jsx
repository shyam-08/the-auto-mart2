import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import "./About.css";
// import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';
// import { Card } from '@mui/material';
// import SwipeableTextMobileStepper from './SwipeableTextMobileStepper';
import { motion } from "framer-motion";
// import ParallaxCarousel from './ParallaxCarousel';


export default function Home() {
    

    return (
        <div>
            <div className='section-1Home   head-text' >
                <div className='row'>
                    <div className='col-sm-12 col-md-12'>
                    <Navbar />
                    <img   src="src\component\img\c-b-cAbH8B-14Vo-unsplash.jpg" alt="" style={{
                        width: "100%",
                        height: "100%"
                        // backgroundSize:"true" 
                    }}
                    />
                    </div>


                   
               <h2 style={{color:"whitesmoke"}}>We Help You...To Buy A 100% Secure Car</h2>
                   
                    {/* <h6>Wellcome...we try to give you best experience</h6>  */}
                </div>
            </div>
            <motion.div className='section-2Home' 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }} style={{boxSizing:"border-box"}}
            >
                <div className="container" >

                    <div className='row'>
                        <div className="col-md-6 col-sm-12">
                            <h2>PLANNING TO SELL?</h2>
                            <h2>SELL US YOUR CAR</h2>
                            <h2>IN 29 MINUTES.</h2>
                            <div className="row" style={{
                                padding: '20px'
                            }}>
                                <motion.div className="col-sm-3 col-md-6"
                                transition={{
                                    ease: "linear",
                                    duration: 2,
                                    x: { duration: 2 }
                                  }}><span>
                                    <img src="src\component\img\outrightsell-icon.png" alt="outrightsell" style={{
                                        padding: "5px", border: "1px solid black ", margin: "4px", borderRadius: "10px", height: "50px", width: "50px"
                                    }} />
                                    Best Offer</span>
                                    <span><strong> Sale</strong></span>
                                </motion.div>
                                <div className="col-sm-3 col-md-6"><span>

                                    <img src="src\component\img\clock-icon.png" alt="clock-icon" style={{
                                        padding: "5px", border: "1px solid black ", margin: "4px", borderRadius: "10px", height: "50px", width: "50px"
                                    }} /> Best Offer

                                    <strong> in 29 Minutes</strong></span></div></div>
                            <div className="row" style={{
                                padding: '20px',
                            }}>
                                <div className="col-sm-3 col-md-6"><span>
                                    <img src="src\component\img\men-icon1.png" alt="men-icon1" style={{
                                        padding: "5px", border: "1px solid black ", margin: "4px", borderRadius: "10px", height: "50px", width: "50px"
                                    }} />
                                    7600+ Satisfied
                                    <strong> Customers</strong></span></div>
                                <div className="col-sm-3 col-md-6"><span>
                                    <img src="src\component\img\hasslefree-icon1.png" alt="hasslefree-icon1" style={{
                                        padding: "5px", border: "1px solid black ", margin: "4px", borderRadius: "10px", height: "50px", width: "50px"
                                    }} />


                                    Hassle Free

                                    <strong> Processing</strong></span></div></div>

                        </div>
                        <div className="col-md-6 col-sm-12" >
                            <img src="src\component\img\sellyrcar-quotefeactured-img.jpg" alt="" height="100%" width="100%"/>
                        </div>
                    </div>

                </div>
            </motion.div>
            <motion.div className='section-3Home'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }} style={{boxSizing:"border-box"}}> 
                <div>
                    <h3>HOW IT WORKS </h3>
                    <p>
                        Buying used luxury cars in India was never this easy. You can now own your dream luxury car in just 4 simple steps at The Auto
                        Mart , India's trusted used car portal.
                    </p>
                    <div className="row" style={{
                        padding: "50px"
                    }}>
                        <div className="col-md-3">
                            <img src="src\component\img\howitworks-img1.png" alt="img" />
                            <h6 className='Home-basic'>BROWSE FROM OUR COLLECTION</h6>
                        </div>
                        <div className="col-md-3">
                            <img src="src\component\img\howitworks-img2.png" alt="img" />
                            <h6 className='Home-basic'>GET TO KNOW YOUR RIDE</h6>
                        </div>
                        <div className="col-md-3">
                            <img src="src\component\img\howitworks-img3.png" alt="img" />
                            <h6 className='Home-basic'>PAY & BOOK ONLINE OR VISIT SHOWROOM</h6>
                        </div>

                        <div className="col-md-3">
                            <img src="src\component\img\howitworks-img4.png" alt="img" />
                            <h6 className='Home-basic'>INSTANT PAYMENT & TRANSFER</h6>
                        </div>
                        <hr />
                    </div>
                </div>
            </motion.div>
            <div className='Secton-5Home' style={{textAlign:"center", padding:"20px", boxSizing:"border-box"}}>
                <div className='row'>
                    <div className='col-sm-12 col-md-12 '>
                    <h2>POPULAR @</h2>
                   <h2>THE AUTO MART</h2>
                   <div style={{padding:"80px"}}>
                  {/* <SwipeableTextMobileStepper style={{textItem:"center", padding:"20px", width:"800px"}}/> */}
                  {/* <ParallaxCarousel/> */}
                    </div>
                 
                   </div>
                </div>
            </div>
            <motion.div className='secton-4Home'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }} style={{boxSizing:"border-box"}}>
                <div>
                    <Footer />
                </div>
            </motion.div>
        </div>
    )
}
