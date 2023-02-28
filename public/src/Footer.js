import React from "react";
import "./Footer.css";

function Footer(){
    return(
        <div className="footer">
            <div className="footerleft">
                <img src={process.env.PUBLIC_URL + "/logo.png"} alt=""></img>
                <div className="footersonginfo">
                    <h4>Yeah!</h4>
                    <p>User</p>
                </div>
            </div>

           { <div className="footercenter">
                <img src={process.env.PUBLIC_URL + "/shuffle-solid.svg"} className="footergreen" alt="Shuf"/>
                <img src={process.env.PUBLIC_URL + "/backward-solid.svg"} className="footericon" alt="Prev"/>
                <img src={process.env.PUBLIC_URL + "/play-solid.svg"} className="footericon" alt="Play"/>
                <img src={process.env.PUBLIC_URL + "/forward-solid.svg"} className="footericon" alt="Nex"/>
                <img src={process.env.PUBLIC_URL + "/repeat-solid.svg"} className="footergreen" alt="Rep"/>
            </div>}

            <div className="footerright">
                <img src ={process.env.PUBLIC_URL + "/playlist.svg"} className="playlist" alt="PL"/>
                <input type="range" ></input>
            </div>
        </div>
    )
}

export default Footer;