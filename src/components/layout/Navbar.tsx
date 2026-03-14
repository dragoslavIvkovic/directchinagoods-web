import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import ObfuscatedContact from '../ui/ObfuscatedContact';

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
        isScrolled ? 'bg-[#101321]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      {/* Top Contact Bar */}
      <div className={`hidden md:block w-full border-b border-white/10 transition-all duration-300 ${isScrolled ? 'h-0 overflow-hidden border-transparent' : 'py-2 bg-black/20'}`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-end gap-6 items-center">
            <ObfuscatedContact 
              name="Joanna Liang" 
              phone="+86 132 6703 2953" 
              avatar="/images/Joanna.png" 
              platforms={['whatsapp', 'wechat']}
            />
            <ObfuscatedContact 
              name="Aleksandar Duric" 
              phone="+86 185 6611 3944" 
              avatar="/images/aleksandar.jpg" 
              platforms={['whatsapp', 'wechat', 'viber']}
            />
        </div>
      </div>

      <div className={`container mx-auto px-4 md:px-8 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        {/* Logo */}
        <div className="text-2xl font-bold text-white tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-blue"></span>
            Direct China Goods
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-accent-blue font-medium text-sm uppercase tracking-wide transition-colors"
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
              className="text-lg font-semibold hover:text-accent-blue transition-colors"
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
