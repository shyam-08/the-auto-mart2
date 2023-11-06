import React, { Component } from 'react'
import Navbar from './Navbar'
// import Footer from './Footer'
import "./About.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './Footer';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Checkbox } from '@mui/material';
import { InputLabel } from '@mui/material';
import { Select } from '@mui/material';

import { FormControl } from '@mui/material';
import InputFileUpload from './InputFileUpload';
import InputFileUpload2 from './InputFileUpload2';



export default class SaleCar extends Component {
  render() {
    return (
      <div>
        <div className="Section-1SaleCar   " >
          <div className="container-fluid">
            <Navbar />
            <div className="row SaleCar1" >
              <div className="col-md-5 col-sm-12" style={{ alignContent: 'center', padding: "20px" }}>
                <h3>SELL YOUR LUXURY CAR</h3>
                <h3 style={{ color: 'transparent !important', webkittextstrokewidth: '1px', webkittextstrokecolor: '#000' }}>WITHIN 29 MINUTES IN</h3>
                <h3>3 EASY STEPS.</h3>
                <ul style={{
                  listStyle: "none", padding: "30px"
                }}>
                  <li className='sale litxtt'>
                    <span className='icon checkpoint' >
                      <img src="" alt="" />
                    </span>
                    <h5>151 <strong>Check Point</strong></h5>

                  </li>
                  <li className='sale litxtt'>
                    <span className='icon checkpoint' >
                      <img src="" alt="" />

                    </span>
                    <h5>Get Offer  <strong>in 29 Minutes</strong></h5>

                  </li>
                  <li className='sale litxtt' style={{ font: '18px' }}>
                    <span className='icon checkpoint' >
                      <img src="" alt="" />

                    </span>
                    <h5>2000+  <strong>Satisfied Customers</strong></h5>

                  </li>
                </ul>
                <Button variant="contained" color="success" >
                  Chat on Whatsapp
                </Button>
                {/* <button style={{ margin: "5px" }}> </button> */}
                <Button variant="contained" color="success" >
                  Call Now:8742068501
                </Button>
                {/* <button>Call Now:8742068501</button> */}
              </div>
              <div className="col-md-7 col-sm-12 Sec1-sale" style={{ paddingLeft: '10px' }}>
                <img src="src\component\img\sellyourcar-banner-imgbg.jpg" alt="" style={{ height: "auto", width: "100%", position: "absolute" }} />
                <img src="src\component\img\sellyourcar-banner-img.png" alt="Car image" style={{ height: "auto", width: "100%", position: "relative" }} />

              </div>
            </div>
          </div>
        </div>
        <div className='Section-2Sale'>
          <div className="container">
            <div className="row">
              <h2>AUTHORIZED LUXURY CAR BUYERS IN JAIPUR</h2>
              <h2>THE AUTO MART</h2>
              <div className="col-md-6 col-sm-12" style={{
                padding: "20px"
              }}>
                <ul style={{
                  listStyle: "none", textAlign:
                    "left"
                }}>
                  <li>

                    <img src="src\component\img\bodytypeothrinfolisrt-checkicon.png" alt="" className='Sec2-Li-Img' />

                    One of the biggest and most trusted brand in the industry</li><hr />
                  <li>
                    <img className='Sec2-Li-Img' src="src\component\img\bodytypeothrinfolisrt-checkicon.png" alt="" />
                    Repeat business with every single client over the last 17 years</li><hr />
                  <li>
                    <img className='Sec2-Li-Img' src="src\component\img\bodytypeothrinfolisrt-checkicon.png" alt="" />
                    Pan India Presence</li><hr />
                  <li>
                    <img className='Sec2-Li-Img' src="src\component\img\bodytypeothrinfolisrt-checkicon.png" alt="" />
                    ZERO commitment failures</li><hr />
                  <li>
                    <img className='Sec2-Li-Img' src="src\component\img\bodytypeothrinfolisrt-checkicon.png" alt="" />
                    Touching 5 Million people every month</li><hr />
                  <li>
                    <img className='Sec2-Li-Img' src="src\component\img\bodytypeothrinfolisrt-checkicon.png" alt="" />
                    10000 + Satisfied Clients</li><hr />
                  <li>
                    <img className='Sec2-Li-Img' src="src\component\img\bodytypeothrinfolisrt-checkicon.png" alt="" />
                    Conclusion of the transaction within the same working day</li><hr />
                  <li>
                    <img className='Sec2-Li-Img' src="src\component\img\bodytypeothrinfolisrt-checkicon.png" alt="" />
                    100% Payment Secured</li><hr />
                  <li>
                    <img className='Sec2-Li-Img' src="src\component\img\bodytypeothrinfolisrt-checkicon.png" alt="" />
                    50% of the cars are booked before they are ready</li><hr />
                  <li>
                    <img className='Sec2-Li-Img' src="src\component\img\bodytypeothrinfolisrt-checkicon.png" alt="" />
                    Fastest stock turn around time in the industry</li><hr />
                  <li>
                    <img className='Sec2-Li-Img' src="src\component\img\bodytypeothrinfolisrt-checkicon.png" alt="" />
                    Transparent and simple processes</li><hr />
                  <li>
                    <img className='Sec2-Li-Img' src="src\component\img\bodytypeothrinfolisrt-checkicon.png" alt="" />
                    Not a single litigation since inception</li><hr />
                  <li>
                    <img className='Sec2-Li-Img' src="src\component\img\bodytypeothrinfolisrt-checkicon.png" alt="" />
                    A dedicated team of 175 professionals serving you 24x7</li><hr />
                </ul>
              </div>

              <div className="col-md-6  col-sm-12 form-clmn" style={{ border: "1px solid black", padding: "30px" }}>
                <div className="frm-grp cntctfrm-grp">
                  <div className="frm-titles">
                    <h3 className="h4 frm-title">Send us an email</h3>
                    <p>Drop us a line by using the below form</p>
                  </div>
                  {/* <div><FormGroup/></div> */}

                  <form>
                    <div className=" row form-row" style={{ margin: '0px' }}>
                      <div className="form-group col-md-5 col-sm-6" >
                        {/* <label for="inputEmail4">Email</label>
      <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/> */}
                        <TextField id="outlined-basic" label="Name" variant="outlined" type='text' required color='secondary' fullWidth style={{ margin: '5px' }} />
                      </div>
                      <div className='col-md-5'> <TextField id="outlined-basic" label="Email" variant="outlined" type='email' required color='secondary' fullWidth style={{ margin: '5px' }} />
                      </div>
                      <div className="form-group col-md-6 col-sm-6">
                        {/* <label for="inputPassword4">Password</label>
      <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/> */}

                      </div>
                    </div>

                    <div className="row form-row" >
                      <div className="form-group col-md-5 col-sm-6" style={{ margin: '5px' }}>

                        <TextField id="outlined-basic" label="Location" variant="outlined" color='secondary' fullWidth required />
                      </div>
                      <div className="form-group col-md-5 col-sm-6">
                        <TextField id="outlined-basic" label="Number" variant="outlined" type='Number' required color='secondary' style={{ margin: '5px' }} />

                      </div>
                    </div>
                    <div className="row form-row" >
                      <div className="form-group col-md-5 col-sm-6" style={{ margin: '5px' }}>

                        <TextField id="outlined-basic" label="Your Car" variant="outlined" color='secondary' required />
                      </div>
                      <div className="form-group col-md-5 col-sm-6">
                        <TextField id="outlined-basic" label="Owner" variant="outlined" type='Number' required color='secondary' style={{ margin: '5px' }} />

                      </div>
                    </div>
                    <div className="row form-row" >
                      <div className="form-group col-md-5 col-sm-6" style={{ margin: '5px' }}>

                        <TextField id="outlined-basic" label="Location" variant="outlined"  required color='secondary' fullWidth />
                      </div>
                      <div className="form-group col-md-5 col-sm-6">
                        <TextField id="outlined-basic" label="Number" variant="outlined" type='Number' required color='secondary' style={{ margin: '5px' }} />

                      </div>
                    </div>
                    <div className="row form-row" >
                      <div className="form-group col-md-5 col-sm-6" style={{ margin: '5px' }}>

                        <TextField id="outlined-basic" label="Color" variant="outlined" color='secondary' type='text' required />
                      </div>
                      <div className="form-group col-md-5 col-sm-6">
                        <TextField id="outlined-basic" label="KM Done" variant="outlined" type='Number' required color='secondary' style={{ margin: '5px' }} />

                      </div>
                    </div>
                    <div className="row form-row" >
                      <div className="form-group col-md-5 col-sm-6" style={{ margin: '5px' }}>

                        <TextField id="outlined-basic" label="Resigtration No." variant="outlined" type='Number' color='secondary'  required />
                      </div>
                      <div className="form-group col-md-5 col-sm-6">
                        <TextField id="outlined-basic" label="Registration Type" variant="outlined" type='text' required color='secondary' style={{ margin: '5px' }} />

                      </div>
                    </div>
                    <div className="row form-row" >
                      <div className="form-group col-md-5 col-sm-6" style={{ margin: '5px' }}>

                        <TextField id="outlined-basic" label="Car Insurance" variant="outlined" color='secondary' required />
                      </div>
                      <div className="form-group col-md-5 col-sm-6">
                        <TextField id="outlined-basic" label="Is Accidental" variant="outlined" type='Text' required color='secondary' style={{ margin: '5px' }} />

                      </div>
                    </div>
                    <div className="form-group col-sm-12" style={{ margin: '5px' }}>
                      {/* <label for="inputAddress">Address</label> */}
                      {/* <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/> */}
                      <TextField id="outlined-basic" label="Address" variant="outlined" color='secondary' required fullWidth />
                    </div>

                    {/* <div className="form-group col-md-4"> */}
                    {/* <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">State</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={State}
    label="State"
    onChange={handleChange}
  >
    <MenuItem value={raj}>Rj</MenuItem>
    <MenuItem value={maharastra}>Mh</MenuItem>
    <MenuItem value={mp}>Mp</MenuItem>
  </Select>
</FormControl> */}
                    {/* <label for="inputState">State</label>
      <select id="inputState" className="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select> */}
                    {/* </div> */}


                    <div className="form-group">
                      <div className="form-check">
                        {/* <input className="form-check-input" type="checkbox" id="gridCheck"/> */}
                        {/* <label className="form-check-label" for="gridCheck"> */}
                        <Checkbox label="Check me out" />

                        {/* </label> */}
                      </div>
                    </div>
                   <InputFileUpload/>
                   <InputFileUpload2/>
                   <hr/>
                    {/* <button type="submit" className="btn btn-primary">Sign in</button> */}
                    <Button variant="outlined" color="secondary" >Submit</Button>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="Section-3Sale">
          <div className="container">
            <h2>OTHER BRANDS</h2>
            <ui style={{ listStyle: "none", display: "flex" }}>
              <li >
                <a href="#" className='a-3Sale'>
                  <img src="src\component\img\Lamborghini-logo.webp" alt="Lamborgini" className='logo' />
                  {/* <span>Lamborgini</span> */}
                </a>
              </li>
              <li >
                <a href="#" className='a-3Sale'>
                  <img src="src\component\img\Aston-Martin-logo-2003-6000x3000.webp" alt="Lamborgini" className='logo' />
                  {/* <span>Lamborgini</span> */}
                </a>
              </li>
              <li >
                <a href="#" className='a-3Sale'>
                  <img src="src\component\img\audi-logo (1).webp" alt="Lamborgini" className='logo' />
                  {/* <span>Lamborgini</span> */}
                </a>
              </li>
              <li >
                <a href="#" className='a-3Sale'>
                  <img src="src\component\img\chevrolet.png" alt="Lamborgini" className='logo' />
                  {/* <span>Lamborgini</span> */}
                </a>
              </li>
              <li >
                <a href="#">
                  <img src="src\component\img\bmw-icon.png" alt="Lamborgini" className='logo' />
                  {/* <span>Lamborgini</span> */}
                </a>
              </li>
              <li >
                <a href="#" className='a-3Sale'>
                  <img src="src\component\img\dc-icon.png" alt="Lamborgini" className='logo' />
                  {/* <span>Lamborgini</span> */}
                </a>
              </li>
              <li >
                <a href="#">
                  <img src="src\component\img\ducati-icon.png" alt="Lamborgini" className='logo' />
                  {/* <span>Lamborgini</span> */}
                </a>
              </li>
              <li >
                <a href="#">
                  <img src="src\component\img\fiat-icon.png" alt="Lamborgini" className='logo' />
                  {/* <span>Lamborgini</span> */}
                </a>
              </li>


            </ui>
            <ui style={{ listStyle: "none", display: "flex",   liststyletype: 'circle'}}>
              <li >
                <a href="#" className='a-3Sale'>
                  <img src="src\component\img\nissan-icon.png" alt="Lamborgini" className='logo' />
                  {/* <span>Lamborgini</span> */}
                </a>
              </li>
              <li >
                <a href="#" className='a-3Sale'>
                  <img src="src\component\img\Jaguar-logo.webp" alt="Lamborgini" className='logo' />
                  {/* <span>Lamborgini</span> */}
                </a>
              </li>
              <li >
                <a href="#" className='a-3Sale'>
                  <img src="src\component\img\LexusSmallMain.webp" alt="Lamborgini" className='logo' />
                  {/* <span>Lamborgini</span> */}
                </a>
              </li>
              <li >
                <a href="#" className='a-3Sale'>
                  <img src="src\component\img\mahidra.png" alt="Lamborgini" className='logo' />
                  {/* <span>Lamborgini</span> */}
                </a>
              </li>
              <li >
                <a href="#">
                  <img src="src\component\img\Maserati-symbol-1920x1080_edited.webp" alt="Lamborgini" className='logo' />
                  {/* <span>Lamborgini</span> */}
                </a>
              </li>
              <li >
                <a href="#" className='a-3Sale'>
                  <img src="src\component\img\maybach-icon.png" alt="Lamborgini" className='logo' />
                  {/* <span>Lamborgini</span> */}
                </a>
              </li>
              <li >
                <a href="#">
                  <img src="src\component\img\mercedes-benz-logo.webp" alt="Lamborgini" className='logo' />
                  {/* <span>Lamborgini</span> */}
                </a>
              </li>
              <li >
                <a href="#">
                  <img src="src\component\img\mini.png" alt="Lamborgini" className='logo' />
                  {/* <span>Lamborgini</span> */}
                </a>
              </li>


            </ui>
          </div>
        </div>
        <div className="Section-4Sale">
          <div className="container">

            <h2>TAM MANDATE CHECK FOR PURCHASING USED CAR</h2>
            <div  >

              <div className="row " style={{ padding: "20px" }}>

                <div className="col-md-3 Mandate-Check-Sale">
                  <span><img src="src\component\img\benefit-offer-icon.png" alt="" className='Section-5Squad-Icon' /></span>

                  <h6>
                    No Accidental History</h6>
                </div>
                <div className="col-md-3 Mandate-Check-Sale">
                  <img src="src\component\img\benefit-pay-icon.png" alt="" className='Section-5Squad-Icon' />
                  <h6>


                    No litigations
                  </h6>
                </div>
                <div className="col-md-3 Mandate-Check-Sale ">
                  <img src="src\component\img\benefit-workfreedom-icon.png" alt="" className='Section-5Squad-Icon' />
                  <h6>
                    No Odometer Tampering
                  </h6>
                </div>
                <div className="col-md-3 Mandate-Check-Sale">
                  <img src="src\component\img\benefit-timing-icon.png" alt="" className='Section-5Squad-Icon' />
                  <h6>


                    National Crime Record
                    Check
                  </h6>
                </div>

              </div>
              <div className="row" style={{ padding: "20px" }}>

                <div className="col-md-3 Mandate-Check-Sale">
                  <img src="src\component\img\benefit-communication-icon.png" alt="" className='Section-5Squad-Icon' />
                  <h6>
                    Model 2015 & above & KMS driven
                    less than 30,000 only.
                  </h6>
                </div>
                <div className="col-md-3 Mandate-Check-Sale" >
                  <img src="src\component\img\benefit-reach-icon.png" alt="" className='Section-5Squad-Icon' />
                  <h6>


                    Service History
                    Check
                  </h6>
                </div>
                <div className="col-md-3 Mandate-Check-Sale" >
                  <img src="src\component\img\benefit-scale-icon.png" alt="" className='Section-5Squad-Icon' />
                  <h6>
                    Insurance History
                    Check

                  </h6>
                </div>
                <div className="col-md-3 Mandate-Check-Sale" >
                  <img src="src\component\img\benefit-automobilegrowth-icon.png" alt="" className='Section-5Squad-Icon' />
                  <h6>

                    Physical Evaluation
                  </h6>

                </div>
              </div>
            </div>
            <Button variant="contained" color="success">
              Chat on Whatsapp
            </Button>
            {/* <button style={{ margin: "5px" }}> </button> */}
            <Button variant="contained" color="success">
              Call Now:8742068501
            </Button>
          </div>
        </div>
        <div className="Section-5Sale">
          <div className="container">
            <h2 style={{ color: "whitesmoke", padding: "10px" }}>HOW TO SELL YOUR USED CARS</h2>
            <p style={{ color: "grey", padding: "10px" }}>At TAM, we strive to provide the quickest and most hassle free car selling service available. Getting a great deal on your vehicle can often be tricky, that’s why at The Auto Mart we’ll value your vehicle based on its condition and current market value.</p>
            <div className="row">
              <div className="col-md-4">
                <img src="src\component\img\sellcar-instantvaluation-img.png" alt="instant valuation" />
                <h6 style={{ color: "grey" }}>Instant Valuation</h6>
              </div>
              <div className="col-md-4">
                <img src="src\component\img\sellcar-bookappointment-img.png" alt="appointment" />
                <h6 style={{ color: "grey" }}>Book An Apppointment</h6>
              </div>
              <div className="col-md-4">
                <img src="src\component\img\sellcar-sllyrcarmeeting-img.png" alt="sell car" />
                <h6 style={{ color: "grey" }}>Sell Your Car</h6>
              </div>

            </div>
            <hr style={{ color: "grey" }} />
          </div>
        </div>
        <div className="Section-6Sale">
          <div className="container">
            
              <img src="src\component\img\outrightsale-icon.png" alt="" className='Section-6Sale-Img' />
              <h6><strong>OUTRIGHT SALE</strong></h6>
              <h6><strong>(NOT ONLY EXCHANGE)</strong></h6>
              <p>Sell you cars with us without the boundation of exchange only offers.</p>
              <img src="src\component\img\bestofferin29mins-icon.png" alt="" className='Section-6Sale-Img' />
              <h6><strong>BEST OFFER IN 29MINS</strong></h6>
              <p>Get the best offer of your super car in 29mins post physical/virtual valuation.</p>
              <span><img src="src\component\img\onspot-icon.png" alt="" className='Section-6Sale-Img' /></span>
              <h6><strong>ON SPOT</strong></h6>
              <p>Easy and quick on the spot payment method when you sell/exchange your cars with us.</p>
              <div> <img src="src\component\img\confidentialityofseller-icon.png" alt="" className='Section-6Sale-Img' /></div>
              <h6><strong>CONFIDENTIALITY
                OF SELLER.</strong></h6>
              <p>All your personal details are safe with us and is not passed on to the new buyers.</p>
           

          </div>
        </div>
        <div className="Section-7Sale">
          <div>
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}
