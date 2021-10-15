import React from 'react'
import { Carousel}from 'react-bootstrap'


function Imgslider() {
    return (
        <div className="img-slider">
            <Carousel>
                <Carousel.Item>
                    <img src="../img1.jpg" alt="" height="300px" width="350px"/>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img src="../img9.jpg" alt="" height="300px" width="350px"/>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img src="../img10.jpg" alt="" height="300px" width="350px"/>
                </Carousel.Item>
            </Carousel>
            
        </div>
    )
}

export default Imgslider
