import React from 'react';
import './Footer.css'
function Footer() {
  return (
    <div className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h4>Questions? Contact Us</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Media Center</h4>
          <ul>
            <li><a href="#">Press Releases</a></li>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">Brand Assets</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Account</h4>
          <ul>
            <li><a href="#">Sign In</a></li>
            <li><a href="#">Create Account</a></li>
            <li><a href="#">Account Settings</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Original Content</h4>
          <ul>
            <li><a href="#">Netflix Original Series</a></li>
            <li><a href="#">Netflix Original Movies</a></li>
            <li><a href="#">Netflix Original Documentaries</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Netflix, Inc.</p>
      </div>
    </div>
  );
}

export default Footer;