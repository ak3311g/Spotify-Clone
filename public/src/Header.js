import React, { useState } from "react";
import './header.css';
import { useDataLayerValue } from "./StateProvider";

function Header(){
    const [{user},dispatch]=useDataLayerValue();
    
    if (!user || !user.images || !user.images[0]){
        return(
            <div className="header">
            <div className="headerleft">
                <img src={process.env.PUBLIC_URL+'/magnifying-glass-solid.svg'} alt="Search"></img>
                <input type="text" placeholder="Search"></input>
            </div>
            <div className="headerright">
                <img src={process.env.PUBLIC_URL +'/avatar.png'} alt="AV"></img>
            </div>
        </div>
        );
    }
    return(
        <div className="header">
            <div className="headerleft">
                <img src={process.env.PUBLIC_URL+'/magnifying-glass-solid.svg'} alt="Search"></img>
                <input type="text" placeholder="Search"/>
            </div>
            <div className="headerright">
                <img src={user?.images[0]?.url} alt="AV"/>
            </div>
        </div>
    );
}

export default Header;