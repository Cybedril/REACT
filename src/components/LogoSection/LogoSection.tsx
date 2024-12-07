import React from "react";
import "./LogoSection.css";

const LogosSection: React.FC = () => {
  return (
    <div className="logos-container">
      <img src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2021/03/client-logo-1.png" alt="Logo 1" className="logo1" />
      <img src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2021/03/client-logo-3.png" alt="Logo 2" className="logo2" />
      <img src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2021/03/client-logo-5-150x41.png" alt="Logo 3" className="logo3" />
      <img src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2021/03/client-logo-4.png" alt="Logo 4" className="logo4" />
      <img src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2021/03/client-logo-3.png" alt="Logo 5" className="logo5" />
    </div>
  );
};

export default LogosSection;
