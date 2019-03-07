import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = () =>{
 
    return (
      <div className="Navbar">
     <ul>
         <div className="home">
         <Link to="/"><li>Home</li></Link>
         </div>
        <div className="menu">
         <Link to="/profile"><li>Profile</li></Link>
         <Link to="/settings"><li>Settings</li></Link>
         <Link to="/login"><li>Login</li></Link>
        </div>
     </ul>
      </div>
    );
  
}

export default Navbar;