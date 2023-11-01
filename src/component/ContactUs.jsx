import React, { Component } from 'react'
// for navabar header 
import Navbar from './Navbar'
// for footer
import Footer from './Footer'
// for bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// for material ui 
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Checkbox } from '@mui/material';
import { InputLabel } from '@mui/material';
import { Select } from '@mui/material';
import { FormControl } from '@mui/material';
// for animation framer motion 
// import { motion } from "framer-motion"

export default class ContactUs extends Component {
    render() {
        return (
            // <!-- START - Contact Us Section -->
            <Box className="lightgray contactus-sec">
            <Grid className="section-1">
                 <Navbar />
            </Grid>

            
                   <Box className="section-2" style={{
                    padding:"40px",background:"whitesmoke"
                   }}>
                <Grid className="container">
                
                    <Grid className="secheader-grp">
                        <h1 className="h4 sectitle">Contact us</h1>
                    </Grid>
                    <Grid className="row flexrow">
                        <Grid className="col-md-6 cntnt-clmn">
                            <Grid className="cntnt-grp">
                                <ul className="contactusdetail-list">
                                    <li className="mail">
                                        <Grid className="li-innr">
                                            <h6 className="h7"><a href="mailto:sales@bigboytoyz.com">sales@bigboytoyz.com</a></h6>
                                            <p>The best way to get answer faster.</p>
                                        </Grid>
                                    </li>
                                    <li className="call">
                                        <Grid className="li-innr">
                                            <h6 className="h7">For Preowned Cars</h6>
                                            <h6 className="h7"><a href="tel:+91-9999999983">(+91) 9999 9999 83</a></h6>
                                            <p>We are happy to help (10am to 10pm)</p>
                                        </Grid>
                                    </li>

                                    <li className="call">
                                        <Grid className="li-innr">
                                            <h6 className="h7">For Vintage & Classic Cars</h6>
                                            <h6 className="h7"><a href="tel:+91-9999999017">(+91) 9999 9990 17</a></h6>
                                            <p>or email us at vintage@bigboytoyz.com</p>
                                        </Grid>
                                    </li>
                                </ul>
                                <br className="hide-480" />
                                <h2 className="h4 sectitle">Our Showroom</h2>
                                <ul className="contactusloctn-list">
                                    <li>
                                        <h6 className="h7">Jaipur Headquarters <a href="https://www.google.com/maps/place/Big+Boy+Toyz/@28.4367017,77.0094202,15z/data=!4m5!3m4!1s0x0:0xdb108da17afb495b!8m2!3d28.4367017!4d77.0094202" target="_blank" className="locatemap">Locate on map</a></h6>
                                        <p>Plot No. 134, Sector 37, Nirman Nagar, Jaipur, Rajasthan - 122001</p>
                                    </li>

                                </ul>
                            </Grid>
                        </Grid>
                        <Grid className="col-md-6 form-clmn">
                            <Grid className="frm-grp cntctfrm-grp">
                                <Grid className="frm-titles">
                                    <h3 className="h4 frm-title">Send us an email</h3>
                                    <p>Drop us a line by using the below form</p>
                                </Grid>
                                {/* <Grid><FormGroup/></Grid> */}

                                <form>
                                    <Grid className=" row form-row" style={{ margin: '0px' }}>
                                        <Grid className="form-group col-md-6" >
                                            {/* <label for="inputEmail4">Email</label>
      <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/> */}
                                            <TextField id="outlined-basic" label="Name" variant="outlined" type='text' required color='secondary'  />
                                            </Grid>
                                           <Grid className='col-md-6'> <TextField id="outlined-basic" label="Email" variant="outlined" type='email' required color='secondary' />
                                        </Grid>
                                        <Grid className="form-group col-md-6">
                                            {/* <label for="inputPassword4">Password</label>
      <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/> */}

                                        </Grid>
                                    </Grid>

                                    <Grid className="row form-row" >
                                        <Grid className="form-group col-md-6" style={{ margin: '5px' }}>
                                            {/* <label for="inputCity">City</label> */}
                                            {/* <input type="text" className="form-control" id="inputCity"/> */}
                                            <TextField id="outlined-basic" label="Location" variant="outlined" color='secondary'  />
                                            </Grid>
                                            <Grid>
                                            <TextField id="outlined-basic" label="Number" variant="outlined" type='Number' required color='secondary' style={{ margin: '5px' }} />

                                            </Grid>
                                        </Grid>
                                        <Grid className="form-group" style={{ margin: '5px' }}>
                                            {/* <label for="inputAddress">Address</label> */}
                                            {/* <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/> */}
                                            <TextField id="outlined-basic" label="Address" variant="outlined" color='secondary' fullWidth />
                                        </Grid>

                                        {/* <Grid className="form-group col-md-4"> */}
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
                                        {/* </Grid> */}

                                    
                                    <Grid className="form-group">
                                        <Grid className="form-check">
                                            {/* <input className="form-check-input" type="checkbox" id="gridCheck"/> */}
                                            {/* <label className="form-check-label" for="gridCheck"> */}
                                            <Checkbox label="Check me out" />

                                            {/* </label> */}
                                        </Grid>
                                    </Grid>
                                    {/* <button type="submit" className="btn btn-primary">Sign in</button> */}
                                    <Button variant="outlined" color="secondary" >Submit</Button>
                                </form>
                            </Grid>
                        </Grid>
                    </Grid>
                    </Grid>
                </Box>
                <Grid style={{marginTop:'20px'}}><Footer /></Grid>


            </Box>
            /* <!-- END - Contact Us Section --> */

        )
    }
}
