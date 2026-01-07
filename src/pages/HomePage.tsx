import React from 'react';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import About from '../components/sections/About';
import Stats from '../components/sections/Stats';
import Portfolio from '../components/sections/Portfolio';
import Contact from '../components/sections/Contact';
import Testimonials from '../components/sections/Testimonials';
import Documents from '../components/sections/Documents';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <Stats />
      <Testimonials />
      <Documents />
      <Portfolio />
      <Contact />
    </>
  );
};

export default HomePage;
