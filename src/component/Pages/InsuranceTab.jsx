import React from 'react'

export default function InsuranceTab() {
  return (
    <div>
       <div className="Section-2Insurance" style={{ backgroundColor: "whitesmoke", padding: "50px", color: "whitesmoke" }}>
          <div className='container ' style={{ backgroundColor: "#F1202B", padding: "30px" }}>
            <div style={{ backgroundColor: "#E51F2A", padding: "10px" }}><h2 >Get cashless services at 3500+ network garages</h2></div>
            <p>A vehicle in today’s world is an inseparable part of life. It gives an exclusiveness & freedom to your movement whether it is your day to day activity or going for a long drive with your family.</p>
            <div className="row">
              <div className="col-md-4 ">
                <img src="src\component\img\red-list-icon-1.png" alt="" style={{ padding: "10px" }} />
                <p>With multiple insurers integrated, we provide an unbiased comparison between all the top insurers</p>
              </div>
              {/* <hr vertical/> */}
              <div className="col-md-4 ">
                <img src="src\component\img\red-list-icon-2.png" alt="" style={{ padding: "10px" }} />

                <p>Know more about Plans from Home Insurance companies. We also provide expert guidance for all financial queries</p>
              </div>
              <div className="col-md-4 ">
                <img src="src\component\img\red-list-icon-3.png" alt="" style={{ padding: "10px" }} />

                <p>Help further your financial planning, & with such a range of plans & products, you can enjoy big savings.</p></div>

            </div>
          </div>
        </div>
    </div>
  )
}
