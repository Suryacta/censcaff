import emailjs from "emailjs-com";
import React from 'react';
import './Form1.css';

export default function Form1() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmail', 'template_elcpiip', e.target, 'user_m9cAt8cBIfE17u1I0abJC')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        
         <section id="form">
        <div className="Farm">
            
            <div className="Form">
                
            <form onSubmit={sendEmail}>
                    <div className="Farm_contents Form_content">
                        <h1 className="Quick"> Quick Enquiry</h1>
                        <div className="Form_name Form_nam">
                            <input type="text" className="farm-control form_cont" placeholder="Name" name="name"/>
                        </div>
                        <div className="Form_mobile">
                            <input type="text" className="farm-control form_cont" placeholder="Mobile" name="mobile"/>
                        </div>
                        <div className="Form_email">
                            <input type="email" className="farm-control form_cont" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="Form_subject">
                            <input type="text" className="farm-control form_cont" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="Form_message">
                            <textarea className="farm-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                       
                        <div className="Form_submit">
                            
                            <input type="submit" className="btn btn-info" value="Enquire now"></input>
                        </div>
                        
                        
                    </div>
                </form>
                
            </div>
        </div>
        
        </section>
    )
}