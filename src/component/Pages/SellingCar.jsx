import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
export default class SellingCar extends Component {
  render() {
    return (
      <div>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                How Do We Purchase Cars Pan India?
                -

              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">We have the best procurement/purchase officers in the country who are working hard everyday to get you close to your dream car. They are specialist who over the years have garnered the reputation of being car doctors. There is no information that can be missed by them and they have a checkpoint base system which consists of 150 checkpoints. This is how we control our quality and that's how we get you authentic cars. If you have a car which you are willing to sell, call us and give us the location our representative will be there in less than 24 hours.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                What Are The Parameters By Which You Evaluate A Purchase Of A Car, Which You Offer For Sale?
                -

              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">We dig deep into every car's history to rule out any car which comes with accidental record, meter tampering, litigation case on car, criminal history of owner, etc. It also goes under 151 check points as per the procurement process. There are a few check points that why you should opt for Big Boy Toyz for your next Car.

                NCR Check
                Zero Tolerance Policy
                2010  30000 kms
                Strictly No Refurbished Cars
                Service History Check
                Insurance History Check
                Buy Back Agreement
                6 Months or 15000/5000 kms warranty
                RTO Physical file check</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Does BBT Fix Unrepaired Safety Recalls?
                -

              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Every car sold by BBT comes with 151 check points where a complete dedicated after sales team is on floor to make sure that the vehicle comes with complete track records and everything is functional. Before you purchase a car from BBT, our sales consultant will review with you a Check-List report from our after-sales team and VIN-No for the car by which you can get the complete track record and previous service history checked from the authorized car dealership. There are few cars which comes with previous dealership warranty valid on it so those cars get serviced at their respective dealership only. Those cars which are out of warranty gets complete service assistance at BBT-Workshop with assistance to its reach over Pan-India.</div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
