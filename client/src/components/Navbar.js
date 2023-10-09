//External Navbar of Web App
import React from "react";
export const Navbar = () => {
    return(
      <nav className="navbar fixed-top" style={{background: '#004225'}}>
        <form className="container-fluid justify-content-start">
          <a className="btn me-2" style={{background: '#F5F5DC', color: '#004225'}} type="button" href="/">Home</a>
          <a className="btn me-2" style={{background: '#F5F5DC', color: '#004225'}} type="button" href="/login">Login</a>
          <a className="btn me-2" style={{background: '#F5F5DC', color: '#004225'}} type="button" href="/signup">Signup</a>
        </form>
      </nav>
      
    );
}

export default Navbar;