import React, {useState} from 'react';
import './App.css';
import Product from "./components/Product";
import OrderForm from "./components/OrderForm";

function App() {

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <div className="container">
                <div className="fruit-container">
                    <Product productName="Aardbeien" plusText="+" minusText="-" className="plus-button"
                             text="+"></Product>
                </div>
                <div className="fruit-container">
                    <Product productName="Bananen" plusText="+" minusText="-" className="plus-button"
                             text="+"></Product>
                </div>
                <div className="fruit-container">
                    <Product productName="Appels" plusText="+" minusText="-" className="plus-button" text="+"></Product>
                </div>
                <div className="fruit-container">
                    <Product productName="Kiwis" plusText="+" minusText="-" className="plus-button" text="+"></Product>
                </div>
                <button>Reset</button>
            </div>

            <div>

<OrderForm></OrderForm>
            </div>
        </>
    );
}

export default App;
