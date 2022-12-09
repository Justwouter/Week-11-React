import React from 'react';

function Ticket(props) {
    return (
        <div className="Kaartje">
            <h4>{props.name}</h4>
            <p>€{props.price}</p>
            <button className="addition" data-id={props.id} data-price={props.price} data-name={props.name} onClick={props.add}>+</button>
            <button className="subtraction" data-id={props.id} data-name={props.name} onClick={props.remove}>-</button>
        </div>

    );
}

export default Ticket;
