import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <header className="header">
    <div className="container">
      <Link to="/" className="logo">
        <img src="/assets/images/open-book_166088.png" alt="logo" />
        <span>e-Books</span>
      </Link>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/library" className="navbar-link">Library</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <section className="section hero" id="home" aria-label="home" style={{ backgroundImage: "url('/assets/images/img.png')" }}>
  </section> 
  </div>
  
);

export default Header;
