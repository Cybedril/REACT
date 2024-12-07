import React from 'react';
import './Pagination2.css';

const Pagination2: React.FC = () => {
  const links: number[] = [1, 2]; 

  return (
    <div className="pagination-container">
      <div className="pagination-links">
        {links.map((link) => (
          <a 
            href="#" 
            key={link} 
            className={`pagination-link ${link === 1 ? 'active' : ''}`}
          >
            {link}
          </a>
        ))}
      </div>
      <button className="pagination-next">
        Next →
      </button>
    </div>
  );
};

export default Pagination2;
