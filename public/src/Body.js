import React, { useState } from "react";
import "./Body.css";
import Header from "./Header";
import { useDataLayerValue } from "./StateProvider";
import SongRow from "./SongRow";

function Body({spotify}){
    const [{discover_weekly},dispatch]=useDataLayerValue() ;
    if(!discover_weekly||!discover_weekly.images||!discover_weekly.images[0])
    {return(
        <div className="body">
            <Header spotify={spotify} />
        
        
        <div className="bodyinfo">
            <img src={process.env.PUBLIC_URL + "/banner.png"} alt="Album"/>
            <div className="bodyinfotext">
                 <strong>Playlist</strong>
                 <h2>Disco</h2>
                 <p>{discover_weekly?.description}</p>
            </div>
        </div>
        <div className="bodysong">
            <img src={process.env.PUBLIC_URL+"/play-solid.svg"} className="bodyshuffle" alt="play"/>
            <img src={process.env.PUBLIC_URL+"/more.png"} className="more" alt="more"/>

            {discover_weekly?.tracks.items.map((item)=>(
                <SongRow track={item.track}/>
            ))}
        </div>
        </div>
    );}
    return(
        <div className="body">
            <Header spotify={spotify} />
        
        
        <div className="bodyinfo">
            <img src={discover_weekly?.images[0].url} alt="Album"/>
            <div className="bodyinfotext">
                 <strong>Playlist</strong>
                 <h2>Discover Weekly</h2>
                 <p>{discover_weekly?.description}</p>
            </div>
        </div>
        <div className="bodysong">
            <img src={process.env.PUBLIC_URL+"/play-solid.svg"} className="bodyshuffle" alt="play"/>
            <img src={process.env.PUBLIC_URL+"/more.png"} className="more" alt="more"/>

            {discover_weekly?.tracks.items.map((item)=>(
                <SongRow track={item.track}/>
            ))}
        </div>
        </div>
    );
}

export default Body;