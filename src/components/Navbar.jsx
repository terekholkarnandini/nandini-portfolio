// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Nandini | Portfolio</h1>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
