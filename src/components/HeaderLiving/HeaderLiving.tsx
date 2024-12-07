import React from 'react';
import './HeaderLiving.css';
import { Link } from 'react-router-dom';

const HeaderLiving: React.FC = () => {
  return (
    <section className="header-living">  
      <div className="header-overlay-living">
        <div className="header-content-living">
        <Link to="/"><img src="/assets/logo.png" alt="Logo" className="header-logo-living" /></Link>
          <h1 className="welcomemessageliving">Living Room</h1>
          <p className="room">Home » Living Room</p>
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

export default HeaderLiving;
