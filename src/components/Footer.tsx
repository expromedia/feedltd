import React from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, ChevronRightIcon } from 'lucide-react';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-brand-dark text-gray-300 pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/FEEDL_Logo.jpg"
                alt="FEEDL Logo"
                className="h-12 w-12 object-contain bg-white p-1 rounded-sm" />
              
              <span className="font-heading font-bold text-white text-xl tracking-tight">
                FEEDL
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Future Exploration and Energy Development Limited. Providing
              satellite-based remote sensing technology for subsurface oil & gas
              detection.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-semibold text-brand-gold">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
              NUPRC Approved Service Company
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-semibold mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
              'About Us',
              'Our Technology',
              'Case Study',
              'Services',
              'Energy Transition'].
              map((link) =>
              <li key={link}>
                  <a
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-sm text-gray-400 hover:text-brand-gold transition-colors flex items-center gap-2">
                  
                    <ChevronRightIcon size={14} className="text-brand-green" />
                    {link}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-heading font-semibold mb-6">
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
              'Exploration Support',
              'Asset Evaluation',
              'Acreage Assessment',
              'Resource Development'].
              map((service) =>
              <li
                key={service}
                className="text-sm text-gray-400 flex items-center gap-2">
                
                  <ChevronRightIcon size={14} className="text-brand-green" />
                  {service}
                </li>
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-heading font-semibold mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPinIcon
                  size={18}
                  className="text-brand-green shrink-0 mt-0.5" />
                
                <span className="text-sm text-gray-400">
                  CRID Estate, Office Block Flat 2, 3rd Floor, Plot 1234 Zakari
                  A Kyari Street, Mabushi, Abuja
                </span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon size={18} className="text-brand-green shrink-0" />
                <span className="text-sm text-gray-400">07060941707</span>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon size={18} className="text-brand-green shrink-0" />
                <a
                  href="mailto:kenneth.otamiri@futureexplorationenergy.com"
                  className="text-sm text-gray-400 hover:text-white transition-colors break-all">
                  
                  kenneth.otamiri@futureexplorationenergy.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} Future Exploration and Energy Development
            Limited. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Oil & Gas Service Company (Not a producing company)
          </p>
        </div>
      </div>
    </footer>);

}