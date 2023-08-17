import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ContactForm from './ContactForm';
import GameSection from './GameSection';
import AboutUs from './AboutUs';
import ImageSection from './ImageSection';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <div id="top-section" className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold mb-4">Moon Moon</h1>
          <h2 className="text-3xl font-semibold">games</h2>
        </div>
      </div>
      <ImageSection />
      <GameSection />
      <AboutUs />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
