import React from "react";

// import './Login.css';

const Login = (props) => {

    return (
            <>
            <form id="register-form" action="" method="post" novalidate>
            <div>
                <label for="username">Username</label>
                <input onChange={props.handleChange} type="text"placeholder="Username" id="username"/>
            </div>
            <div>
                <label for="password">Password</label>
                <input onChange={props.contentChange} type="password"placeholder="Password" id="password"/>
            </div>
            <input onClick={props.submitClicked} disabled={(props.user && props.pass) ? "admin" : 'incorrect' } type="submit" value="Login" id="submit"/>
            </form>
            </>
                )
            
        
}
export default Login;