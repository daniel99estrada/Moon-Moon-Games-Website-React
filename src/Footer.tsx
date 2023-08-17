import React from 'react';

const Footer: React.FC = () => {
  return (
    <div>
      <div className="h-px bg-gray-900"></div>
      <div className="bg-gray-900">
        <div className="container mx-auto py-4 px-10">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h1 className="text-white font-semibold text-2xl">Moon Moon</h1>
              <p className="text-white font-light">2023</p>
              <div className="flex space-x-2 mt-4">
                <button className="bg-gray-900 border border-white text-white py-2 px-4 rounded-full text-sm font-semibold">Google Play Store</button>
                <button className="bg-gray-900 border border-white text-white py-2 px-4 rounded-full text-sm font-semibold">Apple App Store</button>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <h3><a href="#" className="text-white font-light">Games</a></h3>
              <h3><a href="#" className="text-white font-light">About</a></h3>
              <h3><a href="#" className="text-white font-light">Contact</a></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
