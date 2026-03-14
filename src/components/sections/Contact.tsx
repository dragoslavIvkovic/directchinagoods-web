import React from 'react';
import Button from '../ui/Button';
import ObfuscatedContact from '../ui/ObfuscatedContact';

const Contact = () => {
  // Form state and handlers commented out for later use
  /*
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { name, email, phone, subject, message } = formData;
    const emailBody = `Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}`;
    
    const mailtoLink = `mailto:office@directchinagoods.com?subject=${encodeURIComponent(subject || 'Contact Form Inquiry')}&body=${encodeURIComponent(emailBody)}`;
    
    window.location.href = mailtoLink;
  };
  */

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
                <p className="text-[var(--color-text-dim)] mb-8">
                    Ready to start your project? Contact us today for a free consultation.
                </p>
                
                {/* Direct mailto button instead of form */}
                <div className="flex flex-col items-center gap-10">
                    <a href="mailto:office@directchinagoods.com">
                        <Button size="lg" className="min-w-[200px] text-lg hover:shadow-[0_0_20px_rgba(0,178,255,0.4)] transition-shadow">
                            EMAIL US
                        </Button>
                    </a>

                    <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32 pt-12 border-t border-white/10 w-full max-w-4xl">
                        <ObfuscatedContact 
                            name="Joanna Liang" 
                            phone="+86 132 6703 2953" 
                            avatar="/images/Joanna.png" 
                            platforms={['whatsapp', 'wechat']}
                            size="lg"
                        />
                        <ObfuscatedContact 
                            name="Aleksandar Duric" 
                            phone="+86 185 6611 3944" 
                            avatar="/images/aleksandar.jpg" 
                            platforms={['whatsapp', 'wechat', 'viber']}
                            size="lg"
                        />
                    </div>
                </div>
            </div>

            {/* Contact form commented out for later use */}
            {/*
            <div className="bg-[#161a2b] p-8 md:p-12 rounded-2xl shadow-2xl border border-white/5">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                             <label className="text-sm font-medium text-white ml-1">Name</label>
                             <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full h-14 bg-[#1f243a] rounded-lg px-6 text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-blue)] transition-all" />
                        </div>
                        <div className="space-y-2">
                             <label className="text-sm font-medium text-white ml-1">Email</label>
                             <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="w-full h-14 bg-[#1f243a] rounded-lg px-6 text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-blue)] transition-all" />
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="space-y-2">
                             <label className="text-sm font-medium text-white ml-1">Phone</label>
                             <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="w-full h-14 bg-[#1f243a] rounded-lg px-6 text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-blue)] transition-all" />
                        </div>
                         <div className="space-y-2">
                             <label className="text-sm font-medium text-white ml-1">Subject</label>
                             <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" className="w-full h-14 bg-[#1f243a] rounded-lg px-6 text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-blue)] transition-all" />
                        </div>
                    </div>

                    <div className="space-y-2">
                         <label className="text-sm font-medium text-white ml-1">Message</label>
                         <textarea rows={5} name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" className="w-full bg-[#1f243a] rounded-lg p-6 text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-blue)] transition-all resize-none"></textarea>
                    </div>

                    <div className="pt-4 text-center">
                        <Button size="lg" className="w-full md:w-auto min-w-[200px] text-lg">SEND MESSAGE</Button>
                    </div>
                </form>
            </div>
            */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
