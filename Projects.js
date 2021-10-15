import React from 'react'
import'./Projects.css'

function Projects() {
    return (
        <div className="Projects"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url("../proj_bg.jpg")`,
            backgroundPosition: "center center",}}>
            <div className="Project_contents">
                <h1 className="Project_title">Our Projects</h1>
                <div className="Project_img">
                    <img className="Project_pic" src="../IMG-20210915-WA0008.jpg" alt=""/>
                    <img className="Project_pic" src="../IMG-20210915-WA0014.jpg" alt=""/>
                    <img className="Project_pic" src="../IMG-20210915-WA0017.jpg" alt=""/>
                    <img className="Project_pic" src="../images (8).jpeg" alt=""/>
                    <img className="Project_pic" src="../images (9).jpeg" alt=""/>
                    <img className="Project_pic" src="../images (10).jpeg" alt=""/>
                </div>
            </div>
            
        </div>
    )
}

export default Projects
