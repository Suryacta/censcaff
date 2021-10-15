import React, { Component  } from "react";
import classnames from "classnames";
import './Hnav.css';

import { FaHome } from "react-icons/fa";

import { Link } from 'react-router-dom';
export default class Hnav1 extends Component {
  
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
          <Link className="nav-link" to ="/" > <FaHome className="home"size="2x"/></Link>
               </nav>
    );
  }
}
 