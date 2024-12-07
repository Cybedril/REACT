import React from 'react';
import './Maps.css';
import { Link } from 'react-router-dom';

const Maps: React.FC = () => {
    return(
        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23236.649547639445!2d5.36896277691632!3d43.281149071549095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9c0a52589d217%3A0xe2e2258b3d51c4b8!2sChez%20Nous!5e0!3m2!1sfr!2sbj!4v1733561479238!5m2!1sfr!2sbj" loading="lazy"></iframe>
    )

}

export default Maps;