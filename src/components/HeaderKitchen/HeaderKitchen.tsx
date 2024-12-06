import React from 'react';
import './HeaderKitchen.css';
import { Link } from 'react-router-dom';

const HeaderKitchen: React.FC = () => {
  return (
    <section className="header-Kitchen">  
      <div className="header-overlay-Kitchen">
        <div className="header-content-Kitchen">
        <Link to="/"><img src="/assets/logo.png" alt="Logo" className="header-logo-Kitchen" /></Link>
          <h1 className="welcomemessageKitchen">Kitchen</h1>
          <p className="outtt">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.</p>
          <p className="outt">Home » Kitchen</p>
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

export default HeaderKitchen;
