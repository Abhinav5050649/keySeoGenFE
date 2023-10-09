//Internal Web App Navbar
import React from "react";
import {redirect, useNavigate} from "react-router-dom";
import axios from 'axios';

export const DashNav = () => {
  let navigate = useNavigate();
  
  const handleLogout = async(e) =>{
    // axios.get('http://localhost:5000/api/auth/logout')
    // .then(response => {
    //     e.preventDefault();
    //     console.log('Logout successful');
    //     localStorage.removeItem('isTokenPresent');
    //     navigate("/");
    // })
    // .catch(error => {
    //     console.error('Logout failed');
    //     console.error(error.response.data);
    // });
    try{
      e.preventDefault();
      const response = await axios.get('http://localhost:5000/api/auth/logout');
      console.log('Logout successful');
      localStorage.removeItem('isLoggedIn');
      alert(`Logout successful!`);
      navigate("/");
    }catch(error){
      console.error('Logout failed');
      console.error(error.response.data);
    }
  }

  return(
    <nav className="navbar fixed-top" style={{background: '#004225'}}>
      <form className="container-fluid justify-content-start">
        <a className="btn me-2" style={{background: '#F5F5DC', color: '#004225'}} type="button" href="/scrape">Scrape</a>
        <a className="btn me-2" style={{background: '#F5F5DC', color: '#004225'}} type="button" href="/generate">Generate</a>
        <button className="btn me-2" onClick={handleLogout}style={{background: '#F5F5DC', color: '#004225'}}>Logout</button>
      </form>
    </nav>
  );
}

export default DashNav;