import React from 'react';
import { Mail } from 'lucide-react';
import Button from '../ui/Button';

const Footer = () => {
  return (
    <footer className="bg-[#0b0e17] text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Column 1: About */}
          <div className="space-y-6">
            <div className="text-2xl font-bold tracking-wider">
               Direct China Goods
            </div>
             <p className="text-[var(--color-text-dim)] text-sm leading-relaxed">
              We are a professional consulting firm dedicated to improving your business efficiency and sales performance through strategic innovation.
            </p>
          </div>

          {/* Column 2: Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Links
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[var(--color-accent-blue)]"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'About us', href: '/#about' },
                { name: 'Our Service', href: '/#features' },
                { name: 'Portfolio', href: '/#portfolio' },
                { name: 'Blog', href: '/blog' },
                { name: 'Documents', href: '/documents' },
                { name: 'Contact', href: '/#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-[var(--color-text-dim)] hover:text-[var(--color-accent-blue)] hover:pl-2 transition-all duration-300 text-sm flex items-center">
                    <span className="mr-2 opacity-0 hover:opacity-100 transition-opacity">→</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Contact
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[var(--color-accent-blue)]"></span>
            </h3>
             <ul className="space-y-4">
                <li className="flex items-center space-x-3 text-[var(--color-text-dim)] text-sm">
                    <Mail size={18} className="text-[var(--color-accent-blue)] shrink-0" />
                    <span>office@directchinagoods.com</span>
                </li>
             </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-[var(--color-text-dim)] text-sm flex flex-col md:flex-row justify-between items-center">
            <p>© 2024 Direct China Goods. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms of Use</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
