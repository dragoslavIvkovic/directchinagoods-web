import React from 'react';
import { Target, BarChart2, PieChart, Globe, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: <Target size={40} />,
    title: "Strategic Planning",
    description: "Help with the best sourcing options for every client's needs in order to ensure long-term cooperation and high-quality products."
  },
  {
    icon: <Globe size={40} />,
    title: "Help and Guidance",
    description: "The best agentic representation on the market helps clients find their way in China. Visits to a foreign country can be difficult, and we offer a comprehensive all-in-one service to make it easier for you."
  },
  {
    icon: <Globe size={40} />,
    title: "Quality Control and Shipping",
    description: "A dilligent, rigorous quality control allows us to ensure the products purchased match all standards required. Thanks to the close cooperation we maintain, we will ensure the quality and the timely shipping as per client's needs."
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
