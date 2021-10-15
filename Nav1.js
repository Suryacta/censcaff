import React, { useState , useEffect } from 'react'
import './Nav.css'
import { FaHome } from "react-icons/fa";

import { Link } from 'react-router-dom';

      


function Nav1() {
    const [Show,handleShow]=useState(false);

    const transNav = () =>{
        if (window.scrollY > 100 ){
            handleShow(true);
        }
        else{
            handleShow(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", transNav);
        return () => {
            window.removeEventListener("scroll", transNav);
        }
    }, []);
    return (
       
    <div className={`Nav ${Show && "Nav_yellow"}`}>
        <div className="Nav_contents">
        
        
                <img className="Nav_logo" src= "../censcaff logo (1).png" alt=""/>
        
        <div className="Nav_pages">
             
          <Link className="nav-link" to ="/" > <FaHome size="2x"/></Link>
            
           
                   </div>
        
        </div>

           
     </div>
     
    );
}

export default Nav1
