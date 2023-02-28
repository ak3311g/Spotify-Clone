import React, { useState } from "react";
import "./sidebar.css";
import Logo from "./logo.png";
import Sidebaroption from "./sidebaroption";
import { useDataLayerValue } from "./StateProvider";

function Sidebar(){
    const[{playlists},dispatch]=useDataLayerValue();

    return(
        <div className="sidebar">
            <img src={Logo} alt="S" width="100px"></img>
            <Sidebaroption title="Home"/>
            <Sidebaroption title="Search"/>
            <Sidebaroption title="Library"/>
            <br />
            <strong className="sidebartitle">PLAYLISTS</strong>
            <hr />

            {playlists?.item?.map((playlist)=>(
                <Sidebaroption title={playlist.name} />
            ))}
        </div>
    );
}

export default Sidebar;