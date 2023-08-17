import React from 'react';

const Header: React.FC = () => {
  return (
    <div id="Nav-bar-section">
      <div id="container">
        <div id="logo">
          <h3>Moon Moon</h3>
        </div>
        <nav>
          <ul>
            <li><a href="#">Games</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
