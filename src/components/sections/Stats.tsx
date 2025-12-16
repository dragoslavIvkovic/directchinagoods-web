import React from 'react';

const stats = [
  { value: "1500+", label: "Project Completed" },
  { value: "2500+", label: "Satisfied Clients" },
  { value: "50+", label: "Expert Consultants" },
  { value: "25+", label: "Awards Winning" },
];

const Stats = () => {
  return (
    <section className="py-20 bg-[#101321] relative border-t border-b border-white/5">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
            <div className="absolute top-[-50%] left-[-20%] w-[800px] h-[800px] rounded-full bg-blue-500/10 blur-[100px]"></div>
            <div className="absolute bottom-[-50%] right-[-20%] w-[800px] h-[800px] rounded-full bg-cyan-500/10 blur-[100px]"></div>
        </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Direct China Goods in Numbers</h2>
            <p className="text-[var(--color-text-dim)] max-w-2xl mx-auto">
                Our track record speaks for itself. We've helped hundreds of businesses achieve their goals in the Chinese market.
            </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-[var(--color-text-dim)] font-medium text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
