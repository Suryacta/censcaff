import React from 'react'
import './Aboutus.css'

function Aboutus() {
    return (
        <section id="aboutus" >
    
        <div className="Ab">
            <div className="Ab_contents">
                <div className="Ab_text">
                <h1 className="Ab_title">
                    About Us
                </h1>
                
                <div className="Ab_desc">
                    <p>Censcaff rental service is a sole proprietorship subsidy firm of censcaff engineers- (manufacturers of MS centering and scaffolding materials) with more than two decades of experience in the manufacturing field we are now stepping into rentals of MS Cuplock scaffolding, Centering Sheets, Telescopic Adjustable Spans and Adjustable Props. We are the leading contractors/hirers/suppliers and rental service provider in Cuplock Scaffolding, undertaking a wide range of scaffolding contracts throughout India with our huge inventories. We provide MS centering and scaffolding rental materials for multi storage buildings, national highway bridges, state highway bridges and commercial buildings. We have our own trained and experienced erection team. Erection will be done as per the client’s request. All safety measures are taken for the erection such as
                       <ul className="list">
                           <li> We make sure that the erection team wears the safety harness and other PPE like helmets, safety shoes.</li>
                        <li>	We make sure that the presence of nearby electrical lines or process equipment is not an obstacle to the    erection team.</li>
                       <li>	We make sure that the construction site is not on the Hazardous area classification</li>
                        <li>	We analyze the condition of working surfaces and work accordingly</li>
                        <li>	All the workers in our erection team are insured. </li>
                        </ul>
                </p>
                </div>
                </div>
                <div className="Ab_img">
                    <img className="Ab_pic" height="400" width="400" src="../images (8).jpeg" alt=""/>
                </div>
            </div>
        </div>
        </section>
        
    )
}

export default Aboutus
