import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <section className="header">  
      <div className="header-overlay">
        <div className="header-content">
        <Link to="/"><img src="/assets/logo.png" alt="Logo" className="header-logo" /></Link>
          <h1 className="welcomemessage">Coming Home Never <br/>Felt So Good!</h1>
          <p className="italictext">Quam a diam lorem explicabo quis fugit, ut aliquam modi.</p>
          <button className="header-button">FIND YOUR STYLE</button>
        </div>
      </div>
      <nav className="navbar">
        <ul>
          <Link to="/About"><li><a href="#about">About Us</a></li></Link>
          <Link to="/LivingRoom"><li><a href="#living-room">Living Room</a></li></Link>
          <Link to="/Kitchen"><li><a href="#kitchen">Kitchen</a></li></Link>
          <Link to="/Outdoors"><li><a href="#outdoors">Outdoors</a></li></Link>
          <Link to="/Contact"><li><a href="#contact">Contact</a></li></Link>
        </ul>
      </nav>
    </section>
  );
};

export default Header;
