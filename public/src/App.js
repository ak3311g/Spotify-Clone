import React, { useEffect } from 'react';
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from './StateProvider';
import Player from './player';
import { getToken } from './spotify';
import './App.css';
import './logo.png';
import Login from './login';

const spotify =new SpotifyWebApi();

function App() {
  const [{token },dispatch]=useDataLayerValue();
//run code on condition
  useEffect(()=>{
    const hash=getToken();
    window.location.hash="";

    const _token =hash.access_token;
    if(_token){
      /* spotify.access_token(_token); */

      dispatch({
        type:"SET_TOKEN",
        token:_token,
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then((user)=>{
        dispatch({
          type:'SET_USER',
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type:"SET_PLAYLISTS",
          playlists:playlists,
        });
      });

      spotify.getPlaylist().then(Response =>
        dispatch({
        type:"SET_DISCOVER_WEEKLY",
        discover_weekly:Response,
      })
      );
    }
  },[token,dispatch]);

  return (
    <div className="App">
        {!token && <Login />}
      {token && <Player spotify={spotify} />}
    </div>
  );
}

export default App;
