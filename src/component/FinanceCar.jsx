import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
export default class FinanceCar extends Component {
  render() {
    return (
      <div>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Does TAM Offer Inhouse Financing Or They Work With Corporate Banks?
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">TAM does not offer inhouse financing but we do provide you with finance facilities with all the major private banks and financing houses.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                How Long Can The Tenure For Financing Be Availed And Does The ROI Fluctuate Car To Car, Territory To Territory?
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">The tenure of financing varies from 2 to 5 years and is judged on the basis of manufacturing year to ownership serial. The ROI is also a part of the tenure of financing and is assessed on the same lines. Territory to territory for us is not a problem as we have financing agents all over the country to help facilitate the process.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                How Does One Gets Finance Done On These Pre-Owned Cars?
              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">We have tie ups with all the private banks Pan India like ICICI Bank, HDFC Bank, IndusInd Bank, Yes Bank, BMW Financial where in 80% can be financed of the deal value for a tenure of 5 years at diminishing interest rate of 11.50% within 3-4 working days.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                Is There Doorstep Service & Insurance Renewal Assistance?
              </button>
            </h2>
            <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Yes any car which is purchased from BIG BOY TOYZ will have Pan India assistance. In case your car is due with service you just need to call your designated sales manager and he would arrange regular car service cost break up sheet as per your car variant and model after we receive 50% advance for the service cost. Our team will fly down with all the required equipment's/gadgets to service your car at your doorstep.
                Before the date of expiry of your existing insurance you will automatically get a call from our sales manager along with a renewal quote with best of the discounts possible with maximum risk coverage and fast claim procedures and car inspection Pan India.</div>
            </div>
          </div>



        </div>

      </div>
    )
  }
}
