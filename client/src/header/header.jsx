import React from "react";
import "./header.css"
const Header =()=>{
    return(
        <nav className="header-container">
            <section className="insta-logo">
                <img src={require("./logos/header.png")} alt="insta-logo"/>
            </section>
            <section className="camera-logo">
                <a href="/formData">
                <img src={require("./logos/camera.png")} alt="camera-logo"/>
                </a>
            
            </section>
        </nav>
    )
}
export default Header