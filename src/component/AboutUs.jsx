import React from 'react'
// import { motion } from "framer-motion"
import "./About.css";
import Navbar from './Navbar';
import Footer from './Footer';
// import { styled } from '@mui/system';
// import { Modal, Button, TextField, Grid, Paper } from '@mui/material';
// import { Typography } from '@mui/material';

export default function AboutUs() {

  return (
    <div>
      <div className="section-1  head-text">
        <Navbar />
        <div className='container-fluid aboutUS-bgimage'>
        </div>
        <div className='text-on-image' style={{paddingBottom:"20%"}}>
<p><strong>ABOUT THE AUTO MART</strong></p>
          <h2>COMPANY</h2>
        </div>
      </div>
      <div className='Section-2' style={{ backgroundColor: '#F2F2F2', padding: '40px 80px', }}>
        <h4 style={{ padding: '20px 10px 10px' }}>The Quality Cars, a pre-owned luxury car dealer deals with 24 brands</h4>
        <p style={{ padding: '10px' }}>
          The quality car started in 2011 as a benchmark model for the Pre-Used, or how we prefer to see it as, Pre-Loved Car Brand. The mission was simple, direct and drove effect - delivering a new dimension of luxury while standardising & raising platforms for the used car market in India.

          Since our inception our primary aim has been our passion for delivering excellence which became our mission. YOU (our patrons) are the driving force behind our company and making sure you get the best is what we thrive on.

        </p>
        <h4 style={{ padding: '10px' }}>
          MISSION
        </h4>
        <p style={{ padding: '10px' }}>The journey began in 2011 when the quality cars was founded in jaipur, India. Since then our mission has been to provide quality exotic cars with highly personalized care at a competitive price. Creating a new benchmark for excellence in every aspect of our business.</p>
      </div>
      <div className='Section-3'>
        <div className="container">
          <h2 style={{ padding: '20px 0 0 ' }}>OUR USPS</h2>
          <div className='row' >

            <div className='col-md-6' style={{ alignItems: 'center', textAlign: 'centre', padding: '10px 0 60px ' }}>

              <img src="src\component\img\customer3.jpg" style={{ alignItems: 'center', padding: '5px  40px 10px', height: '90%', width: '90%' }} />
              <h3 style={{ width: '70%', textAlign: 'center' }}> 7600+ Happy Customers</h3>
              <p style={{ width: '70%', textAlign: 'center' }}>At TAM, we offer you comparisons across various parameters thereby helping you choose the ideal one.</p>
            </div>
            <div className='col-md-6' style={{ alignItems: 'center', textAlign: 'centre', padding: '10px 0 60px ' }}>  <img src="src\component\img\customer2.jpg" style={{ alignItems: 'center', padding: '5px  40px 10px', height: '90%', width: '90%', fontfamily: 'Barlow, arial' }} />
              <h3 style={{ width: '70%', textAlign: 'center' }}>Jaipur&#39;s Biggest Studio</h3>
              <p style={{ width: '80%', textAlign: 'center' }}>At The Auto Mart, we offer you comparisons across various parameters thereby helping you choose the ideal one.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='Section-4' style={{ backgroundColor: '#F2F2F2' }}>
        <div className='contaiener'>
          <div className='row' >
            <div className='col-md-6' style={{ textAlign: 'center' }}>
              <img src="src\component\img\kothi.jpg" alt='kothi-Image' style={{ height: '400px', width: '650px', padding: '20px' }} />
            </div>
            <div className='col-md-6' style={{ padding: '90px 10px 10px', fontfamily: 'Barlow, arial', textAlign: 'center', width: '40%', borderRadius: '50px' }}> <h3>THE AUTO MART SHOWROOM&#39;S</h3>
              <p>At The Auto Mart the aim has always been to dream big and achieve great. Welcome to our showroom&#39;s tour. Hope that you will enjoy your time cruising through. A little warning before you scroll ahead &quot;You can check out anytime you want but you can never&quot; leave</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  )
}
