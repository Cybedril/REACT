import React from 'react';
import './HeaderOutdoors.css';
import { Link } from 'react-router-dom';

const HeaderOutdoors: React.FC = () => {
  return (
    <section className="header-outdoors">  
      <div className="header-overlay-outdoors">
        <div className="header-content-outdoors">
        <Link to="/"><img src="/assets/logo.png" alt="Logo" className="header-logo-outdoors" /></Link>
          <h1 className="welcomemessageoutdoors">Outdoors</h1>
          <p className="out">Home » Outdoors</p>
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

export default HeaderOutdoors;
