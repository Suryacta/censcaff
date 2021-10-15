import React from 'react'
import Aboutus from './Aboutus';
import Banner from './Banner';
import Bottom from './Bottom';
import Contactus from './Contactus';
import Footer from './Footer';
import Form from './Form';
import Hnav from './Hnav';
import './HomeScreen.css'
import ImageSlider from './ImageSlider';
import Nav from './Nav';
import Products from './Products';
import Projects from './Projects';
import { SliderData } from './SliderData';



function HomeScreen() {
    return (
    <div className="scroll">
        <Hnav/>
        <Nav/>
<Banner/>
         <Products/>
        <Aboutus/>
       <Projects/>
         <Contactus/>
        <Form/>
        <Bottom/>
        <Footer/>
        
    </div>
    );
}

export default HomeScreen
