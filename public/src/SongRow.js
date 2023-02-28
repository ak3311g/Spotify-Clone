import React from "react";
import "./SongRow.css";

function SongRow(track){
    return(
        <div className="songrow">
            <img src="" alt=""/>
            <div className="songrowinfo">
                <h1>{track.name}</h1>
                <p>
                    {track.artist.map((artist)=>artist.name).join(",")}-{" "}
                    {track.album.name}
                </p>
            </div>
        </div>
    )
}

export default SongRow;