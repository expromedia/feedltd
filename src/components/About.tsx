import React from 'react';
import { TargetIcon, ShieldCheckIcon, ZapIcon } from 'lucide-react';
export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-2 text-brand-green font-semibold tracking-wide uppercase text-sm">
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6">
              Pioneering the Future of Oil Exploration in Nigeria
            </h2>

            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Future Exploration and Energy Development Limited (FEEDL) is a
              specialized Oil & Gas Service Company. We do not produce oil; we
              help oil companies find it faster, cheaper, and with less risk.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Using advanced satellite-based remote sensing technology, we
              provide a proven alternative to traditional seismic methods. Our
              technology detects subsurface oil and gas reserves from space,
              allowing exploration teams to pinpoint drilling locations with
              high accuracy before spending millions on ground operations.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-sm bg-brand-green-light flex items-center justify-center text-brand-green">
                    <TargetIcon size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-brand-dark text-lg">
                    What We Do
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    We analyze satellite data to map subsurface hydrocarbons,
                    providing drill-ready coordinates to exploration companies.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-sm bg-brand-green-light flex items-center justify-center text-brand-green">
                    <ZapIcon size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-brand-dark text-lg">
                    Why We Are Different
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Unlike seismic surveys that take months and cost millions,
                    our satellite technology delivers results in weeks at a
                    fraction of the cost.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="order-1 lg:order-2 relative">
            <div className="absolute -inset-4 bg-brand-green-light rounded-sm transform rotate-3 -z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Geologists analyzing data"
              className="w-full h-auto rounded-sm shadow-xl object-cover aspect-[4/3]" />
            

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-sm shadow-lg border border-gray-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-gold-light rounded-full flex items-center justify-center text-brand-gold">
                <ShieldCheckIcon size={24} />
              </div>
              <div>
                <div className="font-bold text-brand-dark text-xl">100%</div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                  Regulator Approved
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}