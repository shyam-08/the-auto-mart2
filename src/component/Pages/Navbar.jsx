import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ContactUs from './ContactUs'
import UserForm from './UserForm'
import { Link } from 'react-router-dom'
import { Navigate } from "react-router-dom";
export default class Navbar extends Component {
  render() {


    const requestACall = () => {
      alert(Navigate({to:'userform'}));
      // <UserForm />
    }

    return (



      <div className="section-1 col-12-md col-sm-12">

        {/* <!-- Navbar -->/ */}
        <nav className="navbar navbar-expand-lg navbar-light" style={{ position: 'fixed',top: '0',width: '100%', backgroundColor: 'white'  }}>
          {/* <!-- Container wrapper --> */}
          <div className="container-fluid">
            {/* <!-- Navbar brand --> */}
            <Link className="navbar-brand" to="/">The Auto Mart</Link>
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
            <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{placeItems:"flex-end"}}>
              {/* <!-- Left links --> */}
              <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ textAlign: "center" }}>
                <li className="nav-item">
                  <Link className="nav-link" to="/"><strong>Home</strong></Link>
                  {/* <Link className="nav-link active" aria-current="page" to="/ContactUs"><strong>Contact Us</strong></Link> */}

                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/AboutUs"><strong>AboutUs</strong></Link>
                  {/* <Link className="nav-link active" aria-current="page" to="/AboutUs"><strong>About US</strong></Link> */}
                  {/* <Navigate to="/AboutUs" replace={true} /> */}

                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/ContactUs"><strong>ContactUS</strong></Link>

                </li>

                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="tel:8742068501"><strong>Sell:-8742068501</strong></Link>

                </li>
                <li className="nav-item">
                  {/* <a className="nav-link" href="#">Link</a> */}
                  <Link className="nav-link active" aria-current="page" to="tel:9829066706"><strong>Buy:-9829066706</strong></Link>

                </li>
                {/* <!-- Navbar dropdown --> */}
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </Link>

                  <ul className="dropdown-menu" style={{flexWrap:'wrap', padding:"10px"}}>
                    <li><Link className="dropdown-item" to="/">
                      <img src="src\component\Img\nav-home-icon.png" alt=""  style={{height:"40px",width:"40px",padding:"5px",margin:"5px"}}/>
                      Home</Link></li>
                    <li><Link className="dropdown-item" to="/UsedCar">
                      <img src="src\component\img\nav-usedcar-.png" alt="" style={{height:"40px",width:"40px",padding:"5px",margin:"5px"}}/>
                      Used Car</Link></li>
                    <li><Link className="dropdown-item" to="/SaleCar">
                      <img src="src\component\img\nav-sellcar-icon.png" alt=""style={{height:"40px",width:"40px",padding:"5px",margin:"5px" ,}} />
                      Sale Car</Link></li>
                    <li><Link className="dropdown-item" to="/AboutUs">
                      <img src="src\component\img\nav-teambbt-icon.png" alt="" style={{height:"40px",width:"40px",padding:"5px",margin:"5px"}}/>
                      AboutUs</Link></li>
                   
                    
                    <li><Link className="dropdown-item" to="/Faq">
                      <img src="src\component\img\nav-faq-icon.png" alt="" style={{height:"40px",width:"40px",padding:"5px",margin:"5px"}}/>
                      Faq</Link></li>
                    <li><Link className="dropdown-item" to="/Insurance">
                      <img src="src\component\img\nav-insurance-icon.png" alt="" style={{height:"40px",width:"40px",padding:"5px",margin:"5px"}}/>
                      Insurance</Link></li>

                    
                    <li><Link className="dropdown-item" to="/WhyUs">
                      <img src="src\component\img\nav-why-icon.png" alt="" style={{height:"40px",width:"40px",padding:"5px",margin:"5px"}}/>
                      Why Us</Link></li>
                      <li><Link className="dropdown-item" to="/ContactUs">
                      <img src="src\component\img\nav-contactus-icon.png" alt=""style={{height:"40px",width:"40px",padding:"5px",margin:"5px"}} />
                      ContactUs</Link></li>
                      <li><Link className="dropdown-item" to="/TamSquad">
                      <img src="src\component\img\nav-bbtsquad-icon.png" alt=""style={{height:"40px",width:"40px",padding:"5px",margin:"5px"}} />
                      TAM Squad</Link></li>
                      <li><Link className="dropdown-item" to="/CompareCars">
                      <img src="src\component\img\nav-comparecars-icon.png" alt=""style={{height:"40px",width:"40px",padding:"5px",margin:"5px"}} />
                      Compare Car</Link></li>

                    <li><Link className="dropdown-item" to="/EmiCalculator">
                      <img src="src\component\img\nav-emi-icon.png" alt="" style={{height:"40px",width:"40px",padding:"5px",margin:"5px"}}/>
                      Emi Calculator</Link></li>
                    <li><Link className="dropdown-item" to="/Career">
                      <img src="src\component\img\nav-bbtsquad-icon.png" alt=""  style={{height:"40px",width:"40px",padding:"5px",margin:"5px"}}/>
                      CareerWithUs</Link></li>
                      <li><hr className="dropdown-divider" /></li>
                   


                  </ul>
                



                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
                <button onClick={requestACall}>Request a Call </button>
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

