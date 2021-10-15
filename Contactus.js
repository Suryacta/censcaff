import React from 'react'
import './Contactus.css'
import { ImLocation } from "react-icons/im";
import { ImMail } from "react-icons/im";
import { IoMdCall } from "react-icons/io";
import { AiFillClockCircle } from "react-icons/ai";

function Contactus() {
    return (
        <section id="contactus" >
        <div className="Contacts">

            <h1 className="Co_head">Contact Us</h1>

        <div className="Co_contents">

            <div className="Co_Map">
                 <iframe
              className="Map" id="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.5911860083393!2d80.1371790146469!3d13.12506499075531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5262f8453b258f%3A0xcd4aba13b6dbf6fa!2sCenscaff%20Engineers!5e0!3m2!1sen!2sin!4v1633691603358!5m2!1sen!2sin"
              width="700"
              height="500"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
            </div>
            <div className="Co-elements">

                <div className="Co_location" id="info">
                    <div className="Co_title">
                    <ImLocation size="40px"/>
                  <h3 className="Co_add-heading">Our Office Address</h3>
                  </div>
                  <div className="Co_address">
                      <p>No.5, Balaji Nagar Industrial Area</p>
                      <p> Ambattur</p>
                      <p> Chennai - 600053</p>
                          
                      </div>
                 </div>

                <div className="Co_mail" id="info">
                     <div className="Co_title">
                  <ImMail size="40px"/> 
                     <h3 className="Co_enquiry-heading">General Enquiries</h3>
                     </div>
                   <span className="Co_mail">rgpartha0405@gmail.com</span>
                    </div>

                <div className="Co_call" id="info">
                    <div className="Co_title">
                  <IoMdCall size="40px"/>  
                   <h3 className="Co_call-heading">Call Us</h3></div>
                   <span className="Co_call">+91-8925265442</span>
                    </div>

                <div className="Co_clock" id="info">
                    <div className="Co_title">
                 <AiFillClockCircle size="40px"/>
                     <h3 className="Co_ourtiming-heading">Our-Timing</h3></div>
                   <span className="Co_ourtiming">Mon - Sun : 09:00 AM - 09:00 PM</span>
                    </div>
                    
                    </div>
               </div>
               </div>
               </section>
       
    )
}

export default Contactus
