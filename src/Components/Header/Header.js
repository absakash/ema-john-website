import { logDOM } from '@testing-library/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../images/Logo.svg"
import "./Header.css"
const Header = () => {
    return (
        <div>
            <nav className='header-nav'>
                <img src={logo} alt="" />
                <div>
                    <NavLink className={({ isActive }) => isActive ? "active" : undefined} to="home">Home</NavLink>
                    <NavLink to="shop">Shop</NavLink>
                    <NavLink to="order">Order</NavLink>
                    <NavLink to="product">Product</NavLink>
                    <NavLink to="manage">Manage</NavLink>
                    <NavLink to='inventory'>Inventory</NavLink>
                    <NavLink to="login">LogIn</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Header;