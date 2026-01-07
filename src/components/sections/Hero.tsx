import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';

const heroImages = [
  '/src/assets/images/hero-bg.png',
  '/src/assets/images/portfolio-1.png',
  '/src/assets/images/portfolio-2.png',
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Hero Background ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        {/* Overlay gradient to match the dark theme and ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#101321] via-[#101321]/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="max-w-3xl space-y-8 animate-fade-in-up">
            <div className="inline-block relative">
                <span className="text-[var(--color-accent-blue)] font-bold tracking-[0.2em] uppercase text-sm pl-12 relative">
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-0.5 bg-[var(--color-accent-blue)]"></span>
                    Welcome to Direct China Goods
                </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
                Welcome to <span className="text-accent-blue">Direct China Goods</span>
            </h1>
            
            <p className="text-[var(--color-text-dim)] text-lg md:text-xl max-w-xl leading-relaxed">
                Unlock your potential with our expert consulting services. We deliver tailored strategies to drive efficiency and sustainable success.
            </p>
            
            <div className="pt-4">
                <a href="mailto:office@directchinagoods.com">
                    <Button size="lg" className="shadow-[0_4px_20px_rgba(0,178,255,0.3)]">
                        CONTACT US
                    </Button>
                </a>
            </div>
        </div>

        {/* Right Content - Abstract visual elements or empty to show bg */}
        <div className="hidden lg:block relative h-full min-h-[500px]">
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-[var(--color-accent-blue)] w-8'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
