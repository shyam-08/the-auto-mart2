import React, { Component } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
// for bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css'
// mui icon for footer 
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import "./About.css";
// for animation framer motion library 
// import { motion } from "framer-motion"



export default class Footer extends Component {
    render() {
        return (
            <>
                <div >
                    {/* <!-- Footer Start --> */}
                    {/* <!-- Site footer --> */}
                    {/* <Footer className="site-footer"> */}
                    <div style={{ fontfamily: 'inter,Arial,sans-serif', color: 'white', background: '#080E0E', padding: '30px 20px' }}>
                        <div className="row">
                            <div className="col-sm-12 col-md-5">
                                <h6 className="f-heading">The Auto Mart</h6>
                                <p className="text-justify" style={{ color: "#EBEBEB" }}><i>DEAL WITH TRUST.</i></p>
                                <p>The Auto Mart the aim has always been to dream big and achieve great. Welcome to our showroom's tour. Hope that you will enjoy your time cruising through. A little warning before you scroll ahead "You can check out anytime you want but you can never leave"
                                </p>
                            </div>
                            <div className="col-sm-12 col-md-3" >
                                <h6 className="f-heading " >Contact Info</h6>
                                <ul className="footer-links call" 

                              >
                                    <li className='mail'><a href="mailto:team@codelixsolution.com">Team@theautomart.com</a></li>
                                    <li><a href="tel:8742068501">8742068501</a></li>
                                    <li><a href="tel:9829066706">9829066706</a></li>
                                    <li><a href="tel:9512111483">9512111483</a></li>
                                    <li>
                                        <a href="https://www.google.com/maps/dir/22.9932698,72.7332131/Codelixsolution+Plot+No.20%2F21+DK+Industrial+Park-2,+Bakrol+Bujarang+Ahmedabad,+Gujarat+382430/@22.9931437,72.7331343,17.73z/data=!4m8!4m7!1m0!1m5!1m1!1s0x395e7da5cf0ca6b5:0x29ccc46e98abd38f!2m2!1d72.7332989!2d22.9929439">27,Pandit TN Mishra,Rail Nagar,Nirman Nagar,Jaipur(Raj)</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-xs-6 col-md-2">
                                <h6>Services</h6>
                                <ul className="footer-links site footer services">
                                    <li><a href="./#" >Sell Car</a></li>
                                    <li><a href="./#"> Purchase</a></li>
                                    <li><a href="./#" >Insurance</a></li>
                                    <li><a href="./#" >Car Loan</a></li>
                                    <li><a href="./#">Car Detailing</a></li>
                                    <li><a href="./#" >Consulting Service</a></li>
                                    {/* <!--<li><a href="http://scanfcode.com/category/android/" className="site footer">Digital Marketing</a></li>--> */}
                                    {/* <!--<li><a href="http://scanfcode.com/category/templates/" className="site footer">Consultants Service</a></li>--> */}
                                </ul>
                            </div>

                            <div className="col-xs-6 col-md-2">
                                <h6 className="f-heading">Style</h6>
                                <ul className="footer-links">
                                    <li><a href="#">Used Suv</a></li>
                                    <li><a href="#">Used Sedan</a></li>
                                    <li><a href="#">Used Convertible</a></li>
                                    <li><a href="#">Used Coupe</a></li>
                                    <li><a href="#">Used Sports</a></li>
                                    <li><a href="#">Used MUV-MPV</a></li>
                                    <li><a href="#">Used Hatchback</a></li>
                                </ul>
                            </div>
                        </div>
                        <hr />

                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 col-sm-6 col-xs-12">
                                    <p className="copyright-text">Copyright &copy; 2022-2023 All Rights Reserved by
                                        <a href="http://www.codelixsolution.com">The Auto Mart</a>.
                                    </p>
                                </div>

                                <div className="col-md-4 col-sm-6 col-xs-12">
                                    <ul className="social-icons" style={{ display: 'flex',listStyle:'none'}}>
                                        {/* <li><a className="github" href="https://github.com/Codelixsolution/Codelixsolution"><i className="fa fa-github"></i></a></li> */}
                                        {/* <li><a className="behance" href="https://www.behance.net/codelixsolution"><i className="fa fa-behance"></i></a></li> */}

                                        <li ><a className="instagram" href="https://www.instagram.com/codelixsolution/"></a><InstagramIcon color="secondary"/></li>
                                        <li style={{ margin:'0 5px'}}><a className="facebook" href="https://hi-in.facebook.com/codelixsolution"><FacebookIcon/>
</a></li>
                                        <li><a className="twitter" href="https://twitter.com/codelixsolution"> </a><TwitterIcon color="primary"/></li>
                                        {/* <li><a className="linkedin" href="https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAD2pmmcBl_96lCQKO6g9j7k3PaefzsyWBk0&keywords=codelix%20solution&origin=RICH_QUERY_SUGGESTION&position=0&searchId=1736c682-8e8c-4f6a-86c9-b4dc2026673e&sid=t*r"><i className="fa fa-linkedin"></i></a></li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* </Footer> */}

                    {/* <!-- Footer End --> */}
                </div>
            </>
        )
    }
}
