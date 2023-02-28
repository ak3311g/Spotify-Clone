/* it send us to authorization page of spotify */
export const authEndpoint = "http://accounts.spotify.com/authorize";

/* after authoriztion it send/redirect ot homepage of spotify */
const redirectUri = "http://localhost:3000/";

/* this is client id */
const client_id="caa5e07190ee41c7bdd39e9804658012";

const scopes=[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getToken=()=>{
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial,item)=>{
        var parts=item.split("=");
        initial[parts[0]]=decodeURIComponent(parts[1]);
        return initial;
    },{});
}

export const loginUrl=`${authEndpoint}?client_id=${client_id}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

