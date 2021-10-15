import React, { Component  } from "react";
import classnames from "classnames";
import './Hnav.css';


import { BsInstagram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";

export default class Hnav extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    };
  }
  
  

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };


  render() {
    

    return (
      <nav
        className={classnames("naavbar", {
          "naavbar--hidden": !this.state.visible
        })}
      >
                
           <span className="Insta"> <BsInstagram/></span>
           <span className="Mail"> <AiOutlineMail/></span>
           <span className="Facebook"> <AiOutlineFacebook/></span>
           <span className="Whatsapp"> <BsWhatsapp/></span>
           <span className="Twitter"> <FiTwitter/></span>
           

           
              
      </nav>
    );
  }
}