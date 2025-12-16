import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const projects = [
  { id: 1, title: 'Financial Analysis', category: 'Financial', image: '/src/assets/images/portfolio-1.png' },
  { id: 2, title: 'Skyscraper Strategy', category: 'Strategy', image: '/src/assets/images/portfolio-2.png' },
  { id: 3, title: 'Growth Consulting', category: 'Consulting', image: '/src/assets/images/portfolio-1.png' }, // reusing
  { id: 4, title: 'Market Research', category: 'Strategy', image: '/src/assets/images/portfolio-2.png' },   // reusing
  { id: 5, title: 'Business Audit', category: 'Financial', image: '/src/assets/images/portfolio-1.png' },   // reusing
  { id: 6, title: 'Global Expansion', category: 'Consulting', image: '/src/assets/images/portfolio-2.png' }, // reusing
];

const categories = ['All', 'Financial', 'Consulting', 'Strategy'];

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All' 
        ? projects 
        : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-[#101321]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
            <span className="text-[var(--color-accent-blue)] font-bold tracking-widest uppercase text-sm mb-2 block">
                Projects
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
                Our Latest <span className="text-gradient">Portfolio</span>
            </h2>
        </div>

        {/* Filters */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-6 py-2 rounded-full text-sm font-bold uppercase transition-all duration-300 ${
                        activeCategory === cat 
                        ? 'bg-[var(--color-accent-blue)] text-white shadow-[0_0_15px_rgba(0,178,255,0.4)]' 
                        : 'text-[var(--color-text-dim)] hover:text-white bg-[#161a2b] border border-transparent hover:border-[var(--color-accent-blue)]'
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
                <div key={project.id} className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer">
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-[var(--color-accent-blue)]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6 transform translate-y-4 group-hover:translate-y-0">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 text-[var(--color-accent-blue)] transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                            <Plus size={24} />
                        </div>
                        <p className="text-white/80 text-sm font-semibold uppercase tracking-wider mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                            {project.category}
                        </p>
                        <h3 className="text-2xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200">
                            {project.title}
                        </h3>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
