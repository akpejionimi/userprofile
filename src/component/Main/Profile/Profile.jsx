import React from "react";

import './Profile.css'

const Profile = (props) => {
    if (props === null) {
        return null
    } else {
        return (
            <div className="profDisplay">
            <div>
                <h1>{props.details.name}</h1>
                <h2>{props.details.role}</h2>
                <p>{props.details.Testimony}</p>
            </div>
               <div className="profilepix">
               <img alt="phone" src={props.details.url} />
               </div>
            </div>
        )
    }       
    // return (
    //     <p>welcome to my profile</p>
    // )
}
export default Profile;