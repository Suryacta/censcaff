import emailjs from "emailjs-com";
import React from 'react';
import'./Form.css'

export default function Form() {

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
        <div>
            <div className="Form">
                
            <form onSubmit={sendEmail}>
                    <div className="Form_contents Form_content">
                        <div className="Form_name Form_nam">
                            <input type="text" className="form-control form_cont" placeholder="Name" name="name"/>
                        </div>
                        <div className="Form_mobile">
                            <input type="text" className="form-control form_cont" placeholder="Mobile" name="mobile"/>
                        </div>
                        <div className="Form_email">
                            <input type="email" className="form-control form_cont" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="Form_subject">
                            <input type="text" className="form-control form_cont" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="Form_message">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
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