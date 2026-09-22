import React from 'react';
import logo from '../asset/logo.png';
import './SimpleWebsite.css';

function SimpleWebsite() {
  return (
    <div className="simple-website">
      <header className="sw-header text-center">
        <img src={logo} alt="FPT University" className="sw-logo" />
        <nav className="sw-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="container py-5 text-center">
        <section id="about">
          <h2>About</h2>
          <p>This is the about section of the website.</p>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>For any inquiries, please contact us at example@example.com.</p>
        </section>
      </main>

      <footer className="sw-footer text-center">
        © 2023 Website. All rights reserved.
      </footer>
    </div>
  );
}

export default SimpleWebsite;
