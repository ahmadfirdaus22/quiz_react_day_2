import React from "react";

import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <nav
        style={{
            backgroundColor: 'gray',
            padding: '10px',
            color: 'white',
            display: 'flex',
            gap: '30px',
            paddingLeft: '50px'
        }}>

            <NavLink
            to="/" 
            style={({ isActive}) => (isActive ? {backgroundColor:'black', padding: '10px', borderRadius:'10px', color :'white', textDecoration: 'none'} : { textDecoration: 'none', color :'white', padding: '10px'}) }>
                Home
            </NavLink>
            <NavLink
            to='/profile'
            style={({ isActive}) => (isActive ? {backgroundColor:'black', padding: '10px', borderRadius:'10px', color :'white',  textDecoration: 'none'} : { textDecoration: 'none', color :'white', padding: '10px'}) }>
                Profile
            </NavLink>

        </nav>
    );
}

export default Navbar;