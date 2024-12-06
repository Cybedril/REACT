import React from 'react';
import './HeaderContact.css';
import { Link } from 'react-router-dom';

const HeaderContact: React.FC = () => {
  return (
    <section className="header-contact">  
      <div className="header-overlay-contact">
        <div className="header-content-contact">
        <Link to="/"><img src="/assets/logo.png" alt="Logo" className="header-logo-contact" /></Link>
          <h1 className="welcomemessageabout">Get In Touch</h1>
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

export default HeaderContact;
