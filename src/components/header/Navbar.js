import React from 'react';
import NavItem from './NavItem';
import NavLogo from './NavLogo';


function Navbar() {
    return (
        // I tried making the walibi site and it didn't work out so now we have this abomination of html
        // Which can't be changed becouse the css is held together with spit and duct tape
        <header className="MainPageHeader">
            <div className="HeaderRow">
                <NavLogo link="/" image="/Images/TransLogo.png" />
                <div className="HeaderContent">
                    <div className="HeaderNavigation">
                        <nav className="MainNavRow">
                            <ul className="NavElements">
                                <NavItem link="/" text="Home"/>
                                <NavItem link="/AboutUs" text="Informatie"/>
                                <NavItem link="/SalesPage" text="Koop Kaartjes" />
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>

    );
}

export default Navbar;
