import React from 'react';
import './RevewDetails.css'

const RevewDetails = ({ product, click }) => {
    const { img, price, quantity, name, id } = product;
    return (
        <div>
            <div className='main-container'>
                <div className="revew-container">
                    <img src={img} alt="" />
                </div>
                <div className="revew-details">
                    <div className="revew-one">
                        <p>Name:{name}</p>
                        <p><small>Price:{price}</small></p>
                        <p><small>Quantity: {quantity}</small></p>
                    </div>
                    <div className="revew-two">

                        <button onClick={() => click(id)}>delete</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RevewDetails;