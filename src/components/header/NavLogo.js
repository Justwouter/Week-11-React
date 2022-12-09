import React from "react";
import { Link } from "react-router-dom";


function NavLogo(NavLogo) {
    return (
        <Link className="HeaderLogo" to={NavLogo.link}>
            <img className="MainLogoImage" src={NavLogo.image} alt=""></img>
        </Link>
    );
}

export default NavLogo;
