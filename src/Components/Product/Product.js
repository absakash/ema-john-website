import React from 'react';
import "./Product.css"

const Product = (props) => {
    const { name, img, seller, ratings, price } = props.productContainer;
    return (
        <div className='product-container'>
            <img src={img} alt="" />
            <p>{name}</p>
            <p>Price: ${price}</p>
            <p>Seller:{seller}</p>
            <p>Ratings {ratings} stars</p>
            <div onClick={() => props.pushToOrder(props.productContainer)} className='btn-cart'><p>addToCart</p></div>
        </div>
    );
};

export default Product;