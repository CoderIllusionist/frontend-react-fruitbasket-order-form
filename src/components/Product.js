import React, {useState} from 'react';

function Product({plusText, minusText, className,productName}) {

    const [count, setCount] = useState(0);

    function addCounter() {
        setCount(count + 1);
    }

    function minCounter() {
        if (count > 0 ) {
            setCount(count - 1) }
    }
    function setCounterStrawberry(number) {
        setCount(number)
    }

    return (

        <>
            <h4>{productName}</h4>
            <button onClick={addCounter} className={className} type="button"> {plusText} </button>
            <p>{count}</p>
            <button onClick={minCounter} className={className} type="button"> {minusText} </button>
        </>
    );

}


export default Product;

