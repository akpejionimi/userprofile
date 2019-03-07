import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home/Home.jsx';
import Login from './Login/Login.jsx';
import Profile from './Profile/Profile.jsx';
import Settings from './Settings/Settings.jsx';
// import './Main.css';

const Main = (props) => {
    
    return (
      <div className="Main">
        <Switch>
        <Route path="/login" render={() =>(<Login 
             handleChange={props.handleChange}
             contentChange={props.contentChange}
             submitClicked={props.submitClicked}
             login={props.login}
             user={props.user}
             pass={props.pass}
             />)} />
             <Route path="/profile" render={() =>(<Profile 
             details={props.details}
             />)} />
             <Route path="/settings" component={Settings} />
             <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  
}

export default Main;
