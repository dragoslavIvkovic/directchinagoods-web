import React from 'react';
import './App.css';

import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import About from './components/sections/About';
import Stats from './components/sections/Stats';
import Portfolio from './components/sections/Portfolio';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import Testimonials from './components/sections/Testimonials';
import Documents from './components/sections/Documents';


function App() {
  return (
    <div className="w-full overflow-x-hidden bg-[var(--color-primary-bg)] text-white font-sans">
      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <About />
        <Stats />
        <Testimonials />
        <Documents />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
