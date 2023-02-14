import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import RevewDetails from '../RevewDetails/RevewDetails';

const Order = () => {
    const { products, initialCart } = useLoaderData()
    const [cart, setCart] = useState(initialCart)

    const click = (id) => {
        const reaming = cart.filter(product => product.id !== id);
        setCart(reaming);
        removeFromDb(id);
    }
    const clearAll = () => {
        setCart([])
        deleteShoppingCart();
    }
    return (
        <div>
            <div className="shop-container">
                <div className="shop-area">

                    {cart.map(product => <RevewDetails
                        key={product.id}
                        product={product}
                        click={click}
                    ></RevewDetails>)}
                    {
                        cart.length === 0 && <h4>No item for shop, please <Link to="/shop">Order more!</Link></h4>
                    }
                </div>
                <div className="order-area">
                    <Cart
                        pushCart={cart}
                        clearAll={clearAll}

                    >

                    </Cart>
                </div>
            </div>

        </div>
    );
};

export default Order;