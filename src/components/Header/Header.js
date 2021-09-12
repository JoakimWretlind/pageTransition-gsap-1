import React from 'react';
import {
    Headers,
    NavLinks
} from './header.styling';

const Header = () => {
    return (
        <Headers>
            <NavLinks to="/" exact activeStyle={{ fontWheight: "bold", color: "#999" }}>
                Home
            </NavLinks>
            <NavLinks to="/about" exact activeStyle={{ fontWheight: "bold", color: "red" }}>
                About
            </NavLinks>
            <NavLinks to="/contact" exact activeStyle={{ fontWheight: "bold", color: "red" }}>
                Contact
            </NavLinks>
        </Headers>
    )
}

export default Header
