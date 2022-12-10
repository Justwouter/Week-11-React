import React, { useEffect } from 'react';
import "../css/MainPage.css"
import Ticket from '../components/content/sales/Ticket';
import updateTable from '../Js/cart';
import displaydata from '../Js/weatherforecast';

const Sales = () => {

    useEffect(() => {
        updateTable();
        displaydata();
    });
    
    return (

        <div>
            {/* <!-- Kaartverkoop buttons --> */}
            <div className="Kaartjes">
                <Ticket id="1" name="Kinder Kaartje" price={2.5} add={add} remove={remove} />
                <Ticket id="2" name="Volwassenen Kaartje" price={5} add={add} remove={remove} />
                <Ticket id="3" name="Bejaarden Kaartje" price={10} add={add} remove={remove} />
            </div>

            {/* <!-- Cart table --> */}
            <div className="cart">
                <table>
                    <tbody id="tbody">
                    </tbody>
                    <thead>
                        <tr>
                            <th>Totaal:</th>
                            <th id="totalitems">0</th>
                            <th id="totalprice">€0</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <button id="Nukecart" onClick={NukeIt}>Remove all items</button>
            {/* <!-- WeatherForecast --> */}
            <div className="WeatherStation">
                <table>
                    <tbody id="weeklyweather">
                    </tbody>
                </table>

            </div>

        </div>
    )
};

export default Sales;


// Old sales support code adapted for usage in React

let itemsincart = 0;
let totalprice = 0;
let cart = {};

function add(event) {
    let price = Number(event.target.dataset.price);
    let name = event.target.dataset.name;
    let id = event.target.dataset.id;

    if (id in cart) {
        cart[id].amount++;
    } else {
        let cartItem = {
            name: name,
            price: price,
            amount: 1
        };
        cart[id] = cartItem
    }

    itemsincart++;
    totalprice += price;

    console.log(cart);
    updateCart();
}

function remove(event) {
    let id = event.target.dataset.id;

    if (id in cart) {
        let price = cart[id].price;
        if (cart[id].amount > 0) {
            cart[id].amount--;
            itemsincart--;
            totalprice -= price;
        }
        if (cart[id].amount === 0) {
            delete cart[id]
        }
        updateCart();
    }
    else {
        console.log("No element with id " + id)
    }
}

function NukeIt() {
    // Manually remove all items and values and for good measure delete the storage
    for (let id in cart) {
        let item = cart[id];
        itemsincart -= item.amount;
        totalprice -= item.amount * item.price;
        delete cart[id]
    }
    totalprice = 0;
    itemsincart = 0;
    localStorage.clear();
    updateCart();
}


// Updates the total items/price displayed on the page and in the device storage to the values currently in the script.
function updateCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("sum", totalprice);
    localStorage.setItem("count", itemsincart);
    updateTable();
}
