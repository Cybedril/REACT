import React from 'react';
import './HeaderAbout.css';
import { Link } from 'react-router-dom';

const HeaderAbout: React.FC = () => {
  return (
    <section className="header-about">  
      <div className="header-overlay-about">
        <div className="header-content-about">
        <Link to="/"><img src="/assets/logo.png" alt="Logo" className="header-logo-about" /></Link>
          <h2 className="know-more">Know More</h2>
          <h1 className="welcomemessageabout">About Us</h1>
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

export default HeaderAbout;
