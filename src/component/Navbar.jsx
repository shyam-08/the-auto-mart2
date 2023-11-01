import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ContactUs from './ContactUs'
import UserForm from './UserForm'
import { Link } from 'react-router-dom'
import { Navigate } from "react-router-dom";
export default class Navbar extends Component {
  render() {


    const requestACall = () => {
      alert(<><UserForm /></>);
      <UserForm />
    }

    return (



      <div className="section-1 col-12-md col-12">

        {/* <!-- Navbar -->/ */}
        <nav className="navbar navbar-expand-lg navbar-light" >
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
            <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ paddingLeft: "100px" }}>
              {/* <!-- Left links --> */}
              <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ textAlign: "center" }}>
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
                  <a className="nav-link active" href="/ContactUs"><strong>ContactUS</strong></a>

                </li>

                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="tel:8742068501"><strong>Sell:-8742068501</strong></a>

                </li>
                <li className="nav-item">
                  {/* <a className="nav-link" href="#">Link</a> */}
                  <a className="nav-link active" aria-current="page" href="tel:9829066706"><strong>Buy:-9829066706</strong></a>

                </li>
                {/* <!-- Navbar dropdown --> */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>

                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/">
                      <img src="" alt="" />
                      Home</a></li>
                    <li><a className="dropdown-item" href="/UsedCar">
                      <img src="src\component\img\nav-usedcar-.png" alt="" style={{height:"40px",width:"40px",padding:"5px",margin:"5px"}}/>
                      Used Car</a></li>
                    <li><a className="dropdown-item" href="/SaleCar">
                      <img src="src\component\img\nav-sellcar-icon.png" alt=""style={{height:"40px",width:"40px",padding:"5px",margin:"5px" ,}} />
                      Sale Car</a></li>
                    <li><a className="dropdown-item" href="/AboutUs">
                      <img src="src\component\img\nav-teambbt-icon.png" alt="" style={{height:"40px",width:"40px",padding:"5px",margin:"5px"}}/>
                      AboutUs</a></li>
                    <li><a className="dropdown-item" href="/ContactUs">
                      <img src="src\component\img\nav-contactus-icon.png" alt=""style={{height:"40px",width:"40px",padding:"5px",margin:"5px"}} />
                      ContactUs</a></li>
                    <li><a className="dropdown-item" href="/CompareCar">
                      <img src="src\component\img\nav-comparecars-icon.png" alt=""style={{height:"40px",width:"40px",padding:"5px",margin:"5px"}} />
                      Compare Car</a></li>

                    <li><a className="dropdown-item" href="/EmiCalculator">
                      <img src="src\component\img\nav-emi-icon.png" alt="" style={{height:"40px",width:"40px",padding:"5px",margin:"5px"}}/>
                      Emi Calculator</a></li>
                    <li><a className="dropdown-item" href="/Faq">
                      <img src="src\component\img\nav-faq-icon.png" alt="" style={{height:"40px",width:"40px",padding:"5px",margin:"5px"}}/>
                      Faq</a></li>
                    <li><a className="dropdown-item" href="/Insurance">
                      <img src="src\component\img\nav-insurance-icon.png" alt="" style={{height:"40px",width:"40px",padding:"5px",margin:"5px"}}/>
                      Insurance</a></li>

                    <li><a className="dropdown-item" href="/TamSquad">
                      <img src="src\component\img\nav-bbtsquad-icon.png" alt=""style={{height:"40px",width:"40px",padding:"5px",margin:"5px"}} />
                      TAM Squad</a></li>
                    <li><a className="dropdown-item" href="/WhyUs">
                      <img src="src\component\img\nav-why-icon.png" alt="" style={{height:"40px",width:"40px",padding:"5px",margin:"5px"}}/>
                      Why Us</a></li>
                    <li><a className="dropdown-item" href="/Career">
                      <img src="src\component\img\nav-bbtsquad-icon.png" alt=""  style={{height:"40px",width:"40px",padding:"5px",margin:"5px"}}/>
                      CareerWithUs</a></li>
                      <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>


                  </ul>
                



                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
              </ul>
              

              {/* <!-- Left links --> */}
            </div>
            {/* <!-- Collapsible wrapper --> */}
            <div>
              <button onClick={requestACall}>Request a Call </button>
            </div>
          </div>
          {/* <!-- Container wrapper --> */}
        </nav>
        {/* <!-- Navbar --> */}

      </div>
    )
  }
}

