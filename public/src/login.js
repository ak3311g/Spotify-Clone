import React from "react";
import './login.css';
import Logo from './logo.png';
import { loginUrl } from "./spotify";

function Login(){
    return(
        <div className="login">
            <h1>Login Page</h1>
            <img src={Logo} width="100px" alt="S"></img>
            <a href={loginUrl}>Login with Springle</a>
        </div>
    )
}

export default Login;