import React from "react";
import { withRouter } from 'react-router-dom'

import './Login.css';

const Login = (props) => {

    return (
        <>
            <h1>Admin Login details</h1>
            {
                props.isAuth ?

                    (
                        props.history.push("/")
                    )
                    :
                    (
                        <>
                            <form id="register-form" action="" method="post" novalidate>
                            
                                <div>
                                    <label for="username">Username</label>
                                    <input onChange={props.handleChange} type="text" placeholder="Username" id="username" />
                                </div>
                                <div>
                                    <label for="password">Password</label>
                                    <input onChange={props.contentChange} type="password" placeholder="Password" />
                                </div>
                                {props.error}
                            </form>
                            <button onClick={props.submitClicked}
                             disabled={!props.user|| !props.pass}>Login </button>
                        </>
                    )

            }


        </>
    )


}
export default withRouter(Login);