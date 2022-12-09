import React from 'react';
import Footitem from './FootItem';


function Footer() {
    return (
        <div className="footer-basic">
            <footer>
                <ul className="list-inline">
                    <Footitem link="..//Pages/MainPage.html" text="Home"/>
                    <Footitem link="..//Pages/AboutUs.html" text="About"/>
                    <Footitem link="..//Pages/404Page.html" text="Privacy Policy"/>
                </ul>
            </footer>
        </div>
    );
}

export default Footer;
