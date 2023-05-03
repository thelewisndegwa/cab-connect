import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-section">
        <h3> 𝓒𝓪𝓫𝓒𝓸𝓷𝓷𝓮𝓬𝓽</h3>
        <ul>
          <li>About Us</li>
          <li>Newsroom</li>
          <li>Investors</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>Gift Cards</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>PRODUCTS</h4>
        <ul>
          <li>Ride</li>
          <li>Drive</li>
          <li>Eats</li>
          <li>Business</li>
          <li>Transit</li>
          <li>Cargo</li>
          <li>Bikes</li>
          <li>Scooters</li>
          <li>Flying Taxis</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>SUPPORT</h4>
        <ul>
          <li>Help Center</li>
          <li>Accessibility</li>
          <li>Safety</li>
          <li>Community Guidelines</li>
          <li>COVID-19 Resources</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>LEGAL</h4>
        <ul>
          <li>Terms and Conditions</li>
          <li>Privacy Policy</li>
          <li>Driver Privacy</li>
          <li>Electronic Consent</li>
          <li>Terms of Use</li>
          <li>Dispute Resolution</li>
          <li>Terms of Service</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>CONNECT</h4>
        <ul>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>Facebook</li>
        </ul>
        <div className="footer-section">
  <h4>Follow Us</h4>
  <ul>
    <li>
      <a href="https://www.facebook.com/">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
    </li>
    <li>
      <a href="https://www.twitter.com/">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </li>
  </ul>
</div>

      </div>
    </div>
  );
}

export default Footer;
