//External Navbar of Web App
import React from "react";

export const Navbar = () => {
  return(
    <nav class="navbar fixed-top" style={{background: '#004225'}}>
      <form class="container-fluid justify-content-start">
        <a class="btn me-2" style={{background: '#F5F5DC', color: '#004225'}} type="button" href="/">Home</a>
        <a class="btn me-2" style={{background: '#F5F5DC', color: '#004225'}} type="button" href="/register">Register</a>
      </form>
    </nav>
  );
}

export default Navbar;