import React from 'react';
import HeroSection from '../components/HeroSection';
import ServiceList from '../components/ServiceList';
import MapComponent from '../components/MapComponent';
import ContactForm from '../components/ContactForm';
import CoinModel from '../components/CoinModel';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CoinModel />
      <ServiceList />
      <MapComponent />
      <ContactForm />
    </div>
  );
};

export default Home;
