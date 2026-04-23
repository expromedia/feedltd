import React from 'react';
import {
  ShieldCheckIcon,
  MapPinIcon,
  TrendingUpIcon,
  ArrowRightIcon } from
'lucide-react';
export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Satellite view of earth"
          className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-brand-dark/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-green/20 border border-brand-green/30 backdrop-blur-sm mb-6 opacity-0 animate-fade-in-up">
            <span className="flex h-2 w-2 rounded-full bg-brand-gold"></span>
            <span className="text-xs font-semibold text-brand-gold-light uppercase tracking-wider">
              Next-Generation Exploration
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6 opacity-0 animate-fade-in-up-delay-1">
            De-Risk Your Oil Exploration with{' '}
            <span className="text-brand-gold">Satellite Intelligence</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl opacity-0 animate-fade-in-up-delay-2">
            Find oil faster, cheaper, and with proven results — without the high
            costs and environmental impact of seismic methods.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up-delay-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-dark px-8 py-4 rounded-sm font-bold hover:bg-yellow-500 transition-colors">
              
              Request a Presentation
              <ArrowRightIcon size={18} />
            </a>
            <a
              href="#case-study"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-sm font-bold hover:bg-white/10 transition-colors">
              
              View Case Study
            </a>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-brand-dark-light/90 backdrop-blur-md border-t border-white/10 py-4 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 text-sm font-medium text-gray-300">
            <div className="flex items-center gap-2">
              <ShieldCheckIcon className="text-brand-green" size={20} />
              <span>NUPRC Approved</span>
            </div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <MapPinIcon className="text-brand-green" size={20} />
              <span>Proven in Nigeria</span>
            </div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <TrendingUpIcon className="text-brand-green" size={20} />
              <span>Commercial Success Achieved</span>
            </div>
          </div>
        </div>
      </div>
    </section>);

}