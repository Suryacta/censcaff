import React, { useState , useEffect } from 'react'
import './Nav.css'

import { Link } from 'react-router-dom';


      


function Nav() {
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
     const [state, setstate] = useState(false)
 const Showdropdown=()=>{
        setstate(true);
 }
 const Hidedropdown=()=>{
     setstate(false);

 }
    return (
        <section id="home">
    <div className={`Nav ${Show && "Nav_yellow"}`}>
        <div className="Nav_contents">
           
        
                <img className="Nav_logo" src= "../censcaff logo (1).png" alt=""/>
        
        <div className="Nav_pages">
             <span className="Home">
                 <a className="smoothscroll" href="#home">
            Home
            </a>
           
             </span>
              <span className="About Us"> 
               <a className="smoothscroll" href="#aboutus">
              About
            </a>
              </span>
               <span className="Products"> 
               <a className="smoothscroll" href="#product">

            </a>
               </span>


 
    
        <div className="dropdown">
            <div className="dropdownmenu" onMouseEnter={Showdropdown} onMouseLeave={Hidedropdown} >
Products              {state?(  <ul className="drop" onMouseEnter={Showdropdown}>
                 
                    <li>
                       <Link className="nav-link" to = "/Cuplock scaffolding" style={{color: "black"}}>Cuplock scaffolding </Link>
                    </li>
                    <li>
                         <Link className="nav-link" to = "/Adjustable props" style={{color: "black"}}>Adjustable props</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to = "/Centering sheet" style={{color: "black"}}>Centering sheet</Link>
                    </li>
                     <li>
                        <Link className="nav-link" to = "/Telescopic span" style={{color: "black"}}>Telescopic span</Link>
                    </li>
                </ul>):
                null}

            </div>

            
        </div>
    


                <span className="Contact Us"> 
                <a className="smoothscroll" href="#contactus">
              Contact 
            </a>
                </span>
             
           
            
        </div>
        
        </div>

           
     </div>
     </section>
    );
}

export default Nav
