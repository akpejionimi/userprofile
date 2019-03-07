import React from "react";

import './Login.css';

const Login = (props) => {

    return (
            <>
            <h1>Admin Login details</h1>
            <form id="register-form" action="" method="post" novalidate>
            <div>
                <label for="username">Username</label>
                <input onChange={props.handleChange} type="text"placeholder="Username" id="username"/>
            </div>
            <div>
                <label for="password">Password</label>
                <input onChange={props.contentChange} type="password"placeholder="Password" id="password"/>
            </div>
            <input onClick={props.submitClicked} disabled={(props.user && props.pass) ? "admin" : '' } type="submit" value="Login" id="submit"/>
            {/* <input onClick={props.submitClicked} disabled={!props.handleChange || !props.contentChange} type="submit" value="Login" id="submit"/> */}
            </form>
            </>
                )
            
        
}
export default Login;