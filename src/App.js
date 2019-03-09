import React, { Component } from 'react';
import Navbar from './component/Navbar/Navbar.jsx';
import data from './data';
import Main from './component/Main/Main.jsx';
import './App.css';


class App extends Component {
  state = {
    data: data,
    details: data[0],
    isAuth: false,
    username: "",
    password: "",
    error: ""
  }
  
  submitClicked = (e) => {
   
    if(this.state.username==="Admin" &&
       this.state.password=== "pass"){
         this.setState ({
           isAuth:true
         });
       }else {
         let error = (
           <p>incorrect details</p>
         )
        this.setState ({
          error: error
        });
       }

       console.log(this.state.isAuth)
  }



  handleChange = e => {
    this.setState(
      {
        username: e.target.value
      });
    console.log(this.state.username);
  };


  contentChange = (e) => {
    this.setState({
      password: e.target.value
    });
    console.log(this.state.password)

  }
  logout= () =>
            this.setState({
              isAuth: false
            })

  
  render() {
    return (
      <div className="App">
        <div className='Nav'>
          <Navbar isAuth={this.state.isAuth}
          logout={this.logout}
          />
          <Main
            details={this.state.details}
            handleChange={this.handleChange}
            contentChange={this.contentChange}
            submitClicked={this.submitClicked}
            user={this.state.username}
            pass={this.state.password}
            isAuth={this.state.isAuth}
            error={this.state.error}
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
