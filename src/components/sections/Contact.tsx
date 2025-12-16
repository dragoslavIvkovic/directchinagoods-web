import React from 'react';
import Button from '../ui/Button';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#101321] relative z-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <span className="text-[var(--color-accent-blue)] font-bold tracking-widest uppercase text-sm mb-2 block">
                    Contact Us
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Get In <span className="text-gradient">Touch</span>
                </h2>
                <p className="text-[var(--color-text-dim)]">
                    Ready to start your project? Contact us today for a free consultation.
                </p>
            </div>

            <div className="bg-[#161a2b] p-8 md:p-12 rounded-2xl shadow-2xl border border-white/5">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                             <label className="text-sm font-medium text-white ml-1">Name</label>
                             <input type="text" placeholder="Your Name" className="w-full h-14 bg-[#1f243a] rounded-lg px-6 text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-blue)] transition-all" />
                        </div>
                        <div className="space-y-2">
                             <label className="text-sm font-medium text-white ml-1">Email</label>
                             <input type="email" placeholder="Your Email" className="w-full h-14 bg-[#1f243a] rounded-lg px-6 text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-blue)] transition-all" />
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="space-y-2">
                             <label className="text-sm font-medium text-white ml-1">Phone</label>
                             <input type="tel" placeholder="Phone Number" className="w-full h-14 bg-[#1f243a] rounded-lg px-6 text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-blue)] transition-all" />
                        </div>
                         <div className="space-y-2">
                             <label className="text-sm font-medium text-white ml-1">Subject</label>
                             <input type="text" placeholder="Subject" className="w-full h-14 bg-[#1f243a] rounded-lg px-6 text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-blue)] transition-all" />
                        </div>
                    </div>

                    <div className="space-y-2">
                         <label className="text-sm font-medium text-white ml-1">Message</label>
                         <textarea rows={5} placeholder="Your Message" className="w-full bg-[#1f243a] rounded-lg p-6 text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-blue)] transition-all resize-none"></textarea>
                    </div>

                    <div className="pt-4 text-center">
                        <Button size="lg" className="w-full md:w-auto min-w-[200px] text-lg">SEND MESSAGE</Button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
