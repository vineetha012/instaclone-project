import React from "react";
import "./landing.css"
import { Link } from "react-router-dom";
const LandingPage=()=>{
    return(
        <>
            <div className="landing">
                <div className="landing-image">
                    <img src={require("./images/landingpage.png")} alt="landingImage" />
                </div>
                <div className="landing-actions">
                    <h1 className="landing-text">10x Team 04</h1>

                     
                    <Link to="/PostView">
                        <div className="forward">

                            <button className="button">Enter</button>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default LandingPage