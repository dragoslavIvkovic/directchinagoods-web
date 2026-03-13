import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const categoriesData = [
  { id: 1, title: 'Gaming Accessories', image: '/src/assets/images/gaming_accessories.png' },
  { id: 2, title: 'Glass Bottles', image: '/src/assets/images/glass_bottles.png' },
  { id: 3, title: 'Solar Panels', image: '/src/assets/images/solar_panels.png' },
  { id: 4, title: 'Electronic Components', image: '/src/assets/images/electronic_components.png' },
  { id: 5, title: 'E-Cigarettes', image: '/src/assets/images/e_cigarettes.png' },
  { id: 6, title: 'Shoulder Bags', image: '/src/assets/images/shoulder_bags.png' },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-[#101321]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our <span className="text-gradient">Portfolio</span>
            </h2>
            <p className="text-[var(--color-text-dim)]">
                A selection of our sourcing categories
            </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {categoriesData.map((category) => (
                <div key={category.id} className="flex flex-col items-center group cursor-pointer">
                    <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-lg shadow-black/20">
                        <img 
                            src={category.image} 
                            alt={category.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <h3 className="text-3xl font-bold text-white group-hover:text-[var(--color-accent-blue)] transition-colors text-center uppercase tracking-wide">
                        {category.title}
                    </h3>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
