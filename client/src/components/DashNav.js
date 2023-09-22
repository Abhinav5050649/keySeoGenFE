//Internal Web App Navbar
import React from "react";

export const DashNav = () => {
    return(
        <nav class="navbar bg-dark">
            <form class="container-fluid justify-content-start">
                <button class="btn btn-success me-2" type="button">Home</button>
                <button class="btn btn-success me-2" type="button">Register</button>
            </form>
        </nav>
    );
}

export default DashNav;