import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Service', href: '/#features' },
    { name: 'About', href: '/#about' },
    { name: 'Portfolio', href: '/#portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Documents', href: '/documents' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#101321]/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-white tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent-blue)]"></span>
            Direct China Goods
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-[var(--color-accent-blue)] font-medium text-sm uppercase tracking-wide transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center space-x-6">
            <a href="mailto:office@directchinagoods.com">
                <Button size="sm" className="hidden xl:inline-flex uppercase font-bold tracking-wider">
                    Contact Us
                </Button>
            </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#101321] border-t border-white/10 p-4 shadow-xl flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-[var(--color-accent-blue)] font-medium text-lg border-b border-white/5 pb-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
           <a href="mailto:office@directchinagoods.com" onClick={() => setIsMobileMenuOpen(false)}>
               <Button className="w-full uppercase font-bold tracking-wider mt-4">
                    Contact Us
                </Button>
           </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
