import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="bg-gray-900">
      <div className="container mx-auto flex justify-between items-center py-4 px-10">
        <div className="text-white font-light text-2xl">
          <h3>Moon Moon</h3>
        </div>
        <nav>
          <ul className="flex">
            <li className="mx-4"><a href="#" className="text-white font-light">Games</a></li>
            <li className="mx-4"><a href="#" className="text-white font-light">About</a></li>
            <li className="mx-4"><a href="#" className="text-white font-light">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
