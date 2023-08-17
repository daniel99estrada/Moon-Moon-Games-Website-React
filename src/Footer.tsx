import React from 'react';

const Footer: React.FC = () => {
  return (
    <div>
      <div className="divider"></div>
      <div id="footer-container">
        <div id="footer">
          <div id="footer-left-container">
            <h1>Moon Moon</h1>
            <p>2023</p>
            <div id="footer-button-container">
              <button>Google Play Store</button>
              <button>Apple App Store</button>
            </div>
          </div>
          <div className="footer-right-container">
            <h3><a href="#" id="footer-button">Games</a></h3>
            <h3><a href="#" id="footer-button">About</a></h3>
            <h3><a href="#" id="footer-button">Contact</a></h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
