import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h4>About</h4>
        <ul>
          <li>Our story</li>
          <li>Newsroom</li>
          <li>Investors</li>
          <li>Careers</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Products</h4>
        <ul>
          <li>Ride</li>
          <li>Drive</li>
          <li>Freight</li>
          <li>Business</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Cities</h4>
        <ul>
          <li>Nairobi</li>
          <li>Mombasa</li>
          <li>Kisumu</li>
          <li>Eldoret</li>
          <li>Nakuru</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Support</h4>
        <ul>
          <li>Contact us</li>
          <li>Help center</li>
          <li>Accessibility</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Legal</h4>
        <ul>
          <li>Terms of use</li>
          <li>Privacy policy</li>
          <li>Cookie policy</li>
        </ul>
      </div>
      <div className="footer-section social">
        <h4>Follow us</h4>
        <ul>
          <li>
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
