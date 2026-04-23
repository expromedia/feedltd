import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: 'About',
    href: '#about'
  },
  {
    name: 'Technology',
    href: '#technology'
  },
  {
    name: 'Case Study',
    href: '#case-study'
  },
  {
    name: 'Services',
    href: '#services'
  }];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img
              src="/FEEDL_Logo.jpg"
              alt="FEEDL Logo"
              className="h-10 w-10 object-contain rounded-sm" />
            
            <div className="flex flex-col">
              <span className="font-heading font-bold text-brand-green leading-tight text-lg sm:text-xl tracking-tight">
                FUTURE EXPLORATION & ENERGY DEVELOPMENT LIMITED
              </span>
              <span className="text-[10px] sm:text-xs text-brand-dark-light font-medium hidden sm:block uppercase tracking-wider">
                Precision Exploration for Confident Energy Decisions
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-brand-dark hover:text-brand-green transition-colors">
              
                {link.name}
              </a>
            )}
            <a
              href="#contact"
              className="bg-brand-green text-white px-5 py-2.5 rounded-sm text-sm font-semibold hover:bg-brand-green-dark transition-colors">
              
              Contact Us
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-brand-dark"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu">
            
            {isMobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen &&
      <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100">
          <div className="flex flex-col px-4 py-4 space-y-4">
            {navLinks.map((link) =>
          <a
            key={link.name}
            href={link.href}
            className="text-base font-medium text-brand-dark py-2 border-b border-gray-50"
            onClick={() => setIsMobileMenuOpen(false)}>
            
                {link.name}
              </a>
          )}
            <a
            href="#contact"
            className="bg-brand-green text-white text-center px-5 py-3 rounded-sm text-base font-semibold mt-4"
            onClick={() => setIsMobileMenuOpen(false)}>
            
              Contact Us
            </a>
          </div>
        </div>
      }
    </header>);

}