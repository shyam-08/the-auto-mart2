import React, { Component } from 'react'
// footer and navbar component 
import Navbar from './Navbar'
import Footer from './Footer'
// for styling
import "./About.css";
// for animation framer motion 
// import { motion } from "framer-motion"
import 'bootstrap/dist/css/bootstrap.min.css'
export default class TamSquad extends Component {
  render() {
    return (
      <>
        <div style={{ fontfamily: 'Barlow, arial' }}>
          <div className='Section-thesquad  head-text'>
            <div>
            <Navbar />
            </div>
           
            <div >

              <img src="src\component\img\machine-nissan-gtr-nissan-wallpaper-thumb.jpg" style={{ height: '400px', width: '1350px' }} />
            <div className='text-on-image'>
              <h2 style={{color:"#D9070D"}}>TAM SQUAD</h2>
            </div>
            </div>
          </div>
          <div className="Section-2Squad" style={{textAlign:"justify"}}>
            <div  >
              <h2>WHAT IS TAM SQUAD?</h2>
              <p>TAM Squad is a new platform inviting car enthusiasts to pursue their passion for automobiles without compromising on their existing work areas. You can exploit the opportunity of earning by procuring cars for us. It is possible to do this, by centralizing your independent freelance relationships, collaborating, quoting prices and using the TAM brand to take you to the next level.

                You can grow with us by expanding your existing freelance and agency relationships by working across PAN India, furthermore to improve accessibility one can firm their presence on various social media platforms on behalf of us. Our target is to simplify processing to succeed in the untapped market by making a physical presence active through the TAM Squad who keeps alive the immediate response system with our customers for hassle free selling of exotic cars to TAM in only 29 minutes. Every member of the BBT Squad will have a fanatical 24*7 Relationship Manager to help you throughout the process.</p>
            </div>
          </div>
          <div className="Section-4Squad">
            <div >
              <h2>HOW IT WORKS</h2>
              <p>At TAM, we strive to provide the quickest and most hassle free car selling service available. Getting a great deal on the client’s vehicle can often be tricky to do by themselves, here the TAM Squad comes into picture and connects us to value their vehicle based on its condition and current market value.</p>
            </div>
            <div className="row" style={{
              padding: "50px"
            }}>
              <div className="col-md-4">
                <img src="src\component\img\squad-howitwork-icon-1.png" alt="img" className="how-Squad-img" />
                <h6 className='Home-basic'>BROWSE FROM OUR COLLECTION</h6>
              </div>
              <div className="col-md-4">
                <img src="src\component\img\squad-howitwork-icon-5.png" alt="img" className="how-Squad-img" />
                <h6 className='Home-basic'>GET TO KNOW YOUR RIDE</h6>
              </div>
              <div className="col-md-4">
                <img src="src\component\img\squad-howitwork-icon-6.png" alt="img" className="how-Squad-img" />
                <h6 className='Home-basic'>PAY & BOOK ONLINE OR VISIT SHOWROOM</h6>
              </div>

            </div>
          </div>
          <div className="section-5Squad" style={{ textAlign: 'center',padding:'40px' }}>
            <div  >
              <h2>TAM SQUAD BENEFITS</h2>
              <div className="row" style={{padding:"20px"}}>

                <div className="col-md-3">
                  <span><img src="src\component\img\benefit-offer-icon.png" alt="" className='Section-5Squad-Icon' /></span>
                  
                    <h6>Get instant offer</h6>
                </div>
                <div className="col-md-3">
                  <img src="src\component\img\benefit-pay-icon.png" alt="" className='Section-5Squad-Icon' />
                  <h6>

                    Get Paid on the Spot
                  </h6>
                </div>
                <div className="col-md-3">
                  <img src="src\component\img\benefit-workfreedom-icon.png" alt="" className='Section-5Squad-Icon' />
                  <h6>

                    Freedom to work
                  </h6>
                </div>
                <div className="col-md-3">
                  <img src="src\component\img\benefit-timing-icon.png" alt="" className='Section-5Squad-Icon' />
                  <h6>

                    Flexible timing
                  </h6>
                </div>

              </div>
              <div className="row" style={{padding:"20px"}}>

                <div className="col-md-3" >
                  <img src="src\component\img\benefit-communication-icon.png" alt="" className='Section-5Squad-Icon' />
                  <h6>
                    Sharpen communication skills
                  </h6>
                </div>
                <div className="col-md-3">
                  <img src="src\component\img\benefit-reach-icon.png" alt="" className='Section-5Squad-Icon' />
                  <h6>

                    Pan India reach
                  </h6>
                </div>
                <div className="col-md-3">
                  <img src="src\component\img\benefit-scale-icon.png" alt="" className='Section-5Squad-Icon' />
                  <h6>

                    Exposure on a larger scale

                  </h6>
                </div>
                <div className="col-md-3">
                  <img src="src\component\img\benefit-automobilegrowth-icon.png" alt="" className='Section-5Squad-Icon' />
                  <h6>
                    Be part of India's largest pre-owned car company
                  </h6>

                </div>

              </div>
              <div className="row" style={{padding:"20px"}}>

                <div className="col-md-3">
                  <img src="src\component\img\benefit-bbtsquad-icon.png" alt="" className='Section-5Squad-Icon' />
                  <h6>

                    Be a part of the BBT Family
                  </h6>

                </div>
                <div className="col-md-3">
                  <img src="src\component\img\benefit-support-icon.png" alt="" className='Section-5Squad-Icon'  />
                  <h6>Support by BBT Professionals</h6>
                </div>


              </div>
            <hr/>
            </div>
          </div>
          <div className="Section-6Squad">
            <div >
              <h2>SKILLS REQUIRED</h2>
              <p>TAM believes that its future depends on its people who are capable enough to generate new ideas & plans that will help in taking the business to a new height altogether.</p>
              <div className="row">
                <div className="col-md-6">  <img src="src\component\img\skills-required-img-1.jpg" alt="communication image" className="Img-6Squad" /></div>
                <div className="col-md-6" style={{paddingRight:'90px',paddingTop:"50px" }} >
                  <h2>COMMUNICATION SKILLS</h2>
                  <p>Being able to communicate effectively is perhaps the most important of all life skills. It is what enables us to pass information to other people, and to understand what is said to us.</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6" style={{paddingLeft:'90px',paddingTop:"70px" }}><h2>PASSION FOR CARS</h2>
                  <p>I once read that when a car enthusiast explains their love of cars to a “normal” person, it sounds the same as someone who really loved washing machines explaining their passion.</p></div>
                <div className="col-md-6">
                  <img src="src\component\img\skills-required-img-2.jpg" alt="passion image"  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6" >
                  <img src="src\component\img\skills-required-img-2.jpg" alt="presantation image"  />
                </div>
                <div className="col-md-6"style={{paddingRight:'90px',paddingTop:"70px" }} ><h2>PRESENTATION SKILLS</h2>
                  <p>Confused about how to 'Dress for Success'? If you are a job seeker or a promotion seeker, knowing how to dress professionally and avoid image blunders at work, can provide the competitive edge you are looking for.</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6" style={{paddingLeft:'90px',paddingTop:"70px" }}>
                  <h2>NEGOTIATION SKILLS</h2>
                  <p>Negotiation is a type of discussion used to settle disputes and reach agreements between two or more parties. Generally, a negotiation results in a compromise where each party makes a concession for the benefit of everyone involved.</p>
                </div>
                <div className="col-md-6">
                  <img src="src\component\img\skills-required-img-4.jpg" alt="Negotiation image"  />
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </>
    )
  }
}
