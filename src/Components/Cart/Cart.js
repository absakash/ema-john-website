import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const { pushCart, clearAll, children } = props;
    console.log(pushCart);
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const productContainer of pushCart) {
        quantity = quantity + productContainer.quantity;
        total = total + productContainer.price * productContainer.quantity;
        shipping = shipping + productContainer.shipping;


    }
    const tax = parseInt((total * 10 / 100).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart-container'>
            <h2>Order Area </h2>
            <p>Order Item: {quantity}</p>
            <p>Total:{total} </p>
            <p>Shiping Carde: {shipping} </p>
            <p>Tax:{tax} </p>
            <h5>Grand Total: {grandTotal}</h5>
            <button onClick={clearAll}>Clear-All</button>
            {children}


        </div>
    );
};

export default Cart;