import React from 'react';
import { Target, BarChart2, PieChart, Globe, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: <Target size={40} />,
    title: "Strategic Planning",
    description: "Develop comprehensive strategies to achieve long-term business goals and sustainable growth."
  },
  {
    icon: <BarChart2 size={40} />,
    title: "Business Analysis",
    description: "In-depth analysis of your business operations to identify areas for improvement and efficiency."
  },
  {
    icon: <PieChart size={40} />,
    title: "Financial Consulting",
    description: "Expert financial advice to optimize your capital structure and improve profitability."
  },
  {
    icon: <Globe size={40} />,
    title: "Market Research",
    description: "Detailed market intelligence to help you make informed decisions and enter new markets."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-[#101321] relative z-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-[var(--color-accent-blue)] font-bold tracking-widest uppercase text-sm mb-2 block">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Provide Best <span className="text-gradient">Services</span>
          </h2>
          <p className="text-[var(--color-text-dim)]">
            We offer a wide range of consulting services to help your business thrive in the competitive market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
                key={index}
                className="group p-8 rounded-2xl bg-[#161a2b] border border-transparent hover:border-[var(--color-accent-blue)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
            >
              <div className="mb-6 text-[var(--color-accent-blue)] group-hover:text-white transition-colors duration-300 bg-[#1f243a] w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-[var(--color-accent-blue)]">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--color-accent-blue)] transition-colors">
                {feature.title}
              </h3>
              <p className="text-[var(--color-text-dim)] text-sm leading-relaxed mb-6">
                {feature.description}
              </p>
              <a href="#" className="inline-flex items-center text-sm font-bold text-white group-hover:text-[var(--color-accent-blue)] transition-colors">
                READ MORE <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
