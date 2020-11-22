import React from "react";
import acadia from "./images/Acadia.jpg"

function AboutMe(){
    return (
        <>
            <div className="about-me">
                <div className="about-title">
                    <img className="acadia-img" src={acadia} alt="Acadia.jpg"/>
                    <div className="about-text">
                        <h1>About Me</h1>
                        <p>This is about me</p>
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default AboutMe;