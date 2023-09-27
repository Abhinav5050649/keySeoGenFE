//External Navbar of Web App
import React from "react";
import {useNavigate} from "react-router-dom";
import axios from 'axios';

export const Navbar = () => {

  let navigate = useNavigate();
  
  const handleLogout = async(e) =>{
    axios.get('http://localhost:5002/api/auth/logout')
    .then(response => {
        e.preventDefault();
        console.log('Logout successful');
        sessionStorage.removeItem('isTokenPresent');
        navigate("/");
    })
    .catch(error => {
        console.error('Logout failed');
        console.error(error.response.data);
    });
  }

  if (!sessionStorage.getItem('isTokenPresent')){
    return(
      <nav class="navbar fixed-top" style={{background: '#004225'}}>
        <form class="container-fluid justify-content-start">
          <a class="btn me-2" style={{background: '#F5F5DC', color: '#004225'}} type="button" href="/">Home</a>
          <a class="btn me-2" style={{background: '#F5F5DC', color: '#004225'}} type="button" href="/register">Register</a>
        </form>
      </nav>
    );
  }else{
    return(
      <nav class="navbar fixed-top" style={{background: '#004225'}}>
        <form class="container-fluid justify-content-start">
          <a class="btn me-2" style={{background: '#F5F5DC', color: '#004225'}} type="button" href="/scrape">Scrape</a>
          <a class="btn me-2" style={{background: '#F5F5DC', color: '#004225'}} type="button" href="/generate">Generate</a>
          <button className="btn me-2" onClick={handleLogout}style={{background: '#F5F5DC', color: '#004225'}}>Logout</button>
        </form>
      </nav>
    );
  }
}

export default Navbar;