import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-top">
        <Link to="/" className="logo">
          <img id="logo-footer-img" src="/assets/images/open-book_166088.png" alt="logo-footer-img" />
          <span id="logo-footer-span">e-Books</span>
        </Link>
        <ul className="footer-list">
          <li>
            <Link to="/" className="footer-link">Home</Link>
          </li>
          <li>
            <Link to="/library" className="footer-link">Library</Link>
          </li>
          <li>
            <Link to="/contact" className="footer-link">Contact</Link>
          </li>
        </ul>
      </div>
      <p className="social-list-title">Connect social links</p>
      <div className="social-list">
        <a href="YOUR_FACEBOOK_LINK" className="social-link">
          <img src="/assets/images/logo/logo1.png" alt="logo1" />
        </a>
        <a href="YOUR_TWITTER_LINK" className="social-link">
          <img src="/assets/images/logo/logo2.png" alt="logo2" />
        </a>
        <a href="YOUR_INSTAGRAM_LINK" className="social-link">
          <img src="/assets/images/logo/logo3.png" alt="logo3" />
        </a>
        <a href="YOUR_LINKEDIN_LINK" className="social-link">
          <img src="/assets/images/logo/logo4.png" alt="logo4" />
        </a>
      </div>
      <div className="footer-bottom">
        <p className="copyright">
          Copyright &copy; 2024
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
