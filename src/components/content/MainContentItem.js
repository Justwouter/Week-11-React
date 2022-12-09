import React from 'react';
import "../../css/MainPage.css"

function MainContentBlock(props) {
    let num = "1"
    if(props.number %2 === 0){
        num = "2"
    }
    return (
        
        <div className={"MainPageContent"+num+" MainPageItem"}>
            <p className="MPContentText">{props.text}</p>
            <img className={"MPPromoImage"+num} src={props.image} alt = ''/>
        </div>

    );
}

export default MainContentBlock;
