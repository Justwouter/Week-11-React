import React from 'react';
import "../css/MainPage.css"
import MainContentItem from '../components/content/MainContentItem';


const Home = () => {
    return (
        <div>
            <MainContentItem number={1} image="..//Images/Promo/OneCoaster.jpg" text="Lorem Ipsum, dolor sit amet" />
            <MainContentItem number={2} image="..//Images/Promo/OneCoaster.jpg" text="Lorem Ipsum, dolor sit amet" />
        </div>

    )
};

export default Home;


