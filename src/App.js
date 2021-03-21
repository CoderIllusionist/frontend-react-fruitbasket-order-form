import React, {useState} from 'react';
import './App.css';
import OrderForm from "./components/OrderForm";




function App() {

    const [countStrawBerry, setCountStrawberry] = useState(0);
    const [countBanana, setCountBanana] = useState(0);
    const [countApple, setCountApple] = useState(0);
    const [countKiwi, setCountKiwi] = useState(0);

    function addCounterStrawBerry() {
        setCountStrawberry(countStrawBerry + 1);
    }

    function minCounterStrawBerry() {
        if (countStrawBerry > 0 ) {
            setCountStrawberry(countStrawBerry - 1) }
    }
    function addCounterBanana() {
        setCountBanana(countBanana + 1);
    }

    function minCounterBanana() {
        if (countBanana > 0 ) {
            setCountBanana(countBanana - 1) }
    }
    function addCounterApple() {
        setCountApple(countApple + 1);
    }

    function minCounterApple() {
        if (countApple > 0 ) {
            setCountApple(countApple - 1) }
    }
    function addCounterKiwi() {
        setCountKiwi(countKiwi + 1);
    }

    function minCounterKiwi() {
        if (countKiwi > 0 ) {
            setCountKiwi(countKiwi - 1) }
    }

    function resetAll() {
        setCountStrawberry(0)
        setCountBanana(0)
        setCountApple(0)
        setCountKiwi(0)
    }


    return (

        <>

            <h1>Fruitmand bezorgservice</h1>
            <div className="container-fruits">
                <div className="fruit-item">
                    <h4>Aardbeien</h4>
                    <button onClick={addCounterStrawBerry} type="button">+</button>
                    <p>{countStrawBerry}</p>
                    <button onClick={minCounterStrawBerry} type="button">-</button>
                </div>
                <div className="fruit-item">
                    <h4>Bananen</h4>
                    <button onClick={addCounterBanana} type="button">+</button>
                    <p>{countBanana}</p>
                    <button onClick={minCounterBanana} type="button">-</button>
                </div>
                <div className="fruit-item">
                    <h4>Appels</h4>
                    <button onClick={addCounterApple} type="button">+</button>
                    <p>{countApple}</p>
                    <button onClick={minCounterApple} type="button">-</button>
                </div>
                <div className="fruit-item">
                    <h4>Kiwi's</h4>
                    <button onClick={addCounterKiwi}  type="button">+</button>
                    <p>{countKiwi}</p>
                    <button onClick={minCounterKiwi}  type="button">-</button>
                </div>
                <button className="reset" onClick={resetAll}>Reset</button>
            </div>

            <div>

                <OrderForm></OrderForm>
            </div>
        </>
    );
}

export default App;
