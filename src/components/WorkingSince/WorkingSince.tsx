import React from 'react';
import './WorkingSince.css';

const SectionLayout: React.FC = () => {
  return (
    <section className="section-container">
      {/* Conteneur de l'image */}
      <div className="image-container">
        <img
          src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2020/02/pic14-free-img.png"
          alt="Single Image"
          className="styled-image"
        />
      </div>

      {/* Conteneur du texte */}
      <div className="text-container">
        <h2>Working Since 1995</h2>
        <div className="afterworking">
        <hr className="underline" />
        <p className="text1">
          Taciti alias conubia, senectus, soluta nisl interdum vitae eius<br/>
          habitant metus dapibus quis eos, risus, vehicula! Egestas qui<br/> interdum
          habitant! Laoreet, placeat maxime Suspendisse.
        </p>
        <p className="highlighted-text">
          <strong>Design is a funny word</strong>
        </p>
        <p className="text2">
          Taciti alias conubia, senectus, soluta nisl interdum vitae eius<br/>
          habitant metus dapibus quis eos, risus, vehicula! Egestas qui<br/> interdum
          habitant! Laoreet, placeat maxime Suspendisse.
        </p>
     </div>
      </div>
    </section>
  );
};

export default SectionLayout;
