import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <div id="about-section" className="py-16">
        <div id="about-section-container" className="container mx-auto">
          <div className="h-px bg-gray-900"></div>
          <div className="text-center text-3xl font-semibold mt-8 mb-6">About Us</div>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-x-12">
            <div className="w-full md:w-1/2">
              <p className="text-gray-700 text-lg">
                Founded in 2023 by Salvadoran developer Daniel Estrada, Moon Moon Games is an indie game studio focused on creating stylized mobile games and VR experiences with exceptional music and sound effects. Daniel's passion for game design, coupled with his strong programming and musical background, drives us to create games that are engaging and stimulating. We are excited to share our passion for games with you.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img src="{{ url_for('static', filename='Unity.png') }}" alt="Game Studio Logo" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
