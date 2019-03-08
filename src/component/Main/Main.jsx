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
        <Route path="/login" render={() => (<Login
          handleChange={props.handleChange}
          contentChange={props.contentChange}
          submitClicked={props.submitClicked}
          isAuth={props.isAuth}
          user={props.user}
          pass={props.pass}
          error={props.error}
        />)} />
        <Route path="/profile" render={() => <Profile
          details={props.details}
          isAuth={props.isAuth}
        />} />
        <Route path="/settings" render={() => <Settings 
        isAuth={props.isAuth}
        />}
         />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );

}

export default Main;
