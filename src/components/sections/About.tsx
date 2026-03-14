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
                <div className="absolute inset-0 bg-accent-blue transform translate-x-4 translate-y-4 rounded-xl opacity-20 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
                <img 
                    src="/images/about-img.png" 
                    alt="About Our Team" 
                    className="relative rounded-xl shadow-2xl w-full object-cover z-10"
                />
                
                {/* Floating Experience Card */}
                <div className="absolute bottom-10 -right-4 md:-right-10 bg-white p-6 rounded-lg shadow-xl z-20 animate-bounce-slow">
                    <p className="text-4xl font-bold text-accent-blue text-center">10+</p>
                    <p className="text-black font-semibold text-sm uppercase tracking-wider mt-1 text-center">Years Experience</p>
                </div>
            </div>

            {/* Right: Text */}
            <div className="space-y-8">
                <div>
                     <span className="text-accent-blue font-semibold tracking-wider uppercase text-sm">About Direct China Goods</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 leading-tight">
            Our Journey Since <br />
            <span className="text-accent-blue">2015</span>
          </h2>
          <div className="text-gray-400 mt-6 leading-relaxed space-y-4">
            <p>
              Arriving in Shenzhen in 2015, by 2016 we have already established a company selling batteries and cables.
            </p>
            <p>
              During next two years, as the company grew, we expanded our business scope to include other things like gaming accessories and bags. Moving forward, ever since 2020 we have been continually expanding and including new categories into our business scope.
            </p>
            <p>
              In 2023, the company set up a new office and warehouse in Dongguan, which is known as the "Factory of the World".
            </p>
          </div>

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
      </div>
    </section>
  );
};

export default About;
