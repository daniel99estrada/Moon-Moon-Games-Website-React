import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ContactForm from './ContactForm';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
