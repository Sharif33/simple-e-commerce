import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {

    const { user, logOut } = useAuth();
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>

                {user.email && <span className="text-light">Hello! {user.displayName} </span>}

                {
                    user.email ?
                        <button onClick={logOut} className="btn btn-outline-danger">Logout</button>
                        :
                        <NavLink to="/login">Login</NavLink>}
            </nav>
        </div>
    );
};

export default Header;