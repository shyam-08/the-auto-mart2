import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
export default class Navbar extends Component {
  render() {
    return (
      <div>
        
{/* <!-- Navbar -->/ */}
<nav className="navbar navbar-expand-lg navbar-light">
  {/* <!-- Container wrapper --> */}
  <div className="container-fluid">
    {/* <!-- Navbar brand --> */}
    <a className="navbar-brand" href="#">The Auto Mart</a>
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
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          {/* <a className="nav-link" href="#">Link</a> */}
    <a className="nav-link active" aria-current="page" href="./ContactUs.jsx"><strong>Contact Us</strong></a>

        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">Link</a> */}
    <a className="nav-link active" aria-current="page" href="#"><strong>About US</strong></a>

        </li>
        <li className="nav-item">
          {/* <a className="nav-link active"   href="#">Home</a> */}
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
            href="#"
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
              <a className="dropdown-item" href=".\AboutUs.jsx">AboutUs</a>
            </li>
            <li>
              <a className="dropdown-item" href=".\ContactUs.jsx">contact Us</a>
            </li>
            <li><hr className="dropdown-divider" /></li>
           
          </ul>
        </li>
       
      </ul>
      {/* <!-- Left links --> */}
    </div>
    {/* <!-- Collapsible wrapper --> */}
  </div>
  {/* <!-- Container wrapper --> */}
</nav>
{/* <!-- Navbar --> */}

      </div>
    )
  }
}

