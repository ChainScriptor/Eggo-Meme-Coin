import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FloatingElements from '../components/FloatingElements';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000000] via-[#000000] to-[#000000]">
      <Header />
      <HeroSection />
      <FloatingElements />
    </div>
  );
};

export default Home;
