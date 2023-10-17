// import { Image } from '@mui/icons-material'
import React, { Component } from 'react'
// navbar section 
import Navbar from './Navbar'
// footer section 
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
// import { TabContext} from '@mui/material';
// for material ui 
import { TabContext } from '@mui/lab';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';

import { Tab } from '@mui/base/Tab';
import { TabsList } from '@mui/base/TabsList';
import { TabPanel } from '@mui/base/TabPanel';
import { Tabs } from '@mui/base/Tabs';
import FinanceCar from './FinanceCar';
import SellingCar from './SellingCar';
import BuyingCar from './BuyingCar';
import BasicTabs from './BasicTabs';

// for animation framer motion library  
export default class Faq extends Component {
  

  render() {
  
    // function CustomTabPanel(props) {
    //   const { children, value, index, ...other } = props;
    // }    
    // CustomTabPanel.propTypes = {
    //   children: PropTypes.node,
    //   index: PropTypes.number.isRequired,
    //   value: PropTypes.number.isRequired,
    // };

    // function a11yProps(index) {
    //   return {
    //     id: `simple-tab-${index}`,
    //     'aria-controls': `simple-tabpanel-${index}`,
    //   };
    // }

//  function BasicTabs() {
//   const [value, setValue] = React.useState(0);}

//     const handleChange =()=>{
//       setValue(newValue);
//     }
    return (
      
      <div >
        <div className='faq-section-1 head-text'>
          <div>
            <div><Navbar /></div>
            <div>
            <img src="src\component\img\pexels-pixabay-261985.jpg" alt="car image" style={{ height: '550px', width: '1350px' }} />

            </div>
          <div className='text-on-image' >
            <p>FREQUENTLY ASKED FAQ</p>
            <h2>HELLO, HOW WE CAN HELP</h2>
          </div>
          </div>
        </div>
       

        <div>
        <div className='container' style={{padding:"30px"}}>
         
  <BasicTabs/>
        </div> 
       </div>
        <div className="section-3Faq " style={{textAlign:"center",padding:"50px",  display:"flex"}}>
          <div className="container">
            <h2>YOU STILL HAVE A QUESTION?</h2>
            <p>If you connot find answer to your question in our FAQ, you can always contact us.
              We will answer to you shortly!</p>
            <div className='row'>
              <div className="col-md-6 col-sm-12" style={{border:"1px solid black", borderRadius:"10px",padding:"30px",margin:"10px",width:"48%"}}>
               <img src="src\component\img\mobile.png" alt=" mobile" style={{padding:"5px"}} />
                <h6>8742068501</h6>
                <p>We are always happy to help</p>
              </div>
              <div className="col-md-6 col-sm-12"  style={{border:"1px solid black", borderRadius:"10px",padding:"30px",margin:"10px",width:"48%"}}>
                
              <img src="src\component\img\email.png" alt="email" style={{padding:"5px"}}/>
              <h6>team@theautomart.com</h6>
                <p>The best way to get ansawer faster.</p>


              </div>

            </div>
          </div>

        </div>
        <div className='section last'> <div><Footer /></div>
        </div>

      </div>
    )
  }
}
