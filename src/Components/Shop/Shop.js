import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCard } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {
    const products = useLoaderData()
    const [cart, setCart] = useState([])
    const clearAll = () => {
        setCart([])
        deleteShoppingCart();
    }

    useEffect(() => {
        const storeCart = getStoredCard();
        const savedCart = [];
        for (const id in storeCart) {
            const addedItem = products.find(product => product.id === id);
            if (addedItem) {
                const quantity = storeCart[id];
                addedItem.quantity = quantity;
                savedCart.push(addedItem);
            }
        }
        setCart(savedCart);
    }, [products])
    const addToOrderContainer = (product) => {
        // console.log("products");
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className='shop'>


                {
                    products.map(product => <Product
                        key={product.id}
                        productContainer={product}
                        pushToOrder={addToOrderContainer}

                    ></Product>)
                }
            </div>
            <div className='order-area'>
                <Cart
                    pushCart={cart}
                    clearAll={clearAll}
                >
                    <Link to="/order"><button>Revew Order</button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;