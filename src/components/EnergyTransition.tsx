import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
export function EnergyTransition() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-dark rounded-sm overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          {/* Image Side */}
          <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-full">
            <img
              src="https://www.green.earth/hs-fs/hubfs/10%20easy%20ways%20to%20reduce%20your%20carbon%20footprint.jpg?width=1200&height=698&name=10%20easy%20ways%20to%20reduce%20your%20carbon%20footprint.jpg"
              alt="Clean energy transition"
              className="absolute inset-0 w-full h-full object-cover" />
            
            <div className="absolute inset-0 bg-brand-green/20 mix-blend-multiply"></div>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/10 border border-white/20 text-xs font-semibold text-brand-gold w-fit mb-6">
              2025 Licensing Round Focus
            </div>

            <h2 className="text-3xl font-heading font-bold text-white mb-6">
              Driving Nigeria's Energy Transition
            </h2>

            <p className="text-gray-300 mb-6 leading-relaxed">
              As Nigeria focuses on gas as a transition fuel and moves towards
              net-zero goals, efficient exploration is more critical than ever.
            </p>

            <p className="text-gray-300 mb-8 leading-relaxed">
              FEEDL's zero-impact satellite technology helps operators discover
              vital oil & gas reserves quickly and cleanly, supporting national
              energy security without the heavy carbon footprint of traditional
              exploration.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-brand-gold font-bold hover:text-white transition-colors w-fit group">
              
              Discuss Your 2025 Strategy
              <ArrowRightIcon
                size={18}
                className="group-hover:translate-x-1 transition-transform" />
              
            </a>
          </div>
        </div>
      </div>
    </section>);

}