import React, { Component } from 'react';
import Navbar from './component/Navbar/Navbar.jsx';
import data from './data';
// import { Route, Switch } from 'react-router-dom';
import Main from './component/Main/Main.jsx';
// import Profile from './component/Main/Profile/Profile.jsx';
import './App.css';
// import Home from './component/Main/Home/Home.jsx';
// import Login from './component/Main/Login/Login.jsx';

class App extends Component {
  state = {
    data: data,
    details: data[0],
    isAuth:false,
    contentText: "",
    passinput: "",
    username: "admin",
    password: "pass"
    
  }
  submitClicked = (e) => {
    e.preventDefault()
    console.log("clicked");
  }



    handleChange = (e) => {
      this.setState({ passwordinput: e.target.value });
    }


    contentChange = (e) => {
      this.setState({ contentText: e.target.value });
    }

    login = () =>  {
      this.setState({
        isAuth: true
      })
    }

    render() {
      return (
        <div className="App">
          <div className='Nav'>
            <Navbar isAuth={this.state.isAuth} />
            <Main
              details={this.state.details}
              handleChange={this.handleChange}
              contentChange={this.contentChange}
              submitClicked={this.submitClicked}
              login={this.login}
              user={this.state.username}
              pass={this.state.password}
            />

            {/* <Switch>
         <Route path= "/" exact render = { () => <h1>Welcome</h1>} />
        <Route path="/about" exact render={() => <h1>About Us</h1>} /> 
        </Switch> */}
          </div>
        </div>
      );
    }
  }

  export default App;
