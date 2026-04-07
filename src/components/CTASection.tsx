import React from 'react';
import { ArrowRightIcon, FileTextIcon, ShieldCheckIcon } from 'lucide-react';
export function CTASection() {
  return (
    <section className="py-24 bg-brand-green relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
            'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
          Ready to Transform Your Exploration Strategy?
        </h2>

        <p className="text-brand-green-light text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Stop wasting time and capital on uncertain seismic data. Let us show
          you exactly where to drill.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-dark px-8 py-4 rounded-sm font-bold hover:bg-yellow-500 transition-colors shadow-lg">
            
            Talk to an Expert
            <ArrowRightIcon size={18} />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-sm font-bold hover:bg-white/10 transition-colors">
            
            <FileTextIcon size={18} />
            Request Technical Brief
          </a>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 text-sm font-medium text-brand-green-light">
          <div className="flex items-center gap-2">
            <ShieldCheckIcon size={18} />
            <span>NUPRC Approved</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-brand-green-light/50"></div>
          <div className="flex items-center gap-2">
            <ShieldCheckIcon size={18} />
            <span>Proven in Nigeria</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-brand-green-light/50"></div>
          <div className="flex items-center gap-2">
            <ShieldCheckIcon size={18} />
            <span>Commercial Success</span>
          </div>
        </div>
      </div>
    </section>);

}