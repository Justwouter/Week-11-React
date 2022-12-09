import React from 'react';
import Navbar from '../components/header/Navbar';
import Footer from '../components/footer/Footer';
import MainContentBlock from '../components/content/MainContentBlock';

import "../css/MainPage.css"


const BaseLayout = () => {
    return (
        <React.StrictMode>
            <Navbar />
            <MainContentBlock />
            <Footer />
        </React.StrictMode>
    )
};

export default BaseLayout;
