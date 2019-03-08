import React from 'react';
import {withRouter} from 'react-router-dom'
// import './Settings.css';

const Settings = (props) => {
    return (
      <div className="Settings">
      {!props.isAuth && props.history.push("/login")}
        <h3>Edit your profile details here</h3>
      </div>
    );
    
  
}

export default withRouter(Settings);
