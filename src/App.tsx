import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Hero from './components/Hero';
import Rooms from './components/Rooms';
import Reservation from './components/Reservation';
import Footer from './components/Footer';

function App() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header changeLanguage={changeLanguage} />
      <Hero />
      <Rooms />
      <Reservation />
      <Footer />
    </div>
  );
}

export default App;