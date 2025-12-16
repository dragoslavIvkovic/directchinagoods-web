import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Button from '../ui/Button';

const About = () => {
    const benefits = [
        "Certified Company",
        "Expert Team Members",
        "Best Services for You",
        "Affordable Pricing"
    ];

  return (
    <section id="about" className="py-20 bg-[#101321] relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <div className="relative group">
                <div className="absolute inset-0 bg-[var(--color-accent-blue)] transform translate-x-4 translate-y-4 rounded-xl opacity-20 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
                <img 
                    src="/src/assets/images/about-img.png" 
                    alt="About Our Team" 
                    className="relative rounded-xl shadow-2xl w-full object-cover z-10"
                />
                
                {/* Floating Experience Card */}
                <div className="absolute bottom-10 -right-4 md:-right-10 bg-white p-6 rounded-lg shadow-xl z-20 animate-bounce-slow">
                    <p className="text-4xl font-bold text-[var(--color-accent-blue)] text-center">15+</p>
                    <p className="text-black font-semibold text-sm uppercase tracking-wider mt-1 text-center">Years Experience</p>
                </div>
            </div>

            {/* Right: Text */}
            <div className="space-y-8">
                <div>
                     <span className="text-[var(--color-accent-blue)] font-semibold tracking-wider uppercase text-sm">About Direct China Goods</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 leading-tight">
            Certified Company With <br />
            <span className="text-[var(--color-accent-blue)]">15 Years Experience</span>
          </h2>
          <p className="text-gray-400 mt-6 leading-relaxed">
            Direct China Goods is a dynamic company dedicated to bridging the gap between global markets and Chinese manufacturing excellence.
          </p>
                </div>

                
                <p className="text-[var(--color-text-dim)] text-lg leading-relaxed">
                    We bring years of experience and a proven track record of success. Our team of experts is dedicated to helping you achieve your business goals through innovative strategies and execution.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-3 text-white font-medium">
                            <CheckCircle2 className="text-[var(--color-accent-blue)]" size={20} />
                            <span>{benefit}</span>
                        </div>
                    ))}
                </div>

                <div className="pt-4">
                    <Button>DISCOVER MORE</Button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
