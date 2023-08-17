import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div id="contact-section" className="bg-yellow-300 p-8 border-2 border-black rounded">
      <div id="contact-section-container">
        <div id="contact-col-container">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact</h2>
          <form method="POST" action="/" className="w-1/2 mx-auto">
            <div className="form-group mb-4">
              <label htmlFor="name" className="text-lg font-semibold text-gray-800">Name:</label>
              <input type="text" id="name" name="name" required className="w-full py-2 px-3 border-2 border-gray-300 rounded" />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="email" className="text-lg font-semibold text-gray-800">Email:</label>
              <input type="email" id="email" name="email" required className="w-full py-2 px-3 border-2 border-gray-300 rounded" />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="message" className="text-lg font-semibold text-gray-800">Message:</label>
              <textarea id="message" name="message" required className="w-full py-2 px-3 border-2 border-gray-300 rounded"></textarea>
            </div>
            <div className="form-group mb-4">
              <label className="toggle-label flex items-center">
                <input type="checkbox" id="newsletter" name="newsletter" className="mr-2" />
                <span className="text-gray-800">Subscribe to newsletter</span>
              </label>
            </div>
            <div className="form-group">
              <input type="submit" value="Send Message" className="btn-submit bg-gray-800 text-white py-2 px-4 rounded cursor-pointer" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
