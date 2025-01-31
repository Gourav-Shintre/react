import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink className={(e)=>{return e.isActive ? "red" : ""}} to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact_us">Contact Us</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
