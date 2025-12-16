import React from 'react';
import Button from '../ui/Button';

// Start: Fix lint error about unused 'React' by not importing it if not used, 
// but in this env it might be needed for JSX transformation depending on config.
// I will keep it but ignoring unrelated lints.

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
            src="/src/assets/images/hero-bg.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
        />
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
                <Button size="lg" className="shadow-[0_4px_20px_rgba(0,178,255,0.3)]">
                    CONTACT US
                </Button>
            </div>
        </div>

        {/* Right Content - Abstract visual elements or empty to show bg */}
        <div className="hidden lg:block relative h-full min-h-[500px]">
            {/* 
               The reference site has some floating elements or transparent text.
               I'll add a subtle interactive element here later if needed, 
               but for now the background image + overlay provides the visual interest.
            */}
        </div>
      </div>

      {/* Bottom decorative/interactive elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3">
            <div className="w-3 h-3 rounded-full bg-[var(--color-accent-blue)] animate-bounce"></div>
            <div className="w-3 h-3 rounded-full bg-white/50"></div>
            <div className="w-3 h-3 rounded-full bg-white/50"></div>
      </div>
    </section>
  );
};

export default Hero;
