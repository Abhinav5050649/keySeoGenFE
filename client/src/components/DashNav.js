//Internal Web App Navbar
import React from "react";

export const DashNav = () => {
    return(
        <nav class="navbar fixed-top" style={{background: '#004225'}}>
          <form class="container-fluid justify-content-start">
            <a class="btn me-2" style={{background: '#F5F5DC', color: '#004225'}} type="button" href="/scrape">Scrape</a>
            <a class="btn me-2" style={{background: '#F5F5DC', color: '#004225'}} type="button" href="/generate">Generate</a>
          </form>
        </nav>
      );
}

export default DashNav;