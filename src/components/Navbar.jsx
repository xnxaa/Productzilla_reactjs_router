import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <nav>
      <ul className='ul'>
        <li className='li'>
          <Link to="/">Home</Link>
        </li>
        <li  className='li'>
          <Link to="/about">About</Link>
        </li>
        <li className='li'>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
