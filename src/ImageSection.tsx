import React from 'react';

import pic1 from "./images/pic1.png";
import pic2 from "./images/pic2.png";
import pic3 from "./images/pic3.png";


const ImageSection = () => {
  return (
    <div id="image-section" className="bg-yellow-300 py-16">
      <div className="container mx-auto text-center">
        <div>
          <h1 className="text-4xl font-semibold mb-4">Immerse yourself</h1>
        </div>
        <div className="image-container flex justify-center items-center space-x-8">
          <img src={pic1} alt="Image 1" className="max-w-xs" />
          <img src={pic2} alt="Image 2" className="max-w-xs" />
          <img src={pic3} alt="Image 3" className="max-w-xs" />
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
