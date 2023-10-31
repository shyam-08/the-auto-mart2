import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ContactUs from './ContactUs'
import { Link } from 'react-router-dom'
import { Navigate } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <div>
        
{/* <!-- Navbar -->/ */}
<nav className="navbar navbar-expand-lg navbar-light">
  {/* <!-- Container wrapper --> */}
  <div className="container-fluid">
    {/* <!-- Navbar brand --> */}
    <Link className="navbar-brand" to="#">The Auto Mart</Link>
    {/* <!-- Toggle button --> */}
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>

    {/* <!-- Collapsible wrapper --> */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{paddingLeft:"100px"}}>
      {/* <!-- Left links --> */}
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{textAlign:"center"}}>
      <li className="nav-item">
          <a className="nav-link" href="/"><strong>Home</strong></a>
    {/* <Link className="nav-link active" aria-current="page" to="/ContactUs"><strong>Contact Us</strong></Link> */}

        </li>
        <li className="nav-item">
          <a className="nav-link" href="/AboutUs"><strong>AboutUs</strong></a>
    {/* <Link className="nav-link active" aria-current="page" to="/AboutUs"><strong>About US</strong></Link> */}
    {/* <Navigate to="/AboutUs" replace={true} /> */}
    
        </li>
        <li className="nav-item">
        <a className="nav-link active"   href="/ContactUs"><strong>ContactUS</strong></a>

        </li>

        <li className="nav-item">
    <a  className="nav-link active" aria-current="page" href="tel:8742068501"><strong>Sell-8742068501</strong></a>

        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">Link</a> */}
    <a className="nav-link active" aria-current="page" href="tel:9829066706"><strong>Buy-9829066706</strong></a>

        </li>
        {/* <!-- Navbar dropdown --> */}
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="DropDown"
            id="navbarDropdown"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </a>
          {/* <!-- Dropdown menu --> */}
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a className="dropdown-item" href="/AboutUs">AboutUs</a>
    {/* <Navigate to="/AboutUs" replace={true} /> */}

            </li>
            <li>
              <a className="dropdown-item" href="/ContactUs">ContactUs</a>
         
    {/* <Navigate to="/ContactUs" replace={true} /> */}

            </li>
            <li><hr className="dropdown-divider" /></li>
           
          </ul>
        </li>
       
      </ul>
      {/* <!-- Left links --> */}
    </div>
    {/* <!-- Collapsible wrapper --> */}
    <div>
      <button>Request a Call </button>
    </div>
  </div>
  {/* <!-- Container wrapper --> */}
</nav>
{/* <!-- Navbar --> */}

      </div>
    )
  }
}

