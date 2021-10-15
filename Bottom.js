import React from 'react'
import'./Bottom.css'
import { BsInstagram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";


function Bottom() {
    return (
        <div>
            <div className="Bottom">
                <div className="Bottom_pages">
                    <ul type="none">
                        <li>Home </li>
                        <li>About  </li>
                        <li>Products </li>
                        <li>Contact </li>
                       
                    </ul>
                </div>
                <div className="Bottom_contact">
                   <ul type="none"> 
                       <li> CONTACT</li>

                       <li>No.5, Balaji Nagar Industrial Area</li>
                          <li>Ambattur</li>
                            <li>Chennai - 600053</li>
                              <li>+91-8925265442</li>
                              <li>rgpartha0405@gmail.com</li>
                                   </ul>
                </div>
                <div className="Bottom_icon">
           <span className="Insta"> <BsInstagram/></span>
           <span className="Mail"> <AiOutlineMail/></span>
           <span className="Facebook"> <AiOutlineFacebook/></span>
           <span className="Whatsapp"> <BsWhatsapp/></span>
           <span className="Twitter"> <FiTwitter/></span>
            
                </div>
            </div>
        </div>
    )
}

export default Bottom
